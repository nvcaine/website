import Link from 'next/link';
import { ReactElement } from 'react';
import ProjectNav from '@/app/ui/about/project-nav';
import Image from 'next/image';

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav
                title="My website"
                link="/about/projects"
                label="Projects"
            />

            <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-blue-500 pl-3">Writing the code</h2>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                When faced with a new project, the first step is choosing the
                language for writing the code. This was a simple choice as most
                of my latest experience relies on TypeScript, with Node.js as
                runtime environment.
            </p>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                Additional considerations regarded how to package the website
                and I decided the best fit for this project was to go with{' '}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Next.js
                </Link>
                . The main consideration for this decision was the framework's
                ease of exporting React applications to static HTML.
            </p>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                Another helpful addition to the project was{' '}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Tailwind
                </Link>
                . It is a powerful CSS framework that makes the layout and
                interface design fast and easy.
            </p>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                To take a closer look at the code, please head over to the&nbsp;
                <Link
                    href="https://github.com/nvcaine/website"
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                    GitHub repository
                </Link>
                .
            </p>

            <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-blue-500 pl-3">
                Designing and deploying the infrastructure
            </h2>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                Since I decided to package the project as a static website, the
                most intuitive solution would be to use a CDN. As a significant
                advantage, TypeScript can also be used for defining the
                infrastructure resources, using Infrastructure as Code (IaC).
            </p>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                The platform for deploying the infrastructure is{' '}
                <Link
                    href="https://aws.amazon.com/"
                    target="_blank"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                    AWS
                </Link>
                . The CDN is created using a CloudFront distribution, secured by
                a Firewall for managing access. The files are stored in an S3
                bucket which is used as an origin for the distribution.
            </p>

            <div>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    The following diagram shows all the infrastructure
                    components and how they are integrated:
                </p>
                <Image
                    width="640"
                    src="/images/website-diagram-dark.png"
                    alt="AWS Diagram"
                    className="mx-auto"
                />
            </div>

            <h2 className="pt-8 text-lg font-semibold text-slate-200 border-l-2 border-blue-500 pl-3">Maintenance</h2>
            <p className="py-3 text-slate-300 leading-relaxed text-justify">
                The main objective was to provide an automated approach to
                deploying code updates.
            </p>

            <div>
                <p className="py-3 text-slate-300 leading-relaxed text-justify">
                    Whenever a update is pushed to the code repository, a build
                    job is started that compiles the code to static HTML. Once
                    the files are ready, they are uploaded to the storage bucket
                    hosted on AWS S3. The final step is to invalidate the edge
                    caches by sending a request to CloudFront, thus ensuring the
                    latest content is served.
                </p>

                <Image
                    src="/images/devops-diagram.png"
                    alt="DevOps diagram"
                    width="540"
                    className="mx-auto"
                />
            </div>
        </>
    );
}
