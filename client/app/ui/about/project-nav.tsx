import Link from 'next/link';
import { ReactElement } from 'react';
import MainHeading from '@/app/ui/main-heading';

interface ProjectHeadingProps {
    title: string;
    label: string;
    link: string;
}

export default function ProjectNav(props: ProjectHeadingProps): ReactElement {
    const { title, link, label } = props;
    return (
        <div className="flex flex-wrap justify-between border-b border-gray-600">
            <MainHeading hideBorder={true}>{title}</MainHeading>
            <Link
                className="flex flex-wrap justify-end font-medium text-blue-500 items-center"
                href={link}
            >
                <svg
                    className="mr-2"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 14H4M4 14L10 20M4 14L10 8"
                        transform="translate(0, -2)"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span>{label}</span>
            </Link>
        </div>
    );
}
