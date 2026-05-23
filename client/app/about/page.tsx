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
                If you would like to see examples of my work, please check out
                the projects section.
            </p>
        </div>
    );
}
