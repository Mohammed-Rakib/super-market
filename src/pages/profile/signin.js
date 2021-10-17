import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleSignin from "./googleSignin";
import useFirebase from "../../firebase/useFirebase";
import { useHistory, useLocation } from "react-router-dom";

const Signin = () => {
  const { logInWithEmailAndPassword, error, setError, setCurrentUser } =
    useFirebase();

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // import useForm from react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        setCurrentUser(result.user);
        history.replace(from);
        setError(null);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className=" col-lg-6 col-md-8 col-12 px-5 py-4">
            <h1 className="text-gray-500 md:text-4xl text-2xl">Sign in</h1>
            <p>
              Don't have an account?
              <Link
                to="/signup"
                className="text-green-600 font-semibold hover:text-green-900"
              >
                Register
              </Link>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ maxWidth: "400px" }}
            >
              <input
                {...register("email", {
                  required: true,
                })}
                className=" focus:outline-none w-100 border p-3 rounded my-3 border-green-400"
                placeholder="Email"
                autoComplete="off"
                name="email"
                type="email"
              />
              <span className="text-red-500 text-sm">
                {errors.email?.type === "required" && "email is required"}
              </span>
              <input
                {...register("password", {
                  pattern: /^(?=.{8,})/,
                  required: true,
                })}
                className=" focus:outline-none w-100 border p-3 rounded my-3 border-green-400"
                placeholder="Password"
                autoComplete="off"
                name="password"
              />
              <span className="text-red-500 text-sm">
                {errors.password?.type === "required" &&
                  "password is required && must be eight characters or longer"}
              </span>
              <span className="text-red-500 text-sm">
                {errors.password?.type === "pattern" &&
                  "password  must be eight characters or longer"}
              </span>
              <span className="text-red-500 text-sm">
                {error !== null && "user doesn't exist"}
              </span>

              <button
                type="submit"
                className="block bg-green-400 p-3 mt-4 rounded"
              >
                Signin
              </button>
            </form>
            <p className="text-gray-300 my-4">----------- or ------------</p>
            <GoogleSignin />
          </div>
          <div className="col-lg-6 lg:block hidden">
            <img
              src="https://i.ibb.co/S5886gf/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
