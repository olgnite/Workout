import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise, IOption } from "../../types/interfaces";
import { MultiValue, SingleValue } from "react-select";


export interface IWorkoutState {
	name: string;
	exerciseNames: IOption[];
}

const initialState: IWorkoutState = {
	name: '',
	exerciseNames: []
}

export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		workoutAddingSuccess(state, action: PayloadAction<IWorkoutState>) {
			state.name = action.payload.name;
			state.exerciseNames = action.payload.exerciseNames;
		}
	}
})

export default workoutSlice.reducer;
