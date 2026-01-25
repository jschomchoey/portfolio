import { Sparkles, Award, ThumbsUp } from "lucide-react";
import StaggerContainer from "../animation/StaggerContainer";
import StaggerItem from "../animation/StaggerItem";

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
      <StaggerContainer stagger={0.1} delay={0.2}>
        <div className=" flex flex-col md:flex-row py-15 gap-10 px-10">
          {quotes.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem duration={1} key={index}>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="icon-wrapper w-12 h-12 flex items-center justify-center mb-5">
                    <Icon />
                  </div>
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </div>
      </StaggerContainer>
    </section>
  );
}
