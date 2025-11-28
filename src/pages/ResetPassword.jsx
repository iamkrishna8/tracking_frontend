import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, Hash, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const [email, setEmail] = useState(prefilledEmail);

  // const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email || !otp || !newPassword) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://tracking-backend-8.onrender.com/api/v1/users/reset-password",
        { email, otp, newpassword: newPassword }
      );

      toast.success("Password reset successfully!");

      console.log(res.data);

      // Redirect if needed
      setTimeout(() => {
        window.location.href = "/login";
      }, 1200);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-xl font-bold shadow-md">
            MapMate
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="flex items-center px-4 py-2 border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-600">
              <Mail className="w-5 h-5 text-indigo-600 mr-2" />
              <input
                type="email"
                placeholder="Registered email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* OTP */}
          <div>
            <label className="text-sm font-medium text-slate-700">OTP</label>
            <div className="flex items-center px-4 py-2 border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-600">
              <Hash className="w-5 h-5 text-indigo-600 mr-2" />
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                required
                onChange={(e) => setOtp(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              New Password
            </label>
            <div className="flex items-center px-4 py-2 border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-600">
              <Lock className="w-5 h-5 text-indigo-600 mr-2" />
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-indigo-500 transition shadow-md flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Processing...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-slate-600">
          Go back to{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
