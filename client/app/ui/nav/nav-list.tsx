import { ReactElement } from 'react';
import { MenuList, MenuListProps } from '@/app/ui/menu/menu-list';

interface NavListProps extends MenuListProps {
    elementId: string;
    wrapperClass: string;
}

export function NavList(props: NavListProps): ReactElement {
    const { elementId, links, listClass, onClick, path, wrapperClass } = props;

    return (
        <div className={wrapperClass} id={elementId}>
            <MenuList
                listClass={listClass}
                links={links}
                path={path}
                onClick={onClick}
            />
        </div>
    );
}
