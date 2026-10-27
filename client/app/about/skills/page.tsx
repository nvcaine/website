import { ReactElement } from 'react';
import { ICONS } from '@/app/consts/icons';
import { SvgIcon } from '@/app/ui/icons/svg-icon';
import ProjectNav from '@/app/ui/about/project-nav';

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav
                title="Professional skills"
                label="About"
                link="/about"
            />

            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                This section provides a detailed description of the areas I am
                active in and their associated tools.
            </p>

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">Frontend</h2>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    Having worked with multiple tools since the early days of{' '}
                    <strong>jQuery</strong> and specialising in Web Application
                    Development, the bulk of my experience is focused on
                    JavaScript. My main tools are{' '}
                    <strong>Angular, React, Next.JS, Bootstrap</strong> and{' '}
                    <strong>Tailwind</strong>.
                </p>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    In addition to Web applications, my skills include Android
                    Mobile Development in <strong>Java</strong>.
                </p>

                <div className="flex flex-wrap">
                    <SvgIcon alt="Javascript" src={ICONS.JAVASCRIPT} />
                    <SvgIcon alt="Angular" src={ICONS.ANGULAR} />
                    <SvgIcon alt="React" src={ICONS.REACT} />
                    <SvgIcon alt="Next" src={ICONS.NEXT} />
                    <SvgIcon alt="Bootstrap" src={ICONS.BOOTSTRAP} />
                    <SvgIcon alt="Tailwind" src={ICONS.TAILWIND} />
                    <SvgIcon alt="Android" src={ICONS.ANDROID} />
                    <SvgIcon alt="Java" src={ICONS.JAVA} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">Backend</h2>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    Starting my professional career as a backend developer, most
                    of my experience lies in this area. The bulk of my work
                    consisted of implementing <strong>REST APIs</strong>, with
                    focus on performance, availability and security.
                </p>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    The tools I work with the most include{' '}
                    <strong>Node.JS</strong> and <strong>PHP</strong>.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Node" src={ICONS.NODE} />
                    <SvgIcon alt="PHP" src={ICONS.PHP} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">DevOps</h2>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    Automating processes offers multiple advantages for Software
                    Development, reducing human error and work time. Continuous
                    integration and deployment have become industry standards.
                </p>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    My focus in this area is <strong>Jenkins</strong>,{' '}
                    <strong>Docker</strong> and <strong>Bash</strong> scripting.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="Jenkins" src={ICONS.JENKINS} />
                    <SvgIcon alt="Docker" src={ICONS.DOCKER} />
                    <SvgIcon alt="Bash" src={ICONS.BASH} />
                </div>
            </div>

            <div>
                <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-phthalo-500 pl-3">Cloud infrastructure</h2>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    With IaaS becoming ever-more popular, no full-stack skill
                    set is complete without infrastructure. Understanding the
                    requirements to deploy, maintain and update a system are
                    important for any developer looking to increase performance
                    and security.
                </p>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    <strong>AWS</strong> is the main tool I use for defining and
                    deploying the infrastructure running my code.
                </p>
                <div className="flex flex-wrap">
                    <SvgIcon alt="AWS" src={ICONS.AWS} />
                    <SvgIcon alt="Docker" src={ICONS.DOCKER} />
                </div>
            </div>
        </>
    );
}
