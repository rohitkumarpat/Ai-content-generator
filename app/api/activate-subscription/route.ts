import { NextResponse } from "next/server";
import crypto from "crypto";
import { auth } from "@clerk/nextjs/server";
import { prismaclient } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const {
      razorpay_payment_id,
      razorpay_subscription_id,
      razorpay_signature,
    } = await req.json();

    const body =
      razorpay_payment_id + "|" + razorpay_subscription_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // ✅ PAYMENT VERIFIED → ACTIVATE PLAN
    await prismaclient.user.update({
      where: { clerkid: userId },
      data: {
        plan: "PRO",
        subscriptionStatus: "ACTIVE",
        subscriptionId: razorpay_subscription_id,
        paymentId: razorpay_payment_id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("VERIFY ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
