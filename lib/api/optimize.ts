import {
  PlannerRequest,
  PlannerResponse,
} from "@/types/planner";

const API_URL = "http://127.0.0.1:8000";

export async function optimizeRoute(
  data: PlannerRequest
): Promise<PlannerResponse> {
  console.log("Sending request to FastAPI...", data);

  const response = await fetch(`${API_URL}/optimize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      `Optimization failed: ${response.status}`
    );
  }

  const result: PlannerResponse = await response.json();

  console.log("FastAPI response:", result);

  return result;
}