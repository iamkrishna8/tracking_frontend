import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                alt="Tracking system"
                className="w-full h-80 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Content */}
            <div>
              {/* <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                About Us
              </h2> */}

              <h3 className="mt-3 text-3xl font-semibold text-gray-900">
                Smart Tracking Solutions for a Safer, Connected World
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                We specialize in advanced GPS tracking devices and real-time
                monitoring solutions designed to protect assets, vehicles, and
                people. Our technology combines precision hardware with
                intelligent cloud dashboards to deliver accurate location
                insights anytime, anywhere.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From fleet management to personal safety devices, we build
                secure and reliable systems trusted by businesses, logistics
                companies, and individuals around the world.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">50K+</p>
                  <p className="text-sm text-gray-500">Devices Active</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">99.7%</p>
                  <p className="text-sm text-gray-500">Tracking Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">120+</p>
                  <p className="text-sm text-gray-500">Cities Covered</p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
