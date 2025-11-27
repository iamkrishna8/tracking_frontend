import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
        >
          MapMate
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/maps" className="hover:text-indigo-600 transition">
              Track Vehicle
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-indigo-600 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-indigo-600 transition">
              Dashboard
            </Link>
          </li>

          {/* Capsule Button Group */}
          <li>
            <div className="inline-flex rounded-full border border-indigo-600 overflow-hidden">
              <Link
                to="/login"
                className="px-4 py-2 text-indigo-600 bg-white hover:bg-indigo-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500 transition"
              >
                Sign Up
              </Link>
            </div>
          </li>
          <li className="relative group">
            <FaBell className="text-yellow-500" />
            {/* Tooltip / Notification box */}
            <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 p-3">
              <h4 className="font-semibold text-gray-800 mb-2">
                Notifications
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Vehicle A has entered the geofence.</li>
                <li>Device B battery is low.</li>
                <li>New tracking data available for Vehicle C.</li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-gray-700 hover:text-indigo-600 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-indigo-600 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>

          {/* Capsule Button Group for Mobile */}
          <div className="flex rounded-full border border-indigo-600 overflow-hidden">
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 bg-white hover:bg-indigo-50 transition text-center flex-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500 transition text-center flex-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
