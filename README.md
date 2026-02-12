# Portfolio Website

A modern, performant portfolio website built with Next.js 16, featuring server-side rendering, dynamic animations, and a clean design system.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** SCSS + Tailwind CSS
- **Animations:** Motion (Framer Motion successor)
- **Content:** Markdown-based with gray-matter
- **Theme:** next-themes (Dark/Light mode)
- **Icons:** Lucide React
- **Syntax Highlighting:** rehype-highlight

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router (pages)
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   ├── layout.jsx    # Root layout with Navbar & Footer
│   └── page.jsx      # Homepage
├── components/       # React Components
│   ├── animation/    # Animation wrapper components (FadeUp, StaggerContainer, etc.)
│   ├── layout/       # Layout components (Navbar, Footer, ThemeToggle)
│   ├── providers/    # Context providers (ThemeProvider)
│   ├── sections/     # Page sections (Hero, Projects, Posts, etc.)
│   ├── shared/       # Shared components (MarkdownRenderer, TableOfContents)
│   └── ui/           # UI components (Button, Capsule, Cards)
├── lib/              # Utility functions and data fetching
│   ├── content.js    # Factory pattern for content management
│   ├── cookies.js    # Cookie utilities
│   ├── posts.js      # Blog posts fetching
│   └── projects.js   # Projects fetching
└── styles/           # SCSS modules
    ├── base/         # Base styles (variables, typography)
    ├── layout/       # Layout styles
    ├── sections/     # Section-specific styles
    └── ui/           # UI component styles

content/
├── posts/            # Blog posts (Markdown)
└── projects/         # Projects (Markdown)
```

## 🎯 Key Features

- **Server Components & Client Components** - Optimized rendering strategy
- **Dark/Light Theme** - System preference detection with manual toggle
- **Markdown Content Management** - Easy content updates via markdown files
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Motion library for performant animations
- **SEO Optimized** - Server-side rendering with proper meta tags
- **Role-based Content** - Dynamic content switching (e.g., FE vs SE resume)
- **Reading Time** - Automatic reading time calculation for blog posts
- **Syntax Highlighting** - Code blocks with highlight.js

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file (optional):

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Adding a New Blog Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter:

```markdown
---
id: "unique-id"
title: "Your Post Title"
description: "Brief description"
image: "/images/posts/your-image.webp"
date: "2024-01-01"
---

Your content here...
```

### Adding a New Project

1. Create a new `.md` file in `content/projects/`
2. Add frontmatter:

```markdown
---
id: "unique-id"
title: "Project Name"
description: "Brief description"
image: "/images/projects/your-image.webp"
date: "2024-01-01"
type: "Web App" # or "Mobile App", etc.
---

Your project details...
```

## 🎨 Design System

The project uses a consistent design system with:

- **CSS Variables** for theming (colors, typography)
- **SCSS Breakpoints** for responsive design
- **Reusable Components** for consistency
- **Animation Patterns** for smooth UX

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Environment Variables

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://yourdomain.com)
- Other optional variables from `.env.example`

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Architecture Patterns

### Server/Client Component Pattern

The project separates data fetching (server) from interactivity (client):

```jsx
// ProjectsSection.server.jsx - Server Component
export default async function ProjectsSection() {
  const projects = getProjectsList(); // Fetch data on server
  return <ProjectsMotion projects={projects} />;
}

// ProjectsSection.motion.jsx - Client Component
"use client";
export default function ProjectsMotion({ projects }) {
  return <StaggerContainer>{/* Interactive UI */}</StaggerContainer>;
}
```

### Factory Pattern for Content

The `lib/content.js` uses a factory pattern to create reusable content helpers:

```javascript
const { getList, getBySlug, getAllSlugs } = createContentHelpers(
  "posts",
  listFields,
);
```

## 🤝 Contributing

If this is an open-source project, contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

[Your chosen license]

## 📧 Contact

Teerapat Chomchoei (James) - [tpcc.general@gmail.com](mailto:tpcc.general@gmail.com)

Portfolio: [https://t1ramisu.dev/](https://t1ramisu.dev/)

---

Built with ❤️ using Next.js
