"use client";

import React, { useState } from "react";
import { SystemAlert } from "@/lib/types";
import {
  AlertTriangle,
  AlertCircle,
  Cloud,
  Info,
  X,
} from "lucide-react";

interface AlertsPanelProps {
  alerts: SystemAlert[];
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({
  alerts: initialAlerts,
}) => {
  const [alerts, setAlerts] = useState<SystemAlert[]>(initialAlerts);

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const getAlertIcon = (severity: SystemAlert["severity"]) => {
    switch (severity) {
      case "CRITICAL":
        return (
          <AlertCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
        );

      case "WARNING":
        return (
          <Cloud className="w-4 h-4 text-tertiary-container shrink-0 mt-0.5" />
        );

      case "INFO":
        return (
          <Info className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
        );

      default:
        return (
          <AlertTriangle className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
        );
    }
  };

  const getSeverityBadge = (severity: SystemAlert["severity"]) => {
    switch (severity) {
      case "CRITICAL":
        return "text-error";
      case "WARNING":
        return "text-tertiary-container";
      case "INFO":
        return "text-primary-container";
      default:
        return "text-text-muted";
    }
  };

  return (
    <div className="glass-card rounded-xl flex flex-col bg-surface-container-lowest">
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-error" />
          <span className="font-headline-md text-[18px] font-bold">
            System Alerts
          </span>
        </div>

        <span className="text-xs font-mono text-text-muted">
          {alerts.length} Active Alerts
        </span>
      </div>

      {/* Alert List */}
      <div className="p-4 space-y-3 flex-1 overflow-y-auto max-h-[380px]">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex gap-3 items-start border-b border-white/5 pb-3 last:border-b-0 hover:bg-white/[0.02] p-2 rounded-lg transition-colors group relative"
            >
              {getAlertIcon(alert.severity)}

              <div className="flex-1 pr-6">
                <div
                  className={`font-mono text-[10px] font-semibold mb-1 uppercase tracking-wider ${getSeverityBadge(
                    alert.severity
                  )}`}
                >
                  {alert.severity} • {alert.timeAgo}
                </div>

                <div className="font-sans text-xs md:text-sm text-on-surface leading-relaxed">
                  {alert.message}
                </div>
              </div>

              <button
                onClick={() => dismissAlert(alert.id)}
                className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-on-surface p-1 transition-opacity absolute top-2 right-2"
                title="Dismiss Alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-text-muted font-mono text-xs">
            All system services are operational. No alerts active.
          </div>
        )}
      </div>
    </div>
  );
};