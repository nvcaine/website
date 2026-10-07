'use client';

import { ReactNode } from 'react';
import { Sidebar } from '@/app/ui/about/sidebar';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="sm:flex sm:flex-row w-[100%]">
            <div className="sm:basis-1/4 hidden sm:block landing-left">
                <Sidebar />
            </div>

            <div className="sm:basis-3/4 landing-right py-6">
                {children}
                <div className="flex justify-end">
                    <button
                        onClick={scrollToTop}
                        className="flex flex-wrap justify-end font-medium text-blue-500"
                    >
                        <svg
                            className="mr-2"
                            width="20"
                            height="20"
                            transform="rotate(90)"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 14H4M4 14L10 20M4 14L10 8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span>Back to top</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
