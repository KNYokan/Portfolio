import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    image2: z.string().optional(),
    image3: z.string().optional(),
    description: z.string(),
    link: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
