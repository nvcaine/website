'use client';

import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import { ABOUT_LINKS } from '@/app/consts/links';
import { MenuList } from '@/app/ui/menu/menu-list';

export function Sidebar(): ReactElement {
    const pathname: string = usePathname();

    return (
        <aside className="sticky top-16 md:pt-12">
            <MenuList
                listClass="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rtl:space-x-reverse md:mt-0 md:border-0"
                links={ABOUT_LINKS}
                path={pathname}
            />
        </aside>
    );
}
