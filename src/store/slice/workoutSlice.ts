import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOption, IWorkout } from "../../types/interfaces";


export interface IWorkoutState {
	name: string;
	exerciseNames: IOption[];
	workouts: IWorkout[];
	minutes: string;
	seconds: string;
	isCompletedTime?: boolean;
	isSuccess?: boolean;
}
// Omit | Pick | ReturnType 
const initialState: IWorkoutState = {
	name: '',
	exerciseNames: [],
	workouts: [],
	minutes: '',
	seconds: '',
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
			state.minutes = action.payload.minutes;
			state.seconds = action.payload.seconds;
		},
		workoutsFetchingSuccess(state, action: PayloadAction<IWorkoutState[]>) {
			state.workouts = action.payload;
			state.isSuccess = false;
		}
	}
})

export default workoutSlice.reducer;
