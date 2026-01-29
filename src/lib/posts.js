import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * Get list of all posts (without body content)
 * Use this for listing pages like /blog
 */
export function getPostsList() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        slug,
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
        // Don't include body for performance
      };
    });

  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

/**
 * Get a single post by slug (with full body content)
 * Use this for detail pages like /blog/[slug]
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Calculate reading time
  const stats = readingTime(content);

  return {
    id: data.id,
    slug,
    title: data.title,
    description: data.description,
    image: data.image,
    date: data.date,
    body: content,
    readingTime: stats.text,
  };
}

/**
 * Get all post slugs (for static generation)
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });
}
