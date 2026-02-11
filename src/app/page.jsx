import HeroSection from "@/components/sections/home/Hero";
import QuoteSection from "@/components/sections/home/Quote";
import SkillSection from "@/components/sections/home/Skill";
import PostsSection from "@/components/sections/home/PostsSection.server";
import ProjectsSection from "@/components/sections/home/ProjectsSection.server";

export default async function Home({ searchParams }) {
  const { role } = await searchParams;

  return (
    <div className="relative">
      <HeroSection role={role} />
      <QuoteSection />
      <ProjectsSection />
      <SkillSection />
      <PostsSection />
    </div>
  );
}
