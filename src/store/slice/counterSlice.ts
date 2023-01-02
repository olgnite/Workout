import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ICounterState {
	minutes: number;
	workouts: number;
	kgs: number;
	error?: string | null;
}

const initialState: ICounterState = {
	minutes: 0,
	workouts: 0,
	kgs: 0,
	error: null,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		countersAddingSuccess(state, action: PayloadAction<ICounterState>) {
			state.minutes = action.payload.minutes;
			state.workouts = action.payload.workouts;
			state.kgs = action.payload.kgs;
		},
		countersAddingError(state, action: PayloadAction<Error>) {
			state.error = action.payload.message;
		}

	}
})

export default counterSlice.reducer;
