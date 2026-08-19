# 🚀 AI Content Generator

An AI-powered content generation platform that helps users create high-quality text content quickly and efficiently using **Google Gemini AI**.

The platform provides multiple AI-powered content generation tools with **secure authentication, credit-based usage, subscription plans, payment processing, content history, and rich-text output**.

---

## 🌟 Features

* ✨ **AI-generated content** using Google Gemini API
* 🔐 **Secure authentication** with Clerk
* 💳 **Subscription & payments** via Razorpay
* 📊 **Credit-based usage tracking**
* 📝 **Rich text editor** for generated content
* 📜 **Content history tracking**
* 🧩 **Template-driven AI tools**
* ⚡ **Fast and scalable** Next.js App Router architecture
* 🗄️ **PostgreSQL database** powered by Prisma
* 🌍 **Production deployment** on Vercel
* 📱 **Responsive UI** for different screen sizes

---

# 🛠️ Tech Stack

| Category        | Technology         |
| --------------- | ------------------ |
| Frontend        | Next.js 15, React  |
| Styling         | Tailwind CSS       |
| Backend         | Next.js API Routes |
| Authentication  | Clerk              |
| AI              | Google Gemini API  |
| Payments        | Razorpay           |
| Database        | PostgreSQL / Neon  |
| ORM             | Prisma             |
| Deployment      | Vercel             |
| Version Control | Git / GitHub       |

---

# 🏗️ Architecture

The application follows a **full-stack, template-driven AI architecture** built with Next.js App Router.

The frontend manages user interaction and application state, while Next.js API routes handle AI generation, payment processing, subscription management, credit management, and database operations.

## System Architecture

```text
                                  ┌──────────────────────┐
                                  │        USER          │
                                  │      Web Browser     │
                                  └──────────┬───────────┘
                                             │
                                             ▼
                         ┌─────────────────────────────────┐
                         │        Next.js 15 Application   │
                         │                                 │
                         │        App Router / React       │
                         │                                 │
                         │  ┌───────────────────────────┐  │
                         │  │       Dashboard           │  │
                         │  │                           │  │
                         │  │  AI Tool Selection        │  │
                         │  │  Dynamic Forms            │  │
                         │  │  Generated Output         │  │
                         │  └─────────────┬─────────────┘  │
                         │                │                │
                         │                ▼                │
                         │  ┌───────────────────────────┐  │
                         │  │     Template System       │  │
                         │  │                           │  │
                         │  │  • Tool Name              │  │
                         │  │  • Slug                   │  │
                         │  │  • AI Prompt              │  │
                         │  │  • Form Fields            │  │
                         │  └─────────────┬─────────────┘  │
                         │                │                │
                         └────────────────┼────────────────┘
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
                    ▼                     ▼                     ▼
          ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
          │   Clerk Auth     │  │  Next.js API     │  │    Razorpay      │
          │                  │  │     Routes       │  │                  │
          │ • Sign Up        │  │                  │  │ • Payments       │
          │ • Sign In        │  │ • AI Generation  │  │ • Subscription   │
          │ • User Identity  │  │ • Credits        │  │ • Verification   │
          └──────────────────┘  │ • History        │  └────────┬─────────┘
                                └────────┬─────────┘           │
                                         │                     │
                         ┌───────────────┼─────────────────────┘
                         │               │
                         ▼               ▼
                ┌────────────────┐  ┌────────────────────┐
                │ Google Gemini  │  │ Prisma ORM         │
                │      API       │  │                    │
                │                │  │ Database Operations │
                │ • Prompt       │  └─────────┬──────────┘
                │ • Generation   │            │
                │ • Response     │            ▼
                └───────┬────────┘  ┌────────────────────┐
                        │            │ PostgreSQL / Neon  │
                        │            │                    │
                        │            │ • Users            │
                        │            │ • Credits          │
                        │            │ • Subscriptions    │
                        │            │ • Generated Content│
                        │            │ • History           │
                        │            └────────────────────┘
                        │
                        ▼
                ┌────────────────────┐
                │ Generated Content  │
                │                    │
                │ Output Section     │
                │ Rich Text Editor   │
                └────────────────────┘
```

---

# 🔄 AI Content Generation Flow

The AI generation process follows this flow:

```text
User selects AI tool
        │
        ▼
Slug identifies template
        │
        ▼
Template provides AI prompt
        │
        ▼
Dynamic form is generated
        │
        ▼
User enters content
        │
        ▼
Form data stored in React state
        │
        ▼
Form submitted
        │
        ▼
Parent component receives form data
        │
        ▼
AI Prompt + User Input
        │
        ▼
Next.js API Route
        │
        ▼
Google Gemini API
        │
        ▼
Generated Response
        │
        ▼
Response stored in React state
        │
        ▼
Output Section / Rich Text Editor
```

### Example

Suppose the user selects the **Blog Title Generator**.

The user enters:

```text
Niche:
Fitness

Outline:
Benefits of daily exercise
```

The form state becomes:

```javascript
{
    niche: "Fitness",
    outline: "Benefits of daily exercise"
}
```

The application combines the template's AI prompt with the user's input:

```text
AI Prompt:
Give me 5 blog topic ideas based on niche and outline.

User Input:
Niche: Fitness
Outline: Benefits of daily exercise
```

This request is sent to the Gemini API.

The generated response is then returned to the application and displayed in the output section.

---

# 🧩 Template-Driven Architecture

One of the main architectural decisions in the project is the use of a **template-driven system**.

Instead of creating a separate page and form for every AI tool, all tools are defined inside a centralized template configuration.

Example:

```javascript
{
    name: "Blog Title",

    slug: "generate-blog-title",

    desc: "Generate blog title ideas",

    aiPrompt:
        "Give me 5 blog topic ideas based on niche and outline",

    form: [
        {
            label: "Enter your blog niche",
            field: "input",
            name: "niche",
            required: true
        },
        {
            label: "Enter blog outline",
            field: "textarea",
            name: "outline"
        }
    ]
}
```

Each template contains:

* `name` — Name displayed to the user
* `slug` — Unique identifier for routing
* `desc` — Description of the tool
* `aiPrompt` — Prompt sent to the AI
* `form` — Configuration for generating the input form

### Benefits

This architecture provides:

* ♻️ Reusable components
* 🚀 Easy addition of new AI tools
* 🧩 Dynamic form generation
* 📦 Centralized configuration
* 🛠️ Less duplicate code
* 📈 Better scalability

To add another AI tool, a new template can be added without creating an entirely new page or form component.

---

# 📝 Dynamic Form Generation

The selected tool's slug is passed to the form component.

```tsx
<Formsection
    slugvalue={params.slug}
    userforminput={Generateaicontent}
/>
```

The corresponding template is found using:

```tsx
const template = Templates.find(
    (item) => item.slug === slugvalue
);
```

The form fields are then generated dynamically:

```tsx
template.form.map(...)
```

This means the same `FormSection` component can generate different forms depending on the selected AI tool.

For example:

```text
Blog Title
    ↓
Niche + Outline

YouTube SEO
    ↓
Keywords + Outline

Code Generator
    ↓
Code Description

Instagram Hashtag Generator
    ↓
Keywords
```

---

# 📊 State & Data Flow

React state is used to maintain the user's form input.

```tsx
const [formData, setFormData] = useState<{
    [key: string]: string
}>({});
```

For example, after entering fitness-related information:

```javascript
{
    niche: "Fitness",
    outline: "Benefits of daily exercise"
}
```

The state is updated dynamically:

```tsx
setFormData((prev) => ({
    ...prev,
    [name]: value
}));
```

The field's `name` becomes the object key, while the user's input becomes its value.

```text
field.name
    ↓
Object Key

e.target.value
    ↓
Object Value
```

Example:

```javascript
{
    niche: "Fitness"
}
```

---

# 🔗 Parent-Child Data Flow

The application uses React props and callback functions for communication between components.

```text
                 ContentItemSlug
                       │
                       │ Props
                       ▼
                 FormSection
                       │
                       │ formData
                       ▼
              userforminput()
                       │
                       ▼
                 ContentItemSlug
                       │
                       │ AI Request
                       ▼
                   Gemini AI
                       │
                       │ Response
                       ▼
                 ContentItemSlug
                       │
                       │ output
                       ▼
                 OutputSection
```

The parent passes the AI generation function to the form:

```tsx
userforminput={Generateaicontent}
```

The child receives the function:

```tsx
function Formsection({
    slugvalue,
    userforminput
}: Props)
```

When the form is submitted:

```tsx
userforminput(formData);
```

This executes the parent's:

```tsx
Generateaicontent(formData);
```

This allows the child component to send the user's form data back to the parent.

---

# 🤖 AI Integration

Google Gemini is responsible for generating the final content.

The application sends:

```text
Template AI Prompt
        +
User Form Data
        ↓
Next.js API Route
        ↓
Google Gemini API
        ↓
Generated Content
```

The AI API is called from the server-side API route so that sensitive credentials such as the Gemini API key are not exposed to the browser.

---

# 💳 Subscription & Credit Flow

The application uses Razorpay for subscription and payment processing.

```text
User
 │
 ▼
Select Subscription Plan
 │
 ▼
Razorpay Checkout
 │
 ▼
Payment
 │
 ▼
Payment Verification
 │
 ▼
Razorpay Signature Verification
 │
 ▼
Next.js API Route
 │
 ▼
Update Subscription / Credits
 │
 ▼
PostgreSQL Database
 │
 ▼
Updated User Plan
```

AI usage is connected to the user's available credits.

```text
AI Request
    │
    ▼
Check User / Credits
    │
    ├──────── No Credits ────────► Reject Request
    │
    └──────── Credits Available
                    │
                    ▼
               Gemini API
                    │
                    ▼
             Generate Content
                    │
                    ▼
              Update Credits
                    │
                    ▼
              Save History
```

---

# 🔐 Authentication & Security

Authentication is handled using **Clerk**.

```text
User
 │
 ▼
Clerk Authentication
 │
 ▼
Authenticated Session
 │
 ▼
Next.js Application
 │
 ▼
Protected API Routes
 │
 ├── AI Generation
 ├── Credit Management
 ├── Subscription
 └── Content History
```

### Security practices

* 🔐 Clerk authentication
* 🔑 API keys stored in environment variables
* 🛡️ Server-side API routes for sensitive operations
* 💳 Razorpay payment signature verification
* 🚫 `.env` files excluded from Git
* 🔒 Database credentials protected using environment variables

---

# 🗄️ Database Architecture

The application uses **PostgreSQL hosted on Neon** with **Prisma ORM**.

```text
Next.js API Routes
        │
        ▼
      Prisma
        │
        ▼
PostgreSQL / Neon
        │
        ├── User Data
        ├── Credit Information
        ├── Subscription Data
        └── Generated Content / History
```

Prisma provides type-safe access to the PostgreSQL database and simplifies database operations from the backend.

---

# ☁️ Deployment Architecture

The application is deployed on **Vercel** with GitHub-based CI/CD.

```text
Developer
    │
    ▼
GitHub Repository
    │
    │ Push / Pull Request
    ▼
Vercel
    │
    ├── Build Next.js Application
    │
    ├── Configure Environment Variables
    │
    └── Deploy
         │
         ▼
      Production
         │
         ├──────────────► Clerk
         │
         ├──────────────► Gemini API
         │
         ├──────────────► Razorpay
         │
         └──────────────► Neon PostgreSQL
```

---

# 📁 Project Structure

```text
ai-content-generator/
│
├── app/
│   │
│   ├── (data)/
│   │   └── Templates.tsx
│   │
│   ├── dashboard/
│   │   ├── page.tsx
│   │   │
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       │
│   │       └── _components/
│   │           ├── Formsection.tsx
│   │           └── Outputsection.tsx
│   │
│   └── api/
│       ├── ai/
│       ├── payment/
│       ├── subscription/
│       └── ...
│
├── components/
│   └── ui/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── .env
├── package.json
└── README.md
```

> **Note:** Update the project structure above if your actual repository uses different folder or API route names.

---

# 🖥️ Screenshots

### Dashboard

<img width="2880" height="1704" alt="AI Content Generator Dashboard" src="https://github.com/user-attachments/assets/d7b3c279-8e37-4941-9dc5-a48a2b2dc4ad" />

### AI Tool Selection

<img width="2880" height="1704" alt="AI Tool Selection" src="https://github.com/user-attachments/assets/d6473ceb-7a2e-4b39-a84a-af841eda5708" />

### Content Generation

<img width="2880" height="1704" alt="Content Generation" src="https://github.com/user-attachments/assets/021b2cca-7e7e-4617-8d01-85f32242fb1c" />

### Generated Output

<img width="2880" height="1704" alt="Generated Output" src="https://github.com/user-attachments/assets/79fedffd-dd37-4808-a4aa-73c05a03d43c" />

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

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

> ⚠️ **Never commit `.env` or any file containing secrets to GitHub.**

Add `.env` to your `.gitignore`:

```text
.env
.env.local
.env.production
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-content-generator.git
```

Navigate into the project:

```bash
cd ai-content-generator
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Environment Variables

Create a `.env` file and add the required environment variables.

See the [Environment Variables](#️-environment-variables) section above.

## 4️⃣ Generate Prisma Client

```bash
npx prisma generate
```

If database migrations are required:

```bash
npx prisma migrate dev
```

## 5️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# 💳 Subscription & Credits

The application supports credit-based AI usage and subscription plans.

### 🆓 Free Plan

* Limited AI usage
* Access to supported AI tools
* Credit-based generation

### 💎 Pro Plan

* Increased or unlimited AI content generation according to the configured plan
* Priority access
* Secure monthly billing
* Razorpay-powered subscription

> Plan limits and pricing depend on the configuration of the deployed application.

---

# 📜 Content History

Generated content can be tracked through the application's content history functionality.

This allows users to:

* View previously generated content
* Keep track of AI generations
* Reuse generated content
* Maintain a history of their work

---

# 🔒 Security

The application follows several security practices:

* Secure authentication using Clerk
* Server-side handling of sensitive API operations
* Environment variables for secrets
* Razorpay signature verification
* Protected database credentials
* Secure API routes
* `.env` excluded from version control

> ⚠️ Never expose `CLERK_SECRET_KEY`, `GEMINI_API_KEY`, `RAZORPAY_SECRET`, or `DATABASE_URL` in client-side code or public repositories.

---

# 📦 Deployment

This project is deployed on **Vercel** with CI/CD enabled through GitHub.

To deploy your own version:

### 1. Fork the repository

```text
GitHub → Fork
```

### 2. Connect the repository to Vercel

Import the GitHub repository into Vercel.

### 3. Configure environment variables

Add all required environment variables in:

```text
Vercel Dashboard
    ↓
Project Settings
    ↓
Environment Variables
```

### 4. Deploy

Vercel automatically builds and deploys the application.

---

# ❓ Help & Support

If you experience issues related to:

* 💳 Payment
* 📊 Subscription activation
* 🎟️ Credits not updating
* 🤖 AI generation
* 🔐 Authentication

Please contact the support details provided in the application.

📧 **Email:** Support email provided in the app

💬 **WhatsApp:** Fast-response support

---

# 🙌 Acknowledgements

This project uses the following technologies and services:

* [Google Gemini](https://ai.google.dev/)
* [Clerk](https://clerk.com/)
* [Razorpay](https://razorpay.com/)
* [Prisma](https://www.prisma.io/)
* [Neon](https://neon.tech/)
* [Vercel](https://vercel.com/)
* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

---

# 👨‍💻 Author

## Rohit

**Computer Science & Engineering Student**

Passionate about:

* Full-Stack Development
* Artificial Intelligence
* Generative AI
* Next.js
* React
* Backend Development
* Building AI-powered products

---

# ⭐ Show Your Support

If you found this project useful or interesting, please consider giving the repository a ⭐.

Your support is greatly appreciated! 🚀

---

## 📌 Project Highlights

```text
Next.js 15
     +
React
     +
Google Gemini
     +
Clerk
     +
Razorpay
     +
Prisma
     +
PostgreSQL / Neon
     +
Vercel
     ↓
AI Content Generation Platform
```

**Built with ❤️ by Rohit**
