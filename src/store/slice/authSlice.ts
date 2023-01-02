import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/interfaces";


export interface IAuthStatePayload {
	user: IUser;
	username: string;
	accessToken: string;
	isAuth: boolean;
}

const initialState: IAuthStatePayload = {
	user: {} as IUser,
	username: localStorage.getItem('user') ?? '',
	accessToken: localStorage.getItem('token') ?? '',
	isAuth: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess(state, action: PayloadAction<IAuthStatePayload>) {
			state.username = action.payload.user.username ?? '';
			state.accessToken = action.payload.accessToken;
			state.isAuth = !!action.payload.accessToken;
			localStorage.setItem('token', state.accessToken);
			localStorage.setItem('user', state.username);
		},
		logout(state) {
			state.username = '';
			state.accessToken = '';
			state.isAuth = false;
			localStorage.removeItem('token');
			localStorage.removeItem('user');
		}
	}
})

export default authSlice.reducer;
