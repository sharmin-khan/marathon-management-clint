import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

 const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      // console.log("user in the auth state change", user);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    logInUser,
    logoutUser,
    googleLogin
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
