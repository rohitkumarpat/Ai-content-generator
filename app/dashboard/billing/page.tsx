"use client";

interface RazorpayPaymentResponse {
  razorpay_payment_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature?: string;
}

export default function Billing() {

  const upgradePlan = async () => {
    const res = await fetch("/api/create-subscription", {
      method: "POST",
    });

    const data = await res.json();

    const options = {
      key: process.env.RAZORPAY_ID,
      subscription_id: data.subscriptionId,
      name: "AI Writer",
      description: "AI Writer Pro - Monthly",

      handler: function (response: RazorpayPaymentResponse) {
        alert("Subscription successful 🎉");
        console.log("Subscription ID:", response.razorpay_subscription_id);
      },

      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

 
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-5xl w-full px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Billing Plans
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Choose the plan that fits your needs
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* FREE PLAN */}
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-blue-100 shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Free Plan
          </h2>

          <p className="text-4xl font-bold text-blue-600 mb-6">
            ₹0
            <span className="text-base font-medium text-gray-500"> / month</span>
          </p>

          <ul className="space-y-3 text-gray-600 mb-8">
            <li>✅ 10 AI tool uses</li>
            <li>❌ No premium tools</li>
            <li>❌ No priority access</li>
          </ul>

          <button
            disabled
            className="w-full py-3 rounded-xl bg-gray-200 text-gray-500 font-medium cursor-not-allowed"
          >
            Current Plan
          </button>
        </div>

        {/* PRO PLAN */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-xl p-8 text-center scale-[1.03]">
          <h2 className="text-2xl font-semibold mb-2">
            Pro Plan
          </h2>

          <p className="text-4xl font-bold mb-6">
            ₹299
            <span className="text-base font-medium opacity-80"> / month</span>
          </p>

          <ul className="space-y-3 mb-8 opacity-95">
            <li>✅ Unlimited AI tools</li>
            <li>✅ Priority access</li>
            <li>✅ Early features</li>
          </ul>

          <button
            onClick={upgradePlan}
            className="w-full py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
          >
            Upgrade Now 🚀
          </button>
        </div>

      </div>
    </div>
  </div>


  );
}
