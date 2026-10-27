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
            className={clsx('py-1 px-3 rounded-md transition-colors', {
                'bg-blue-600/20 text-blue-400 font-semibold': highlight,
                'text-slate-300 hover:text-white hover:bg-slate-800': !highlight
            })}
        >
            <Link
                key={link.name}
                href={link.href}
                onClick={onClick}
                className="block"
                aria-current="page"
            >
                {link.name}
            </Link>
        </li>
    );
}
