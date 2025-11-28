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

  const navigateto = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://tracking-backend-8.onrender.com/api/v1/users/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("User Registered Succesfull");
      console.log(data);
      setTimeout(() => {
        navigateto("/login");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Added pt-10 for spacing below navbar */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 pt-10">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-md">
              Map Mate
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
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
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* EMAIL */}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
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
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-indigo-500 transition shadow-md"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-5 text-sm text-slate-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
