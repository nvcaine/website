import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SvgIcon, SvgIconProperties } from '@/app/ui/icons/svg-icon';

export interface ProjectLinkProps {
    alt: string;
    description: string;
    href: string;
    imagePath: string;
    svgIcons?: SvgIconProperties[];
    title: string;
}

type Mapper = (icon: SvgIconProperties) => ReactElement;

const mapper: Mapper = (icon: SvgIconProperties): ReactElement => (
    <SvgIcon alt={icon.alt} src={icon.src} />
);

export default function ProjectLink(props: ProjectLinkProps): ReactElement {
    const { alt, description, href, imagePath, svgIcons, title } = props;

    return (
        <Link href={href} className="flex flex-wrap">
            <div className="basis-1/4 pr-6">
                <Image
                    src={imagePath}
                    alt={alt}
                    className="border border-gray-700 p-0.5 m-auto"
                />
            </div>
            <div className="basis-3/4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap">{svgIcons?.map(mapper)}</div>
            </div>
        </Link>
    );
}
