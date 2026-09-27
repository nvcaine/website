import { ReactElement } from 'react';
import Link from 'next/link';
import MainHeading from '@/app/ui/main-heading';

export default function Page(): ReactElement {
    return (
        <>
            <MainHeading>How to reach me</MainHeading>

            <p>
                Whether you have a specific project in mind, a question about my
                work, or just want to say hello, I'd love to hear from you.
            </p>

            <p>
                You can send me an email directly at{' '}
                <Link
                    className="font-medium text-blue-500"
                    href="mailto:romi.m.halasz@gmail.com"
                >
                    romi.m.halasz@gmail.com
                </Link>
            </p>

            <p>
                Or you can find me on{' '}
                <Link
                    className="font-medium text-blue-500"
                    href="https://www.linkedin.com/in/romihalasz
"
                >
                    LinkedIn
                </Link>{' '}
                for professional networking, industry updates, and quick
                messages.
            </p>
        </>
    );
}
