import Link from 'next/link';
import { ReactElement } from 'react';

export function ContactSidebar(): ReactElement {
    return (
        <>
            <div>
                To get in touch with me, you can reach me via email at{' '}
                <Link
                    className="font-medium text-blue-500"
                    href="mailto:romi.m.halasz@gmail.com"
                >
                    romi.m.halasz@gmail.com
                </Link>
            </div>

            <br />

            <div>
                Or you can connect with me on{' '}
                <Link
                    className="font-medium text-blue-500"
                    href="https://www.linkedin.com/in/romihalasz
"
                >
                    LinkedIn
                </Link>
                .
            </div>

            <br />
        </>
    );
}
