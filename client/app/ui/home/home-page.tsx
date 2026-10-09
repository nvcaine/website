import Link from 'next/link';
import { ReactElement } from 'react';
import MainHeading from '@/app/ui/main-heading';

export default function HomePage(): ReactElement {
    return (
        <>
            <MainHeading>Welcome to my website</MainHeading>

            <h2 className="pt-8 text-lg font-bold">Hello, I am Romi</h2>

            <p>
                I am a Full-stack Software Developer passionate about code and
                building amazing products.
            </p>

            <p>
                My main skills are Frontend and Backend Development,
                specialising in Web technologies. Additional skills also include
                DevOps, complemented by Cloud Infrastructure design, automation,
                monitoring and maintenance. Please check out the{' '}
                <Link href="/about" className="font-medium text-blue-500">
                    About
                </Link>{' '}
                page for more information.
            </p>

            <p>
                To get in touch with me, please head over to the{' '}
                <Link href="/contact" className="font-medium text-blue-500">
                    Contact
                </Link>{' '}
                section.
            </p>
        </>
    );
}
