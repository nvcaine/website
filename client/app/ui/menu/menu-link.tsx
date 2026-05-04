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
        <li>
            <Link
                key={link.name}
                href={link.href}
                onClick={onClick}
                className={clsx(
                    'block rounded-md py-2 px-3 text-white md:py-1',
                    {
                        'bg-blue-700': highlight
                    }
                )}
                aria-current="page"
            >
                {link.name}
            </Link>
        </li>
    );
}
