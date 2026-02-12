import { createContentHelpers } from "./content";

const listFields = ["id", "title", "description", "image", "date", "lastModified"];
const { getList, getBySlug, getAllSlugs } = createContentHelpers("posts", listFields);

export const getPostsList = getList;
export const getPostBySlug = getBySlug;
export const getAllPostSlugs = getAllSlugs;
