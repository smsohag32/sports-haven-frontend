import useAdmin from "../hooks/useAdmin";
import { useAuth } from "../hooks/useAuth";

const PrivateAdmin = ({ children }) => {
  const { user } = useAuth();
  const { isAdmin } = useAdmin();

  return <div></div>;
};

export default PrivateAdmin;
