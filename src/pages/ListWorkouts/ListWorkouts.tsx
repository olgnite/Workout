import { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from "../../images/new-workout-bg.jpg";
import { fetchWorkouts } from "../../store/actionCreators";
import styles from './ListWorkouts.module.scss';

const ListWorkouts: FC = () => {
	const dispatch = useAppDispatch();
	const { isAuth, accessToken } = useAppSelector(state => state.auth);
	const { workouts, isSuccess } = useAppSelector(state => state.workout);

	useEffect(() => {
		dispatch(fetchWorkouts());
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<Layout bgImage={bgImage} heading='Workouts List' />
			<div className="wrapper-inner-page" style={{ paddingLeft: 0, paddingRight: 0 }}>
				{isSuccess ? (<p style={{ fontSize: '20px' }}>Loading workouts...</p>) : workouts?.length ? (<div className={styles.wrapper}>
					{workouts.map((workout, i) => {
						return (
							<div key={'__key__' + workout.name}>
								<Link to={`workout/${i + 1}`}>
									<span>{workout.name}</span>
									<div className='time'>
										<span style={{ marginRight: '10px' }}>Минут - {workout.minutes}</span>
										<span>Секунд - {workout.seconds}</span>
									</div>
								</Link>
							</div>)
					})}
				</div>) : (<p style={{ fontSize: '20px' }}>Тренировки не найдены</p>)}
			</div>
		</>)
};

export default ListWorkouts;


