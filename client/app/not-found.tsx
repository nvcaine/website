import Link from 'next/link';
import { ReactElement } from 'react';

export default function Page(): ReactElement {
    return (
        <div>
            <h1 className="text-2xl font-bold my-6 text-center text-white">
                Page not found
            </h1>
            <p className="text-slate-300 py-3 text-justify">
                It seems the page you were looking for does not exist or an
                unknown error occurred.
            </p>
            <p className="text-center text-slate-300 py-3">
                Back to the{' '}
                <Link href="/" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    main page
                </Link>
            </p>
        </div>
    );
}
