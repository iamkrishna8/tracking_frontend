import React, { useState } from "react";
import axios from "axios";
import { Mail, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPasswordotp = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4000/api/v1/users/send-reset-otp",
        { email }
      );

      toast.success("OTP sent to your email!");

      // Redirect to reset-password page + pass email to next page
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to send OTP. Try again."
      );
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
          Reset Your Password
        </h2>

        <p className="text-center text-gray-600 mb-6 px-4">
          Enter your registered email address below. We’ll send you a 6-digit
          OTP to verify your identity.
        </p>

        <form onSubmit={handleSendOTP} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>

            <div className="flex items-center px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <Mail className="w-5 h-5 text-indigo-600 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
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
                <Loader2 className="animate-spin w-5 h-5" />
                Sending...
              </>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-slate-600">
          Remember your password?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordotp;
