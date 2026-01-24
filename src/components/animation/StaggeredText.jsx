"use client";
import { motion } from "motion/react";

export default function StaggeredText({
  text,
  as: Tag = "p",
  highlightWords = [],
  highlightClassName = "text-blue-500 font-bold",
  duration = 1,
  initialDelay = 0,
  className = "",
  ...props
}) {
  const segmenter = new Intl.Segmenter("th", { granularity: "word" });
  const words = [...segmenter.segment(text)].map((seg) => seg.segment);

  const staggerDelay = words.length > 1 ? duration / (words.length - 1) : 0;

  return (
    <Tag
      className={className}
      {...(Tag !== "p" && { "aria-label": text })}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          initial={{ filter: "blur(8px)", opacity: 0, y: 16 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: initialDelay + index * staggerDelay,
          }}
          className={`inline-block ${
            highlightWords.includes(word.trim()) ? highlightClassName : ""
          }`}
          style={{ whiteSpace: "pre" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
