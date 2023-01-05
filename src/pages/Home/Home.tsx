import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button';
import Layout from "../../components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/home-bg.jpg';
import styles from './Home.module.scss';

const Home: FC = () => {
	const navigate = useNavigate();
	const { isAuth, accessToken, username } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	return (<Layout bgImage={bgImage}>
		<Button
			text='New'
			type='main'
			callback={() => navigate('/new-workout')} />
		{isAuth ? (<h1 className={styles.heading}>Добро пожаловать {username}</h1>) : <></>}
	</Layout>);
};

export default Home;
