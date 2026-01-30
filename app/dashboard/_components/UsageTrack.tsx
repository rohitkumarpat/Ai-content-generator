"use client";

import { useCredits } from "@/app/contexts/CreditsContext";
import { useEffect } from "react";

function UsageTrack() {
  const { usedCredits, totalCredits, refreshCredits, isPro } = useCredits();

  useEffect(() => {
    refreshCredits();
  }, []);

  if (isPro) {
    return (
      <div className="px-4">
        <div className="bg-green-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">Credits Usage</h2>
          <p className="text-sm text-green-700 font-medium">
            🚀 Unlimited AI usage (PRO)
          </p>
        </div>
      </div>
    );
  }

  const percentage = (usedCredits / (totalCredits ?? 1)) * 100;

  return (
    <div className="px-4">
      <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-2">Credits Usage</h2>

        <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="text-xs text-gray-600 mb-3">
          {usedCredits} / {totalCredits} credits used
        </p>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-lg">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}

export default UsageTrack;
