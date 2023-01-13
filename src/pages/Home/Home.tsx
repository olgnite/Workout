import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button';
import Layout from "../../components/Layout/Layout";
import Timer from "../../components/Timer/Timer";
import { useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/home-bg.jpg';
import styles from './Home.module.scss';

const Home: FC = () => {
	const navigate = useNavigate();
	const { accessToken, username } = useAppSelector(state => state.auth);

	return (<Layout bgImage={bgImage}>
		<Button
			text='New'
			type='main'
			callback={() => navigate('/new-exercise')} />
		{accessToken ? (<h1 className={styles.heading}>Добро пожаловать {username}</h1>) : <></>}
	</Layout>);
};

export default Home;
