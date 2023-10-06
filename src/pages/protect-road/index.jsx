import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", bearer }) => {
console.log(bearer);
    if (!bearer) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
}