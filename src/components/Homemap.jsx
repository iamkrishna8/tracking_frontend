import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const RealTimeMapPreview = () => {
  useEffect(() => {
    // Map Init
    const map = L.map("previewMap", {
      zoomControl: false,
    }).setView([20.5937, 78.9629], 5);

    // Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Car Icon
    const carIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      // 🚗 Clean Car Icon,
      iconSize: [45, 45],
      iconAnchor: [22, 45],
    });

    // Dummy Vehicle Path
    const path = [
      [19.076, 72.8777], // Mumbai
      [18.5204, 73.8567], // Pune
      [17.385, 78.4867], // Hyderabad
      [13.0827, 80.2707], // Chennai
    ];

    let index = 0;

    // Initial Marker
    let marker = L.marker(path[0], { icon: carIcon }).addTo(map);

    // Move marker every 2 sec
    const interval = setInterval(() => {
      index = (index + 1) % path.length;
      marker.setLatLng(path[index]);
      map.panTo(path[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-10 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Live Tracking Preview
      </h2>

      <div
        id="previewMap"
        className="w-full h-[350px] rounded-xl shadow-lg border border-gray-200"
      ></div>
    </div>
  );
};

export default RealTimeMapPreview;
