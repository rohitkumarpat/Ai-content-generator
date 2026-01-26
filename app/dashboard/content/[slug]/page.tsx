"use client";

import React, { useState } from "react";
import Formsection from "../_components/formsection";
import Outputsection from "../_components/outputsection";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Templates from "@/app/(data)/Templates";

export default function Contentitemslug() {
  const params = useParams();
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const Generateaicontent = async (userInput: any) => {
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
      console.log(aiText);

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

    } catch (err) {
      console.error(err);
      setOutput("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href="/dashboard">
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md">
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
