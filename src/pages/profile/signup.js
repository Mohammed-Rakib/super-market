import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleSignin from "./googleSignin";
import useFirebase from "../../firebase/useFirebase";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const { signUpWithEmailAndPassword, setCurrentUser } = useFirebase();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signUpWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        history.push("/profile");
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 lg:block hidden">
            <img
              src="https://i.ibb.co/S5886gf/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile.jpg"
              alt=""
            />
          </div>
          <div className=" col-lg-6 col-md-8 col-12 px-5 py-4">
            <h1 className="text-gray-500 md:text-4xl text-2xl">
              Create an Account
            </h1>
            <p>
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-green-600 font-semibold hover:text-green-900"
              >
                Signin
              </Link>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ maxWidth: "400px" }}
            >
              <input
                {...register("username", { required: true, maxLength: 20 })}
                className=" focus:outline-none w-100 border p-3 rounded my-3 border-green-400"
                placeholder="Username"
                autoComplete="off"
                name="username"
              />
              <span className="text-red-500 text-sm">
                {errors.username?.type === "required" && "username is required"}
              </span>
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
                type="password"
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

              <button
                type="submit"
                className="block bg-green-400 p-3 mt-4 "
                style={{ borderRadius: "30px" }}
              >
                Submit & Register
              </button>
            </form>
            <p className="text-gray-300 my-4">----------- or ------------</p>
            <GoogleSignin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
