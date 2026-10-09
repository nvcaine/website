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
            className={clsx('text-xl py-4', {
                'border-b': !hideBorder,
                'border-gray-600': !hideBorder
            })}
        >
            {children}
        </h1>
    );
}
