import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, Button, Logo } from "./index";
import { login } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const result = await authService.createAccount(formData);

      if (result) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(login({ userData }));
        } else {
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
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
          Create your account
        </h2>
        <p className="mt-2 text-center text-base text-gray-300">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-purple-400 transition-all duration-200 hover:text-purple-300 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <p className="text-red-400 mt-8 text-center bg-red-500/20 p-3 rounded-lg border border-red-400/30">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-5">
            <Input
              type="text"
              label="Full Name: "
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Email: "
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              type="password"
              label="Password: "
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all mt-4"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
