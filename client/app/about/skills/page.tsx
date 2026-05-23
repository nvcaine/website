import { ReactElement } from 'react';

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <h1>Skills</h1>

            <p>
                Throughout my career I have had the opportunity to work with
                many tools and technologies. This section provides a detailed
                description of the areas I am active in and their associated
                tools.
            </p>

            <div>
                <h2>Frontend</h2>
                <p>
                    Having worked with multiple tools since the early days of{' '}
                    <strong>jQuery</strong> and specialising in Web Application
                    Development, the bulk of my experience is focused on
                    JavaScript. My main tools are{' '}
                    <strong>Angular, React, Next.JS, Bootstrap</strong> and{' '}
                    <strong>Tailwind</strong>.
                </p>
                <p>
                    In addition to Web applications, my skills include Android
                    Mobile Development in <strong>Java</strong>.
                </p>
            </div>

            <div>
                <h2>Backend</h2>
                <p>
                    Starting my professional career as a backend developer, most
                    of my experience lies in this area. The most common work was
                    related to implementing <strong>REST APIs</strong>, with
                    focus on performance, availability and security.
                </p>
                <p>
                    The tools I work with the most include{' '}
                    <strong>Node.JS</strong> and <strong>PHP</strong>.
                </p>
            </div>

            <div>
                <h2>DevOps</h2>
                <p>
                    Automating processes has multiple advantages. The main one
                    being ensuring new updates updates do not affect existing
                    code.
                </p>
                <p>
                    My focus in this area is <strong>Jenkins</strong> and{' '}
                    <strong>Bash</strong> scripting.
                </p>
            </div>

            <div>
                <h2>Cloud infrastructure</h2>
                <p>
                    With IaaS becoming ever-more popular, no full-stack skill
                    set is complete without infrastructure. Understanding the
                    requirements to deploy, maintain and update a system are
                    important for any developer looking to increase performance
                    and security.
                </p>
                <p>
                    <strong>AWS</strong> is the main tool I use for defining and
                    deploying the infrastructure running my code.
                </p>
            </div>
        </div>
    );
}
