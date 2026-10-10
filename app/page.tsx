"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Camera, Check, Code2, Database, FileUp, History,
  Lock, PenTool, Quote, Search, ShieldCheck, Sparkles, Type, Video, Wand2, X, Zap,
} from "lucide-react";
import FAQ from "./dashboard/_components/FAQ";

const NAV = [
  { label: "Knowledge Base", href: "#knowledge" },
  { label: "How it works", href: "#how" },
  { label: "Tools", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const TOOLS = [
  { icon: PenTool, title: "Blog", desc: "Titles, topic ideas and full articles with citations.", count: 3 },
  { icon: Video, title: "YouTube", desc: "SEO titles, descriptions and tags.", count: 3 },
  { icon: Camera, title: "Instagram", desc: "Posts, hashtags and post ideas.", count: 3 },
  { icon: Type, title: "Writing", desc: "Rewrite, improve, grammar check, add emoji.", count: 4 },
  { icon: Code2, title: "Code", desc: "Write, explain and debug code.", count: 3 },
  { icon: Wand2, title: "Marketing", desc: "Taglines and product descriptions.", count: 2 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Content Generation
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-indigo-600 transition">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">Sign in</Link>
            <Link href="/sign-up" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition">
              Get started free
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" /> New: Brand Knowledge Base powered by RAG
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Content that sounds like <span className="text-indigo-600">your brand</span>, not generic AI
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Upload your brand guidelines, product info or website once. Every tool, from Instagram posts to
              blogs, then writes using your real facts and tone, and shows the sources it used.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sign-up" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition">
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#knowledge" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition">
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">10 free generations. No credit card required.</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Instagram Post Generator</span>
                <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
                  Use my brand knowledge
                  <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600">
                    <span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow" />
                  </span>
                </span>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                Fresh out of the kiln 🏺 Our new handmade collection is here: warm, playful and made to be used every
                day. Free shipping on orders above $50. <span className="text-indigo-600">#handmade #ceramics</span>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Sources used</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border bg-white px-2.5 py-1 text-xs text-slate-600">[1] Brand voice guide</span>
                  <span className="rounded-md border bg-white px-2.5 py-1 text-xs text-slate-600">[2] Shipping policy</span>
                </div>
              </div>
              <p className="mt-4 text-right text-[11px] text-slate-400">Illustrative example</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          <Stat value="18" label="AI writing tools" />
          <Stat value="3" label="Source types: PDF, text, URL" />
          <Stat value="Private" label="Per-user knowledge isolation" />
          <Stat value="Cited" label="Sources shown with every output" />
        </div>
      </section>

      {/* RAG SPOTLIGHT */}
      <section id="knowledge" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">Brand Knowledge Base</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold md:text-4xl">
              Stop editing generic AI output. Teach it your brand once.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Retrieval-Augmented Generation finds the most relevant parts of your own documents and gives them to the
              AI before it writes, so the content uses your facts, not guesses.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 flex items-center gap-2 text-slate-400"><X className="h-4 w-4 text-red-400" /><span className="text-sm font-semibold">Generic AI</span></div>
                <p className="rounded-lg bg-slate-800/60 p-4 text-sm text-slate-300">
                  Check out our amazing new products! High quality and great prices. Shop now and don&apos;t miss out! 🎉 #shopnow #sale
                </p>
                <p className="mt-3 text-xs text-slate-500">Vague, off-tone, no real product details.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-indigo-500/50 bg-indigo-950/40 p-6">
                <div className="mb-4 flex items-center gap-2 text-indigo-300"><Check className="h-4 w-4 text-emerald-400" /><span className="text-sm font-semibold">With your Knowledge Base</span></div>
                <p className="rounded-lg bg-indigo-900/40 p-4 text-sm text-slate-100">
                  Fresh out of the kiln 🏺 Our handmade ceramic mugs are back, from $15, with free shipping over $50. #handmade #ceramicmugs
                </p>
                <p className="mt-3 text-xs text-indigo-300">Uses your product facts and tone. Sources: [1] Brand voice guide, [2] Price list.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: Database, t: "Your documents, indexed", d: "PDF, TXT, Markdown, pasted text or a website URL." },
              { icon: Quote, t: "Cited sources", d: "See exactly which document each output came from." },
              { icon: Lock, t: "Private by design", d: "Your knowledge is only ever searched for your account." },
            ].map((f) => (
              <Reveal key={f.t}>
                <div className="rounded-xl border border-slate-800 p-5">
                  <f.icon className="h-5 w-5 text-indigo-400" />
                  <h3 className="mt-3 font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-slate-400">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">From upload to on-brand content in three steps.</p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: FileUp, t: "1. Add your sources", d: "Upload a PDF, paste text or add a URL on the Knowledge Base page." },
              { icon: Search, t: "2. We find what matters", d: "Your content is split, embedded and searched by meaning when you generate." },
              { icon: Sparkles, t: "3. Generate with context", d: "Pick any tool, switch on your knowledge base and get grounded output." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <div className="h-full rounded-2xl border p-6 transition hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><s.icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">18 tools, one workspace</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Every tool works with or without your knowledge base.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"><t.icon className="h-5 w-5" /></div>
                    <span className="text-xs text-slate-500">{t.count} tools</span>
                  </div>
                  <h3 className="mt-4 font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              { icon: Zap, t: "Fast results" },
              { icon: BookOpen, t: "Rich text editor" },
              { icon: History, t: "Full generation history" },
              { icon: ShieldCheck, t: "Secure sign-in" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-sm font-medium">
                <f.icon className="h-4 w-4 text-indigo-600" /> {f.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT WITH */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Built with</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-500">
            {["Next.js", "FastAPI", "PostgreSQL + pgvector", "Google Gemini", "Clerk", "Razorpay"].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gradient-to-r from-indigo-600 to-violet-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Free to start. Unlimited with Pro.</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-90">Try every tool with 10 free generations, then upgrade when you need more.</p>
        <Link href="/sign-up" className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 hover:bg-slate-100 transition">
          Create free account
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20">
        <FAQ />
      </section>

      {/* FINAL CTA + FOOTER */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Write content that sounds like you</h2>
        <p className="mt-3 text-slate-600">Add your brand knowledge and see the difference in your first generation.</p>
        <Link href="/sign-up" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 transition">
          Get started free <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
      <footer className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AI Content Generation
      </footer>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}