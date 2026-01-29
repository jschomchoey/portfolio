import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import SafeImage from "@/components/ui/SafeImage";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs;
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      <div className="sm:h-[82px]"></div>
      <article>
        <header className="py-10 px-4 max-w-7xl mx-auto">
          <h1 className="mb-5">{project.title}</h1>
          <p className="description text-h5 mb-5">{project.description}</p>
          <div className="meta flex items-center gap-4 text-sm text-gray">
            <span className="date">{project.date}</span>
            {/* <span className="type">{project.type}</span> */}
            <span className="reading-time">{project.readingTime}</span>
          </div>
        </header>

        <div className="content">
          <div className="wrapper mx-auto max-w-7xl px-4 py-10">
            <div className="main-image">
              {" "}
              <SafeImage
                src={project.image}
                width={1280}
                height={640}
                alt={project.title}
              />
            </div>

            <div className="flex gap-8 justify-center items-start">
              <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
                <p>Sidebar</p>
              </aside>

              <div className="detail flex-1 max-w-3xl font-serif">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {project.body}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
