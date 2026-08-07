"use client";

import React, { useState } from "react";
import { Recommendation } from "@/lib/types";
import { Bot, Sparkles, Check, Clock, ArrowRight } from "lucide-react";

interface AIRecommendationsProps {
  recommendations: Recommendation[];
  onApplyRecommendation?: (id: string) => void;
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({
  recommendations: initialRecs,
}) => {
  const [recs, setRecs] = useState<Recommendation[]>(initialRecs);

  const handleAction = (id: string) => {
    setRecs((prev) =>
      prev.map((rec) =>
        rec.id === id ? { ...rec, applied: !rec.applied } : rec
      )
    );
  };

  return (
    <div className="glass-card rounded-xl flex flex-col h-full bg-surface-container-lowest border border-white/5">
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Bot className="w-5 h-5 text-primary-fixed-dim" />
          <span className="font-display text-base md:text-lg font-bold text-on-surface">
            AI Recommendations
          </span>
        </div>
        <span className="flex items-center gap-1 text-[10px] font-mono text-primary-container bg-primary-container/10 px-2 py-0.5 rounded border border-primary-container/20">
          <Sparkles className="w-3 h-3" />
          Neural Engine
        </span>
      </div>

      {/* List */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto max-h-[460px]">
        {recs.map((rec) => (
          <div
            key={rec.id}
            className={`
              p-4 rounded-lg flex flex-col gap-3 relative overflow-hidden transition-all duration-300 border
              ${
                rec.isPrimaryAction
                  ? "bg-surface-variant/30 border-primary-container/30 shadow-md"
                  : "bg-surface-variant/20 border-white/5 hover:border-white/10"
              }
            `}
          >
            {rec.isPrimaryAction && (
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container" />
            )}

            <div className="flex justify-between items-start">
              <span
                className={`font-mono text-[10px] tracking-wider uppercase font-semibold ${
                  rec.isPrimaryAction ? "text-primary-fixed" : "text-text-muted"
                }`}
              >
                {rec.category}
              </span>
              <span className="font-mono text-text-muted text-[10px] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {rec.timeAgo}
              </span>
            </div>

            <p className="font-sans text-xs md:text-sm leading-relaxed text-on-surface-variant">
              {rec.description}
              {rec.highlightText && (
                <span className="text-primary-container font-mono font-semibold">
                  {rec.highlightText}
                </span>
              )}
            </p>

            <button
              onClick={() => handleAction(rec.id)}
              className={`
                py-2 px-3 rounded text-xs font-medium transition-all flex items-center justify-center gap-2 active:scale-98
                ${
                  rec.applied
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : rec.isPrimaryAction
                    ? "bg-primary-container/10 border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-fixed shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                    : "bg-surface-variant border border-white/10 text-on-surface hover:bg-white/10"
                }
              `}
            >
              {rec.applied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Applied</span>
                </>
              ) : (
                <>
                  <span>{rec.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
