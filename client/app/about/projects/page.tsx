import { ReactElement } from 'react';
import ProjectLink, { ProjectLinkProps } from '@/app/ui/about/project-link';

const projects: ProjectLinkProps[] = [
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    },
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    },
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    },
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    },
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    },
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/photo.jpg',
        title: 'Website'
    }
];

type Mapper = (project: ProjectLinkProps) => ReactElement;

const mapper: Mapper = (project: ProjectLinkProps): ReactElement => (
    <ProjectLink
        alt={project.alt}
        href={project.href}
        imagePath={project.imagePath}
        title={project.title}
    />
);

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <h1 className="text-xl mb-4 mt-4">My work</h1>

            <p>
                This section contains a few selected examples of my personal
                projects.
            </p>

            <div className="flex flex-wrap">{projects.map(mapper)}</div>
        </div>
    );
}
