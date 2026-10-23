# 🦷 MB Dental Clinic Wah Cantt — Official Web Portal

[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%205-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/Framework-TanStack%20Start-FF4154.svg?style=flat&logo=react-router)](https://tanstack.com/start)
[![TanStack Router](https://img.shields.io/badge/Router-TanStack%20Router-FF4154.svg?style=flat&logo=react-router)](https://tanstack.com/router)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-06B6D4.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/UI-Radix%20%2F%20shadcn-black.svg?style=flat&logo=radix-ui)](https://ui.shadcn.com/)
[![Vite 8](https://img.shields.io/badge/Bundler-Vite%208-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Nitro](https://img.shields.io/badge/Server-Nitro%20Engine-F58220.svg?style=flat)](https://nitro.unjs.io/)

> **Official, modern web application for MB Dental Clinic Wah Cantt**  
> 👨‍⚕️ **Lead Practitioner:** Dr. Barkat Ali Khan  
> 📍 **Location:** Wah Cantt, Punjab, Pakistan  
> 🏥 **Specialization:** General, Restorative, Cosmetic & Painless Surgical Dental Care

---

## 📖 Overview

**MB Dental Clinic Wah** is an advanced web portal engineered to deliver an effortless digital experience for patients in Wah Cantt and surrounding areas. Built on modern full-stack web standards with **TanStack Start**, **React 19**, **Tailwind CSS v4**, and **Radix UI**, the platform offers:

- Comprehensive dental procedure guides and transparent pricing insights
- Seamless online appointment scheduling and consultation workflows
- Interactive treatment drawers and clinic tour highlights
- Direct patient communication channels and emergency care contacts

---

## ✨ Key Features

- **📅 Interactive Appointment Booking Modal**:
  - Step-by-step appointment scheduling with service selection, date picker (`react-day-picker`), and preferred time-slot selection.
  - Client-side validation powered by **React Hook Form** and **Zod**.
- **🦷 Comprehensive Dental Services Catalog**:
  - **Preventive & Routine Hygiene**: Prophylaxis, ultrasonic scaling, enamel polishing, and comprehensive oral checkups.
  - **Endodontics & Restorative**: Precision Root Canal Therapy (RCT), composite bonding, ceramic inlays, onlays, and crowns.
  - **Cosmetic Dentistry**: Professional teeth whitening, porcelain veneers, and smile makeovers.
  - **Orthodontics & Protective Devices**: Aligners, custom nightguards for bruxism, and sports mouthguards.
  - **Oral Surgery & Implants**: Dental implants, safe extractions, and surgical tooth replacement.
- **📱 Responsive Navigation & Accessible Drawers**:
  - Accessible mobile menu drawer with smooth transitions.
  - Dialogs and popovers built with **Radix UI** primitives ensuring full keyboard navigation and screen-reader accessibility.
- **👨‍⚕️ Doctor & Facility Profile**:
  - Highlights the credentials and care philosophy of **Dr. Barkat Ali Khan**.
  - Provides clinic address, operating hours, emergency guidelines, and integrated Google Maps directions.

---

## 🏛️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Fullstack Framework** | [TanStack Start](https://tanstack.com/start) & [Nitro](https://nitro.unjs.io/) |
| **Frontend Core** | [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/) |
| **Routing** | [TanStack Router](https://tanstack.com/router) (Type-safe file-based routing) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) |
| **Data Fetching** | [TanStack React Query v5](https://tanstack.com/query) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Icons & Animation** | [Lucide React](https://lucide.dev/), `tw-animate-css` |
| **Tooling** | [Vite 8](https://vitejs.dev/), [Bun](https://bun.sh/), ESLint, Prettier |

---

## 📂 Repository Structure

```text
mbdentalclinicswah/
├── src/
│   ├── assets/               # Clinic photography, logos & doctor portraits
│   ├── components/
│   │   ├── site/             # Specialized clinic components
│   │   │   ├── booking-modal.tsx   # Interactive booking workflow
│   │   │   ├── menu-drawer.tsx     # Mobile slide-out drawer
│   │   │   └── data.ts             # Service catalog, pricing & clinic meta
│   │   └── ui/               # Radix UI design system primitives
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities (styling helpers, error boundary)
│   ├── routes/               # TanStack file-based routes
│   │   ├── __root.tsx        # HTML shell, SEO metadata, fonts & providers
│   │   └── index.tsx         # Main clinic landing page
│   ├── routeTree.gen.ts      # Auto-generated TanStack route tree
│   └── router.tsx            # TanStack router instantiation
├── bunfig.toml               # Bun package configuration
├── components.json           # shadcn component configuration
├── eslint.config.js          # ESLint rules
├── package.json              # Project dependencies and script runner
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite & TanStack plugins configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended) or [Node.js](https://nodejs.org/) (v18+)

### Method 1: Using Bun (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammadumerrafiq/mbdentalclinicswah.git
   cd mbdentalclinicswah
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start local dev server:**
   ```bash
   bun run dev
   ```

4. **Visit the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Method 2: Using Node & npm / pnpm

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `vite dev` | Starts development server with hot module reloading |
| `build` | `vite build` | Compiles optimized production bundle |
| `preview` | `vite preview` | Previews production build locally |
| `lint` | `eslint .` | Runs ESLint syntax and code quality checks |
| `format` | `prettier --write .` | Formats all code using Prettier |

---

## 👤 Author & Clinic Info

- **Clinic:** MB Dental Clinic, Wah Cantt
- **Lead Practitioner:** Dr. Barkat Ali Khan
- **Developer & Maintainer:** [Muhammad Umer Rafiq](https://github.com/muhammadumerrafiq)
- **License:** Proprietary / Clinic Portfolio.
