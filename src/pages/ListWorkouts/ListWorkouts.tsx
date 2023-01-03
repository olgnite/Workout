import React, { FC, useEffect, useState } from 'react';
import styles from './ListWorkouts.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCountersStatistic, fetchExercises } from "../../store/actionCreators";
import bgImage from "../../images/new-workout-bg.jpg";
import Layout from "../../components/Layout/Layout";

const ListWorkouts: FC = () => {
	const dispatch = useAppDispatch();
	const {isAuth, accessToken, username} = useAppSelector(state => state.auth);
	const {exercises, isSuccess} = useAppSelector(state => state.exercise);

	useEffect(() => {
		dispatch(fetchCountersStatistic(accessToken));
		dispatch(fetchExercises());
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<Layout bgImage={bgImage} heading='Workouts List'/>
			<div className="wrapper-inner-page" style={{paddingLeft: 0, paddingRight: 0}}>
				{!isSuccess ? (<div className={styles.wrapper}>
					{exercises.map((exercise, i) => {
						return (
							<div key={'__key__' + exercise.id}>
								<Link to={`exercises/${exercise.id}`}>
									<span>{exercise.name}</span>
								</Link>
							</div>)
					})}
				</div>) : (<p style={{fontSize: '20px'}}>Loading exercises...</p>)}
			</div>
		</>)
};

export default ListWorkouts;
