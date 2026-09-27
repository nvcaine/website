import Link from 'next/link';
import { ReactElement } from 'react';

export default function Page(): ReactElement {
    return (
        <div>
            <h1 className="text-xl my-4 text-center">
                The requested resource could not be found
            </h1>
            <p>
                It seems the page you were looking for does not exist or an
                unknown error occurred.
            </p>
            <p className="text-center">
                Back to the{' '}
                <Link href="/" className="font-medium text-blue-500">
                    main page
                </Link>
            </p>
        </div>
    );
}
