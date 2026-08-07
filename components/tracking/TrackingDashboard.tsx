import LiveFleetCard from "./LiveFleetCard";
import LiveMap from "./LiveMap";
import Timeline from "./Timeline";

export default function TrackingDashboard() {
  return (
    <main className="min-h-screen bg-[#0B1120] p-6">

      <div className="mb-8">

        <h1 className="text-5xl font-bold text-white">
          Live Fleet Tracking
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor vehicles in real time.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="space-y-6">
          <LiveFleetCard />
          <LiveFleetCard />
          <LiveFleetCard />
        </div>

        <div className="lg:col-span-2">
          <LiveMap />
        </div>

      </div>

      <div className="mt-8">
        <Timeline />
      </div>

    </main>
  );
}