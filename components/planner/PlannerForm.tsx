"use client";

import { Sparkles } from "lucide-react";
import { usePlannerContext } from "@/context/PlannerContext";

export default function PlannerForm() {
  const {
    form,
    setForm,
    loading,
    optimize,
  } = usePlannerContext();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Create Route
      </h2>

      <div className="space-y-5">
        {/* Pickup */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Pickup Location
          </label>

          <input
            type="text"
            value={form.pickup}
            onChange={(e) =>
              setForm({
                ...form,
                pickup: e.target.value,
              })
            }
            placeholder="Warehouse A"
            className="w-full rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Delivery Location
          </label>

          <input
            type="text"
            value={form.destination}
            onChange={(e) =>
              setForm({
                ...form,
                destination: e.target.value,
              })
            }
            placeholder="Customer Address"
            className="w-full rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Driver */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Driver
          </label>

          <input
            type="text"
            value={form.driver}
            onChange={(e) =>
              setForm({
                ...form,
                driver: e.target.value,
              })
            }
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Vehicle */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Vehicle
          </label>

          <input
            type="text"
            value={form.vehicle}
            onChange={(e) =>
              setForm({
                ...form,
                vehicle: e.target.value,
              })
            }
            placeholder="Truck 07"
            className="w-full rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Cargo Weight */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Cargo Weight
          </label>

          <input
            type="text"
            value={form.weight}
            onChange={(e) =>
              setForm({
                ...form,
                weight: e.target.value,
              })
            }
            placeholder="250 Kg"
            className="w-full rounded-xl border border-white/10 bg-[#0F1115] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Optimize Button */}
        <button
          type="button"
          onClick={optimize}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-bold text-black transition-all hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Sparkles className="h-5 w-5" />

          {loading ? "Optimizing..." : "Optimize Route"}
        </button>
      </div>
    </div>
  );
}