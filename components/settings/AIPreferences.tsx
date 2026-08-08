import {
  BrainCircuit,
  Route,
  TrafficCone,
  Fuel,
  CheckCircle2,
} from "lucide-react";

export default function AIPreferences() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-purple-500/10 p-3">
          <BrainCircuit
            className="text-purple-400"
            size={22}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Preferences
          </h2>

          <p className="text-sm text-gray-400">
            Configure RouteMind optimization capabilities.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Preference
          icon={<Route size={18} />}
          title="Auto Route Optimization"
        />

        <Preference
          icon={<TrafficCone size={18} />}
          title="Traffic Prediction"
        />

        <Preference
          icon={<Fuel size={18} />}
          title="Fuel Optimization"
        />
      </div>
    </div>
  );
}

function Preference({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0F1115] p-4">
      <div className="flex items-center gap-3 text-gray-300">
        <span className="text-gray-400">
          {icon}
        </span>

        <span>{title}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-400">
        <CheckCircle2 size={16} />
        Enabled
      </div>
    </div>
  );
}