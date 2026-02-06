---
id: 3
title: "Mock Data: เมื่อ Pain Point ตัวเอง กลายมาเป็น CrossBoot Open Source"
slug: "jsonplaceholder-fake-online-rest-api"
description: "macOS Arm ดันไม่มี Bootcamp ให้สร้าง USB ติดตั้ง Windows ไหนลองดู GUI เจ้าตลาดซิ เอ้า! ดันไม่รองรับอีก สร้างใช้เองเลยละกัน"
image: "/images/posts/CrossBoot.png"
date: "2026-01-08"
---

macOS Arm ดันไม่มี Bootcamp ให้สร้าง USB ติดตั้ง Windows ไหนลองดู GUI เจ้าตลาดซิ เอ้า! ดันไม่รองรับอีก สร้างใช้เองเลยละกัน

## ที่มาของ CrossBoot

เมื่อซื้อ MacBook M1 มาใหม่ ๆ แล้วต้องการสร้าง USB ติดตั้ง Windows สำหรับเครื่องอื่น กลับพบว่า:

- Boot Camp ไม่มีให้ใช้บน Apple Silicon
- Tool ยอดนิยมอย่าง Rufus ไม่รองรับ macOS
- วิธีแก้ปัญหาทาง Terminal ซับซ้อนเกินไป

## จึงเกิดเป็น CrossBoot

- สร้าง Windows Bootable USB ได้ง่ายบน macOS
- รองรับทั้ง Legacy BIOS และ UEFI
- แยก WIM file อัตโนมัติสำหรับ FAT32
- Bypass Windows 11 requirements

## Open Source

ปล่อยเป็น open source เพื่อให้คนอื่น ๆ ที่เจอปัญหาเดียวกันได้ใช้ประโยชน์

> บางทีปัญหาของเราอาจเป็นปัญหาของคนอื่นด้วย การแชร์คือการช่วยเหลือกัน
