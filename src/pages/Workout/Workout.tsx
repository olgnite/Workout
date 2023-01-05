import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/workout-bg.jpg';
import { fetchExerciseById, fetchWorkoutById } from "../../store/actionCreators";
import styles from "./Workout.module.scss";

const Workout: FC = () => {
	const params = useParams<'id'>();
	const dispatch = useAppDispatch();
	const { isAuth, accessToken, username } = useAppSelector(state => state.auth);
	const { exercise, isSuccess } = useAppSelector(state => state.exercise);
	const { name, exerciseNames } = useAppSelector(state => state.workout);

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
						{/* <time className={styles.time}>{5} min</time> */}
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
							<span>Упражнение - {exercise.name}</span>
							<br />
							<span>Подходов - {exercise.times}</span>
						</div>
					</div>
				</div>) : (<p style={{ fontSize: '20px' }}>Loading exercise...</p>)}
			</div>
		</>)
};

export default Workout;

