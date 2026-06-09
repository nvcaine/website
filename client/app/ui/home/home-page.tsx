import Link from 'next/link';
import { ReactElement } from 'react';

export default function HomePage(): ReactElement {
    return (
        <div className="pt-10 md:pt-0">
            <h1>Welcome to my website</h1>
            <p>
                Hi! My name is Romi, I am a full-stack software developer
                passionate about code and building amazing products.
            </p>

            <p>
                My main skills are Frontend and Backend Development,
                specialising in Web technologies. Additional skills include
                DevOps, specifically automated testing, complemented by cloud
                infrastructure design, automation, monitoring and maintenance.
                Please check out the{' '}
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
        </div>
    );
}
