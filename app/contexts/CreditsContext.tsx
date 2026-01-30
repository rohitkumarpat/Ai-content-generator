"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type Plan = "FREE" | "PRO";

interface CreditsContextType {
  usedCredits: number;
  totalCredits: number | null; // null = unlimited
  plan: Plan;
  isPro: boolean;
  incrementCredits: () => void;
  refreshCredits: () => Promise<void>;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export function CreditsProvider({ children }: { children: React.ReactNode }) {
  const [usedCredits, setUsedCredits] = useState(0);
  const [plan, setPlan] = useState<Plan>("FREE");

  const isPro = plan === "PRO";
  const totalCredits = isPro ? null : 10; // unlimited for PRO

  const fetchCredits = async () => {
    try {
      const [creditsRes, planRes] = await Promise.all([
        axios.get("/api/ai-output"),
        axios.get("/api/user"),
      ]);

      setUsedCredits(creditsRes.data.length);
      setPlan(planRes.data.plan);
    } catch (error) {
      console.error("Failed to fetch credits or plan", error);
    }
  };

  const incrementCredits = () => {
    // Only FREE users consume credits
    if (!isPro) {
      setUsedCredits((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <CreditsContext.Provider
      value={{
        usedCredits,
        totalCredits,
        plan,
        isPro,
        incrementCredits,
        refreshCredits: fetchCredits,
      }}
    >
      {children}
    </CreditsContext.Provider>
  );
}

export function useCredits() {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
}
