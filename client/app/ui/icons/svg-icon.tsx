import { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
    DEFAULT_ICON_HEIGHT,
    DEFAULT_ICON_WIDTH,
    ICONS
} from '@/app/consts/icons';

export interface SvgIconProperties {
    alt: string;
    height?: number;
    showText?: boolean;
    src: ICONS;
    width?: number;
}
export function SvgIcon(props: SvgIconProperties): ReactElement {
    const { alt, height, showText, src, width } = props;

    let element: ReactElement | undefined = undefined;

    if (showText) {
        element = <span>{alt}</span>;
    }

    return (
        <div>
            <Image
                className="inline mx-1"
                src={src as unknown as StaticImageData}
                alt={alt}
                height={height || DEFAULT_ICON_HEIGHT}
                width={width || DEFAULT_ICON_WIDTH}
            />
            {element}
        </div>
    );
}
