import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const PrivateAdmin = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, adminLoading } = useAdmin();
  const location = useLocation();
  if ((loading, adminLoading)) {
    return <Spinner />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateAdmin;
