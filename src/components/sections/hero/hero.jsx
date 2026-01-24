import AnimatedText from "@/components/animation/StaggeredText";
import Button from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="hero-section h-dvh px-5 flex flex-col justify-center items-center">
      <AnimatedText
        text="Bridging beautiful design and powerful performance to create websites that truly matter."
        as="h1"
        delay={0.05}
        highlightWords={["beautiful", "performance"]}
        className="text-center text-center max-w-2xl mx-auto mb-5"
      />
      <AnimatedText
        text="Hello, I am Teerapat Chomchoei (James). I am a Frontend Developer dedicated to developing websites that effectively meet real-world needs. I place the highest priority on delivering exceptional User Experience (UX) and engaging User Interface (UI) design, ensuring seamless usability and visual consistency."
        as="p"
        delay={0.02}
        initialDelay={0.5}
        className="text-center max-w-2xl mx-auto mb-5"
      />
      <Button variant="primary" size="md" icon={<Mail />}>
        Contact
      </Button>
    </div>
  );
}
