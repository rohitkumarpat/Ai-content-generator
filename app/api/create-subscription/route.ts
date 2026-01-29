import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST() {
  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id: "plan_S9EKMGmZVoBzwn",
      customer_notify: 1,
      quantity: 1,
      total_count: 12, 
    });

    return NextResponse.json({
      subscriptionId: subscription.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Subscription creation failed" },
      { status: 500 }
    );
  }
}
