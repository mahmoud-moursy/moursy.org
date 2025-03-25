import { defineCollection, z } from "astro:content";
import {glob} from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const bloogs = defineCollection({
    loader: glob({ base: "./src/content/bloogs", pattern: "**/*.mdx" }),
    schema: rssSchema.extend({
        title: z.coerce.string(),
        // z.coerce.date() is broken for some reason (as of writing this).
        // it doesn't work on hyphen-separated dates -- which is confusing because in the ISO format
        // they are hyphen-separated and I am a hyphen-supremacist. "2025-03-26" is superior to "2025/03/26".
        pubDate: z.string().transform((d: string) => new Date(d))
    }),
    type: "content_layer"
});

export const collections = { bloogs };