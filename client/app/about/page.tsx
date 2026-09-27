import { ReactElement } from 'react';

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <h1 className="text-xl mb-4 mt-4">A little bit about me</h1>

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
                    Feel free to browse this section for specific information.
                    My professional experience and skills are separated to
                    provide a better description.
                </p>

                <p>
                    If you would like to see examples of my work, please check
                    out the projects section.
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
        </div>
    );
}
