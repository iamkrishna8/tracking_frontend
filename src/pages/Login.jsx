import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateto = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://tracking-backend-8.onrender.com/api/v1/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Login Successful");
      console.log(data);
      setTimeout(() => {
        navigateto("/");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Added pt-10 for spacing */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 pt-20">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
              Map Mate
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <Mail className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <Lock className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full outline-none"
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="/reset-password-otp"
                  className="text-sm text-indigo-600 font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-indigo-500 transition shadow-md"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-5 text-sm text-slate-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
