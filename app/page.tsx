"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Briefcase, Camera, Check, Code2, FileUp, History,
  Lock, PenTool, Sparkles, Type, Video, Wand2, X, Zap, Eye,
} from "lucide-react";
import FAQ from "./dashboard/_components/FAQ";

const NAV = [
  { label: "Two ways to write", href: "#modes" },
  { label: "How it works", href: "#how" },
  { label: "Tools", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const TOOLS = [
  { icon: PenTool, title: "Blogs", desc: "Titles, topic ideas and full articles.", count: 3 },
  { icon: Video, title: "YouTube", desc: "Catchy titles, descriptions and tags.", count: 3 },
  { icon: Camera, title: "Instagram", desc: "Posts, hashtags and post ideas.", count: 3 },
  { icon: Type, title: "Writing help", desc: "Rewrite, improve, fix grammar, add emoji.", count: 4 },
  { icon: Code2, title: "Code", desc: "Write, explain and fix code.", count: 3 },
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
              <Sparkles className="h-3.5 w-3.5" /> New: teach the AI about your business
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Write posts, titles and blogs in <span className="text-indigo-600">seconds</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Pick a tool, type a few words and get ready-to-use content. Want it to sound like your business?
              Add your own info and the AI will use it. It&apos;s optional, and you choose every time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sign-up" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition">
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#modes" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition">
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">10 free generations. No credit card needed.</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Instagram Post</span>
                <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
                  Use my brand knowledge
                  <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600">
                    <span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow" />
                  </span>
                </span>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
                Fresh out of the kiln 🏺 Our handmade mugs are back, warm, playful and made for everyday. Free
                shipping over $50. <span className="text-indigo-600">#handmade #ceramics</span>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Based on your info</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border bg-white px-2.5 py-1 text-xs text-slate-600">Brand voice guide</span>
                  <span className="rounded-md border bg-white px-2.5 py-1 text-xs text-slate-600">Shipping policy</span>
                </div>
              </div>
              <p className="mt-4 text-right text-[11px] text-slate-400">Example</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          <Stat value="18" label="writing tools" />
          <Stat value="3 ways" label="to add info: PDF, text or website link" />
          <Stat value="Private" label="your info is only used for you" />
          <Stat value="Clear" label="see which info was used" />
        </div>
      </section>

      {/* TWO MODES */}
      <section id="modes" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">Two ways to write</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold md:text-4xl">
              Quick and general, or personal to your business. You choose.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Every tool has one switch: <span className="text-white">&quot;Use my brand knowledge&quot;</span>. Turn it off for
              a general answer, or on to make the AI use the information you added about your business.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-1 flex items-center gap-2"><Zap className="h-4 w-4 text-amber-400" /><span className="font-semibold">Quick mode (switch off)</span></div>
                <p className="mb-4 text-sm text-slate-400">No setup. Great for ideas, general content and trying things out.</p>
                <p className="rounded-lg bg-slate-800/60 p-4 text-sm text-slate-300">
                  Check out our amazing new products! High quality and great prices. Shop now! 🎉 #shopnow #sale
                </p>
                <p className="mt-3 text-xs text-slate-500">Good, but general. It doesn&apos;t know your products.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-indigo-500/50 bg-indigo-950/40 p-6">
                <div className="mb-1 flex items-center gap-2"><Briefcase className="h-4 w-4 text-indigo-300" /><span className="font-semibold">Personal mode (switch on)</span></div>
                <p className="mb-4 text-sm text-slate-400">Uses the info you added: products, prices, tone of voice.</p>
                <p className="rounded-lg bg-indigo-900/40 p-4 text-sm text-slate-100">
                  Fresh out of the kiln 🏺 Our handmade ceramic mugs are back, from $15, with free shipping over $50. #handmade #ceramicmugs
                </p>
                <p className="mt-3 text-xs text-indigo-300">Specific, on-brand, and shows which of your documents it used.</p>
              </div>
            </Reveal>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Examples for illustration.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Start writing right away, or add your business info first.</p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Sparkles, t: "1. Pick a tool", d: "Choose from blogs, YouTube, Instagram, writing help, code and more." },
              { icon: FileUp, t: "2. Add your info (optional)", d: "Upload a PDF, paste text or add a website link on the Brand Knowledge page. Do it once." },
              { icon: Eye, t: "3. Generate and edit", d: "Get your content, edit it in the built-in editor, and see which of your info was used." },
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
            <h2 className="text-center text-3xl font-bold md:text-4xl">18 tools in one place</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">Every tool works in both quick mode and personal mode.</p>
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
              { icon: Zap, t: "Results in seconds" },
              { icon: BookOpen, t: "Easy built-in editor" },
              { icon: History, t: "All your past content saved" },
              { icon: Lock, t: "Private and secure" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-sm font-medium">
                <f.icon className="h-4 w-4 text-indigo-600" /> {f.t}
              </div>
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
        <h2 className="text-3xl font-bold md:text-4xl">Ready to write faster?</h2>
        <p className="mt-3 text-slate-600">Start with a quick generation, add your business info whenever you like.</p>
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