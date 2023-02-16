import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Select, { MultiValue, OnChangeValue, SingleValue } from 'react-select';
import Error from "../../components/Error/Error";
import Layout from '../../components/Layout/Layout';
import { optionColor } from '../../components/optionColor';
import TimeSelect from '../../components/TimeSelect/TimeSelect';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from '../../images/new-workout-bg.jpg';
import { addWorkout, fetchExercises } from "../../store/actionCreators";
import { IOption, IWorkout } from '../../types/interfaces';
import styles from './NewWorkout.module.scss';


const NewWorkout: FC = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<IWorkout>();
	const exercises = useAppSelector(state => state.exercise.exercises);
	const { accessToken, isAuth } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const [exercise, setExercise] = useState<SingleValue<IOption> | MultiValue<IOption>>([]);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchExercises());
	}, [dispatch, isAuth])

	const onSubmit: SubmitHandler<IWorkout> = (data: IWorkout) => {
		dispatch(addWorkout(accessToken, {
			name: data.name,
			exerciseNames: exercise as IOption[],
			minutes: data.minutes,
			seconds: data.seconds
		}))
		navigate('/workouts');
		reset();
	}

	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		setExercise(newValue);
	}

	return (
		<>
			<Layout bgImage={bgImage} heading='Create new workout' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '15px' }}>
					<input
						{...register('name', { required: 'Обязательное поле' })}
						type="text"
						placeholder='Enter name'
						className={styles.input}
					/>
					<Error error={errors?.name} errorMessage={errors.name?.message} />
					<div>
						<TimeSelect register={register} controlName={'minutes'} labelSelect='Minutes' />
						<TimeSelect register={register} controlName={'seconds'} labelSelect='Seconds' />
					</div>
					<button
						type="submit"
						className={`${styles.button} ${styles['submit']}`}
					>
						Create
					</button>
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
