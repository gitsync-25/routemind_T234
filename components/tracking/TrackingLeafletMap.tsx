"use client";

import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import L from "leaflet";

type TrackingData = {
  lat: number;
  lng: number;
  speed: number;
  eta: string;
};

const truckIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const destination: [number, number] = [
  28.5355,
  77.3910,
];

export default function TrackingLeafletMap() {
  const [tracking, setTracking] =
    useState<TrackingData | null>(null);

  useEffect(() => {
    async function fetchTracking() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/tracking"
        );

        if (!response.ok) {
          throw new Error("Tracking API failed");
        }

        const data: TrackingData =
          await response.json();

        setTracking(data);
      } catch (error) {
        console.error(
          "Tracking API error:",
          error
        );
      }
    }

    fetchTracking();
  }, []);

  const truckPosition: [number, number] =
    tracking
      ? [tracking.lat, tracking.lng]
      : [28.6139, 77.2090];

  const route: [number, number][] = [
    truckPosition,
    destination,
  ];

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

      {/* Live Truck */}
      <Marker
        position={truckPosition}
        icon={truckIcon}
      >
        <Popup>
          <strong>Truck TRK-204</strong>
          <br />

          {tracking
            ? `Speed: ${tracking.speed} km/h`
            : "Loading tracking..."}

          <br />

          {tracking
            ? `ETA: ${tracking.eta}`
            : ""}
        </Popup>
      </Marker>

      {/* Destination */}
      <Marker
        position={destination}
        icon={truckIcon}
      >
        <Popup>
          <strong>Destination</strong>
          <br />
          Customer Address
        </Popup>
      </Marker>

      {/* Route */}
      <Polyline
        positions={route}
        pathOptions={{
          color: "#06b6d4",
          weight: 5,
        }}
      />
    </MapContainer>
  );
}