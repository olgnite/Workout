import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import Layout from "../../components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import bgImage from "../../images/auth-bg.png";
import { login } from "../../store/actionCreators";
import { IUser } from "../../types/interfaces";
import styles from './Auth.module.scss';


const Auth: FC = () => {
	const {register, handleSubmit, reset, formState: {errors}} = useForm<IUser>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const isAuth = useAppSelector(state => state.auth.isAuth);

	const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
		dispatch(login(data));
		navigate('/');
		reset();
	};

	return (
		<>
			<Layout bgImage={bgImage} heading="Auth || Register"/>
			<div className="wrapper-inner-page">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={styles.input}
						type="text"
						id="email"
						placeholder="Enter Email"
						{...register('email',
							{
								required: "Email обязательное поле",
								pattern: {
									value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
									message: 'Введите корректный email'
								}
							})}
					/>
					<Error error={errors?.email} errorMessage={errors.email?.message}/>
					<input
						className={styles.input}
						type="password"
						placeholder="Enter password"
						{...register('password',
							{
								required: 'Password обязательное поле',
								minLength: {
									value: 8,
									message: `Минимальная длина пароля ${8} символов`
								}
							})}
					/>
					<Error error={errors?.password} errorMessage={errors.password?.message}/>
					<div className={styles.wrapperButtons}>
						<div className={styles.wrapper}>
							<button
								type="submit"
								className={`${styles.button} ${styles['submit']}`}
								onClick={() => setIsLoading(true)}
							>
								Войти
							</button>
						</div>
						<div>
							<Link
								className={`${styles.button} ${styles['submit']}`}
								to={"/register"}>
								Регистрация
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;

