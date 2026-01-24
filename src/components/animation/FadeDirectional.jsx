"use client";
import { motion } from "motion/react";

export default function FadeDirectional({
  children,
  delay = 0,
  duration = 1,
  className = "",
  angle = 90,
  distance = 50,
}) {
  const radian = (angle * Math.PI) / 180;

  const x = Math.cos(radian) * distance;
  const y = Math.sin(radian) * distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
