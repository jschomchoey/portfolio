"use client";

import FeaturedPostCard from "./FeaturedPostCard.jsx";
import PostCard from "./PostCard.jsx";
import FadeUp from "@/components/animation/FadeUp";
import Capsule from "@/components/ui/Capsule";

import StaggerContainer from "../../animation/StaggerContainer";
import StaggerItem from "../../animation/StaggerItem";

export default function PostsMotion({ posts }) {
  return (
    <section className="posts-section">
      <FadeUp className="mb-5">
        <Capsule variant="outline">Frontend Developer</Capsule>
      </FadeUp>
      <FadeUp className="mb-5">
        <h2>Welcome to my area</h2>
      </FadeUp>
      <StaggerContainer stagger={0.1} delay={0.2}>
        <div className="posts-grid">
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
    </section>
  );
}
