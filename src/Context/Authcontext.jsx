import React, { useEffect, useState } from "react";
import { Authprovider } from "./Provider";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../AllKey/firebase.init"

const googleProvider = new GoogleAuthProvider();

const Authcontext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password login
const loginUser = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

// logout
const logoutUser = () => {
  setLoading(true);
  return signOut(auth);
};


  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // update profile
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userinfo = {
    user,
    loading,
    createUser,
    logoutUser,
    loginUser,
    googleLogin,
    updateUser,
  };

  return (
    <div>
      <Authprovider value={userinfo}>{children}</Authprovider>
    </div>
  );
};

export default Authcontext;
