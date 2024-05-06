import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { CircularProgress } from "@mui/material";

function ProtectedRoute() {
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) return <CircularProgress />;
  if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
}
export default ProtectedRoute;
