import {
  Wrench,
  AlertTriangle,
  CalendarClock,
} from "lucide-react";

const vehicles = [
  {
    id: "TRK-204",
    issue: "Oil Change",
    due: "Tomorrow",
    status: "Medium",
  },
  {
    id: "TRK-187",
    issue: "Brake Inspection",
    due: "2 Days",
    status: "High",
  },
  {
    id: "TRK-112",
    issue: "Engine Service",
    due: "5 Days",
    status: "Low",
  },
];

export default function MaintenancePanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">

      <div className="flex items-center gap-3 mb-6">

        <Wrench className="text-orange-400" />

        <h2 className="text-2xl font-bold text-white">
          Maintenance Schedule
        </h2>

      </div>

      <div className="space-y-4">

        {vehicles.map((vehicle) => (

          <div
            key={vehicle.id}
            className="rounded-xl bg-[#0F1115] border border-white/5 p-4 flex items-center justify-between"
          >

            <div>

              <h3 className="text-white font-semibold">
                {vehicle.id}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {vehicle.issue}
              </p>

            </div>

            <div className="text-right">

              <div className="flex items-center gap-2 justify-end text-gray-400 text-sm">

                <CalendarClock size={15} />

                {vehicle.due}

              </div>

              <div className="mt-2 flex items-center gap-2 justify-end">

                <AlertTriangle
                  size={15}
                  className={
                    vehicle.status === "High"
                      ? "text-red-400"
                      : vehicle.status === "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                />

                <span className="text-sm text-white">
                  {vehicle.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}