import AnimatedText from "@/components/animation/StaggeredText";
import FadeUp from "@/components/animation/FadeUp";
import FadeDirectional from "@/components/animation/FadeDirectional";
import Button from "@/components/ui/Button";
import Capsule from "@/components/ui/Capsule";

import Image from "next/image";

import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section h-dvh min-h-[700px] px-5 flex flex-col justify-center items-center">
      <div className="h-[82px]"></div>
      <FadeUp className="mb-7" delay={0} duration={1} replay={false}>
        <Capsule variant="outline">Frontend Developer</Capsule>
      </FadeUp>
      <div className="relative">
        <AnimatedText
          text="Bridging beautiful design and powerful performance to create websites that truly matter."
          as="h1"
          delay={0.1}
          duration={0.6}
          highlightWords={["beautiful", "performance"]}
          className="text-center text-center max-w-2xl mx-auto mb-5"
        />
        <FadeDirectional
          delay={0.5}
          angle={30}
          distance={100}
          className="absolute top-[-80px] lg:top-[20px] left-[0px] lg:left-[-120px]"
        >
          <Image
            src="/images/profile.webp"
            alt="t1ramisu profile"
            width={70}
            height={70}
            className="profile"
          />
        </FadeDirectional>
        <FadeDirectional
          delay={0.7}
          angle={100}
          distance={100}
          className="absolute top-[-40px] lg:top-[40px] right-[-15px] lg:right-[-110px] rotate-12"
        >
          <Capsule variant="primary">SEO Too!</Capsule>
        </FadeDirectional>
      </div>
      <FadeUp
        className="text-center max-w-2xl mx-auto mb-7"
        delay={0.6}
        duration={1}
        replay={false}
      >
        <p>
          Hello, I am{" "}
          <span className="font-bold text-blue-500">Teerapat Chomchoei </span>
          (James). I am a{" "}
          <span className="font-bold text-blue-500">
            Frontend Developer
          </span>{" "}
          dedicated to developing websites that effectively meet real-world
          needs. I place the highest priority on delivering exceptional User
          Experience (UX) and engaging User Interface (UI) design, ensuring
          seamless usability and visual consistency.
        </p>
      </FadeUp>
      <FadeUp
        className="text-center max-w-2xl mx-auto mb-7"
        delay={0.8}
        duration={1}
        replay={false}
      >
        <Button variant="primary" size="md" icon={<Mail />}>
          Contact
        </Button>
      </FadeUp>
    </section>
  );
}
