import { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ICONS } from '@/app/consts/icons';

interface TestIconProperties {
    src: ICONS;
}
export function SvgIcon(props: TestIconProperties): ReactElement {
    const { src } = props;

    return <Image src={src as unknown as StaticImageData} alt="" />;
}
