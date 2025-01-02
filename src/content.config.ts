import { defineCollection, z } from "astro:content";
import {glob} from "astro/loaders";

const bloogs = defineCollection({
    loader: glob({ base: "./src/content/bloogs", pattern: "**/*.mdx" }),
    schema: z.object({
        title: z.string(),
        published_on: z.coerce.date(),
    }),
    type: "content_layer"
});

export const collections = { bloogs };