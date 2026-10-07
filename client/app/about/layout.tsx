import { ReactNode } from 'react';
import { Sidebar } from '@/app/ui/about/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="sm:flex sm:flex-row w-[100%]">
            <div className="sm:basis-1/4 hidden sm:block landing-left">
                <Sidebar />
            </div>

            <div className="sm:basis-3/4 landing-right py-6">{children}</div>
        </div>
    );
}
