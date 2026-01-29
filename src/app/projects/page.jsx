import { getProjectsList } from "@/lib/projects";
import ProjectsMotion from "@/components/sections/projects/projects.motion";

export const metadata = {
  title: "Projects",
  description: "Browse my portfolio of projects and work experience",
};

export default async function ProjectsPage() {
  const projects = getProjectsList();

  return (
    <main className="projects-page">
      <div className="sm:h-[82px]"></div>
      <ProjectsMotion projects={projects} />
    </main>
  );
}
