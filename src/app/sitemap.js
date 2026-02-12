import fs from 'fs';
import path from 'path';
import { getAllPostSlugs } from '@/lib/posts';
import { getAllProjectSlugs } from '@/lib/projects';

export default async function sitemap() {
  const baseUrl = 'https://t1ramisu.dev';
  
  // Static routes
  const routes = ['', '/about', '/contact', '/blog', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Dynamic blog posts
  const postSlugs = getAllPostSlugs();
  const posts = postSlugs.map(({ slug }) => {
    const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`);
    const stats = fs.statSync(filePath);
    
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: stats.mtime.toISOString().split('T')[0],
    };
  });

  // Dynamic projects
  const projectSlugs = getAllProjectSlugs();
  const projects = projectSlugs.map(({ slug }) => {
    const filePath = path.join(process.cwd(), 'content/projects', `${slug}.md`);
    const stats = fs.statSync(filePath);
    
    return {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: stats.mtime.toISOString().split('T')[0],
    };
  });

  return [...routes, ...posts, ...projects];
}
