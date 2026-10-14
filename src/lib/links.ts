import { TEXTS_GENERAL } from '@/lib/texts.ts';
import type { LinkItem, SocialLinkItem } from '@/lib/types/site.ts';

export const SOCIAL_DATA: SocialLinkItem[] = [
    { id: 'linkedin', label: TEXTS_GENERAL.social.linkedin.name, href: 'https://www.linkedin.com/in/marcopat01/' },
    { id: 'github', label: TEXTS_GENERAL.social.github.name, href: 'https://github.com/marcvspt' },
    { id: 'hackthebox', label: TEXTS_GENERAL.social.hackthebox.name, href: 'https://app.hackthebox.com/profile/935643' },
    { id: 'twitter', label: TEXTS_GENERAL.social.twitter.name, href: 'https://x.com/marcvspt' },
    { id: 'contact', label: TEXTS_GENERAL.social.contact.name, href: 'mailto:marcvspt@gmail.com' },
];

const RESOURCE_URLS = {
    cyberEvents: 'https://cemx.marcvspt.tech/',
    cyberThreat: 'https://ctai.marcvspt.tech/',
    oprp: 'https://oprp.marcvspt.tech/',
    hackTricks: 'https://book.hacktricks.wiki/',
};

export const EXTERNAL_RESOURCES: LinkItem[] = [
    { id: 'cyber-events', label: TEXTS_GENERAL.resources.cyberEvents.name, href: RESOURCE_URLS.cyberEvents },
    { id: 'cyber-threat', label: TEXTS_GENERAL.resources.cyberThreat.name, href: RESOURCE_URLS.cyberThreat },
    { id: 'open-prp', label: TEXTS_GENERAL.resources.oprp.name, href: RESOURCE_URLS.oprp },
    { id: 'hack-tricks', label: TEXTS_GENERAL.resources.hackTricks.name, href: RESOURCE_URLS.hackTricks },
];

export const HEADER_RESOURCES: LinkItem[] = [
    { id: 'cyber-threat', label: TEXTS_GENERAL.header.cyberThreat, href: RESOURCE_URLS.cyberThreat },
    { id: 'cyber-events', label: TEXTS_GENERAL.header.cyberEvents, href: RESOURCE_URLS.cyberEvents },
];

export const LICENSE_LINK: LinkItem = {
    id: 'license',
    label: TEXTS_GENERAL.footer.licenseName,
    href: 'https://github.com/marcvspt/marcvspt-web/blob/master/LICENSE',
};
