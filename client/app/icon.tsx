import { ImageResponse } from 'next/og';
import { CSSProperties, ReactElement } from 'react';

//noinspection JSUnusedGlobalSymbols
export const contentType: string = 'image/png';
export const size: Object = {
    width: 32,
    height: 32
};

export default function Icon(): ImageResponse {
    const style: CSSProperties = {
        backgroundColor: 'black',
        borderRadius: 8,
        display: 'flex'
    };

    const element: ReactElement = (
        <div style={style}>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="32pt"
                height="32pt"
                viewBox="0 0 162 162"
                preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0,162) scale(0.1,-0.1)"
                    fill="white"
                    stroke="none"
                >
                    <path
                        d="M320 1050 l0 -170 205 0 c198 0 205 1 205 20 0 19 -7 20 -150 20
l-150 0 0 150 0 150 -55 0 -55 0 0 -170z"
                    />
                    <path
                        d="M760 1139 l0 -81 35 31 c36 31 36 31 155 31 86 0 131 -4 159 -16 84
-33 95 -158 17 -205 l-31 -19 87 0 87 0 17 55 c15 48 16 64 6 113 -13 64 -34
97 -82 129 -53 36 -95 43 -277 43 l-173 0 0 -81z"
                    />
                    <path
                        d="M797 1052 l-37 -38 0 -247 0 -247 60 0 60 0 -2 283 c-3 274 -4 282
-23 285 -13 2 -34 -12 -58 -36z"
                    />
                    <path
                        d="M50 830 c0 -20 7 -20 340 -20 333 0 340 0 340 20 0 20 -7 20 -340 20
-333 0 -340 0 -340 -20z"
                    />
                    <path
                        d="M909 845 c0 -3 -1 -18 -1 -35 0 -16 1 -34 1 -40 1 -5 25 -10 54 -10
l52 0 83 -120 83 -120 64 0 c36 0 65 2 65 5 0 5 -84 128 -142 209 -15 21 -28
42 -28 46 0 22 64 30 240 30 183 0 190 1 190 20 0 20 -7 20 -330 20 -181 0
-330 -2 -331 -5z"
                    />
                    <path d="M320 650 l0 -130 55 0 55 0 0 130 0 130 -55 0 -55 0 0 -130z" />
                </g>
            </svg>
        </div>
    );

    return new ImageResponse(element, size);
}
