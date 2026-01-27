import FadeUp from "@/components/animation/FadeUp";
import Capsule from "@/components/ui/Capsule";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

import Image from "next/image";

const skills = [
  {
    name: "HTML",
    image: "/images/skills/html.png",
  },
  {
    name: "CSS",
    image: "/images/skills/css.png",
  },
  {
    name: "JavaScript",
    image: "/images/skills/javascript.svg",
  },
  {
    name: "React",
    image: "/images/skills/react.svg",
  },
  {
    name: "Next.js",
    image: "/images/skills/nextjs.svg",
  },
  {
    name: "PHP",
    image: "/images/skills/php.png",
  },
  {
    name: "SCSS",
    image: "/images/skills/scss.svg",
  },
  {
    name: "jQuery",
    image: "/images/skills/jquery.png",
  },
  {
    name: "Node.js",
    image: "/images/skills/nodejs.svg",
  },
  {
    name: "Bootstrap",
    image: "/images/skills/bootstrap.png",
  },
  {
    name: "Tailwind",
    image: "/images/skills/tailwind.svg",
  },
  {
    name: "MySQL",
    image: "/images/skills/mysql.png",
  },
  {
    name: "Git",
    image: "/images/skills/git.png",
  },
];

export default function Skill() {
  return (
    <section className="skill-section">
      <div className="wrapper py-15 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <FadeUp className="mb-5">
            <Capsule variant="outline">Skill</Capsule>
          </FadeUp>
          <FadeUp>
            <h2 className="text-center">My Skills</h2>
          </FadeUp>
        </div>
        <StaggerContainer stagger={0.05} delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {skills.map((item, index) => {
              return (
                <StaggerItem duration={1} key={index}>
                  <div
                    key={index}
                    className="skill-item flex flex-col items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="skill-image mb-3"
                    />
                    <p>{item.name}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
