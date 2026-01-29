import PostsMotion from "@/components/sections/home/posts/posts.motion";
import { getPostsList } from "@/lib/posts";

export default async function PostsSection() {
  // Get posts list from markdown files (without body content)
  const posts = getPostsList();

  return (
    <section className="posts-section">
      <PostsMotion posts={posts} />
    </section>
  );
}
