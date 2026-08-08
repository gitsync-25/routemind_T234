"use client";

import { useEffect, useState } from "react";

import VehicleCard from "./VehicleCard";
import FleetAnalytics from "./FleetAnalytics";
import MaintenancePanel from "./MaintenancePanel";

type Vehicle = {
  id: string;
  driver: string;
  fuel: number;
  status: string;
};

export default function FleetDashboard() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    async function fetchFleet() {
      try {
        const response = await fetch(
  "https://routemind-t234.onrender.com/fleet"
);

        if (!response.ok) {
          throw new Error("Fleet API failed");
        }

        const data: Vehicle[] = await response.json();

        setVehicles(data);
      } catch (error) {
        console.error("Fleet API error:", error);
      }
    }

    fetchFleet();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white">
          Fleet Management
        </h1>

        <p className="mt-2 text-gray-400">
          Monitor fleet health, fuel usage and maintenance.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))
          ) : (
            <>
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
            </>
          )}
        </div>

        <div className="space-y-6 lg:col-span-2">
          <FleetAnalytics />
          <MaintenancePanel />
        </div>
      </div>
    </div>
  );
}