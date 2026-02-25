import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
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