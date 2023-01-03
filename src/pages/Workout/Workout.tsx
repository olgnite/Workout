import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./Workout.module.scss";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import Header from "../../components/Header/Header";
import { fetchCountersStatistic, fetchExerciseById } from "../../store/actionCreators";
import bgImage from '../../images/workout-bg.jpg';

const Workout: FC = () => {
	const params = useParams<'id'>();
	const dispatch = useAppDispatch();
	const {isAuth, accessToken, username} = useAppSelector(state => state.auth);
	const {minutes, workouts, kgs} = useAppSelector(state => state.counter);
	const exercise = useAppSelector(state => state.exercise.exercise);

	useEffect(() => {
		dispatch(fetchCountersStatistic(accessToken));
		dispatch(fetchExerciseById(params.id));
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
			     style={{backgroundImage: `url(${bgImage})`, height: 356}}>
				<Header/>
				<div>
					{isAuth && <div>
                        <time className={styles.time}>{minutes} min</time>
                        <h1 className={stylesLayout.heading}>{username}</h1>
                    </div>
					}
				</div>
			</div>
		</>)
};

export default Workout;

