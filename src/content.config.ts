import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        excerpt: z.string(),
        image: z.string(),
        category: z.string(),
        readTime: z.string(),
        tags: z.array(z.string()).optional().default([]),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };