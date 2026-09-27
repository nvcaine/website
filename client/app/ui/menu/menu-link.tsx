import clsx from 'clsx';
import Link from 'next/link';
import { ReactElement } from 'react';
import { LinkData } from '@/app/consts/links';

interface MenuLinkProps {
    highlight: boolean;
    link: LinkData;
    onClick?: () => void;
}

export function MenuLink(props: MenuLinkProps): ReactElement {
    const { highlight, link, onClick } = props;

    return (
        <li
            className={clsx('py-2 px-3 md:py-1', {
                'border-b-blue-700': highlight,
                'border-b-4': highlight,
                'mb-1': !highlight
            })}
        >
            <Link
                key={link.name}
                href={link.href}
                onClick={onClick}
                className="text-white"
                aria-current="page"
            >
                {link.name}
            </Link>
        </li>
    );
}
