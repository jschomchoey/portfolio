---
id: 2
title: "Mock Data: เมื่อ Framer Motion ต้องการ Client Component ร่วมกับ Next.js 13"
slug: "framer-motion-with-nextjs-13"
description: "เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?"
image: "/images/posts/next_motion.jpg"
date: "2026-02-08"
lastModified: "2026-02-08"
---

เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?

## ปัญหาที่พบ

เมื่อใช้ Next.js 13+ กับ App Router เราจะได้ Server Component มาใช้โดย default ซึ่งช่วยให้ performance ดีขึ้น แต่ Framer Motion ต้องการ Client Component เพื่อทำ animation

```jsx
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
```

## วิธีแก้ปัญหา

แยก component ออกเป็นสองส่วน:

1. **Server Component** - ดึงข้อมูลจาก database หรือ API
2. **Client Component** - รับข้อมูลมาแล้วทำ animation ด้วย Framer Motion

## ข้อดี

- ได้ประโยชน์จาก Server Component (SEO, performance)
- ยังใช้ Framer Motion ได้ตามปกติ
- แยก concern ชัดเจน

> แนวทางนี้เป็น best practice สำหรับการใช้ animation library กับ Next.js 13+
