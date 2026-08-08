import KPISection from "./KPISection";
import AIRecommendations from "./AIRecommendations";
import WeeklyTrend from "./WeeklyTrend";

export default function InsightsDashboard() {
  return (
    <main className="min-h-screen bg-[#0B1120] p-6">

      <div className="mb-8">

        <h1 className="text-5xl font-bold text-white">
          AI Insights
        </h1>

        <p className="text-gray-400 mt-2">
          Smart recommendations powered by RouteMind AI.
        </p>

      </div>

      <div className="space-y-6">

        <KPISection />

        <div className="grid lg:grid-cols-2 gap-6">

          <AIRecommendations />

          <WeeklyTrend />

        </div>

      </div>

    </main>
  );
}