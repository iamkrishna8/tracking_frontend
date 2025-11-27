import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Search, Clock, X, MapPin } from "lucide-react";

// Marker icon
const deviceIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -45],
});

function ChangeMapView({ coords }) {
  const map = useMap();
  if (coords) map.setView(coords, 13);
  return null;
}

export default function DeviceMap() {
  const [devicePosition, setDevicePosition] = useState([28.6139, 77.209]);
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}`
      );

      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        const coords = [parseFloat(lat), parseFloat(lon)];

        setDevicePosition(coords);

        // Save to recent history
        setHistory((prev) => [
          { name: display_name, coords },
          ...prev.filter((h) => h.name !== display_name).slice(0, 4),
        ]);
      }

      setSearchQuery("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-full h-screen relative">
      {/* Floating Sidebar (Google Maps Style) */}
      <div className="absolute top-4 left-4 w-[360px] bg-white rounded-2xl shadow-xl z-[1000] p-4 max-h-[85vh] overflow-y-auto">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <Search className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-transparent px-3 text-sm outline-none"
          />

          {searchQuery && (
            <X
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500"
            />
          )}
        </div>

        {/* Recent Searches Title */}
        <h3 className="mt-4 mb-1 text-gray-700 font-semibold">Recent</h3>

        {/* Recent List */}
        {history.length === 0 ? (
          <p className="text-gray-400 text-sm">No recent searches</p>
        ) : (
          <div className="flex flex-col gap-2">
            {history.map((item, index) => (
              <div
                key={index}
                onClick={() => setDevicePosition(item.coords)}
                className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-xl cursor-pointer border border-gray-200 transition"
              >
                <Clock className="w-5 h-5 text-gray-500" />

                <div className="flex-1 px-3">
                  <p className="text-gray-800 text-sm font-medium line-clamp-1">
                    {item.name}
                  </p>
                </div>

                <X
                  className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHistory((prev) => prev.filter((_, i) => i !== index));
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MAP */}
      <MapContainer
        center={devicePosition}
        zoom={13}
        scrollWheelZoom
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />

        <Marker position={devicePosition} icon={deviceIcon}>
          <Popup>
            <strong>Selected Location</strong>
            <br />
            Latitude: {devicePosition[0]}
            <br />
            Longitude: {devicePosition[1]}
          </Popup>
        </Marker>

        <ChangeMapView coords={devicePosition} />
      </MapContainer>
    </div>
  );
}
