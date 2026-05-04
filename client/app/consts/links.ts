export interface LinkData {
    href: string;
    name: string;
}

export const MAIN_LINKS: LinkData[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about/' },
    { name: 'Contact', href: '/contact/' }
];

export const ABOUT_LINKS: LinkData[] = [
    { name: 'Skills', href: '/about/skills/' },
    { name: 'Experience', href: '/about/experience/' },
    { name: 'Projects', href: '/about/projects/' }
];
