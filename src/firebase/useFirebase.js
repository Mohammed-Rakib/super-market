import { useEffect, useState } from "react";
import initializeAuthentication from "./firebaseInitialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  // google sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  // get currentUser
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  // sign out
  const logOut = () => {
    signOut(auth).then(() => {
      setCurrentUser(null);
    });
  };

  return {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
