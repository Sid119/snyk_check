import React from 'react';
import styles from './page-title.module.scss';
import clsx from 'clsx';

interface PageTitleComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageTitleComponent(props: PageTitleComponentProps) {
    return (
        <h3 className={clsx( styles.pageTitle )}>
            {props.children}
        </h3>
    );
}