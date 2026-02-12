import { getPostsList } from "@/lib/posts";
import { getProjectsList } from "@/lib/projects";
import PostCard from "@/components/ui/cards/PostCard";
import FadeUp from "@/components/animation/FadeUp";

export default function LatestPosts({ currentId, contentType = "posts" }) {
  // Fetch the appropriate content based on type
  const allItems = contentType === "posts" ? getPostsList() : getProjectsList();

  // Filter out the current item and take the first 3
  const latestItems = allItems
    .filter((item) => item.id !== currentId)
    .slice(0, 3);

  // Don't render if there are no items to show
  if (latestItems.length === 0) {
    return null;
  }

  // Determine the base path for links
  const basePath = contentType === "posts" ? "/blog" : "/projects";

  // Determine the section title
  const sectionTitle =
    contentType === "posts" ? "Latest Blog Posts" : "Latest Projects";

  return (
    <section className="latest-posts-section py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-h4 mb-4">{sectionTitle}</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestItems.map((item) => (
            <FadeUp key={item.id}>
              <PostCard post={item} basePath={basePath} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
