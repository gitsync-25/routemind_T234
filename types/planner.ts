export interface PlannerRequest {
  pickup: string;
  destination: string;
  driver: string;
  vehicle: string;
  weight: string;
}

export interface PlannerResponse {
  distance: string;
  eta: string;
  fuel: string;
  cost: string;
  traffic: string;
  confidence: string;
}