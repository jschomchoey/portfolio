import { getPostsList } from '@/lib/posts';
import { getProjectsList } from '@/lib/projects';

export default async function sitemap() {
  const baseUrl = 'https://t1ramisu.dev';
  
  // Static routes
  const routes = ['', '/about', '/contact', '/blog', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Dynamic blog posts
  const allPosts = getPostsList();
  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || post.date,
  }));

  // Dynamic projects
  const allProjects = getProjectsList();
  const projects = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified || project.date,
  }));

  return [...routes, ...posts, ...projects];
}
