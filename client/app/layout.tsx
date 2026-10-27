// @ts-ignore
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode, ReactElement } from 'react';
import { NavMain } from '@/app/ui/nav/nav-main';
import { NextFont } from 'next/dist/compiled/@next/font';

export const metadata: Metadata = {
    description: 'Personal website of Full-Stack Developer Romuald Halasz',
    title: 'Romi Halasz'
};

const inter: NextFont = Inter({ subsets: ['latin'] });

export default function Layout({
    children
}: Readonly<{
    children: ReactNode;
}>): ReactElement {
    return (
        <html
            lang="en"
            data-env={process.env.APP_ENV}
            data-version={process.env.npm_package_version}
        >
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <NavMain />

                <main className="flex flex-col flex-grow items-center justify-between pt-20 pb-12 sm:px-24 px-5 max-w-screen-xl mx-auto w-full">
                    {children}
                </main>

                <footer className="flex items-center justify-center h-14 bg-slate-900 border-t border-slate-700 text-slate-400 text-sm sm:px-24 px-5">
                    <div>&copy; {new Date().getFullYear()} Romuald Halasz</div>
                </footer>
            </body>
        </html>
    );
}
