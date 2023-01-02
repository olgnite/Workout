import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./Workout.module.scss";
import stylesLayout from "../../components/Layout/Layout.module.scss";
import Header from "../../components/Header/Header";
import Counters from "../../components/Counters/Counters";
import { fetchCountersStatistic, fetchExercises } from "../../store/actionCreators";
import bgImage from '../../images/workout-bg.jpg';

const Workout: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const {isAuth, accessToken, username} = useAppSelector(state => state.auth);
	const {minutes, workouts, kgs} = useAppSelector(state => state.counter);
	const {exercises, isSuccess} = useAppSelector(state => state.exercise);

	useEffect(() => {
		if (isAuth) {
			dispatch(fetchCountersStatistic(accessToken));
			dispatch(fetchExercises());
		}
	}, [dispatch, isAuth, accessToken])

	return (
		<>
			<div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`}
			     style={{backgroundImage: `url(${bgImage})`, height: 356}}>
				<Header/>
				{/*<div className={styles.center}>*/}
				{/*	<img alt="Profile" height='56'/>*/}
				<div>
					{isAuth && <div>
                        <time className={styles.time}>{minutes} min</time>
                        <h1 className={stylesLayout.heading}>{username}</h1>
                    </div>
					}
				</div>
				{/*</div>*/}
				{/*{isAuth && <Counters minutes={minutes} workouts={workouts} kgs={kgs}/>}*/}
			</div>
			<div className="wrapper-inner-page" style={{paddingLeft: 0, paddingRight: 0}}>
				{!isSuccess ? (<div className={styles.wrapper}>
					{exercises.map((exercise, i) => {
						return (
							<div key={'__key__' + exercise.id}>
								<Link to={`exercise/${exercise.id}`}>
									<span>{exercise.name}</span>
								</Link>
							</div>)
					})}
				</div>) : (<p style={{fontSize: '20px'}}>Loading exercises...</p>)}
			</div>
		</>)
};

export default Workout;

// {/*{i % 2 && <div key={'__key__' + i} className={styles.line}></div>}*/}
