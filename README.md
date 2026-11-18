# Kinza — Senior Full-Stack Developer & Cybersecurity Researcher Portfolio

A modern, high-performance, responsive personal portfolio website engineered for **Kinza**, a developer and cybersecurity researcher specializing in secure web applications, machine learning integration, and proactive vulnerability research.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80)

---

## 🛡️ Core Highlights & Architectural Features

- **Cybersecurity & Engineering Convergence:** Showcases full-stack software development alongside offensive bug bounty hunting and defensive hardening.
- **Premium Dark Palette:** Styled with deep blacks (`#030712`), rich navies (`#0f172a`), cyan glows, and sleek glassmorphic panels.
- **Interactive Security Terminal (CLI):** Fully functional interactive web terminal (`Ctrl+K` or click) supporting commands like `help`, `whoami`, `skills`, `projects`, `scan`, `contact`, `cv`, and `clear`.
- **Live OWASP Security Posture Audit:** Real-time simulated security inspector demonstrating TLS 1.3, Content Security Policy (CSP), XSS output sterilization, parameterized SQL defense, and rate-limiting.
- **Curriculum Vitae (CV) Engine:** Real-time printable modal with print-to-PDF formatting and direct Markdown/plaintext resume download.
- **Interactive Project Architecture Inspector:** Filterable project showcase with deep-dive modal detailing system architecture, defensive mitigations, and technology stacks.
- **Encrypted Contact Form:** Client-side validated and sanitized transmission form with simulated cryptographic dispatch and toast notifications.
- **SEO & Accessibility Ready:** Complete Open Graph metadata, semantic HTML5, WCAG 2.1 AA compliant contrast ratios, and keyboard navigation.

---

## 💻 Tech Stack

- **Frontend Core:** React 19, TypeScript
- **Styling & Design System:** Tailwind CSS v4, Custom Cyber Grid & Radar Animations
- **Icons & Visuals:** Lucide React, Custom High-Resolution SVG Brand Icons
- **Build Tool:** Vite 8 (Sub-second HMR and production bundling)
- **Deployment & Hosting:** Optimized for Vercel with SPA rewrite rules and hardened HTTP security headers

---

## 🗂️ Project Structure

```
kinza_portfolio/
├── public/
│   └── favicon.svg               # Custom cyber shield SVG favicon
├── src/
│   ├── components/
│   │   ├── About.tsx             # Professional background & education
│   │   ├── Certifications.tsx    # Verified industry credentials & achievements
│   │   ├── Contact.tsx           # Contact form, direct links & copy actions
│   │   ├── CvModal.tsx           # Formatted CV preview, print & download
│   │   ├── Experience.tsx        # Bug bounty timeline & vulnerability matrix
│   │   ├── Footer.tsx            # Footer navigation & status indicator
│   │   ├── Hero.tsx              # Hero headline, CTAs, telemetry preview
│   │   ├── Icons.tsx             # Reusable SVG brand icons
│   │   ├── LiveSecurityAudit.tsx # Real-time OWASP security checklist
│   │   ├── Navbar.tsx            # Sticky glassmorphism header & mobile drawer
│   │   ├── ProjectModal.tsx      # Deep architecture & security modal
│   │   ├── Projects.tsx          # Filterable project gallery & search
│   │   ├── SecurityTerminal.tsx  # Interactive terminal CLI easter egg
│   │   ├── Skills.tsx            # Technical matrix & proficiencies
│   │   └── Toast.tsx             # Non-intrusive action feedback toasts
│   ├── data/
│   │   └── portfolioData.ts      # Structured data source for profile & projects
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── App.tsx                   # Main layout & scrollspy coordinator
│   ├── index.css                 # Tailwind CSS v4 & custom cyber keyframes
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO meta tags, Open Graph & typography
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript compiler configurations
├── vercel.json                   # Vercel SPA routing & security headers
└── vite.config.ts                # Vite plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended, verified on v24)
- npm or pnpm / yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd kinza_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Run production build:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## ☁️ Deployment to Vercel

This project is fully prepared for instant deployment on [Vercel](https://vercel.com):

### Option 1: Via Vercel Dashboard (GitHub)
1. Push this repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Vercel will automatically detect the **Vite** framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

### Option 2: Via Vercel CLI
```bash
npx vercel
```
For production release:
```bash
npx vercel --prod
```

The included `vercel.json` automatically configures single-page application (SPA) routing rewrites and injects production security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Content-Security-Policy`).

---

## 📄 License & Attribution

Designed and engineered with strict adherence to authentic credentials and coordinated vulnerability disclosure standards.
All rights reserved © Kinza.
