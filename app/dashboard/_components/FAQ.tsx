"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What does this app do?",
    answer:
      "This app helps you generate high-quality content like blogs, emails, captions, and professional text using AI in seconds.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, you can start for free with limited AI usage. Upgrade to Pro for unlimited content generation.",
  },
  {
    question: "Is AI-generated content safe to use?",
    answer:
      "Yes. The content is generated uniquely for you and can be edited before use.",
  },
  {
    question: "What is included in the Pro plan?",
    answer:
      "The Pro plan includes unlimited AI tools, faster responses, and access to all premium features.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data is private and securely stored. We do not share your content with anyone.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-medium text-gray-800">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
