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
            <body className={inter.className}>
                <NavMain />

                <main className="flex min-h-screen flex-col items-center justify-between py-16 sm:px-24 px-4">
                    {children}
                </main>

                <footer className="flex bg-gray-800 border-t border-gray-600 sm:px-24 px-4">
                    <div>&copy; {new Date().getFullYear()} Romuald Halasz</div>
                </footer>
            </body>
        </html>
    );
}
