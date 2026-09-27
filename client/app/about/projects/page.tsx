import { ReactElement } from 'react';
import ProjectLink, { ProjectLinkProps } from '@/app/ui/about/project-link';
import MainHeading from '@/app/ui/main-heading';

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
            <MainHeading>My work</MainHeading>

            <p>
                This section contains a few selected examples of my personal
                projects.
            </p>

            <div className="flex flex-wrap">{projects.map(mapper)}</div>
        </>
    );
}
