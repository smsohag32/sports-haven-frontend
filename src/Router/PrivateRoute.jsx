import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <p>loading</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoute;
