import { ReactElement } from 'react';

export interface MenuToggleProps {
    buttonClass: string;
    targetId: string;
    onClick: () => void;
    svgPath: string;
}

export function MenuToggle(props: MenuToggleProps): ReactElement {
    const { buttonClass, targetId, onClick, svgPath } = props;

    return (
        <button
            data-collapse-target={targetId}
            data-collapse-toggle={targetId}
            aria-controls={targetId}
            type="button"
            onClick={onClick}
            aria-expanded="false"
            className={buttonClass}
        >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={svgPath}
                />
            </svg>
        </button>
    );
}
