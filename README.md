# 🦷 MB Dental Clinic Wah Cantt — Official Web Portal

[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF.svg)](https://vitejs.dev/)
[![TanStack Router](https://img.shields.io/badge/Router-TanStack%20Router-FF4154.svg)](https://tanstack.com/router)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4.svg)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/UI-Radix%20/%20shadcn-black.svg)](https://ui.shadcn.com/)

Official, responsive web application for **MB Dental Clinic Wah Cantt**, directed by Dr. Barkat. Built with **React 18**, **TanStack Router**, **TypeScript**, and **Tailwind CSS**, this platform provides patients with convenient online appointment scheduling, dental procedure overviews, interactive consultation drawers, and clinic information.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Using Bun (Recommended)](#method-1-using-bun-recommended)
  - [Using Node / NPM](#method-2-using-node--npm)
- [Clinic Services Catalog](#-clinic-services-catalog)
- [Author & License](#-author--license)

---

## ✨ Key Features

- **Online Appointment Booking**: Intuitive booking modal allowing patients to choose procedure categories, date, and preferred time slot.
- **Comprehensive Dental Services**:
  - Preventative & Routine Hygiene (Scaling, Polishing, Deep Cleaning)
  - Endodontics & Restorative (Root Canal Therapy, Ceramic Inlays, Onlays, Crowns)
  - Cosmetic Dentistry (Teeth Whitening, Veneers, Smile Makeovers)
  - Orthodontics & Protective Care (Mouthguards, Nightguards, Aligners)
  - Oral Surgery & Implants
- **Interactive Navigation & Drawer**: Responsive menu drawer, accessible dialogs, and smooth scrolling for mobile and desktop screens.
- **Clinic Identity & Doctors**: Profiles detailing Dr. Barkat and clinic facilities in Wah Cantt with location guides and direct contact shortcuts.
- **Accessible UI Components**: Built on top of accessible **Radix UI** primitives and **shadcn/ui** styling patterns with high contrast and smooth transitions.

---

## 🏛️ Architecture & Tech Stack

- **Framework**: TanStack Start / TanStack Router (File-based routing)
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS, PostCSS, Lucide React icons
- **Component Primitives**: Radix UI (Accordion, Dialog, Drawer, Dropdown, Tabs, Toast)
- **Tooling & Package Manager**: Bun / Vite / ESLint / Prettier

---

## 📂 Repository Structure

```text
mbdentalclinicswah/
├── src/
│   ├── assets/               # Clinic imagery, logos & doctor portraits
│   ├── components/
│   │   ├── site/             # Clinic components (booking-modal, menu-drawer, modals)
│   │   │   └── data.ts       # Curated dental services, benefits & pricing metadata
│   │   └── ui/               # shadcn/Radix UI accessible design system components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility helpers and error-page handlers
│   ├── routes/               # TanStack file-based routing (__root, index)
│   ├── routeTree.gen.ts      # Auto-generated TanStack route tree
│   └── router.tsx            # Router instance initialization
├── bunfig.toml               # Bun configuration
├── components.json           # shadcn/ui configuration
├── package.json              # Project dependencies and script runner
└── vite.config.ts            # Vite build configuration
```

---

## 🚀 Getting Started

### Method 1: Using Bun (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadumerrafiq/mbdentalclinicswah.git
   cd mbdentalclinicswah
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Run the development server:
   ```bash
   bun run dev
   ```
4. Open your browser at `http://localhost:3000` (or the port specified by Vite).

---

### Method 2: Using Node / NPM

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

## 🩺 Clinic Services Catalog

The platform showcases itemized dental care solutions defined in `src/components/site/data.ts`:
- **Dental Hygiene**: Routine prophylaxis, tartar removal, and oral health checkups.
- **Root Canal Therapy**: Advanced endodontic treatment preserving natural teeth.
- **Inlays & Onlays**: Custom porcelain restorations for damaged teeth.
- **Nightguards & Sports Guards**: Tailored protective appliances for bruxism and athletics.
- **Implants & Surgery**: Permanent tooth replacement and surgical oral solutions.

---

## 👤 Author & Clinic Info

- **Clinic:** MB Dental Clinic, Wah Cantt
- **Lead Practitioner:** Dr. Barkat
- **Developer:** [Muhammad Umer Rafiq](https://github.com/muhammadumerrafiq)
- **License:** Proprietary / Clinic Portfolio.
