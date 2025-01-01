import { defineCollection, z } from "astro:content";
import {glob} from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.astro", base: "./src/pages/bloog/posts" }),
    schema: z.object({
        title: z.string(),
        publish_date: z.date(),
    })
});

export const collections = { blog };