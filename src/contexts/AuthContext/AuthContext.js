import React, { createContext, useContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../api/firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const signInWithEmailAndPasswordHandler = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = () => {
    signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  }, []);
  
  return (
    <AuthContext.Provider
      value={{ currentUser, signInWithGoogle, signOutUser, signInWithEmailAndPasswordHandler }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}