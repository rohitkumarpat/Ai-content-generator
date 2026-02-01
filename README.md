🚀 AI Content Generator

An AI-powered content generation platform that helps users create high-quality text content quickly and efficiently using Google Gemini AI.
The app supports authentication, credit-based usage, and subscription plans with secure payments.

🌟 Features

✨ AI-generated content using Google Gemini API

🔐 Secure authentication with Clerk

💳 Subscription & payments via Razorpay

📊 Credit-based usage tracking

📝 Rich text editor (TipTap-style editing experience)

📜 Content history tracking

⚡ Fast & scalable with Next.js App Router

🗄️ PostgreSQL database powered by Prisma

🌍 Deployed on Vercel

🛠️ Tech Stack

Frontend: Next.js 15, React, Tailwind CSS

Backend: Next.js API Routes

Authentication: Clerk

AI: Google Gemini API

Payments: Razorpay

Database: PostgreSQL (Neon)

ORM: Prisma

Deployment: Vercel

  <img width="2880" height="1704" alt="Screenshot 2026-02-02 004038" src="https://github.com/user-attachments/assets/d7b3c279-8e37-4941-9dc5-a48a2b2dc4ad" />

  <img width="2880" height="1704" alt="Screenshot 2026-02-02 004057" src="https://github.com/user-attachments/assets/d6473ceb-7a2e-4b39-a84a-af841eda5708" />
  
  <img width="2880" height="1704" alt="Screenshot 2026-02-02 004110" src="https://github.com/user-attachments/assets/021b2cca-7e7e-4617-8d01-85f32242fb1c" />
  
  <img width="2880" height="1704" alt="Screenshot 2026-02-02 004127" src="https://github.com/user-attachments/assets/79fedffd-dd37-4808-a4aa-73c05a03d43c" />

⚙️ Environment Variables

Create a .env file and add the following:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

GEMINI_API_KEY=

DATABASE_URL=

SUBSCRIPTION_PLAN_ID=

RAZORPAY_ID=
RAZORPAY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=

NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_EMAIL=


⚠️ Never commit .env files to GitHub.

🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/your-username/ai-content-generator.git
cd ai-content-generator

2️⃣ Install dependencies
npm install

3️⃣ Generate Prisma Client
npx prisma generate

4️⃣ Run the development server
npm run dev


Visit 👉 http://localhost:3000

💳 Subscription & Credits

Free Plan: Limited AI usage

Pro Plan:

Unlimited AI content generation

Priority access

Secure monthly billing via Razorpay

❓ Help & Support

If you face issues related to:

Payment

Subscription activation

Credits not updating

You can contact us via:

📧 Email: support email provided in app

💬 WhatsApp: Fast response support

🔒 Security

Uses latest patched Next.js version

Secure API routes

Environment variables protected

Payment verification via Razorpay signatures

📦 Deployment

This project is deployed on Vercel with CI/CD enabled via GitHub.

To deploy your own version:

Fork the repository

Connect it to Vercel

Add environment variables

Deploy 🚀

🙌 Acknowledgements

Google Gemini

Clerk

Razorpay

Prisma

Vercel

Next.js Team

👨‍💻 Author

Rohit
Computer Science Engineer
Passionate about Full-Stack Development & AI-powered products

⭐ Show Your Support

If you like this project, please ⭐ the repository and share it!




