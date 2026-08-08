"use client";

import { useEffect, useState } from "react";

import {
  Truck,
  Fuel,
  TrendingUp,
  Brain,
} from "lucide-react";

type InsightsData = {
  deliveries: number;
  fuelSaved: number;
  efficiency: number;
  aiScore: number;
};

export default function KPISection() {
  const [data, setData] =
    useState<InsightsData | null>(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const response = await fetch(
  "https://routemind-t234.onrender.com/insights"
);

        if (!response.ok) {
          throw new Error("Insights API failed");
        }

        const result: InsightsData =
          await response.json();

        setData(result);
      } catch (error) {
        console.error(
          "Insights API error:",
          error
        );
      }
    }

    fetchInsights();
  }, []);

  const stats = [
    {
      title: "Deliveries",
      value: data ? `${data.deliveries}%` : "--",
      icon: Truck,
      color: "text-cyan-400",
    },
    {
      title: "Fuel Saved",
      value: data ? `${data.fuelSaved}%` : "--",
      icon: Fuel,
      color: "text-green-400",
    },
    {
      title: "Efficiency",
      value: data ? `${data.efficiency}%` : "--",
      icon: TrendingUp,
      color: "text-yellow-400",
    },
    {
      title: "AI Score",
      value: data ? `${data.aiScore}%` : "--",
      icon: Brain,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-[#161B22] p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                {item.title}
              </p>

              <Icon
                className={item.color}
                size={20}
              />
            </div>

            <h2
              className={`mt-5 text-3xl font-bold ${item.color}`}
            >
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}