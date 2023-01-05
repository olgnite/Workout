import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise, IOption, IWorkout } from "../../types/interfaces";


export interface IWorkoutState {
	name: string;
	exerciseNames: IOption[];
	workouts?: IWorkout[];
}

const initialState: IWorkoutState = {
	name: '',
	exerciseNames: [],
	workouts: []
}

export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		workoutAddingSuccess(state, action: PayloadAction<IWorkoutState>) {
			state.name = action.payload.name;
			state.exerciseNames = action.payload.exerciseNames;
		},
		workoutsFetchingSuccess(state, action: PayloadAction<IWorkoutState[]>) {
			state.workouts = action.payload;
		}
	}
})

export default workoutSlice.reducer;
