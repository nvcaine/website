import { ReactElement } from 'react';
import Link from 'next/link';
import ProjectNav from '@/app/ui/about/project-nav';

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav title="A little bit about me" label="Home" link="/" />

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">
                    Professional experience
                </h2>

                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    My career started as a Web Developer and as the scope and
                    complexity of the projects I was involved with progressed,
                    so did my skills. Throughout my career I had the opportunity
                    to work with many tools, covering multiple areas of the
                    Software Development industry. Though most of my work
                    focuses on the Web, I also worked in Mobile and Game
                    Development.
                </p>

                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    To see an in-depth description of my professional skills,
                    please head over to the{' '}
                    <Link
                        href="/about/skills/"
                        className="font-medium text-phthalo-400 hover:text-phthalo-300 transition-colors"
                    >
                        Skills
                    </Link>{' '}
                    section.
                </p>

                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    If you want to take a look at my professional history and
                    information about my work in various companies, please see
                    the{' '}
                    <Link
                        href="/about/experience/"
                        className="font-medium text-phthalo-400 hover:text-phthalo-300 transition-colors"
                    >
                        Experience
                    </Link>{' '}
                    section.
                </p>

                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    If you would like to see examples of my work, please check
                    out the{' '}
                    <Link
                        href="/about/projects/"
                        className="font-medium text-phthalo-400 hover:text-phthalo-300 transition-colors"
                    >
                        Projects
                    </Link>{' '}
                    section.
                </p>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">Volunteering</h2>

                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    I am also involved in the local Developer community, as I
                    enjoy helping and mentoring others with topics about coding
                    in general. I was active with the local Coder Dojo and was a
                    meetup organizer for Game Developers.
                </p>
            </div>
        </>
    );
}
