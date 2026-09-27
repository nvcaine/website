import { ReactNode } from 'react';
import Sidebar from '@/app/ui/home/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="md:flex md:flex-row py-6 w-[100%]">
            <div className="basis-1/4 landing-left">
                <Sidebar showPhoto={false} />
            </div>

            <div className="basis-3/4 landing-right">{children}</div>
        </div>
    );
}
