import { createContentHelpers } from "./content";

const listFields = ["id", "title", "description", "image", "date", "type", "lastModified"];
const { getList, getBySlug, getAllSlugs } = createContentHelpers("projects", listFields);

export const getProjectsList = getList;
export const getProjectBySlug = getBySlug;
export const getAllProjectSlugs = getAllSlugs;
