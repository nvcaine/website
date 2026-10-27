import { ReactElement } from 'react';
import Link from 'next/link';
import ProjectNav from '@/app/ui/about/project-nav';

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav title="How to reach me" label="Home" link="/" />

            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                Whether you have a specific project in mind, a question about my
                work, or just want to say hello, I'd love to hear from you.
            </p>

            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                You can send me an email directly at{' '}
                <Link
                    className="font-medium text-phthalo-400 hover:text-phthalo-300 transition-colors"
                    href="mailto:romi.m.halasz@gmail.com"
                >
                    romi.m.halasz@gmail.com
                </Link>
            </p>

            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                Or you can find me on{' '}
                <Link
                    className="font-medium text-phthalo-400 hover:text-phthalo-300 transition-colors"
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
