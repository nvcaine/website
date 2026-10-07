import { ReactElement } from 'react';
import ProjectNav from '@/app/ui/about/project-nav';
import ProjectLink, { ProjectLinkProps } from '@/app/ui/about/project-link';

const projects: ProjectLinkProps[] = [
    {
        alt: 'Website',
        href: '/about/projects/site',
        imagePath: '/images/site.jpg',
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
        <>
            <ProjectNav title="My work" label="About" link="/about" />

            <p>
                This section contains a few selected examples of my personal
                projects.
            </p>

            <div className="flex flex-wrap">{projects.map(mapper)}</div>
        </>
    );
}
