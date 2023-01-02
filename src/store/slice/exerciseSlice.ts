import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise } from "../../types/interfaces";


interface IExerciseState {
	exercises: IExercise[];
	error: string | null;
	isSuccess: boolean;
}

export const initialState: IExerciseState = {
	exercises: [],
	error: null,
	isSuccess: false
}

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {
		exerciseLoadingSuccess(state) {
			state.isSuccess = true;
		},
		exercisesFetchingSuccess(state, action: PayloadAction<IExercise[]>) {
			state.exercises = action.payload;
			state.isSuccess = false;
		},
		exerciseAddingSuccess(state, action: PayloadAction<IExercise>) {
			state.exercises.push(action.payload);
		},
		exercisesFetchingError(state, action: PayloadAction<Error>) {
			state.error = action.payload.message;
			state.isSuccess = false;
		}
	}
})

export default exerciseSlice.reducer;
