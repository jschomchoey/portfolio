import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://t1ramisu.dev';
  
  // Static routes
  const routes = ['', '/about', '/contact', '/blog', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Dynamic blog posts
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const postFiles = fs.readdirSync(postsDirectory);
  const posts = postFiles
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(postsDirectory, file);
      const stats = fs.statSync(filePath);
      
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: stats.mtime.toISOString().split('T')[0],
      };
    });

  // Dynamic projects
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const projectFiles = fs.readdirSync(projectsDirectory);
  const projects = projectFiles
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(projectsDirectory, file);
      const stats = fs.statSync(filePath);
      
      return {
        url: `${baseUrl}/projects/${slug}`,
        lastModified: stats.mtime.toISOString().split('T')[0],
      };
    });

  return [...routes, ...posts, ...projects];
}
