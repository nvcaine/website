import Link from 'next/link';
import { ReactElement } from 'react';
import ProjectNav from '@/app/ui/about/project-nav';

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav title="My website" />

            <h2 className="pt-8 text-lg font-bold">Writing the code</h2>
            <p>
                When faced with a new project, the first step is choosing the
                language for writing the code. This was a simple choice as most
                of my latest experience relies on TypeScript.
            </p>
            <p>
                Additional considerations regarded how to package the website
                and I decided the best fit for this project was to go with{' '}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    className="font-medium text-blue-500"
                >
                    Next.js
                </Link>
                .
            </p>
            <p>
                Another helpful addition to the project was{' '}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="font-medium text-blue-500"
                >
                    Tailwind
                </Link>
                . It is a powerful CSS framework that makes the layout and
                interface design fast and easy.
            </p>

            <h2 className="pt-8 text-lg font-bold">
                Designing and deploying the infrastructure
            </h2>
            <p>
                Since I decided to package the project as a static website, the
                most intuitive solution would be to use a CDN. As a significant
                advantage, TypeScript can also be used for defining the
                infrastructure resources, using Infrastructure as Code (IaC).
            </p>
            <p>
                The platform for deploying the infrastructure is{' '}
                <Link
                    href="https://aws.amazon.com/"
                    target="_blank"
                    className="font-medium text-blue-500"
                >
                    AWS
                </Link>
                . The CDN is created using a CloudFront distribution, secured by
                a Firewall for managing access. The files are stored in an S3
                bucket which is used as an origin for the distribution.
            </p>

            <h2 className="pt-8 text-lg font-bold">Maintenance</h2>
            <p>
                The main objective was to provide an automated approach to
                deploying code updates.
            </p>
        </>
    );
}
