// posts.server.jsx
import PostsMotion from "./posts.motion";

export default async function PostsSection() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  const posts = await res.json();

  return (
    <section>
      <h2>Latest Posts</h2>
      <PostsMotion posts={posts} />
    </section>
  );
}
