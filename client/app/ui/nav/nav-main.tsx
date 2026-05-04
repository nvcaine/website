'use client';

import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import { NavList } from '@/app/ui/nav/nav-list';
import { NavToggle } from '@/app/ui/nav/nav-toggle';
import { ABOUT_LINKS, MAIN_LINKS } from '@/app/consts/links';

const navbarId: string = 'navbar-sticky';
const sidebarId: string = 'about-sidebar';

function getMenuClickHandler(toggle: string, hide: string): () => void {
    return (): void => {
        document.getElementById(toggle)?.classList.toggle('hidden');
        document.getElementById(hide)?.classList.add('hidden');
    };
}

export function NavMain(): ReactElement {
    const path: string = usePathname();
    const isAboutPage: boolean = path.includes('/about');

    return (
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 min-h-16 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-3.5">
                <NavToggle
                    buttonClass="inline-flex items-center p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    targetId={navbarId}
                    onClick={getMenuClickHandler(navbarId, sidebarId)}
                    svgPath="M1 1h15M1 7h15M1 13h15"
                    wrapperClass="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
                />

                <span></span>

                {isAboutPage && (
                    <NavToggle
                        buttonClass="inline-flex items-center p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        targetId={sidebarId}
                        onClick={getMenuClickHandler(sidebarId, navbarId)}
                        svgPath="M1 1h5M1 7h15M1 13h15"
                        wrapperClass="sm:hidden"
                    />
                )}

                <NavList
                    elementId={navbarId}
                    links={MAIN_LINKS}
                    listClass="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
                    onClick={getMenuClickHandler(navbarId, sidebarId)}
                    path={path}
                    wrapperClass="sm:hidden items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                />

                {isAboutPage && (
                    <NavList
                        elementId={sidebarId}
                        links={ABOUT_LINKS}
                        listClass="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
                        onClick={getMenuClickHandler(sidebarId, navbarId)}
                        path={path}
                        wrapperClass="md:hidden items-center justify-between hidden w-full md:w-auto md:order-1"
                    />
                )}
            </div>
        </nav>
    );
}
