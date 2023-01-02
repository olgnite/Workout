import React, { FC, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './CustomSelect.module.scss';
import hamburgerImage from "../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../images/header/hamburger-close.svg";
import { menu } from './menubase';
import { useAppDispatch } from '../../hooks/redux';
import { authSlice } from '../../store/slice/authSlice';

const CustomSelect: FC = () => {
	const [show, setShow] = useState(false);
	const dispatch = useAppDispatch();

	const logoutHandler = () => {
		dispatch(authSlice.actions.logout());
	}

	return (
		<div className={styles.wrapper}>
			<button type='button' onClick={() => setShow(!show)}>
				<img src={show ? hamburgerCloseImage : hamburgerImage} alt="Menu" height='24'/>
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
				<ul>
					{menu.map(item => (
						<li key={'__key__' + item.title}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<button onClick={logoutHandler}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default CustomSelect;
