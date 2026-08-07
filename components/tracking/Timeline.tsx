import {
  CheckCircle2,
  Clock3,
  PackageCheck,
  Truck,
} from "lucide-react";

const events = [
  {
    time: "09:20 AM",
    title: "Vehicle Departed",
    description: "Truck left Warehouse A",
    icon: Truck,
  },
  {
    time: "09:48 AM",
    title: "Checkpoint Reached",
    description: "Vehicle crossed NH-48 Toll Plaza",
    icon: CheckCircle2,
  },
  {
    time: "10:15 AM",
    title: "Out For Delivery",
    description: "Driver heading towards customer",
    icon: Clock3,
  },
  {
    time: "ETA 10:34 AM",
    title: "Delivery Expected",
    description: "Package will arrive shortly",
    icon: PackageCheck,
  },
];

export default function Timeline() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Delivery Timeline
      </h2>

      <div className="space-y-6">

        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <div
              key={index}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">

                <div className="rounded-full bg-cyan-500/20 p-3">

                  <Icon className="text-cyan-400 w-5 h-5" />

                </div>

                {index !== events.length - 1 && (
                  <div className="w-[2px] h-10 bg-cyan-500/30 mt-2"></div>
                )}

              </div>

              <div>

                <p className="text-cyan-400 text-sm">
                  {event.time}
                </p>

                <h3 className="text-white font-semibold">
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {event.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}