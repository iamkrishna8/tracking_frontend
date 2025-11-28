import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Function extracts error message with full fallback handling
  const getErrorMessage = (error) => {
    if (error.response) {
      return (
        error.response.data?.message ||
        error.response.data?.error ||
        error.response.data?.errors?.[0]?.msg || // validator / zod
        error.response.data?.errors?.[0] ||
        "Something went wrong"
      );
    }
    return "Network Error: Server not reachable";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CLIENT-SIDE VALIDATION (Instant user feedback)
    if (!name || !email || !password || !confirmPassword) {
      return toast.error("All fields are required");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do NOT match");
    }

    try {
      const { data } = await axios.post(
        "https://tracking-backend-8.onrender.com/api/v1/users/signup",
        { name, email, password, confirmPassword },
        { withCredentials: true }
      );

      toast.success("User Registered Successfully!");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 pt-10">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-md">
              Map Mate
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <User className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <Mail className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <Lock className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Confirm Password
              </label>

              <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <Lock className="w-5 h-5 text-indigo-600 mr-2" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-indigo-500 transition shadow-md"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-5 text-sm text-slate-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
