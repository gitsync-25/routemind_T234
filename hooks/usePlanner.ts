"use client";

import { useState } from "react";
import { optimizeRoute } from "@/lib/api/optimize";
import {
  PlannerRequest,
  PlannerResponse,
} from "@/types/planner";

export function usePlanner() {
  const [form, setForm] = useState<PlannerRequest>({
    pickup: "",
    destination: "",
    driver: "",
    vehicle: "",
    weight: "",
  });

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<PlannerResponse | null>(null);

  async function optimize() {
    setLoading(true);

    const response = await optimizeRoute(form);

    setResult(response);

    setLoading(false);
  }

  return {
    form,
    setForm,
    loading,
    result,
    optimize,
  };
}