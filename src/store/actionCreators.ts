import axios from '../axios';
import { IExercise, IUser, IWorkout } from '../types/interfaces';
import { AppDispatch } from './index';
import { authSlice, IAuthStatePayload } from './slice/authSlice';
import { exerciseSlice } from "./slice/exerciseSlice";
import { IWorkoutState, workoutSlice } from "./slice/workoutSlice";


export const login = (data: IUser) => {
	return async (dispatch: AppDispatch) => {
		const response = await axios.post<IAuthStatePayload>('login', data);
		try {
			dispatch(authSlice.actions.loginSuccess(response.data));
		} catch (error) {
			console.log((error as Error));
		}
	}
}

export const register = (data: IUser) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post<IAuthStatePayload>('register', data);
			dispatch(authSlice.actions.loginSuccess(response.data));
		} catch (error) {
			console.log((error as Error));
		}
	}
}

export const addExercise = (token: string, data: IExercise) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post<IExercise>('exercises', data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			dispatch(exerciseSlice.actions.exerciseAddingSuccess(response.data));
		} catch (error) {
			console.log((error as Error).message);
		}
	}
}

export const fetchExercises = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(exerciseSlice.actions.exercisesLoadingSuccess());
			const response = await axios.get<IExercise[]>('exercises')
			dispatch(exerciseSlice.actions.exercisesFetchingSuccess(response.data));
		} catch (error) {
			dispatch(exerciseSlice.actions.exercisesFetchingError(error as Error));
		}
	}
}

export const fetchExerciseById = (id: string = '') => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(exerciseSlice.actions.exercisesLoadingSuccess());
			const response = await axios.get<IExercise>(`exercises/${id}`);
			dispatch(exerciseSlice.actions.exerciseFetchingById(response.data));
		} catch (error) {
			dispatch(exerciseSlice.actions.exercisesFetchingError(error as Error));
		}
	}
}

export const addWorkout = (token: string, data: IWorkout) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post<IWorkoutState>('workouts', data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			dispatch(workoutSlice.actions.workoutAddingSuccess(response.data));
		} catch (error) {
			console.log((error as Error).message);
		}
	}
}

export const fetchWorkouts = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(workoutSlice.actions.workoutsLoadingSuccess());
			const response = await axios.get<IWorkoutState[]>('workouts');
			dispatch(workoutSlice.actions.workoutsFetchingSuccess(response.data));
		} catch (error) {
			console.log((error as Error).message);
		}
	}
}

export const fetchWorkoutById = (id: string = '') => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get<IWorkoutState>(`workouts/${id}`);
			dispatch(workoutSlice.actions.workoutAddingSuccess(response.data));
		} catch (error) {
			console.log((error as Error).message);
		}
	}
}

export const deleteWorkoutByTime = (workoutId: string = '') => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.delete(`workouts/${workoutId}`)
		} catch (error) {
			console.log((error as Error).message);
		}
	}
}