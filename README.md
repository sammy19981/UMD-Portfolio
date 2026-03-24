# Sameer Saxena — Portfolio

A premium dark-mode portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind + custom utilities (noise, glass, gradients)
│   ├── layout.tsx           # Root layout with metadata & SEO
│   └── page.tsx             # All sections (Hero → Contact)
├── lib/
│   ├── projects.ts          # Projects data with types
│   ├── data.ts              # Experience, certs, skills data
│   └── utils.ts             # cn() utility
├── public/
│   └── Resume_SameerSaxena.pdf  ← Place your resume here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Design System

| Token          | Value                          |
|----------------|--------------------------------|
| Background     | `#09090b` (Zinc 950)           |
| Surface 1      | `#0c0c0f`                      |
| Surface 3      | `#18181b` (Zinc 900)           |
| Text Primary   | `#fafafa`                      |
| Text Secondary | `#a1a1aa` (Zinc 400)           |
| Text Tertiary  | `#71717a` (Zinc 500)           |
| Accent         | `#6366f1` (Indigo 500)         |
| Accent Dim     | `rgba(99,102,241,0.15)`        |
| Success        | `#34d399` (Emerald 400)        |
| Border         | `rgba(255,255,255,0.06)`       |
| Font Sans      | Geist / SF Pro / system        |
| Font Mono      | Geist Mono / SF Mono           |

## 🚀 Deploy to Vercel (Step-by-Step)

### Prerequisites
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier works)
- Git installed locally
- Node.js 18+ installed

### Step 1: Initialize the Repository

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio site"
```

### Step 2: Push to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository (e.g., `portfolio`)
3. **Do NOT** initialize with README (you already have one)
4. Push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Add Your Resume

Place `Resume_SameerSaxena.pdf` in the `public/` folder, then:

```bash
git add public/Resume_SameerSaxena.pdf
git commit -m "Add resume"
git push
```

### Step 4: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `portfolio` repo
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **Deploy**

Vercel will:
- Install dependencies (`npm install`)
- Build the project (`next build`)
- Deploy to a `.vercel.app` URL

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add your custom domain (e.g., `sameersaxena.dev`)
3. Update DNS records as instructed (usually an A record or CNAME)
4. SSL is automatic

## 🔧 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📝 Editing Content

All data lives in `lib/`:

| File            | What to edit                        |
|-----------------|-------------------------------------|
| `projects.ts`   | Project titles, descriptions, tech  |
| `data.ts`       | Experience, certifications, skills  |
| `page.tsx`      | Layout, hero text, contact info     |

## Key Features

- **Dark mode** with Zinc/Slate/Indigo palette
- **Glassmorphism** cards with `backdrop-filter: blur()`
- **Framer Motion** scroll-triggered animations
- **Lucide React** icons throughout
- **Responsive** — mobile-first Tailwind
- **SEO** — OpenGraph + Twitter meta tags
- **Noise texture** overlay for depth
- **Dot grid** background pattern
- **Glow lines** between sections
- **Parallax** hero background orbs
