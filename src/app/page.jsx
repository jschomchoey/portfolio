import { cookies } from "next/headers";
import HeroSection from "@/components/sections/home/Hero";
import QuoteSection from "@/components/sections/home/Quote";
import SkillSection from "@/components/sections/home/Skill";
import PostsSection from "@/components/sections/home/PostsSection.server";
import ProjectsSection from "@/components/sections/home/ProjectsSection.server";
import RolePreference from "@/components/providers/RolePreference";

export default async function Home({ searchParams }) {
  const { role } = await searchParams;
  const cookieStore = await cookies();
  const cookieRole = cookieStore.get('preferredRole')?.value;

  // Priority: searchParams > cookie > default
  const activeRole = role || cookieRole || 'frontend';

  return (
    <div className="relative">
      <RolePreference role={role} />
      <HeroSection role={activeRole} />
      <QuoteSection />
      <ProjectsSection />
      <SkillSection />
      <PostsSection />
    </div>
  );
}
