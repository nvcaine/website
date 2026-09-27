import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectLinkProps {
    alt: string;
    href: string;
    imagePath: string;
    title: string;
}

export default function ProjectLink(props: ProjectLinkProps): ReactElement {
    const { alt, href, imagePath, title } = props;

    return (
        <div className="md:basis-1/4 p-3 basis-1/2">
            <Link href={href}>
                <Image
                    src={imagePath}
                    alt={alt}
                    width={100}
                    className="border border-gray-700 p-0.5 m-auto"
                />
            </Link>
            <div className="text-center">{title}</div>
        </div>
    );
}
