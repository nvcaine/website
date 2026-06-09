import Image from 'next/image';
import { ReactElement } from 'react';
import { SvgIcon } from '@/app/ui/icons/svg-icon';
import { ICONS } from '@/app/consts/icons';

export default function Sidebar(): ReactElement {
    return (
        <div className="flex flex-col items-center">
            <div className="border border-gray-700 p-0.5">
                <Image src="" className="landing" alt="" />
            </div>

            <h1>Romi Halasz</h1>

            <h2>Full-Stack Cloud Developer</h2>

            <div className="flex flex-wrap">
                <a href="https://github.com/nvcaine/" target="_blank">
                    <SvgIcon alt="Javascript" src={ICONS.GIT} />
                </a>
                <a
                    href="https://www.linkedin.com/in/romihalasz/"
                    target="_blank"
                >
                    <SvgIcon alt="Javascript" src={ICONS.LINKEDIN} />
                </a>
                <a
                    href="https://stackoverflow.com/users/1014378/romi-halasz"
                    target="_blank"
                >
                    <SvgIcon alt="Javascript" src={ICONS.STACK} />
                </a>
                <a href="https://www.instagram.com/romi.halasz" target="_blank">
                    <SvgIcon alt="Javascript" src={ICONS.INSTA} />
                </a>
            </div>
        </div>
    );
}
