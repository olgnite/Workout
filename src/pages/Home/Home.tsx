import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../../images/home-bg.jpg';
import Button from '../../components/Button/Button';
import Counters from '../../components/Counters/Counters';
import Layout from "../../components/Layout/Layout";
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountersStatistic } from "../../store/actionCreators";

const Home: FC = () => {
	const navigate = useNavigate();
	const {isAuth, accessToken} = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const {minutes, workouts, kgs} = useAppSelector(state => state.counter);

	useEffect(() => {
		dispatch(fetchCountersStatistic(accessToken))
	}, [])

	return (<Layout bgImage={bgImage}>
		<Button
			text='New'
			type='main'
			callback={() => navigate('/new-workout')}/>
		<h1 className={styles.heading}>Упражнения для плеч</h1>

		{isAuth && <Counters minutes={minutes} workouts={workouts} kgs={kgs}/>}
	</Layout>);
};

export default Home;
