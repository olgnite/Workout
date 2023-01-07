import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Auth from "../pages/Auth/Auth";
import ListWorkouts from "../pages/ListWorkouts/ListWorkouts";
import NewExercise from "../pages/NewExercise/NewExercise";
import NewWorkout from "../pages/NewWorkout/NewWorkout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Workout from "../pages/Workout/Workout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Navigator = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/new-workout' element={<PrivateRoute><NewWorkout /></PrivateRoute>} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/new-exercise' element={<PrivateRoute><NewExercise /></PrivateRoute>} />
				<Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
				<Route path='/workouts/workout/:id' element={<PrivateRoute><Workout /></PrivateRoute>} />
				<Route path='/workouts' element={<PrivateRoute><ListWorkouts /></PrivateRoute>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigator;
