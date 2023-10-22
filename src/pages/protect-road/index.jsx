import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
    const userName = JSON.parse(localStorage.getItem('userName'))
    if (!userName) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
}