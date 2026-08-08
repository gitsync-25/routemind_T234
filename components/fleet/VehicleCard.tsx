"use client";

import {
  Truck,
  Fuel,
  Activity,
  MapPinned,
} from "lucide-react";

type Vehicle = {
  id: string;
  driver: string;
  fuel: number;
  status: string;
};

interface VehicleCardProps {
  vehicle?: Vehicle;
}

export default function VehicleCard({
  vehicle,
}: VehicleCardProps) {
  const data = vehicle ?? {
    id: "TRK-204",
    driver: "Rahul Sharma",
    fuel: 76,
    status: "Active",
  };

  const health =
    data.status === "Maintenance"
      ? "Needs Attention"
      : "Excellent";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/10 p-3">
            <Truck className="text-cyan-400" />
          </div>

          <div>
            <h3 className="font-bold text-white">
              {data.id}
            </h3>

            <p className="text-sm text-gray-400">
              {data.driver}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs ${
            data.status === "Maintenance"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {data.status}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <Info
          icon={<Fuel size={16} />}
          title="Fuel"
          value={`${data.fuel}%`}
        />

        <Info
          icon={<Activity size={16} />}
          title="Health"
          value={health}
        />

        <Info
          icon={<MapPinned size={16} />}
          title="Route"
          value="Delhi → Noida"
        />
      </div>
    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-gray-400">
        {icon}
        <span>{title}</span>
      </div>

      <span className="text-white">
        {value}
      </span>
    </div>
  );
}   