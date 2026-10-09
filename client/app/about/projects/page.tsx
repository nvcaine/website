import { ReactElement } from 'react';
import ProjectNav from '@/app/ui/about/project-nav';
import ProjectLink, { ProjectLinkProps } from '@/app/ui/about/project-link';
import { ICONS } from '@/app/consts/icons';

const projects: ProjectLinkProps[] = [
    {
        alt: 'Website',
        description:
            'The purpose of this project was to have an online presence for myself and learning to use some new tools in the process.',
        href: '/about/projects/site',
        imagePath: '/images/site.jpg',
        svgIcons: [
            {
                alt: 'TypeScript',
                src: ICONS.TYPESCRIPT
            },
            {
                alt: 'Next.js',
                src: ICONS.NEXT
            },
            {
                alt: 'Tailwind CSS',
                src: ICONS.TAILWIND
            },
            {
                alt: 'React',
                src: ICONS.REACT
            },
            {
                alt: 'AWS',
                src: ICONS.AWS
            }
        ],
        title: 'Website'
    }
];

type Mapper = (project: ProjectLinkProps) => ReactElement;

const mapper: Mapper = (project: ProjectLinkProps): ReactElement => (
    <ProjectLink
        alt={project.alt}
        description={project.description}
        href={project.href}
        imagePath={project.imagePath}
        svgIcons={project.svgIcons}
        title={project.title}
    />
);

export default function Page(): ReactElement {
    return (
        <>
            <ProjectNav title="My work" label="About" link="/about" />

            <p>
                This section contains a few selected examples of my personal
                projects.
            </p>

            <div className="py-3">{projects.map(mapper)}</div>
        </>
    );
}
