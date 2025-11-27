function KeyFeatures() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Core Features
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            Everything you need for powerful, real-time tracking and fleet
            control.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Live GPS Tracking",
              "Route History & Replay",
              "Smart Alerts (Overspeed, GeoFence)",
              "Fuel & Mileage Analytics",
              "Multi-Device Dashboard",
              "Mobile App Support",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-indigo-100 bg-white shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-indigo-600">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default KeyFeatures;
