"use client";

import React, { useState } from "react";
import {
  Filter,
  Maximize2,
  Minimize2,
} from "lucide-react";

import dynamic from "next/dynamic";

const TrackingLeafletMap = dynamic(
  () => import("@/components/tracking/TrackingLeafletMap"),
  {
    ssr: false,
  }
);

interface MapSectionProps {
  markers?: any[];
}

export const MapSection: React.FC<MapSectionProps> = ({
  markers = [],
}) => {
  const [isFullscreen, setIsFullscreen] =
    useState(false);

  const [filterActiveOnly, setFilterActiveOnly] =
    useState(false);

  const activeCount = markers.filter(
    (marker) => marker.status === "active"
  ).length;

  const displayedCount = filterActiveOnly
    ? activeCount
    : markers.length;

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#161B22] transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-4 z-50 h-[calc(100vh-2rem)] shadow-2xl"
          : "h-full min-h-[420px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161B22] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10">
            <span className="text-lg text-cyan-400">
              ◎
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Live Global Tracking
            </h2>

            <span className="mt-1 inline-block rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[11px] font-mono text-cyan-400">
              {displayedCount || 3} Active Fleet Units
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setFilterActiveOnly(!filterActiveOnly)
            }
            className={`flex items-center gap-1.5 rounded border p-2 text-xs font-mono transition-colors ${
              filterActiveOnly
                ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                : "border-white/5 bg-[#0F1115] text-gray-400 hover:text-white"
            }`}
            title="Filter Active Vehicles"
          >
            <Filter className="h-4 w-4" />

            <span className="hidden sm:inline">
              {filterActiveOnly
                ? "Active Only"
                : "All Vehicles"}
            </span>
          </button>

          <button
            onClick={() =>
              setIsFullscreen(!isFullscreen)
            }
            className="rounded border border-white/5 bg-[#0F1115] p-2 text-gray-400 transition-colors hover:text-white"
            title={
              isFullscreen
                ? "Exit Fullscreen"
                : "Fullscreen View"
            }
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Real Leaflet Map */}
      <div className="relative min-h-[350px] flex-1 overflow-hidden">
        <TrackingLeafletMap />
      </div>
    </div>
  );
};