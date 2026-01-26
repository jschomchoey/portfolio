"use client";

import ProjectCard from "@/components/sections/projects/ProjectCard.jsx";

import Capsule from "@/components/ui/Capsule";

import FadeUp from "@/components/animation/FadeUp";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

export default function ProjectsMotion({ projects }) {
  return (
    <div className="projects-wrapper py-15 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <FadeUp className="mb-5">
          <Capsule variant="outline">Experience / Projects</Capsule>
        </FadeUp>
        <FadeUp>
          <h2 className="text-center">
            Current web design and development work, internship and university
            projects
          </h2>
        </FadeUp>
      </div>
      <StaggerContainer stagger={0.1} delay={0.2}>
        <div className="projects-row max-w-7xl">
          {projects.map((project, index) => (
            <StaggerItem key={project.id} duration={1}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
