import { ReactElement } from 'react';
import MainHeading from '@/app/ui/main-heading';
import Link from 'next/link';

export default function Page(): ReactElement {
    return (
        <>
            <MainHeading>A little bit about me</MainHeading>

            <div>
                <h2 className="pt-8 text-lg font-bold">
                    Professional experience
                </h2>

                <p>
                    My career started as a Web Developer and as the scope and
                    complexity of the projects I was involved with progressed,
                    so did my skills. Throughout my career I had the opportunity
                    to work with many tools, covering multiple areas of the
                    Software Development industry. Though most of my work
                    focuses on the Web, I also worked in Mobile and Game
                    Development.
                </p>

                <p>
                    To see an in-depth description of my professional skills,
                    please head over to the{' '}
                    <Link
                        href="/about/skills"
                        className="font-medium text-blue-500"
                    >
                        Skills
                    </Link>{' '}
                    section.
                </p>

                <p>
                    If you want to take a look at my professional history and
                    information about my work in various companies, please see
                    the{' '}
                    <Link
                        href="/about/experience"
                        className="font-medium text-blue-500"
                    >
                        Experience
                    </Link>{' '}
                    section.
                </p>

                <p>
                    If you would like to see examples of my work, please check
                    out the{' '}
                    <Link
                        href="/about/projects"
                        className="font-medium text-blue-500"
                    >
                        Projects
                    </Link>{' '}
                    section.
                </p>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-bold">Volunteering</h2>

                <p>
                    I am also involved in the local Developer community, as I
                    enjoy helping and mentoring others with topics about coding
                    in general. I was active with the local Coder Dojo and was a
                    meetup organizer for Game Developers.
                </p>
            </div>
        </>
    );
}
