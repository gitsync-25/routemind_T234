"use client";

import dynamic from "next/dynamic";

const TrackingLeafletMap = dynamic(
  () => import("./TrackingLeafletMap"),
  { ssr: false }
);

export default function LiveMap() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6 h-[600px]">
      <h2 className="text-2xl font-bold text-white mb-6">
        Live Vehicle Route
      </h2>

      <div className="h-[500px] rounded-xl overflow-hidden">
        <TrackingLeafletMap />
      </div>
    </div>
  );
}