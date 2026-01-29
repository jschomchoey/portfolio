import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * Get list of all projects (without body content)
 * Use this for listing pages like /projects
 */
export function getProjectsList() {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
        type: data.type,
        // Don't include body for performance
      };
    });

  // Sort by date (newest first)
  return allProjects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

/**
 * Get a single project by slug (with full body content)
 * Use this for detail pages like /projects/[slug]
 */
export function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Calculate reading time
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    image: data.image,
    date: data.date,
    type: data.type,
    body: content,
    readingTime: stats.text,
  };
}

/**
 * Get all project slugs (for static generation)
 */
export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });
}
