import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  description: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: projectSchema,
});

export type ProjectData = z.infer<typeof projectSchema>;

export const collections = {
  projects,
};
