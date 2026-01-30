import { createContentHelpers } from "./content";

// Define fields for posts
const listFields = ["id", "title", "description", "image", "date"];

// Create helpers using shared factory
const { getList, getBySlug, getAllSlugs } = createContentHelpers("posts", listFields);

// Export with semantic names
export const getPostsList = getList;
export const getPostBySlug = getBySlug;
export const getAllPostSlugs = getAllSlugs;
