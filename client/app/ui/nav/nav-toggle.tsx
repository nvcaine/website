import { ReactElement } from 'react';
import { MenuToggle, MenuToggleProps } from '@/app/ui/menu/menu-toggle';

interface NavToggleProps extends MenuToggleProps {
    wrapperClass: string;
}

export function NavToggle(props: NavToggleProps): ReactElement {
    const { buttonClass, targetId, onClick, svgPath, wrapperClass } = props;

    return (
        <div className={wrapperClass}>
            <MenuToggle
                buttonClass={buttonClass}
                targetId={targetId}
                onClick={onClick}
                svgPath={svgPath}
            />
        </div>
    );
}
