"use client";

import React, { useState } from "react";
import Formsection from "../_components/formsection";
import Outputsection from "../_components/outputsection";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Templates from "@/app/(data)/Templates";
import { useCredits } from "@/app/contexts/CreditsContext";

export default function Contentitemslug() {
  const params = useParams();
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { incrementCredits, usedCredits } = useCredits();
  const totalCredits = 10; // Or get this from context if you have it there

  const Generateaicontent = async (userInput: any) => {
    // Check if user has credits left
    if (usedCredits >= totalCredits) {
      alert(`You've used all ${totalCredits} credits! Please upgrade your plan to continue.`);
      return;
    }

    const template = Templates.find(
      (item) => item.slug === params.slug
    );
    if (!template) return;

    try {
      setLoading(true);

      const prompt = `${template.aiPrompt}\nUser Input: ${JSON.stringify(
        userInput
      )}`;

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });
      
      const data = await res.json();
      const aiText = data.reply || "No output generated.";

      setOutput(aiText);

      await fetch("/api/ai-output", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData: JSON.stringify(userInput),
          aiResponse: aiText,
          slugname: params.slug,
        }),
      });

      incrementCredits();

    } catch (err) {
      console.error(err);
      setOutput("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  // Optional: Show a message when credits are exhausted
  if (usedCredits >= totalCredits) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">Credits Exhausted!</h1>
          <p className="text-gray-600 mb-6">
            You've used all {totalCredits} credits. Upgrade your plan to continue generating AI content.
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              <Link href="/dashboard" className="w-full block">
                Back to Dashboard
              </Link>
            </Button>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              <Link href="/upgrade" className="w-full block">
                Upgrade Plan
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Credits remaining: <span className="font-bold">{totalCredits - usedCredits}</span> out of {totalCredits}
            </p>
          </div>
        </div>
      </div>
      

      <Link href="/dashboard">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md mb-6">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-10 p-8">
        <Formsection
          slugvalue={params.slug as string}
          userforminput={Generateaicontent}
        />
        <Outputsection loading={loading} content={output} />
      </div>
    </div>
  );
}