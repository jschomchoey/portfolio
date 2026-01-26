import { Sparkles, Award, ThumbsUp } from "lucide-react";
import FadeUp from "@/components/animation/FadeUp";
import Capsule from "@/components/ui/Capsule";
import StaggerContainer from "@/components/animation/StaggerContainer";
import StaggerItem from "@/components/animation/StaggerItem";

const quotes = [
  {
    title: "Beautiful",
    description:
      "A visually appealing design captures attention and creates a strong first impression. Well-chosen colors, fonts, and images enhance engagement and reflect the brand's identity.",
    icon: Sparkles,
  },
  {
    title: "Credible",
    description:
      "Credibility makes a website feel authentic and intentional. Clear branding, professional design, and consistent content give users the confidence that the website is trustworthy and well-established.",
    icon: Award,
  },
  {
    title: "Usable",
    description:
      "A usable website is easy to navigate, fast-loading, and accessible to all users. Clear structure and responsiveness improve user experience and encourage interaction.",
    icon: ThumbsUp,
  },
];

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="wrapper py-15 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <FadeUp className="mb-5">
            <Capsule variant="outline">Quote</Capsule>
          </FadeUp>
          <FadeUp>
            <h2 className="text-center">What i focus on?</h2>
          </FadeUp>
        </div>
        <StaggerContainer stagger={0.1} delay={0.2}>
          <div className=" flex flex-col md:flex-row gap-10">
            {quotes.map((item, index) => {
              const Icon = item.icon;

              return (
                <StaggerItem duration={1} key={index}>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="icon-wrapper w-12 h-12 flex items-center justify-center mb-5">
                      <Icon />
                    </div>
                    <h3 className="mb-3 ">{item.title}</h3>
                    <p>{item.description}</p>
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
