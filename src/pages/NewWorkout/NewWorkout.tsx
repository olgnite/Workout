import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import Select, { ActionMeta, MultiValue, OnChangeValue, SingleValue } from 'react-select';
import Layout from '../../components/Layout/Layout';
import { optionColor } from '../../components/optionColor';
import bgImage from '../../images/new-workout-bg.jpg';
import { IExercise, IOption, IWorkout } from '../../types/interfaces';
import styles from './NewWorkout.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addWorkout, fetchExercises } from "../../store/actionCreators";
import { workoutSlice } from "../../store/slice/workoutSlice";


const NewWorkout: FC = () => {
	const navigate = useNavigate();
	const {register, handleSubmit, reset} = useForm<IWorkout>();
	const [data, setData] = useState<IExercise[]>([]);
	const exercises = useAppSelector(state => state.exercise.exercises);
	const {accessToken, isAuth} = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const [exercise, setExercise] = useState<SingleValue<IOption> | MultiValue<IOption>>([]);

	useEffect(() => {
		dispatch(fetchExercises())
	}, [dispatch, isAuth])

	const onSubmit: SubmitHandler<IWorkout> = (data: IWorkout) => {
		dispatch(addWorkout(accessToken, {
			name: data.name,
			exerciseNames: exercise as IOption[]
		}))
		reset();
	}

	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		setExercise(newValue);
	}

	return (
		<>
			<Layout bgImage={bgImage} heading='Create new workout'/>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('name')}
						type="text"
						placeholder='Enter name'
						className={styles.input}
					/>
					<button
						type="submit"
						className={`${styles.button} ${styles['submit']}`}
					>
						Create
					</button>
					<Link to='/new-exercise' className='dark-link'>Add new exercise</Link>
				</form>
				<Select
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					options={exercises.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					onChange={onChange}
					isSearchable={false}
					theme={(theme: any) => optionColor(theme)}
					isMulti={true}
				/>
			</div>
		</>
	);
};

export default NewWorkout;
