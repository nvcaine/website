'use client';

import { ReactNode } from 'react';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <div>
                <button onClick={scrollToTop}>Back to top</button>
            </div>
        </>
    );
}
