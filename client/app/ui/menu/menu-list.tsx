import { ReactElement } from 'react';
import { LinkData } from '@/app/consts/links';
import { MenuLink } from '@/app/ui/menu/menu-link';

export interface MenuListProps {
    links: LinkData[];
    listClass?: string;
    onClick?: () => void;
    path: string;
}

function isCurrentOption(path: string, href: string): boolean {
    if (href === '/') return path === href;

    return path.includes(href);
}

export function MenuList(props: MenuListProps): ReactElement {
    const { onClick, links, listClass, path } = props;

    return (
        <ul className={listClass}>
            {links.map(
                (link: LinkData): ReactElement => (
                    <MenuLink
                        highlight={isCurrentOption(path, link.href)}
                        key={link.name}
                        link={link}
                        onClick={onClick}
                    />
                )
            )}
        </ul>
    );
}
