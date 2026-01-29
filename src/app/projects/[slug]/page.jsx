import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      <article>
        <header>
          <h1>{project.title}</h1>
          <p className="description">{project.description}</p>
          <div className="meta">
            <span className="date">{project.date}</span>
            <span className="type">{project.type}</span>
            <span className="reading-time">{project.readingTime}</span>
          </div>
        </header>

        <div className="content">
          <ReactMarkdown>{project.body}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
