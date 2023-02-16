export interface IUser {
	email?: string;
	username?: string;
	password?: string;
}

export interface IWorkout {
	name: string;
	exerciseNames: IOption[];
	minutes?: string;
	seconds?: string;
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
