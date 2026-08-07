"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { KPICards } from "@/components/KPICards";
import { MapSection } from "@/components/MapSection";
import { AIRecommendations } from "@/components/AIRecommendations";
import { OrdersTable } from "@/components/OrdersTable";
import { AlertsPanel } from "@/components/AlertsPanel";
import {
  initialKpis,
  initialRecommendations,
  initialOrders,
  initialAlerts,
  mapMarkers,
} from "@/lib/mock-data";
import { Sparkles, Check, X } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showOptimizationModal, setShowOptimizationModal] = useState<boolean>(false);
  const [optimizationRunning, setOptimizationRunning] = useState<boolean>(false);
  const [optimizationComplete, setOptimizationComplete] = useState<boolean>(false);

  const handleRunOptimization = () => {
    setOptimizationRunning(true);
    setTimeout(() => {
      setOptimizationRunning(false);
      setOptimizationComplete(true);
      setTimeout(() => {
        setOptimizationComplete(false);
        setShowOptimizationModal(false);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewOptimization={() => setShowOptimizationModal(true)}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        {/* Navbar Component */}
        <Navbar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* KPI Summary Cards */}
          <KPICards metrics={initialKpis} />

          {/* Map & AI Recommendations Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-up">
            <div className="lg:col-span-2">
              <MapSection markers={mapMarkers} />
            </div>
            <div className="lg:col-span-1">
              <AIRecommendations recommendations={initialRecommendations} />
            </div>
          </div>

          {/* Active Deliveries Table & System Alerts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-up">
            <div className="lg:col-span-2">
              <OrdersTable orders={initialOrders} searchQuery={searchQuery} />
            </div>
            <div className="lg:col-span-1">
              <AlertsPanel alerts={initialAlerts} />
            </div>
          </div>
        </div>
      </main>

      {/* New Optimization Modal */}
      {showOptimizationModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-primary-container/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowOptimizationModal(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-on-surface p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-primary-container/10 border border-primary-container/30 rounded-xl">
                <Sparkles className="w-6 h-6 text-primary-container animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-on-surface">
                  Run Route Optimization
                </h3>
                <p className="text-xs text-text-muted font-mono">
                  RouteMind AI Engine v4.2
                </p>
              </div>
            </div>

            <div className="space-y-3 my-4 text-xs font-mono text-on-surface-variant">
              <div className="p-3 bg-surface-variant/40 rounded-lg flex justify-between items-center">
                <span>Active Fleet Region:</span>
                <span className="text-primary-fixed font-bold">North America - East</span>
              </div>
              <div className="p-3 bg-surface-variant/40 rounded-lg flex justify-between items-center">
                <span>Live Traffic Model:</span>
                <span className="text-primary-container font-bold">Real-time Dynamic</span>
              </div>
              <div className="p-3 bg-surface-variant/40 rounded-lg flex justify-between items-center">
                <span>Target Efficiency:</span>
                <span className="text-emerald-400 font-bold">+18% Fuel Savings</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleRunOptimization}
                disabled={optimizationRunning || optimizationComplete}
                className="w-full bg-primary-container text-on-primary-fixed py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed-dim transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] disabled:opacity-50"
              >
                {optimizationRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-on-primary-fixed border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Fleet Patterns...</span>
                  </>
                ) : optimizationComplete ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-950" />
                    <span>Optimization Applied!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Execute Global Optimization</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}