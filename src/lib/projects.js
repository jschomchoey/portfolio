import { createContentHelpers } from "./content";

// Define fields for projects (includes 'type' field)
const listFields = ["id", "title", "description", "image", "date", "type"];

// Create helpers using shared factory
const { getList, getBySlug, getAllSlugs } = createContentHelpers("projects", listFields);

// Export with semantic names
export const getProjectsList = getList;
export const getProjectBySlug = getBySlug;
export const getAllProjectSlugs = getAllSlugs;
