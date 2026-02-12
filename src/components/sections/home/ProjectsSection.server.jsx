import ProjectsMotion from "@/components/sections/home/ProjectsSection.motion";
import { getProjectsList } from "@/lib/projects";

export default async function ProjectsSection() {
  const projects = getProjectsList();

  return (
    <section className="projects-section">
      <ProjectsMotion projects={projects} />
    </section>
  );
}
