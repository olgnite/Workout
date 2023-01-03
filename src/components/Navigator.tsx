import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NewWorkout from "../pages/NewWorkout/NewWorkout";
import Auth from "../pages/Auth/Auth";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NewExercise from "../pages/NewExercise/NewExercise";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Workout from "../pages/Workout/Workout";
import ListWorkouts from "../pages/ListWorkouts/ListWorkouts";

const Navigator = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>}/>
				<Route path='/new-workout' element={<PrivateRoute><NewWorkout/></PrivateRoute>}/>
				<Route path='/auth' element={<Auth/>}/>
				<Route path='/register' element={<RegisterPage/>}/>
				<Route path='/new-exercise' element={<PrivateRoute><NewExercise/></PrivateRoute>}/>
				<Route path='/profile' element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
				<Route path='/workouts/exercises/:id' element={<PrivateRoute><Workout/></PrivateRoute>}/>
				<Route path='/workouts' element={<PrivateRoute><ListWorkouts/></PrivateRoute>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default Navigator;
