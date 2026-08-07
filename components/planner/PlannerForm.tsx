"use client";

import {
  MapPin,
  Truck,
  User,
  Package,
  Sparkles,
} from "lucide-react";

export default function PlannerForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Create Route
      </h2>

      <div className="space-y-5">

        <Input
          label="Pickup Location"
          placeholder="Warehouse A"
          icon={<MapPin className="w-5 h-5 text-cyan-400" />}
        />

        <Input
          label="Delivery Location"
          placeholder="Customer Address"
          icon={<MapPin className="w-5 h-5 text-green-400" />}
        />

        <Input
          label="Driver"
          placeholder="John Doe"
          icon={<User className="w-5 h-5 text-purple-400" />}
        />

        <Input
          label="Vehicle"
          placeholder="Truck 07"
          icon={<Truck className="w-5 h-5 text-orange-400" />}
        />

        <Input
          label="Cargo Weight"
          placeholder="250 Kg"
          icon={<Package className="w-5 h-5 text-yellow-400" />}
        />

        <button className="w-full rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Optimize Route
        </button>

      </div>

    </div>
  );
}

function Input({
  label,
  placeholder,
  icon,
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3">

        {icon}

        <input
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
        />

      </div>

    </div>
  );
}