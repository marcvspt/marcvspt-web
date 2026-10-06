import { TEXTS_GENERAL } from "@/scripts/texts";
import type {
    LinkItem,
    SocialLinkItem,
    ProfessionalExperience,
    SiteData,
    SitePages,
    Skill,
} from "@/scripts/types";

export const SITE_DATA: SiteData = {
    name: TEXTS_GENERAL.site.name,
    description: TEXTS_GENERAL.site.description,
}

export const SITE_PAGES: SitePages = {
    Home: {
        title: TEXTS_GENERAL.pages.Home.title,
        description: SITE_DATA.description,
        url: "/",
    },
    Blog: {
        title: TEXTS_GENERAL.pages.Blog.title,
        description: TEXTS_GENERAL.pages.Blog.description,
        url: "/blog",
    },
    About: {
        title: TEXTS_GENERAL.pages.About.title,
        description: TEXTS_GENERAL.pages.About.description,
        url: "/about",
    }
};

export const SOCIAL_DATA: SocialLinkItem[] = [
    {
        id: "linkedin",
        name: TEXTS_GENERAL.social.linkedin.name,
        url: "https://www.linkedin.com/in/marcopat01/",
    },
    {
        id: "github",
        name: TEXTS_GENERAL.social.github.name,
        url: "https://github.com/marcvspt",
    },
    {
        id: "hackthebox",
        name: TEXTS_GENERAL.social.hackthebox.name,
        url: "https://app.hackthebox.com/profile/935643",
    },
    {
        id: "twitter",
        name: TEXTS_GENERAL.social.twitter.name,
        url: "https://x.com/marcvspt",
    },
    {
        id: "contact",
        name: TEXTS_GENERAL.social.contact.name,
        url: "mailto:marcvspt@gmail.com",
    },
]

export const EXTERNAL_RESOURCES: LinkItem[] = [
    {
        name: TEXTS_GENERAL.resources.cyberEvents.name,
        url: "https://cemx.marcvspt.tech/",
    },
    {
        name: TEXTS_GENERAL.resources.cyberThreat.name,
        url: "https://ctai.marcvspt.tech/",
    },
    {
        name: TEXTS_GENERAL.resources.oprp.name,
        url: "https://oprp.marcvspt.tech/",
    },
    {
        name: TEXTS_GENERAL.resources.hackTricks.name,
        url: "https://book.hacktricks.wiki/",
    },

]


export const SKILLS: Skill[] = [
    {
        name: TEXTS_GENERAL.skills.firewall.name,
        percentaje: "80%",
    },
    {
        name: TEXTS_GENERAL.skills.wafSeg.name,
        percentaje: "60%",
    },
    {
        name: TEXTS_GENERAL.skills.linux.name,
        percentaje: "60%",
    },
    {
        name: TEXTS_GENERAL.skills.windows.name,
        percentaje: "20%",
    },
    {
        name: TEXTS_GENERAL.skills.endpoint.name,
        percentaje: "50%",
    },
    {
        name: TEXTS_GENERAL.skills.pentesting.name,
        percentaje: "40%",
    },
    {
        name: TEXTS_GENERAL.skills.siem.name,
        percentaje: "50%",
    },
    {
        name: TEXTS_GENERAL.skills.wireshark.name,
        percentaje: "15%",
    },
    {
        name: TEXTS_GENERAL.skills.forensics.name,
        percentaje: "10%",
    },
    {
        name: TEXTS_GENERAL.skills.bash.name,
        percentaje: "70%",
    },
    {
        name: TEXTS_GENERAL.skills.powershell.name,
        percentaje: "5%",
    },
]

export const PROFESIONAL_EXPERIENCE: ProfessionalExperience = {
    gobierno: {
        ocupation: TEXTS_GENERAL.experience.gobierno.ocupation,
        description: TEXTS_GENERAL.experience.gobierno.description,
        time: TEXTS_GENERAL.experience.gobierno.time,
        company: TEXTS_GENERAL.experience.gobierno.company,
        link: "#",
    },
    rooms31: {
        ocupation: TEXTS_GENERAL.experience.rooms31.ocupation,
        description: TEXTS_GENERAL.experience.rooms31.description,
        time: TEXTS_GENERAL.experience.rooms31.time,
        company: TEXTS_GENERAL.experience.rooms31.company,
        link: "https://31rooms.com/",
    },
    conexionesTI: {
        ocupation: TEXTS_GENERAL.experience.conexionesTI.ocupation,
        description: TEXTS_GENERAL.experience.conexionesTI.description,
        time: TEXTS_GENERAL.experience.conexionesTI.time,
        company: TEXTS_GENERAL.experience.conexionesTI.company,
        link: "https://www.conexionesti.com/",
    }
}

export const currentYear = new Date().getFullYear()
