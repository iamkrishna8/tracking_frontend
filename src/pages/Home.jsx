import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homemap from "../components/Homemap";
import Testimonials from "../components/Testimonals";
import KeyFeatures from "../components/KeyFeatures";

// Use images from public folder
const images = [
  "/traffic-1.jpg",
  "/traffic-2.jpg",
  "/traffic-3.jpg",
  "/traffic-4.jpg",
  "/traffic-5.jpg",
  "/traffic-6.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative flex-1 flex items-center pt-28 pb-16 bg-white shadow-lg rounded-2xl border border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 leading-tight">
              Real-Time GPS Tracking Built for Modern Fleet Intelligence
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Monitor vehicles, assets, and devices with precise live location
              updates, smart alerts, and actionable insights — all in one
              powerful platform.
            </p>

            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Link
                to="/aboutus"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-500 transition"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="lg:w-1/2 w-full h-96 rounded-2xl shadow-xl overflow-hidden relative">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Traffic ${index}`}
                className={`absolute w-full h-full object-cover rounded-2xl shadow-xl transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- KEY FEATURES SECTION ---------------- */}
      <section className="py-16 bg-white">
        <KeyFeatures />
      </section>

      {/* ---------------- REAL-TIME MAP PREVIEW ---------------- */}
      <section className="bg-gradient-to-b from-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Real-Time Map Preview
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Explore how our live tracking system visualizes real-time movement
            with smooth map interaction, accurate positioning, and device-level
            markers.
          </p>

          <div className="rounded-2xl shadow-lg border border-indigo-200 overflow-hidden h-[450px] relative z-10 mt-6 bg-white">
            <Homemap />
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}
