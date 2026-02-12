import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export function createContentHelpers(contentType, listFields, detailFields = []) {
  const directory = path.join(process.cwd(), `content/${contentType}`);

  function getList() {
    const fileNames = fs.readdirSync(directory);

    const allItems = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Build item object from specified fields
        const item = { slug };
        listFields.forEach((field) => {
          item[field] = data[field];
        });

        return item;
      });

    // Sort by ID (newest first - higher ID means newer content)
    return allItems.sort((a, b) => Number(b.id) - Number(a.id));
  }

  function getBySlug(slug) {
    const fullPath = path.join(directory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const stats = readingTime(content);

    // Build item object from all fields
    const item = { slug, body: content, readingTime: stats.text };
    [...listFields, ...detailFields].forEach((field) => {
      item[field] = data[field];
    });

    return item;
  }

  function getAllSlugs() {
    const fileNames = fs.readdirSync(directory);

    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => ({
        slug: fileName.replace(/\.md$/, ""),
      }));
  }

  return { getList, getBySlug, getAllSlugs };
}
