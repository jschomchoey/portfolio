import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <SafeImage
        src={project.image}
        width={540}
        height={340}
        alt={project.title}
      />

      <div className="project-content">
        <h3 className="header">{project.title}</h3>
        <p className="description mb-5">{project.description}</p>

        <div className="project-footer">
          <span className="date">{project.date}</span>

          <Button
            href={`/projects/${project.slug}`}
            variant="primary"
            size="sm"
            icon={<ChevronRight />}
            ariaLabel={`Read more about ${project.title}`}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}
