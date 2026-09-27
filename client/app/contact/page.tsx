import { ReactElement } from 'react';
import Link from 'next/link';

export default function Page(): ReactElement {
    return (
        <>
            <h1 className="text-xl mb-4 mt-4">How to reach me</h1>

            <p>
                Whether you have a specific project in mind, a question about my
                work, or just want to say hello, I'd love to hear from you.
            </p>

            <p>Choose the way that works best for you:</p>

            <ul className="list-disc">
                <li>
                    <p>
                        Send me an email directly at{' '}
                        <Link
                            className="font-medium text-blue-500"
                            href="mailto:romi.m.halasz@gmail.com"
                        >
                            romi.m.halasz@gmail.com
                        </Link>
                        . I usually respond within 24 to 48 hours.
                    </p>
                </li>

                <li>
                    <p>
                        Find me on {' '}
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
                </li>
            </ul>
        </>
    );
}
