import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppData } from "../context/AppContext"


const ProtectedRoutes = () => {
  const { isAuth, user, loading } = useAppData();
  const location = useLocation();

  if (loading) return null;

  // 🔐 not logged in
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.role && location.pathname !== "/select-role") {
    return <Navigate to="/select-role" replace />;
  }

  // ❗ role already selected → block select-role
  if (user?.role && location.pathname === "/select-role") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes