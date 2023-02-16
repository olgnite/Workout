import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import Timer from "../../components/Timer/Timer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/workout-bg.jpg';
import { fetchExerciseById, fetchWorkoutById } from "../../store/actionCreators";
import styles from "./Workout.module.scss";

const Workout: FC = () => {
	const params = useParams<'id'>();
	const dispatch = useAppDispatch();
	const { isAuth, accessToken, username } = useAppSelector(state => state.auth);
	const { name, exerciseNames, isSuccess } = useAppSelector(state => state.workout);
	const exercise = useAppSelector(state => state.exercise.exercise);
	const { minutes, seconds } = useAppSelector(state => state.workout);

	const timeMs: number = Number(minutes) * 60000 + Number(seconds);

	useEffect(() => {
		dispatch(fetchExerciseById(params.id));
		dispatch(fetchWorkoutById(params.id));
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
				style={{ backgroundImage: `url(${bgImage})`, height: 356 }}>
				<Header />
				<div>
					{isAuth && <div>
						<h1 className={stylesLayout.heading}>{username}</h1>
					</div>
					}
				</div>
			</div>
			<div className="wrapper-inner-page" style={{ paddingLeft: 0, paddingRight: 0 }}>
				{!isSuccess ? (<div className={styles.wrapper}>
					<div>
						<div style={{ margin: '10px', padding: '10px' }}>
							<span>Название тренировки - {name}</span>
							<br />
							<p>Упражнение(я) - {exerciseNames.map(exercise => (
								<span key={'__key__' + exercise.value}>{exercise.label + ' '}</span>
							))} </p>
							<br />
							<span>Подходов - {exercise.times}</span>
							<Timer secondsTime={timeMs} workoutId={params.id} />
						</div>
					</div>
				</div>) : (<p style={{ fontSize: '20px' }}>Loading workout...</p>)}
			</div>
		</>)
};

export default Workout;

