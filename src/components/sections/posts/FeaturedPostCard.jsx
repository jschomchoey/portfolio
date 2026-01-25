import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export default function FeaturedPostCard({ post }) {
  return (
    <article className="post-card post-card-featured">
      <SafeImage src={post.image} width={540} height={340} alt={post.title} />

      <div className="post-content">
        <h3 className="header">{post.title}</h3>
        <p className="description mb-5">{post.description}</p>

        <div className="post-footer">
          <span className="date">{post.date}</span>

          <Button
            href={`/blog/${post.id}`}
            variant="primary"
            size="sm"
            icon={<ChevronRight />}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}
