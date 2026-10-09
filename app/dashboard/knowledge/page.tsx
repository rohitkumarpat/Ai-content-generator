"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Globe, Loader2, StickyNote, Trash2 } from "lucide-react";

type Doc = { id: number; title: string; source_type: string; chunks: number; created_at: string };
type Tab = "file" | "text" | "url";

const MAX_MB = 4; // Vercel serverless request limit is ~4.5 MB
const TABS = [
  { id: "file", label: "Upload file", icon: FileText },
  { id: "text", label: "Paste text", icon: StickyNote },
  { id: "url", label: "Website URL", icon: Globe },
] as const;

export default function KnowledgePage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("file");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/knowledge");
      const d = await r.json();
      setDocs(d.docs ?? []);
    } finally {
      setListLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const submit = async () => {
    setMsg(null);
    setBusy(true);
    try {
      let res: Response;
      if (tab === "file") {
        const f = fileRef.current?.files?.[0];
        if (!f) throw new Error("Choose a file first");
        if (f.size > MAX_MB * 1024 * 1024) throw new Error(`File must be under ${MAX_MB} MB`);
        const fd = new FormData();
        fd.append("file", f);
        res = await fetch("/api/knowledge", { method: "POST", body: fd });
      } else {
        res = await fetch("/api/knowledge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            tab === "url" ? { kind: "url", url } : { kind: "text", title, text }
          ),
        });
      }
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(typeof d.detail === "string" ? d.detail : "Upload failed");
      setMsg({ ok: true, text: `Added successfully (${d.chunks} chunks indexed).` });
      setTitle("");
      setText("");
      setUrl("");
      if (fileRef.current) fileRef.current.value = "";
      load();
    } catch (e: any) {
      setMsg({ ok: false, text: e.message });
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: number) => {
    if (!confirm("Delete this document from your knowledge base?")) return;
    await fetch(`/api/knowledge/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Brand Knowledge Base</h1>
      <p className="text-gray-500 mt-1 mb-6">
        Add your brand guidelines, product info or past posts. Every template can use them
        to write on-brand content.
      </p>

      <div className="bg-white border rounded-lg shadow-sm p-5">
        <div className="flex gap-2 mb-4">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border transition ${
                tab === t.id
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        {tab === "file" && (
          <div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.txt,.md"
              className="block w-full text-sm border rounded-md p-2"
            />
            <p className="text-xs text-gray-500 mt-2">PDF, TXT or MD, up to {MAX_MB} MB.</p>
          </div>
        )}
        {tab === "text" && (
          <div className="space-y-3">
            <Input placeholder="Title (e.g. Brand voice guide)" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea placeholder="Paste your content here..." rows={6} value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        )}
        {tab === "url" && (
          <Input placeholder="https://yourbrand.com/about" value={url} onChange={(e) => setUrl(e.target.value)} />
        )}

        <Button onClick={submit} disabled={busy} className="mt-4 bg-purple-600 hover:bg-purple-700">
          {busy ? (<><Loader2 className="h-4 w-4 animate-spin mr-2" /> Processing...</>) : "Add to knowledge base"}
        </Button>

        {msg && (
          <p className={`mt-3 text-sm ${msg.ok ? "text-green-600" : "text-red-600"}`}>{msg.text}</p>
        )}
      </div>

      <h2 className="text-lg font-semibold mt-8 mb-3">Your documents</h2>
      {listLoading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : docs.length === 0 ? (
        <p className="text-sm text-gray-500">Nothing here yet. Add your first document above.</p>
      ) : (
        <ul className="space-y-2">
          {docs.map((d) => (
            <li key={d.id} className="flex items-center justify-between bg-white border rounded-lg p-3">
              <div className="min-w-0">
                <p className="font-medium truncate">{d.title}</p>
                <p className="text-xs text-gray-500">
                  {d.source_type} · {d.chunks} chunks · {new Date(d.created_at).toLocaleDateString()}
                </p>
              </div>
              <button onClick={() => remove(d.id)} className="text-gray-400 hover:text-red-600 p-2" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}