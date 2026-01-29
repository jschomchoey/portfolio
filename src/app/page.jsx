import { use } from "react";

import HeroSection from "@/components/sections/home/Hero";
import QuoteSection from "@/components/sections/home/Quote";
import SkillSection from "@/components/sections/home/Skill";
import PostsSection from "@/components/sections/home/posts/posts.server";
import ProjectsSection from "@/components/sections/home/projects/projects.server";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <SkillSection />
      <PostsSection />
    </div>
  );
}
