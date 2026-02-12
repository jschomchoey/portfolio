import PostsMotion from "@/components/sections/home/PostsSection.motion";
import { getPostsList } from "@/lib/posts";

export default async function PostsSection() {
  const posts = getPostsList();

  return (
    <section className="posts-section">
      <PostsMotion posts={posts} />
    </section>
  );
}
