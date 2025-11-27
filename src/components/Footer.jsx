import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-indigo-600">MapMate</h2>
          <p className="text-gray-500 text-base mt-2">
            Precision tracking to keep your world moving.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-indigo-100 
                         text-gray-600 hover:text-indigo-600 transition shadow-sm"
              >
                <Icon size={20} />
              </a>
            )
          )}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} MapMate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
