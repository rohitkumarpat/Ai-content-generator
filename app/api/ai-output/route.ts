import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prismaclient } from "@/lib/db";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { formData, aiResponse, slugname } = body;

  const saved = await prismaclient.aiOutput.create({
    data: {
      clerkid: userId,
      formData,
      aiResponse,
      slugname,
    },
  });

  return NextResponse.json(saved);
}



export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const historyinfo = await prismaclient.aiOutput.findMany({
    where: {
      clerkid: userId, 
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(historyinfo);
}




