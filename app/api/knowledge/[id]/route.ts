import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { ragFetch } from "@/lib/rag";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const res = await ragFetch(
    `/knowledge/${encodeURIComponent(id)}?clerk_id=${encodeURIComponent(userId)}`,
    { method: "DELETE" }
  );
  return NextResponse.json(await res.json().catch(() => ({})), { status: res.status });
}