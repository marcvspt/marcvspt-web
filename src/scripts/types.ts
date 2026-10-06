import type { CollectionEntry } from "astro:content";

export interface SiteData {
    name: string;
    description: string;
}

export interface SitePage {
    title: string;
    description: string;
    url: string;
}

export type SitePages = Record<"Home" | "Blog" | "About", SitePage>;

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

export type BlogPostFrontmatter = Omit<BlogPostData, "draft">;
export type BlogPostCard = BlogPostData & { slug: string };
