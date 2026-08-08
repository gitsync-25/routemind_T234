import {
  Truck,
  CheckCircle2,
  Wrench,
  Fuel,
} from "lucide-react";

const stats = [
  {
    title: "Total Fleet",
    value: "24",
    icon: Truck,
    color: "text-cyan-400",
  },
  {
    title: "Active",
    value: "21",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "Maintenance",
    value: "3",
    icon: Wrench,
    color: "text-orange-400",
  },
  {
    title: "Avg Fuel",
    value: "18.6 km/L",
    icon: Fuel,
    color: "text-yellow-400",
  },
];

export default function FleetAnalytics() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Fleet Analytics
        </h2>

        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
          Live
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-[#0F1115] border border-white/5 p-5 hover:border-cyan-500/20 transition"
            >

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  {item.title}
                </p>

                <Icon className={item.color} size={22} />

              </div>

              <h2 className={`mt-5 text-3xl font-bold ${item.color}`}>
                {item.value}
              </h2>

            </div>
          );
        })}

      </div>

    </div>
  );
}