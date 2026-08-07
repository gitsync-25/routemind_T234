import {
  Truck,
  Gauge,
  Fuel,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function LiveFleetCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Truck className="text-cyan-400" />

          <div>
            <h3 className="text-lg font-bold text-white">
              Truck TRK-204
            </h3>

            <p className="text-sm text-gray-400">
              Driver : John Doe
            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
          Online
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="rounded-xl bg-[#0F1115] p-3">

          <div className="flex items-center gap-2 text-gray-400">

            <Gauge size={16} />

            Speed

          </div>

          <h2 className="text-cyan-400 text-xl font-bold mt-2">
            62 km/h
          </h2>

        </div>

        <div className="rounded-xl bg-[#0F1115] p-3">

          <div className="flex items-center gap-2 text-gray-400">

            <Fuel size={16} />

            Fuel

          </div>

          <h2 className="text-cyan-400 text-xl font-bold mt-2">
            76%
          </h2>

        </div>

        <div className="rounded-xl bg-[#0F1115] p-3">

          <div className="flex items-center gap-2 text-gray-400">

            <Clock3 size={16} />

            ETA

          </div>

          <h2 className="text-cyan-400 text-xl font-bold mt-2">
            14 mins
          </h2>

        </div>

        <div className="rounded-xl bg-[#0F1115] p-3">

          <div className="flex items-center gap-2 text-gray-400">

            <CheckCircle2 size={16} />

            Status

          </div>

          <h2 className="text-green-400 text-xl font-bold mt-2">
            Delivering
          </h2>

        </div>

      </div>

    </div>
  );
}