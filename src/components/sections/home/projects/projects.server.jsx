import ProjectsMotion from "@/components/sections/home/projects/projects.motion";
import { getProjectsList } from "@/lib/projects";

export default async function ProjectsSection() {
  // Get projects list from markdown files (without body content)
  const projects = getProjectsList();

  return (
    <section className="projects-section">
      <ProjectsMotion projects={projects} />
    </section>
  );
}
