import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { ragFetch } from "@/lib/rag";

export const maxDuration = 60;

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
  try {
    const res = await ragFetch(`/knowledge?clerk_id=${encodeURIComponent(userId)}`);
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ docs: [] });
  }
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });

  try {
    let res: Response;
    if ((req.headers.get("content-type") || "").includes("multipart/form-data")) {
      const incoming = await req.formData();
      const file = incoming.get("file") as File | null;
      if (!file) return NextResponse.json({ detail: "No file provided" }, { status: 400 });
      const fd = new FormData();
      fd.append("clerk_id", userId);
      fd.append("file", file, file.name);
      res = await ragFetch("/ingest/file", { method: "POST", body: fd });
    } else {
      const { kind, title, text, url } = await req.json();
      const isUrl = kind === "url";
      res = await ragFetch(isUrl ? "/ingest/url" : "/ingest/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isUrl ? { clerk_id: userId, url } : { clerk_id: userId, title, text }
        ),
      });
    }
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { detail: "Knowledge service is unavailable. Try again in a minute." },
      { status: 503 }
    );
  }
}