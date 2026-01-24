import Image from "next/image";
import { use } from "react";

import HeroSection from "@/components/sections/hero/Hero";
import PostsSection from "@/components/sections/posts/posts.server";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      {/* <PostsSection /> */}
    </div>
  );
}
