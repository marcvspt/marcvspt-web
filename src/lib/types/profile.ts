export interface Skill {
    id: string;
    name: string;
    percentage: number;
}

export interface ProfessionalExperienceItem {
    occupation: string;
    description: string;
    time: string;
    company: string;
    href: string;
}

export type ProfessionalExperience = Record<'gobierno' | 'rooms31' | 'conexionesTI', ProfessionalExperienceItem>;
