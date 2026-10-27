'use client';

import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import { ABOUT_LINKS } from '@/app/consts/links';
import { MenuList } from '@/app/ui/menu/menu-list';

export function Sidebar(): ReactElement {
    const pathname: string = usePathname();

    return (
        <aside className="sticky top-20 pt-8">
            <MenuList
                listClass="flex flex-col gap-1 font-medium"
                links={ABOUT_LINKS}
                path={pathname}
            />
        </aside>
    );
}
