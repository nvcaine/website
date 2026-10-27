import { ReactNode } from 'react';
import Sidebar from '@/app/ui/home/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="md:flex md:flex-row w-full py-6">
            <div className="basis-1/4 md:pr-8">
                <Sidebar showPhoto={false} />
            </div>

            <div className="basis-3/4 md:pl-8">{children}</div>
        </div>
    );
}
