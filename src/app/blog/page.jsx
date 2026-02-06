import { getPostsList } from "@/lib/posts";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";
import PostCard from "@/components/ui/cards/PostCard";
import FadeUp from "@/components/animation/FadeUp";
import Capsule from "@/components/ui/Capsule";

export const metadata = {
  title: "Blog",
  description: "Read my latest blog posts and articles",
};

export default async function BlogPage() {
  const posts = getPostsList();

  return (
    <main className="blog-page">
      <div className="max-w-7xl mx-auto py-15 px-4">
        <div className="h-[20px] sm:h-[82px]"></div>
        <div className="flex flex-col items-center mb-10">
          <FadeUp className="mb-5">
            <Capsule variant="outline">Blog</Capsule>
          </FadeUp>
          <FadeUp>
            <h2 className="text-center">Welcome to my area</h2>
          </FadeUp>
        </div>
        <StaggerContainer stagger={0.1} delay={0.2}>
          <div className="posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {posts.map((post, index) => (
              <StaggerItem key={post.id} duration={1}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </main>
  );
}
