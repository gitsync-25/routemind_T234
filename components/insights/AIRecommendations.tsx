import { Brain, ArrowRight, CheckCircle2 } from "lucide-react";

const recommendations = [
  "Merge Route A & Route B to save 14% fuel",
  "Dispatch TRK-204 for priority delivery",
  "Schedule maintenance for TRK-112 this week",
];

export default function AIRecommendations() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#161B22] p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-purple-500/10 p-3">
          <Brain className="text-purple-400" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Recommendations
          </h2>

          <p className="text-sm text-gray-400">
            Smart actions suggested by RouteMind AI
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#0F1115] p-4"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2
                className="shrink-0 text-green-400"
                size={18}
              />

              <span className="text-sm text-gray-300">
                {item}
              </span>
            </div>

            <ArrowRight
              className="shrink-0 text-cyan-400"
              size={18}
            />
          </div>
        ))}
      </div>
    </div>
  );
}