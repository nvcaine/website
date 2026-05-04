import { ImageResponse } from 'next/og';
import { CSSProperties, ReactElement } from 'react';

//noinspection JSUnusedGlobalSymbols
export const contentType: string = 'image/png';
export const size: Object = {
    width: 32,
    height: 32
};

export default function Icon() {
    const style: CSSProperties = {
        alignItems: 'center',
        background: 'transparent',
        color: 'green',
        display: 'flex',
        fontSize: 24,
        fontWeight: 'bold',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    };

    const element: ReactElement = <div style={style}>RH</div>;

    return new ImageResponse(element, size);
}
