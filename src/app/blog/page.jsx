import { getPostsList } from "@/lib/posts";
import PostsMotion from "@/components/sections/posts/posts.motion";

export const metadata = {
  title: "Blog",
  description: "Read my latest blog posts and articles",
};

export default async function BlogPage() {
  const posts = getPostsList();

  return (
    <main className="blog-page">
      <div className="sm:h-[82px]"></div>
      <PostsMotion posts={posts} />
    </main>
  );
}
