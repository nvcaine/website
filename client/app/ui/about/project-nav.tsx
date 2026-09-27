import Link from 'next/link';
import { ReactElement } from 'react';

interface ProjectHeadingProps {
    title: string;
}

export default function ProjectNav(props: ProjectHeadingProps): ReactElement {
    return (
        <div className="flex flex-wrap justify-between sticky top-16 py-6 border-b border-gray-600">
            <h1>{props.title}</h1>
            <Link
                className="flex flex-wrap justify-end font-medium text-blue-500"
                href="/about/projects"
            >
                <svg
                    className="w-5 h-5"
                    width="20"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 14H4M4 14L10 20M4 14L10 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span>&nbsp;Back</span>
            </Link>
        </div>
    );
}
