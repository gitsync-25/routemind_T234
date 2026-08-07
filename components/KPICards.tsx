"use client";

import React from "react";
import { KPIMetric } from "@/lib/types";
import { Truck, UserCheck, Car, Leaf, TrendingUp, CheckCircle2 } from "lucide-react";

interface KPICardsProps {
  metrics: KPIMetric[];
}

export const KPICards: React.FC<KPICardsProps> = ({ metrics }) => {
  const getIcon = (iconType: KPIMetric["icon"]) => {
    switch (iconType) {
      case "shipping":
        return <Truck className="w-5 h-5 text-primary-container" />;
      case "driver":
        return <UserCheck className="w-5 h-5 text-primary-container" />;
      case "car":
        return <Car className="w-5 h-5 text-primary-container" />;
      case "fuel":
        return <Leaf className="w-5 h-5 text-primary-container" />;
      default:
        return <Truck className="w-5 h-5 text-primary-container" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
      {metrics.map((kpi) => (
        <div
          key={kpi.id}
          className={`
            p-5 rounded-xl flex flex-col gap-2 relative overflow-hidden glass-card-hover transition-all duration-300
            ${kpi.glow ? "glass-card-glow glass-card" : "glass-card"}
          `}
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
              {kpi.title}
            </span>
            {getIcon(kpi.icon)}
          </div>

          <div className="font-display text-4xl font-bold text-on-surface tracking-tight my-1">
            {kpi.value}
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            {kpi.trendUp ? (
              <span className="flex items-center gap-1 text-primary-fixed font-mono text-[11px]">
                <TrendingUp className="w-3.5 h-3.5" />
                {kpi.changeText}
              </span>
            ) : kpi.glow ? (
              <span className="flex items-center gap-1 text-primary-fixed font-mono text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {kpi.changeText}
              </span>
            ) : (
              <span className="font-mono text-[11px] text-text-muted">
                {kpi.changeText}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
