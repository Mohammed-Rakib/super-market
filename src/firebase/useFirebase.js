import { useEffect, useState } from "react";
import initializeAuthentication from "./firebaseInitialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const history = useHistory();

  // create account with email and password
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // observer user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe;
  }, [auth]);

  // sign out
  const logOut = () => {
    signOut(auth).then(() => {
      setCurrentUser(null);
      history.push("/");
    });
  };

  return {
    currentUser,
    setCurrentUser,
    error,
    setError,
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
