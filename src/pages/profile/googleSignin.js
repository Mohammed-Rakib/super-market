import React from "react";
import { FcGoogle } from "react-icons/fc";
import useFirebase from "../../firebase/useFirebase";

const GoogleSignin = () => {
  const { signInWithGoogle, setCurrentUser } = useFirebase();
  const googleSigninHandler = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <button
        onClick={googleSigninHandler}
        className="flex bg-green-200 px-3 py-2 rounded justify-between"
      >
        <FcGoogle className="text-2xl mr-2" /> Continue with Google
      </button>
    </>
  );
};

export default GoogleSignin;
