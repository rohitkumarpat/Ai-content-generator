import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prismaclient } from "@/lib/db";

export async function GET() {
  const { userId } =await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prismaclient.user.findUnique({
    where: { clerkid: userId },
    select: { plan: true }
  });

  return NextResponse.json({
    plan: user?.plan ?? "FREE"
  });
}
