import Link from 'next/link';
import { ReactElement } from 'react';

export default function HomePage(): ReactElement {
    const value: string = process.env.APP_ENV || '[default]';

    return (
        <div className="pt-10 md:pt-0">
            <h1>Welcome to my website - {value}</h1>
            <p>
                I am a software developer passionate about code. To me, coding
                is equal parts art and science. This is why throughout my career
                I addressed the many different sides of Software Development.
            </p>

            <p>
                My main skills are Frontend and Backend Development,
                specialising in Web technologies. Additional skills include
                DevOps, specifically automated testing, complimented by
                infrastructure design, automated deployments, monitoring and
                maintenance. Please check out the{' '}
                <Link href="/about" className="font-medium text-blue-500">
                    About
                </Link>{' '}
                page for additional information.
            </p>

            <p>
                To get in touch with me, please head over to the{' '}
                <Link href="/contact" className="font-medium text-blue-500">
                    Contact
                </Link>{' '}
                section.
            </p>
        </div>
    );
}
