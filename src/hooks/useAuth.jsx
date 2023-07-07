import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
