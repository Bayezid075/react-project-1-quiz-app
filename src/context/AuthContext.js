import React from "react";
import { useContext } from "react";
import { useState } from "react";
import "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setUser] = useState();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //signup
  async function signup(email, password, userName) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //update profile
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });
    const user = auth.currentUser;
    setUser({
      ...user,
    });
  }
  async function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
