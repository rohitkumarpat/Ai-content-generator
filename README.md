# 🚀 AI Content Generator

An AI-powered content generation platform built with **Next.js and Google Gemini AI**. Users can generate high-quality content through reusable AI tools with secure authentication, credit-based usage, subscriptions, and payment processing.

## ✨ Features

* 🤖 AI content generation with Google Gemini
* 🔐 Authentication with Clerk
* 💳 Subscription & payments with Razorpay
* 🎟️ Credit-based AI usage
* 📝 Rich-text content editing
* 📜 Content generation history
* 🧩 Template-driven AI tools
* 🗄️ PostgreSQL database with Prisma
* ⚡ Next.js App Router
* 🌍 Deployed on Vercel

## 🛠️ Tech Stack

| Layer          | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | Next.js 15, React, Tailwind CSS |
| Backend        | Next.js API Routes              |
| AI             | Google Gemini API               |
| Authentication | Clerk                           |
| Payments       | Razorpay                        |
| Database       | PostgreSQL (Neon)               |
| ORM            | Prisma                          |
| Deployment     | Vercel                          |

## 🏗️ Architecture

```text
                     ┌──────────────┐
                     │     User     │
                     └──────┬───────┘
                            │
                            ▼
                  ┌──────────────────┐
                  │   Next.js App    │
                  │                  │
                  │ Dashboard        │
                  │ Dynamic Forms    │
                  │ Output Editor    │
                  └────────┬─────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
           Clerk       API Routes    Razorpay
        Authentication      │       Payments
                            │
                    ┌───────┴────────┐
                    │                │
                    ▼                ▼
              Gemini AI          Prisma ORM
                                   │
                                   ▼
                            PostgreSQL / Neon
```

### AI Generation Flow

```text
User Input
    ↓
Dynamic Form
    ↓
React State
    ↓
AI Prompt + User Input
    ↓
Next.js API Route
    ↓
Google Gemini
    ↓
Generated Content
    ↓
Output Editor
```

The application uses a **template-driven architecture**, where each AI tool defines its own `slug`, `aiPrompt`, and form fields. This allows new AI tools to be added without creating separate pages or components.

## 📁 Project Structure

```text
app/
├── (data)/
│   └── Templates.tsx
├── dashboard/
│   └── [slug]/
│       ├── page.tsx
│       └── _components/
│           ├── Formsection.tsx
│           └── Outputsection.tsx
└── api/
    ├── ai/
    ├── payment/
    └── subscription/

prisma/
└── schema.prisma

components/
└── ui/
```

## 🔄 Data Flow

```text
Template
   ↓
Dynamic Form
   ↓
formData
   ↓
Parent Component
   ↓
API Route
   ↓
Gemini AI
   ↓
Generated Response
   ↓
OutputSection
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
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
```

> ⚠️ Never commit `.env` files or API keys to GitHub.

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/ai-content-generator.git
cd ai-content-generator
npm install
npx prisma generate
npm run dev
```

Open **http://localhost:3000**.

## 💳 Subscription & Credits

The platform supports:

* **Free Plan** — Limited AI usage
* **Pro Plan** — Extended AI usage with subscription billing through Razorpay

## 🌍 Deployment

The application is deployed on **Vercel** with GitHub-based CI/CD.

To deploy your own version:

1. Fork the repository
2. Import it into Vercel
3. Configure environment variables
4. Deploy 🚀

## 📸 Screenshots

<img width="2880" height="1704" alt="Dashboard" src="https://github.com/user-attachments/assets/d7b3c279-8e37-4941-9dc5-a48a2b2dc4ad" />

<img width="2880" height="1704" alt="AI Tools" src="https://github.com/user-attachments/assets/d6473ceb-7a2e-4b39-a84a-af841eda5708" />

<img width="2880" height="1704" alt="Content Generation" src="https://github.com/user-attachments/assets/021b2cca-7e7e-4617-8d01-85f32242fb1c" />

## 👨‍💻 Author

**Rohit Singh**
Computer Science & Engineering Student | Full-Stack & AI Developer

---

⭐ If you find this project useful, consider starring the repository.
