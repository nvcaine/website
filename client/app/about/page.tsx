import { ReactElement } from 'react';

export default function Page(): ReactElement {
    return (
        <div className="py-6">
            <h1>A little bit about me</h1>
            <p>
                Feel free to browse this section for specific information. My
                professional experience and skills are separated to provide a
                better description.
            </p>

            <p>
                I also included a special section about this website. This
                section documents the process of implementing, deploying and
                maintaining this project.
            </p>
        </div>
    );
}
