import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const userSignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (updatedUserData) =>{
    return updateProfile(auth.currentUser, updatedUserData)
  }

  const userLogout = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(user);

  const AuthValues = {
    user,
    setUser,
    userSignUp,
    userLogin,
    userLogout,
    loading,
    updateUser
  };

  return <AuthContext value={AuthValues}>{children}</AuthContext>;
};

export default AuthProvider;
