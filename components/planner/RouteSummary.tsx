import {
  Route,
  Clock3,
  Fuel,
  IndianRupee,
  TrafficCone,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export default function RouteSummary() {
  const stats = [
    {
      title: "Distance",
      value: "24.8 km",
      icon: Route,
    },
    {
      title: "ETA",
      value: "34 mins",
      icon: Clock3,
    },
    {
      title: "Fuel",
      value: "3.2 L",
      icon: Fuel,
    },
    {
      title: "Cost",
      value: "₹428",
      icon: IndianRupee,
    },
    {
      title: "Traffic",
      value: "Medium",
      icon: TrafficCone,
    },
    {
      title: "AI Score",
      value: "98%",
      icon: BrainCircuit,
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          AI Route Summary
        </h2>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
          Optimized
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-white/5 bg-[#0F1115] p-4"
            >
              <div className="flex items-center gap-2 text-gray-400">

                <Icon size={18} />

                <span className="text-sm">
                  {item.title}
                </span>

              </div>

              <h3 className="mt-3 text-2xl font-bold text-cyan-400">
                {item.value}
              </h3>

            </div>
          );
        })}

      </div>

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <h3 className="font-semibold text-cyan-400 mb-3">
          AI Recommendation
        </h3>

        <div className="space-y-2 text-sm">

          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Use NH-48 for fastest delivery
          </div>

          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Fuel consumption reduced by 12%
          </div>

          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Estimated arrival improved by 8 minutes
          </div>

        </div>

      </div>

    </div>
  );
}