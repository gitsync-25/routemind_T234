"use client";
import { PlannerProvider } from "@/context/PlannerContext";
import { usePlanner } from "@/hooks/usePlanner";
import PlannerForm from "@/components/planner/PlannerForm";
import RouteSummary from "@/components/planner/RouteSummary";
import PlannerMap from "@/components/planner/PlannerMap";

export default function PlannerPage() {
  return (
  <PlannerProvider>
    <main className="min-h-screen bg-[#0B1120] p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          AI Route Planner
        </h1>

        <p className="text-gray-400 mt-2">
          Plan, optimize and monitor delivery routes.
        </p>

      </div>

      {/* Top Grid */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-4">
          <PlannerForm />
        </div>

        <div className="col-span-8">
          <RouteSummary />
        </div>

      </div>

      {/* Bottom */}

      <div className="mt-6">
        <PlannerMap />
      </div>

    </main>
  </PlannerProvider>
);
}