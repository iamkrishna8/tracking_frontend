import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    alert("Your message has been submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-indigo-100 px-4 pt-28">
        <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-xl border border-indigo-50">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-3">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have a question, suggestion, or feature request? We’d love to hear
            from you!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-500 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
