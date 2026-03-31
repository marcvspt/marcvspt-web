import type { CollectionEntry } from "astro:content";

export interface SiteData {
    name: string;
    description: string;
    url: string;
}

export interface SitePage {
    title: string;
    description: string;
    url: string;
}

export type SitePages = Record<string, SitePage>;

export interface LinkItem {
    name: string;
    url: string;
}

export interface Skill {
    name: string;
    percentaje: string;
}

export interface ProfessionalExperienceItem {
    ocupation: string;
    description: string;
    time: string;
    company: string;
    link: string;
}

export type ProfessionalExperience = Record<string, ProfessionalExperienceItem>;

export type BlogPostEntry = CollectionEntry<"blog">;

export type BlogPostData = BlogPostEntry["data"];

export interface BlogPostFrontmatter {
    title: string;
    excerpt: string;
    date: Date;
    updated?: Date;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
    featured: boolean;
}
