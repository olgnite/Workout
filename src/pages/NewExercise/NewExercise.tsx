import cn from 'classnames';
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { exercisesData, regularTimes } from "../../components/constData";
import Error from "../../components/Error/Error";
import Layout from "../../components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/new-exercise-bg.jpg';
import { addExercise } from "../../store/actionCreators";
import { IExercise } from "../../types/interfaces";
import styles from './NewExercise.module.scss';


const NewExercise: FC = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, reset, formState: { errors } } = useForm<IExercise>();
	const [exerciseName, setExerciseName] = useState('');
	const accessToken = useAppSelector(state => state.auth.accessToken);
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IExercise> = (data: IExercise) => {
		dispatch(addExercise(accessToken, { exercise: exerciseName, ...data }))
		navigate('/new-workout');
		reset();
	}

	return (<>
		<Layout bgImage={bgImage} heading='Add new exercise' />
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
							value: regularTimes,
							message: 'Пожалуйста введите число'
						}
					})}
				/>
				<Error error={errors.times} errorMessage={errors.times?.message}></Error>
				<div
					className={styles.exerciseWrapper}
					style={{ marginBottom: "25px" }}>
					{exercisesData.map(name => (
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
