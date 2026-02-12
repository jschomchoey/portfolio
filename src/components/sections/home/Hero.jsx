import AnimatedText from "@/components/animation/StaggeredText";
import FadeUp from "@/components/animation/FadeUp";
import FadeDirectional from "@/components/animation/FadeDirectional";
import Button from "@/components/ui/Button";
import Capsule from "@/components/ui/Capsule";
import Image from "next/image";
import { Mail, FileText } from "lucide-react";

const contentMap = {
  fe: {
    headline:
      "Bridging beautiful design and powerful performance to create websites that truly matter.",
    highlightWords: ["beautiful", "performance"],
    description:
      "Hi, I’m Teerapat Chomchoei (James). A Frontend Developer who enjoys turning thoughtful design into fast, user-friendly websites. I specialize in UX/UI-focused development with an emphasis on usability, performance, and clean visual consistency.",
    capsule: "Frontend Developer",
    resumeURL: "/files/documents/Resume_FE.pdf",
  },
  se_fe: {
    headline:
      "Bridging beautiful design and powerful performance to create websites that truly matter.",
    highlightWords: ["beautiful", "performance"],
    description:
      "Hi, I’m Teerapat Chomchoei (James). A Software Engineer who enjoys turning thoughtful design into fast, user-friendly websites. I specialize in UX/UI-focused development with an emphasis on usability, performance, and clean visual consistency.",
    capsule: "Software Engineer",
    resumeURL: "/files/documents/Resume_SE_FE.pdf",
  },
};

export default function Hero({ role }) {
  const activeRole = contentMap[role] ? role : "fe";

  return (
    <section className="hero-section h-dvh min-h-[700px] max-h-[1200px] px-5 flex flex-col justify-center items-center">
      <div className="sm:h-[82px]"></div>
      <FadeUp className="mb-7" delay={0} duration={1} replay={false}>
        <Capsule variant="outline"> {contentMap[activeRole].capsule}</Capsule>
      </FadeUp>
      <div className="relative">
        <AnimatedText
          text={contentMap[activeRole].headline}
          as="h1"
          delay={0.1}
          duration={0.6}
          highlightWords={contentMap[activeRole].highlightWords}
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
          className="absolute top-[-40px] lg:top-[40px] right-[-5px] lg:right-[-110px] rotate-12"
        >
          <Capsule variant="primary">SEO Too !</Capsule>
        </FadeDirectional>
      </div>
      <p className="text-center max-w-2xl mx-auto mb-7 hero-description">
        {contentMap[activeRole].description}
      </p>

      <FadeUp
        className="text-center max-w-2xl mx-auto mb-7"
        delay={0.8}
        duration={1}
        replay={false}
      >
        <div className="flex gap-3">
          {/* Contact with Tooltip */}
          <div className="relative group inline-block">
            <Button
              href="mailto:tpcc.general@gmail.com"
              variant="primary"
              size="md"
              icon={<Mail />}
            >
              Contact
            </Button>

            <div className="absolute top-full left-0 w-full h-2"></div>

            <div
              className="
                absolute left-1/2 -translate-x-1/2 
                top-full mt-2 opacity-0
                group-hover:opacity-100
                group-focus-within:opacity-100
                transition-opacity duration-200
                bg-neutral-900 text-white text-sm
                px-3 py-2 rounded-full shadow-lg
                select-text whitespace-nowrap
                z-20
              "
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
              <p className="text-small">tpcc.general@gmail.com</p>
            </div>
          </div>

          <Button
            href={contentMap[activeRole].resumeURL}
            target="_blank"
            isFile={true}
            variant="outline"
            size="md"
            icon={<FileText />}
          >
            Resume
          </Button>
        </div>
      </FadeUp>
    </section>
  );
}
