import { MultiValue, SingleValue } from "react-select";

export interface IUser {
    email?: string;
    username?: string;
    password?: string;
}

export interface IWorkout {
	name: string;
	exerciseNames: IOption[];
}

export interface ICounter {
    minutes: number;
    workouts: number;
    kgs: number;
	type?: string;
}

export interface IExercise {
	id?: number;
    name: string;
    times: string;
	exercise?: string;
}

export interface IOption {
	value?: number;
	label?: string;
}
