import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { regularEmail } from "../../components/constData";
import Error from "../../components/Error/Error";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { register as registerUser } from "../../store/actionCreators";
import { IUser } from "../../types/interfaces";
import styles from './RegisterPage.module.scss';

const RegisterPage: FC = () => {
	const {register, handleSubmit, reset, formState: {errors}} = useForm<IUser>();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
		dispatch(registerUser(data));
		navigate('/');
		reset();
	}

	return (
		<div className={styles.wrapperRoot}>
			<div className="wrapper-inner-page">
				<h1 style={{marginBottom: "23px"}}>Регистрация</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={styles.input}
						type="text"
						placeholder="Enter Email"
						{...register('email',
							{
								required: "Email обязательное поле",
								pattern: {
									value: regularEmail,
									message: 'Введите корректный email'
								}
							})}
					/>
					<Error error={errors?.email} errorMessage={errors.email?.message}/>
					<input
						className={styles.input}
						type="text"
						placeholder="Enter username"
						{...register('username',
							{
								required: "Username обязательное поле",
								minLength: {
									value: 5,
									message: `Минимальная длина имени ${5} символа`
								}
							})}
					/>
					<Error error={errors?.username} errorMessage={errors.username?.message}/>
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
					<div className={styles.wrapper}>
						<button
							type="submit"
							className={`${styles.button} ${styles['submit']}`}
							style={{
								textAlign: 'center',
								width: '100%',
								marginBottom: "23px",
								backgroundColor: "#29478c"
							}}
						>
							Зарегистрироваться
						</button>
					</div>
					<div className={styles.wrapper}>
						<Link
							type="button"
							className={`${styles.button} ${styles['submit']}`}
							style={{textAlign: 'center', width: '100%'}}
							to={'/auth'}
						>
							Войти
						</Link>
					</div>
				</form>
			</div>
		</div>);
};

export default RegisterPage;
