"use client";
import { motion } from "motion/react";

export default function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  replay = false,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: !replay, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
