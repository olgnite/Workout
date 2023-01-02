import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const PrivateRoute: FC<any> = ({ children }) => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const location = useLocation();

    if (!isAuth && localStorage.getItem('token') === null) {
        return <Navigate to={'/auth'} state={{ from: location }}></Navigate>
    }

    return (
        children
    )
};

export default PrivateRoute;
