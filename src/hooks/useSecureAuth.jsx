import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// base url
const secureAuth = axios.create({
  baseURL: "https://sports-haven-backend.vercel.app/",
});

// access token send to server and secure to apis
const useSecureAuth = () => {
  const { logOut, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    secureAuth.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    secureAuth.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          await logOut();
          setLoading(false);
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );
  }, [logOut, navigate]);

  return { secureAuth };
};

export default useSecureAuth;
