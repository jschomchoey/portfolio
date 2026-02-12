---
id: "2"
title: "Mock Data: Project: Portfolio Website"
slug: "portfolio-website"
description: "Built a portfolio website using Next.js and Tailwind CSS. Implemented a responsive design with a modern and clean look."
image: "/images/projects/portfolio.webp"
date: "2026-02-12"
type: "Project"
---

## Overview

สร้างเว็บไซต์ Portfolio ใช้ Next.js + Tailwind + SCSS และ Motion ที่เน้น Performance และ SEO สูงสุด โดยใช้เป็น SSG ทั้งหมด

## Features

- Developed a personal portfolio website using Next.js (App Router) with Motion (Framer Motion), leveraging Server Components and Static Site Generation (SSG) for optimal performance and SEO

- Implemented a hybrid styling architecture combining Tailwind CSS with SCSS modules, organized using BEM methodology for maintainable and scalable CSS

- Built reusable animation components (FadeUp, StaggeredText, FadeDirectional) using Motion with configurable delay, duration, and viewport-triggered animations

- Designed a Markdown-based content management system using gray-matter and react-markdown with auto-generated Table of Contents, reading time estimation, and code syntax highlighting

- Optimized SEO through dynamic metadata generation (generateMetadata), static params pre-rendering (generateStaticParams), and semantic HTML structure across all pages

- Architected a clear Server/Client Component separation pattern (.server.jsx / .motion.jsx) to minimize client-side JavaScript bundle and maximize performance

- Implemented dark/light theme switching with next-themes and role-based dynamic content system with cookie-based preference persistence

## Project Structure

```markdown
src/
├── app/ # Next.js App Router (pages)
├── components/ # React Components
│ ├── animation/ # Animation wrapper components
│ ├── layout/ # Layout components (Navbar, Footer)
│ ├── providers/ # Context providers (ThemeProvider)
│ ├── sections/ # Page sections (Hero, Projects, Posts, etc.)
│ ├── shared/ # Shared components (MarkdownRenderer, TableOfContents)
│ └── ui/ # UI components (Button, Capsule, Cards)
├── lib/ # Utility functions และ data fetching
└── styles/ # SCSS modules
├── base/ # Base styles (variables, typography)
├── layout/ # Layout styles
├── sections/ # Section-specific styles
└── ui/ # UI component styles
```

## Tech Stack

- Next.js
- Tailwind CSS
- SCSS
- Motion (Framer Motion)
