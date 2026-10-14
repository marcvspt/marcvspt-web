import type { CollectionEntry } from 'astro:content';

export type BlogPostEntry = CollectionEntry<'blog'>;
export type BlogPostData = BlogPostEntry['data'];
export type BlogPostFrontmatter = Omit<BlogPostData, 'draft'>;
export type BlogPostCard = BlogPostData & { slug: string };
