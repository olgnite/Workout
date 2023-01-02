import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import bgImage from '../../images/new-exercise-bg.jpg';
import { IExercise } from "../../types/interfaces";
import styles from './NewExercise.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { exerciseSlice } from "../../store/slice/exerciseSlice";
import cn from 'classnames';
import Error from "../../components/Error/Error";
import { addExercise } from "../../store/actionCreators";

const data = ['грудь', 'плечи', 'бицепс', 'ноги', 'удар']

const NewExercise: FC = () => {
	const navigate = useNavigate();
	const {register, handleSubmit, reset, formState: {errors}} = useForm<IExercise>();
	const [exerciseName, setExerciseName] = useState('');
	const accessToken = useAppSelector(state => state.auth.accessToken);
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IExercise> = (data: IExercise) => {
		dispatch(addExercise(accessToken, {exercise: exerciseName, ...data}))
		navigate('/new-workout');
	}

	return (<>
		<Layout bgImage={bgImage} heading='Add new exercise'/>
		<div className='wrapper-inner-page'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder='Enter name'
					className={styles.input}
					{...register('name', {
						required: 'Name обязательное поле'
					})}
				/>
				<Error error={errors.name} errorMessage={errors.name?.message}></Error>
				<input
					type="text"
					placeholder='Enter times'
					className={styles.input}
					{...register('times', {
						required: 'Times обязательное поле',
						pattern: {
							value: /^[0-9]+(\.?[0-9]+)?$/,
							message: 'Пожалуйста введите число'
						}
					})}
				/>
				<Error error={errors.times} errorMessage={errors.times?.message}></Error>
				<div
					className={styles.exerciseWrapper}
					style={{marginBottom: "25px"}}>
					{data.map(name => (
						<span
							className={cn({
								[styles.active]: exerciseName === name,
							})}
							key={'__key__' + name}
							onClick={() => setExerciseName(name)}
						>
							{name}
						</span>
					))}
				</div>
				<button
					type="submit"
					className={`${styles.button} ${styles['submit']}`}
				>
					Add
				</button>
			</form>
		</div>
	</>);
};

export default NewExercise;
