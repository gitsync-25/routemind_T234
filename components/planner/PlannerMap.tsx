import {
  MapPinned,
  MapPin,
  Truck,
  Flag,
  Navigation,
} from "lucide-react";

export default function PlannerMap() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <MapPinned className="w-6 h-6 text-cyan-400" />

          <h2 className="text-2xl font-bold text-white">
            Route Preview
          </h2>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
          Live Preview
        </span>

      </div>

      {/* Map Placeholder */}

      <div className="h-[420px] rounded-xl border border-dashed border-cyan-500/30 bg-[#0F1115] flex items-center justify-center">

        <div className="w-full px-20">

          <div className="flex justify-between items-center">

            <div className="flex flex-col items-center">

              <MapPin className="w-10 h-10 text-green-400" />

              <span className="mt-2 text-white">
                Pickup
              </span>

            </div>

            <Navigation className="text-cyan-400 w-10 h-10 animate-pulse" />

            <div className="flex flex-col items-center">

              <Truck className="w-10 h-10 text-yellow-400" />

              <span className="mt-2 text-white">
                Vehicle
              </span>

            </div>

            <Navigation className="text-cyan-400 w-10 h-10 animate-pulse" />

            <div className="flex flex-col items-center">

              <Flag className="w-10 h-10 text-red-400" />

              <span className="mt-2 text-white">
                Destination
              </span>

            </div>

          </div>

          <div className="mt-16">

            <div className="h-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-green-400"></div>

          </div>

          <p className="mt-8 text-center text-gray-400">

            Interactive Leaflet Map will be integrated in Phase 2

          </p>

        </div>

      </div>

    </div>
  );
}