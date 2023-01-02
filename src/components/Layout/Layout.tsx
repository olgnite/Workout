import React from 'react';
import cn from 'classnames';

import styles from './Layout.module.scss'
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import { FC } from 'react';

interface ILayoutProps {
    children?: any;
    bgImage?: string;
    heading?: string;
}


const Layout: FC<ILayoutProps> = ({ children, bgImage, heading = '' }) => {
    const navigate = useNavigate();

    return (
        <div
            className={cn(styles.wrapper, {
                [styles.otherPage]: !!heading
            })}
            style={{ backgroundImage: `url(${bgImage})` }}>
            <Header></Header>
            {heading && <h1 className={styles.heading}>{heading}</h1>}
            {children && <div>{children}</div>}
        </div>
    );
};

export default Layout;

