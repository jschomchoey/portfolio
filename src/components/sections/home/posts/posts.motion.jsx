"use client";

import FeaturedPostCard from "@/components/sections/home/posts/FeaturedPostCard.jsx";
import PostCard from "@/components/sections/home/posts/PostCard.jsx";

import Capsule from "@/components/ui/Capsule";

import FadeUp from "@/components/animation/FadeUp";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

export default function PostsMotion({ posts }) {
  return (
    <div className="posts-wrapper py-15 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <FadeUp className="mb-5">
          <Capsule variant="outline">Blog</Capsule>
        </FadeUp>
        <FadeUp>
          <h2 className="text-center">Welcome to my area</h2>
        </FadeUp>
      </div>
      <StaggerContainer stagger={0.1} delay={0.2}>
        <div className="posts-grid max-w-7xl">
          {posts.map((post, index) => (
            <StaggerItem key={post.id} duration={1}>
              {index === 0 ? (
                <FeaturedPostCard post={post} />
              ) : (
                <PostCard post={post} />
              )}
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
