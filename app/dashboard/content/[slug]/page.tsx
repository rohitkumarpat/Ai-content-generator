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

const FORMAT_RULE =
  "\n\nOutput format: respond with clean HTML only, using tags like <h2>, <p>, <ul><li>, <strong>, <em>, and <pre><code> for code. Do not return JSON or markdown, and do not wrap the answer in code fences.";

const cleanOutput = (t: string) =>
  t.replace(/^```(?:html)?\s*/i, "").replace(/```\s*$/, "").trim();

export default function Contentitemslug() {
  const params = useParams();
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [useKnowledge, setUseKnowledge] = useState(true);
  const [sources, setSources] = useState<any[]>([]);

  const { incrementCredits, usedCredits, totalCredits, isPro } = useCredits();

  const Generateaicontent = async (userInput: any) => {

    if (!isPro && usedCredits >= (totalCredits ?? 0)) {
      alert(
        `You've used all ${totalCredits} credits! Please upgrade your plan to continue.`
      );
      return;
    }

    const template = Templates.find(
      (item) => item.slug === params.slug
    );
    if (!template) return;

    try {
      setLoading(true);

      const prompt = `${template.aiPrompt}${FORMAT_RULE}\nUser Input: ${JSON.stringify(userInput)}`;

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          templatePrompt: template.aiPrompt + FORMAT_RULE,
          userInput,
          useKnowledge,
          slug: params.slug,
        }),
      });

      const data = await res.json();
      const aiText = cleanOutput(data.reply || "No output generated.");

      setOutput(aiText);
      setSources(data.sources ?? []);
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


  if (!isPro && usedCredits >= (totalCredits ?? 0)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Credits Exhausted!
          </h1>
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
              <Link href="/dashboard/billing" className="w-full block">
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
      {/* 🔔 Credit banner */}
      {!isPro && (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>

            <p className="ml-3 text-sm text-yellow-700">
              Credits remaining:{" "}
              <span className="font-bold">
                {(totalCredits ?? 0) - usedCredits}
              </span>{" "}
              / {totalCredits}
            </p>
          </div>
        </div>
      )}

      {/* 🚀 PRO banner */}
      {isPro && (
        <div className="p-4 bg-green-50 border-l-4 border-green-400 mb-4">
          <p className="text-sm font-semibold text-green-700">
            🚀 PRO Plan Active — Unlimited AI usage
          </p>
        </div>
      )}

      <div className="flex items-center justify-between pr-8 mb-6">
        <Link href="/dashboard">
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-md ml-2">
            <ArrowLeft /> Back
          </Button>
        </Link>

        <button
          type="button"
          role="switch"
          aria-checked={useKnowledge}
          onClick={() => setUseKnowledge((v) => !v)}
          className="flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-sm transition hover:shadow"
        >
          <span className="text-sm font-medium text-gray-700">
            Use my brand knowledge
          </span>
          <span
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useKnowledge ? "bg-purple-600" : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${useKnowledge ? "translate-x-5" : "translate-x-0.5"
                }`}
            />
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 p-8 items-start">
        <Formsection
          slugvalue={params.slug as string}
          userforminput={Generateaicontent}
        />
        <Outputsection loading={loading} content={output} />
      </div>

      {sources.length > 0 && (
        <div className="px-8 pb-8">
          <h3 className="font-semibold mb-2">Sources used</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {sources.map((s) => (
              <li key={s.n} className="border rounded-md p-3">
                <span className="font-medium">[{s.n}] {s.title}</span>
                <p className="mt-1">{s.snippet}…</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
