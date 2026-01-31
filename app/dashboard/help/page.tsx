"use client";

import { Mail, MessageCircle, CreditCard } from "lucide-react";
import FAQ from "../_components/FAQ";

export default function HelpPage() {
  const email = process.env.NEXT_PUBLIC_EMAIL!;
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER!;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Page Heading */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Help & Support
          </h1>
          <p className="text-gray-600">
            Need help? We’re here to assist you as quickly as possible.
          </p>
        </div>

        {/* FAQ Section */}
        <section>
          <FAQ />
        </section>

        {/* Payment & Subscription Help */}
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Payment & Subscription Issues
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            If you faced any problem related to payment, subscription activation,
            or didn’t receive confirmation after upgrading to Pro, please contact us.
            We’ll resolve it as fast as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Email Support */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <Mail className="text-indigo-600" />
              <div>
                <p className="font-medium text-gray-800">Email Support</p>
                <p className="text-sm text-gray-600">{email}</p>
              </div>
            </a>

            {/* WhatsApp Support */}
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <MessageCircle className="text-green-600" />
              <div>
                <p className="font-medium text-gray-800">WhatsApp Support</p>
                <p className="text-sm text-gray-600">
                  Chat with us (Fast response)
                </p>
              </div>
            </a>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            ⏱️ We usually reply within a few hours.
          </p>
        </section>

      </div>
    </div>
  );
}
