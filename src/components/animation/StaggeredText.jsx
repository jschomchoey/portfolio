"use client";
import { motion } from "motion/react";

export default function StaggeredText({
  text,
  as: Tag = "p",
  highlightWords = [],
  highlightClassName = "text-blue-500 font-bold",
  delay = 0.05,
  duration = 0.5,
  initialDelay = 0,
  className = "",
  ...props
}) {
  const words = text.split(" ").map((word) => word + " ");

  return (
    <Tag
      className={className}
      {...(Tag !== "p" && { "aria-label": text })}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          initial={{ filter: "blur(8px)", opacity: 0, y: 16 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration, delay: initialDelay + index * delay }}
          key={index}
          className={`inline-block ${highlightWords.includes(word.trim()) ? highlightClassName : ""}`}
          style={{ whiteSpace: "pre" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
