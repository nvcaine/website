import { ReactElement } from 'react';
import Link from 'next/link';

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <Link href="/about/projects/site">Website</Link>
        </div>
    );
}
