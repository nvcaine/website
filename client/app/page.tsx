import { ReactElement } from 'react';
import Sidebar from '@/app/ui/home/sidebar';
import HomePage from '@/app/ui/home/home-page';

export default function Page(): ReactElement {
    return (
        <div className="md:flex md:flex-row py-6">
            <div className="basis-1/4 landing-left pt-6">
                <Sidebar showPhoto={true}/>
            </div>

            <div className="basis-3/4 landing-right">
                <HomePage/>
            </div>
        </div>
    );
}
