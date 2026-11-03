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
        <div className="rounded-lg overflow-hidden ring-1 ring-phthalo-800 shadow-xl">
            <Image
                src="/images/photo.jpg"
                className="w-full max-h-64 object-cover"
                alt=""
                width={100}
            />
        </div>
    ) : undefined;

    return (
        <div className="flex flex-col items-center">
            {imageElement}

            <div className="pt-4 text-lg font-semibold text-white tracking-tight">Romi Halasz</div>

            <div className="text-slate-400 text-sm text-center">Full-Stack Cloud Developer</div>

            <div className="flex gap-1 mt-3">
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
