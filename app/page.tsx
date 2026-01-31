"use client";

import Link from "next/link";
import {
  Sparkles,
  Zap,
  FileText,
  ShieldCheck,
  PenTool,
  Mail,
  Megaphone,
  CheckCircle,
} from "lucide-react";
import FAQ from "./dashboard/_components/FAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Writing Tools for <span className="text-indigo-600">Everyone</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Create blogs, emails, captions, ads, and professional content in seconds.
          Save time, boost productivity, and write smarter with AI.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Start Writing Free
          </Link>

          <Link
            href="/dashboard/billing"
            className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold border hover:bg-indigo-50 transition"
          >
            Upgrade to Pro
          </Link>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat number="10K+" label="Contents Generated" />
          <Stat number="5K+" label="Happy Users" />
          <Stat number="20+" label="AI Tools" />
          <Stat number="99%" label="Uptime" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our AI App?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Feature icon={<Sparkles />} title="High Quality Output" desc="Well-structured and natural content every time." />
          <Feature icon={<Zap />} title="Instant Results" desc="Generate content in seconds, not hours." />
          <Feature icon={<FileText />} title="Multiple Formats" desc="Blogs, emails, captions, resumes, and more." />
          <Feature icon={<ShieldCheck />} title="Secure & Private" desc="Your content stays private and protected." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Step number="1" title="Choose a Tool" desc="Select the AI tool you need." />
            <Step number="2" title="Enter Input" desc="Describe what you want to write." />
            <Step number="3" title="Generate Content" desc="Get high-quality content instantly." />
          </div>
        </div>
      </section>

      {/* TOOLS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Popular AI Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Tool icon={<PenTool />} title="Blog Generator" />
          <Tool icon={<Mail />} title="Email Writer" />
          <Tool icon={<Megaphone />} title="Social Media Content" />
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Free to Start, Powerful When You Upgrade
        </h2>
        <p className="opacity-90 mb-8">
          Use limited tools for free or unlock unlimited AI with Pro.
        </p>

        <Link
          href="/dashboard/billing"
          className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
        >
          View Pricing
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial name="Amit" text="This AI app saved me hours every week!" />
          <Testimonial name="Priya" text="Perfect for blogging and emails." />
          <Testimonial name="Rahul" text="Clean UI and very fast results." />
        </div>
      </section>

       <section className="py-20 bg-gray-50">
        <FAQ />
      </section>


      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Start Writing Smarter Today
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of users using AI to create better content.
        </p>

        <Link
          href="/dashboard"
          className="px-10 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Get Started 🚀
        </Link>
      </section>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <div className="flex justify-center mb-4 text-indigo-600">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }: any) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  );
}

function Tool({ icon, title }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <div className="flex justify-center mb-4 text-indigo-600">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function Stat({ number, label }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-3xl font-bold text-indigo-600">{number}</p>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

function Testimonial({ name, text }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <CheckCircle className="text-indigo-600 mb-4" />
      <p className="text-gray-600 mb-4">"{text}"</p>
      <p className="font-semibold text-gray-800">– {name}</p>
    </div>
  );
}
