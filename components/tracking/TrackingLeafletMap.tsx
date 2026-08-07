"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";

const truckIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const route = [
  [28.6139, 77.2090], // Delhi
  [28.5355, 77.3910], // Noida
];

export default function TrackingLeafletMap() {
  return (
    <MapContainer
      center={[28.58, 77.30]}
      zoom={11}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[28.6139, 77.2090]} icon={truckIcon}>
        <Popup>Warehouse</Popup>
      </Marker>

      <Marker position={[28.5355, 77.3910]} icon={truckIcon}>
        <Popup>Customer</Popup>
      </Marker>

      <Polyline positions={route} color="cyan" />
    </MapContainer>
  );
}