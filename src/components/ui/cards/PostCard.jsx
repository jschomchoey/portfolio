import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { formatDate } from "@/lib/date";

export default function PostCard({ post, basePath = "/blog" }) {
  return (
    <article className="post-card">
      <SafeImage src={post.image} width={540} height={310} alt={post.title} />

      <div className="post-content">
        <h3 className="header">{post.title}</h3>
        <p className="description mb-5">{post.description}</p>

        <div className="post-footer">
          <span className="date">{formatDate(post.date)}</span>

          <Button
            href={`${basePath}/${post.slug}`}
            variant="primary"
            size="sm"
            icon={<ChevronRight />}
            ariaLabel={`Read more about ${post.title}`}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}
