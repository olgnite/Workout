import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import authReducer from './slice/authSlice';
import counterReducer from './slice/counterSlice';
import exerciseReducer from './slice/exerciseSlice';
import workoutReducer from './slice/workoutSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
	exercise: exerciseReducer,
	workout: workoutReducer
})

export const storeConfig = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof storeConfig;
export type AppDispatch = typeof storeConfig.dispatch

