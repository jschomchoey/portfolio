import { use } from "react";

import HeroSection from "@/components/sections/Hero";
import QuoteSection from "@/components/sections/Quote";
import SkillSection from "@/components/sections/Skill";
import PostsSection from "@/components/sections/posts/posts.server";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <QuoteSection />
      <PostsSection />
      <SkillSection />
      <PostsSection />
    </div>
  );
}
