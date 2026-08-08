import {
  PlannerRequest,
  PlannerResponse,
} from "@/types/planner";

const API_URL = "https://routemind-t234.onrender.com";

export async function optimizeRoute(
  data: PlannerRequest
): Promise<PlannerResponse> {
  const response = await fetch(`${API_URL}/optimize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Route optimization failed");
  }

  const result: PlannerResponse = await response.json();

  return result;
}