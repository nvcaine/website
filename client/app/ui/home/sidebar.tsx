import Image from 'next/image';
import { ReactElement } from 'react';
import { SvgIcon } from '@/app/ui/icons/svg-icon';
import { ICONS } from '@/app/consts/icons';
import Link from 'next/link';

interface SidebarProps {
    showPhoto?: boolean;
}

export default function Sidebar(props: SidebarProps): ReactElement {
    const imageElement: ReactElement | undefined = props.showPhoto ? (
        <div className="border border-gray-600 p-1">
            <Image
                src="/images/photo.jpg"
                className="landing"
                alt=""
                width={100}
            />
        </div>
    ) : undefined;

    return (
        <div className="flex flex-col items-center">
            {imageElement}

            <div className="pt-3">Romi Halasz</div>

            <div className="text-center">Full-Stack Cloud Developer</div>

            <div className="flex flex-wrap">
                <Link href="https://github.com/nvcaine/" target="_blank">
                    <SvgIcon alt="Javascript" src={ICONS.GIT} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/romihalasz/"
                    target="_blank"
                >
                    <SvgIcon alt="Javascript" src={ICONS.LINKEDIN} />
                </Link>
                <Link
                    href="https://stackoverflow.com/users/1014378/romi-halasz"
                    target="_blank"
                >
                    <SvgIcon alt="Javascript" src={ICONS.STACK} />
                </Link>
            </div>
        </div>
    );
}
