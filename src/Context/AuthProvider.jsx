import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

// auth context create
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // user register function
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user authentication login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   using google account login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  //   update user profile info
  const userInfoUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   observer

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // jwt set in localStorage
      if (currentUser?.email) {
        axios
          .post("https://sports-haven-backend.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      } else {
        // remove to when user not found
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  // auth info
  const authInfo = {
    user,
    loading,
    setLoading,
    userRegister,
    userLogin,
    userInfoUpdate,
    googleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
