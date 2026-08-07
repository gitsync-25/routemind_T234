"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapVehicleMarker } from "@/lib/types";
import { Crosshair, Filter, Maximize2, Minimize2, Navigation, AlertCircle } from "lucide-react";

interface MapSectionProps {
  markers: MapVehicleMarker[];
}

export const MapSection: React.FC<MapSectionProps> = ({ markers }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<MapVehicleMarker | null>(null);
  const [filterActiveOnly, setFilterActiveOnly] = useState(false);

  const displayedMarkers = filterActiveOnly
    ? markers.filter((m) => m.status === "active")
    : markers;

  return (
    <div
      className={`
        glass-card rounded-xl overflow-hidden relative border-gradient-start border flex flex-col transition-all duration-300
        ${
          isFullscreen
            ? "fixed inset-4 z-50 h-[calc(100vh-2rem)] bg-background/95 shadow-2xl"
            : "min-h-[420px] h-full"
        }
      `}
    >
      {/* Header Bar */}
      <div className="p-4 border-b border-white/5 flex justify-between items-center bg-surface-container-lowest/70 z-10 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <Crosshair className="w-5 h-5 text-primary-container animate-spin-slow" />
          <span className="font-display text-lg font-bold text-on-surface">
            Live Global Tracking
          </span>
          <span className="bg-primary-container/10 text-primary-fixed border border-primary-container/30 px-2 py-0.5 rounded text-[10px] font-mono">
            {displayedMarkers.length} Active Fleet Units
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilterActiveOnly(!filterActiveOnly)}
            className={`
              p-2 rounded text-text-muted hover:text-on-surface border transition-colors flex items-center gap-1.5 text-xs font-mono
              ${filterActiveOnly ? "bg-primary-container/20 border-primary-container text-primary-fixed" : "bg-surface-variant border-white/5"}
            `}
            title="Filter Active Vehicles"
          >
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">
              {filterActiveOnly ? "Active Only" : "All Vehicles"}
            </span>
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-surface-variant p-2 rounded text-text-muted hover:text-on-surface border border-white/5 transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Map Content Viewport */}
      <div className="flex-1 relative bg-surface-container-lowest overflow-hidden min-h-[350px]">
        {/* Map Background Graphic */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ejfa8YaNh2G2Aex8Obj2uhj-3Ws8fcONyo1QV1tx_nsCGbyOKDR7bHkzzfaZYOXwH9fD7kC0s9uArA4lt1SLl1Dc28ih9WQEWf-0X9e45ij-Y2b-xtsgPFe-S7dqNLmAy0j3lYEok4zc5PBqc70IM3WGcHzTdFSfIQ_cvJao3hDGi-PefUhBCfjZMo-hA-4ZRP5haTFH96b87Fkd4Sr-WkOO2VrT8MDcAhAj5mpqq8SOCSVH6QfIvw"
            alt="Futuristic New York City GIS Map"
            fill
            sizes="(max-width: 1200px) 100vw, 66vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Dynamic Route SVG Curves */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M25,33 C40,40 50,20 66,50"
            fill="none"
            stroke="rgba(0, 229, 255, 0.6)"
            strokeDasharray="2,2"
            strokeWidth="0.8"
            className="animate-pulse"
          />
          <path
            d="M66,50 C75,65 50,75 42,72"
            fill="none"
            stroke="rgba(182, 196, 255, 0.4)"
            strokeDasharray="3,3"
            strokeWidth="0.6"
          />
        </svg>

        {/* Interactive Map Vehicle Pins */}
        {displayedMarkers.map((marker) => (
          <div
            key={marker.id}
            style={{ top: marker.topPercent, left: marker.leftPercent }}
            className="absolute flex flex-col items-center z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
            onClick={() =>
              setSelectedMarker(selectedMarker?.id === marker.id ? null : marker)
            }
          >
            <div
              className={`
                w-3.5 h-3.5 rounded-full pulse-dot shadow-lg
                ${
                  marker.color === "primary"
                    ? "bg-primary-container shadow-primary-container/50"
                    : marker.color === "secondary"
                    ? "bg-secondary-container shadow-secondary-container/50"
                    : "bg-error shadow-error/50"
                }
              `}
            />

            <div className="mt-2 glass-card px-2.5 py-1 rounded font-mono text-[11px] text-primary-fixed border-primary-container/30 border bg-surface-container-lowest/80 backdrop-blur-md shadow-lg flex items-center gap-1">
              <Navigation className="w-3 h-3 text-primary-container rotate-45" />
              <span>{marker.name}</span>
            </div>
          </div>
        ))}

        {/* Selected Marker Detail Modal / Tooltip */}
        {selectedMarker && (
          <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 border border-primary-container/40 p-4 rounded-xl shadow-2xl z-30 max-w-xs backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-display font-bold text-sm text-on-surface">
                  {selectedMarker.name}
                </h4>
                <p className="text-xs text-text-muted font-mono">
                  Driver: {selectedMarker.driver}
                </p>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="text-text-muted hover:text-on-surface text-xs"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-white/10">
              <div>
                <span className="text-text-muted block text-[10px]">LOCATION</span>
                <span className="text-primary-fixed font-semibold">
                  {selectedMarker.locationName}
                </span>
              </div>
              <div>
                <span className="text-text-muted block text-[10px]">SPEED</span>
                <span className="text-primary-container font-semibold">
                  {selectedMarker.speed}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
