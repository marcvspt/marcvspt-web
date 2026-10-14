import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        readTimeMinutes: z.number().int().positive(),
        category: z.string(),
        tags: z.array(z.string()).optional().default([]),
        image: z.string(),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
