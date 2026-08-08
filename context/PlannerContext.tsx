"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { usePlanner } from "@/hooks/usePlanner";

type PlannerContextType = ReturnType<typeof usePlanner>;

const PlannerContext =
  createContext<PlannerContextType | null>(null);

export function PlannerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const planner = usePlanner();

  return (
    <PlannerContext.Provider value={planner}>
      {children}
    </PlannerContext.Provider>
  );
}

export function usePlannerContext() {
  const context = useContext(PlannerContext);

  if (!context) {
    throw new Error(
      "usePlannerContext must be used inside PlannerProvider"
    );
  }

  return context;
}