import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";
// import ReactMarkdown from "react-markdown";
// import { useMemo } from "react";
import SafeImage from "@/components/ui/SafeImage";
// import rehypeHighlight from "rehype-highlight";
import slugify from "slugify";
import TOC from "@/components/sections/projects/TOC";
import ProjectMarkdownDetail from "@/components/sections/projects/ProjectMarkdownDetail";
import "highlight.js/styles/atom-one-dark.css";
import Button from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";

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

  // --- TOC generation ---
  // Extract headings from markdown (H2/H3)
  function extractHeadings(markdown) {
    const lines = markdown.split("\n");
    const headings = [];
    for (const line of lines) {
      const h2 = line.match(/^##\s+(.+)/);
      const h3 = line.match(/^###\s+(.+)/);
      if (h2) {
        headings.push({
          level: 2,
          text: h2[1],
          id: slugify(h2[1], { lower: true, strict: true }),
        });
      } else if (h3) {
        headings.push({
          level: 3,
          text: h3[1],
          id: slugify(h3[1], { lower: true, strict: true }),
        });
      }
    }
    return headings;
  }

  const headings = extractHeadings(project.body);

  // Custom heading renderer for ReactMarkdown to add id
  const components = {
    h2: ({ node, ...props }) => {
      const id = slugify(props.children[0], { lower: true, strict: true });
      return <h2 id={id} {...props} />;
    },
    h3: ({ node, ...props }) => {
      const id = slugify(props.children[0], { lower: true, strict: true });
      return <h3 id={id} {...props} />;
    },
  };

  return (
    <main className="project-detail">
      <div className="sm:h-[82px]"></div>
      <article>
        <header className="py-10 px-4 max-w-7xl mx-auto">
          <Button
            icon={<ChevronLeft />}
            variant="outline"
            size="sm"
            href="/projects"
            className="mb-5"
          >
            Back
          </Button>
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
              <SafeImage
                src={project.image}
                width={1280}
                height={640}
                alt={project.title}
              />
            </div>

            <div className="flex gap-8 justify-center items-start">
              <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
                <TOC headings={headings} />
              </aside>

              <div className="detail flex-1 max-w-3xl font-serif">
                <ProjectMarkdownDetail body={project.body} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
