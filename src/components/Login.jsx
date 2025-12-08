import React from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import { login as authLogin } from "../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");

  const login = async (data) => {
    setError("");
    console.log("Login form submitted with data:", data);
    try {
      const session = await authService.login(data);
      console.log("Login session:", session);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("User data:", userData);
        dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  const onError = (errors) => {
    console.log("Form validation errors:", errors);
  };
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div
        className={`mx-auto w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-gray-300">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-purple-400 transition-all duration-200 hover:text-purple-300 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <p className="text-red-400 mt-8 text-center bg-red-500/20 p-3 rounded-lg border border-red-400/30">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login, onError)} className="mt-8 ">
          <div className="space-y-5">
            <Input
              label="Email: "
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Invalid email address",
                },
              })}
            />

            <Input
              type="password"
              label="Password: "
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
