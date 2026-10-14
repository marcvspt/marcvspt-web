import { TEXTS_GENERAL } from '@/lib/texts.ts';
import type { ProfessionalExperience, Skill } from '@/lib/types/profile.ts';

export const SKILLS: Skill[] = [
    { id: 'firewall', name: TEXTS_GENERAL.skills.firewall.name, percentage: 80 },
    { id: 'waf-seg', name: TEXTS_GENERAL.skills.wafSeg.name, percentage: 60 },
    { id: 'linux', name: TEXTS_GENERAL.skills.linux.name, percentage: 60 },
    { id: 'windows', name: TEXTS_GENERAL.skills.windows.name, percentage: 20 },
    { id: 'endpoint', name: TEXTS_GENERAL.skills.endpoint.name, percentage: 50 },
    { id: 'pentesting', name: TEXTS_GENERAL.skills.pentesting.name, percentage: 40 },
    { id: 'siem', name: TEXTS_GENERAL.skills.siem.name, percentage: 50 },
    { id: 'wireshark', name: TEXTS_GENERAL.skills.wireshark.name, percentage: 15 },
    { id: 'forensics', name: TEXTS_GENERAL.skills.forensics.name, percentage: 10 },
    { id: 'bash', name: TEXTS_GENERAL.skills.bash.name, percentage: 70 },
    { id: 'powershell', name: TEXTS_GENERAL.skills.powershell.name, percentage: 5 },
];

export const PROFESSIONAL_EXPERIENCE: ProfessionalExperience = {
    gobierno: { ...TEXTS_GENERAL.experience.gobierno, href: '#' },
    rooms31: { ...TEXTS_GENERAL.experience.rooms31, href: 'https://31rooms.com/' },
    conexionesTI: { ...TEXTS_GENERAL.experience.conexionesTI, href: 'https://www.conexionesti.com/' },
};
