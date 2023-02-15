import { ITime } from './../../types/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOption, IWorkout } from "../../types/interfaces";


export interface IWorkoutState {
	name: string;
	exerciseNames: IOption[];
	workouts: IWorkout[];
	time: ITime;
	isCompletedTime: boolean;
	isSuccess?: boolean;
}
// Omit | Pick | ReturnType 
const initialState: IWorkoutState = {
	name: '',
	exerciseNames: [],
	workouts: [],
	time: {} as ITime,
	isCompletedTime: false,
	isSuccess: false
}

export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		workoutsLoadingSuccess(state) {
			state.isSuccess = true;
		},
		workoutAddingSuccess(state, action: PayloadAction<IWorkoutState>) {
			state.name = action.payload.name;
			state.exerciseNames = action.payload.exerciseNames;
			state.time.minutes = action.payload.time.minutes;
			state.time.seconds = action.payload.time.seconds;
		},
		workoutsFetchingSuccess(state, action: PayloadAction<IWorkoutState[]>) {
			state.workouts = action.payload;
			state.isSuccess = false;
		}
	}
})

export default workoutSlice.reducer;
