import Image from 'next/image';
import { ReactElement } from 'react';

export default function Sidebar(): ReactElement {
    return (
        <div className="flex flex-col items-center">
            <div className="border border-gray-700 p-0.5">
                <Image src="" className="landing" alt="" />
            </div>

            <h1>Romi Halasz</h1>

            <h2>Full-Stack Cloud Developer</h2>

            <div className="social">icons</div>
        </div>
    );
}
