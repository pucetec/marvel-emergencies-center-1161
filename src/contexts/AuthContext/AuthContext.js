import React, { createContext, useContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error);
    }
  };

  const createUserWithEmailAndPasswordHandler = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  };
  const signInWithEmailAndPasswordHandler = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  };

  const signOutUser = () => {
    signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  }, []);
  
  return (
    <AuthContext.Provider
      value={{ currentUser, signInWithGoogle, signOutUser, signInWithEmailAndPasswordHandler, createUserWithEmailAndPasswordHandler }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}