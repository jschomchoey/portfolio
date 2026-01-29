---
id: 1
title: "เมื่อ Framer Motion ต้องการ Client Component ร่วมกับ Next.js 13"
slug: "framer-motion-with-nextjs-13"
description: "เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?"
image: "/images/posts/next_motion.jpg"
date: "2026-01-08"
---

เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?

## ปัญหาที่พบ

เมื่อใช้ Next.js 13+ กับ App Router เราจะได้ Server Component มาใช้โดย default ซึ่งช่วยให้ performance ดีขึ้น แต่ Framer Motion ต้องการ Client Component เพื่อทำ animation

## วิธีแก้ปัญหา

แยก component ออกเป็นสองส่วน:

1. **Server Component** - ดึงข้อมูลจาก database หรือ API
2. **Client Component** - รับข้อมูลมาแล้วทำ animation ด้วย Framer Motion

## ข้อดี

- ได้ประโยชน์จาก Server Component (SEO, performance)
- ยังใช้ Framer Motion ได้ตามปกติ
- แยก concern ชัดเจน

> แนวทางนี้เป็น best practice สำหรับการใช้ animation library กับ Next.js 13+
