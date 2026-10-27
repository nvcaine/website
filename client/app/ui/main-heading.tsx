import { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

interface MainHeadingProps {
    children: ReactNode;
    hideBorder?: boolean;
}

export default function MainHeading({
    children,
    hideBorder
}: MainHeadingProps): ReactElement {
    return (
        <h1
            className={clsx('text-2xl font-bold py-4 tracking-tight text-white', {
                'border-b border-phthalo-800/80': !hideBorder
            })}
        >
            {children}
        </h1>
    );
}
