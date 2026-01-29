"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface CreditsContextType {
  usedCredits: number;
  totalCredits: number;
  incrementCredits: () => void;
  refreshCredits: () => Promise<void>;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export function CreditsProvider({ children }: { children: React.ReactNode }) {
  const [usedCredits, setUsedCredits] = useState(0);
  const totalCredits = 10;

  const fetchCredits = async () => {
    try {
      const res = await axios.get("/api/ai-output");
      setUsedCredits(res.data.length);
    } catch (error) {
      console.error("Failed to fetch credits", error);
    }
  };

  const incrementCredits = () => {
    setUsedCredits(prev => prev + 1);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <CreditsContext.Provider value={{
      usedCredits,
      totalCredits,
      incrementCredits,
      refreshCredits: fetchCredits
    }}>
      {children}
    </CreditsContext.Provider>
  );
}

export function useCredits() {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
}