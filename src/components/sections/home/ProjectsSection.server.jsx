import ProjectsMotion from "@/components/sections/home/ProjectsSection.motion";
import { getProjectsList } from "@/lib/projects";

export default async function ProjectsSection() {
  // Get projects list from markdown files (without body content)
  const projects = getProjectsList();

  // Sort by ID on server-side for better SEO and performance
  const sortedProjects = projects.sort((a, b) => Number(a.id) - Number(b.id));

  return (
    <section className="projects-section">
      <ProjectsMotion projects={sortedProjects} />
    </section>
  );
}
