import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import Capsule from "@/components/ui/Capsule";
import { formatDate } from "@/lib/date";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card relative">
      <SafeImage
        src={project.image}
        width={600}
        height={330}
        alt={project.title}
      />

      <Capsule variant="outline" className="absolute top-6 right-6">
        {project.type}
      </Capsule>

      <div className="project-content flex flex-col justify-between flex-1">
        <div className="">
          <h3 className="header">{project.title}</h3>
          <p className="description mb-5">{project.description}</p>
        </div>

        <div className="project-footer">
          <span className="date">{formatDate(project.date)}</span>

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
