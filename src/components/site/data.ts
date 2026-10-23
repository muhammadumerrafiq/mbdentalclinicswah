import sportsMouthguardsImg from "@/assets/Sports Mouthguards.png";
import nightGuardsImg from "@/assets/Night Guards for Teeth Grinding.png";
import gumDiseaseImg from "@/assets/Gum Disease.png";
import oralHygieneInstructionImg from "@/assets/Oral Hygiene Instruction.png";
import rootCanalTherapyImg from "@/assets/Root Canal Therapy.png";
import inlaysAndOnlaysImg from "@/assets/Inlays and Onlays.png";
import dentalImplantsImg from "@/assets/Dental Implants.png";
import denturesFullPartialImg from "@/assets/Dentures (Full & Partial).png";
import dentalCrownsBridgesImg from "@/assets/Dental Crowns & Bridges.png";
import toothRecontouringImg from "@/assets/Tooth Recontouring.png";
import smileMakeoversImg from "@/assets/Smile Makeovers.png";
import cosmeticBondingImg from "@/assets/Cosmetic Bonding.png";
import porcelainVeneersImg from "@/assets/Porcelain Veneers.png";
import dentalCheckUpsImg from "@/assets/Dental Check-ups.png";
import teethCleaningPolishingImg from "@/assets/Teeth Cleaning & Polishing.png";
import digitalXRaysImg from "@/assets/Digital X-rays.png";
import toothColoredFillingsImg from "@/assets/Tooth-colored Fillings.png";
import sealantsFluorideTreatmentsImg from "@/assets/Sealants & Fluoride Treatments.png";
import teethWhiteningBleachingImg from "@/assets/Teeth Whitening (Bleaching).png";

import dentureImg from "@/assets/Denture.png";
import veneerImg from "@/assets/Veneer.png";
import zirconiaCrownImg from "@/assets/Zirconia Crown.png";
import invisalignImg from "@/assets/Invisalign.png";
import teethWhiteningImg from "@/assets/Teeth Whitening.png";
import oralSurgeryImg from "@/assets/Oral Surgery.png";

import blogOrthodonticsImg from "@/assets/A Modern Guide to Orthodontics.png";
import blogOralHygieneImg from "@/assets/Daily Oral Hygiene, Done Right.png";
import blogTeethWhiteningImg from "@/assets/Teeth Whitening What Actually Works.png";

export type Service = {
  name: string;
  description: string;
  image: string;
  benefits: string[];
  suitable: string;
};

export const dentalServices: Service[] = [
  {
    name: "Sports Mouthguards",
    description: "Custom-fit protection for athletes and active lifestyles.",
    image: sportsMouthguardsImg,
    benefits: [
      "Shock-absorbing custom fit",
      "Protects teeth, gums and jaw",
      "Comfortable & breathable",
    ],
    suitable: "Athletes and anyone playing contact sports.",
  },
  {
    name: "Night Guards for Teeth Grinding",
    description: "Stop bruxism damage with custom night-time guards.",
    image: nightGuardsImg,
    benefits: ["Prevents enamel wear", "Relieves jaw tension", "Improves sleep quality"],
    suitable: "Patients who grind or clench their teeth at night.",
  },
  {
    name: "Gum Disease",
    description: "Comprehensive periodontal therapy to restore healthy gums.",
    image: gumDiseaseImg,
    benefits: ["Halts bone loss", "Reduces inflammation", "Improves overall health"],
    suitable: "Patients with bleeding, swollen or receding gums.",
  },
  {
    name: "Oral Hygiene Instruction",
    description: "Personalised guidance to keep your smile healthy at home.",
    image: oralHygieneInstructionImg,
    benefits: [
      "Tailored brushing technique",
      "Flossing & interdental care",
      "Long-term prevention",
    ],
    suitable: "Every patient — children to adults.",
  },
  {
    name: "Root Canal Therapy",
    description: "Save infected teeth with gentle, modern endodontics.",
    image: rootCanalTherapyImg,
    benefits: ["Eliminates pain", "Preserves natural tooth", "Performed under anaesthesia"],
    suitable: "Patients with deep decay or tooth infection.",
  },
  {
    name: "Inlays and Onlays",
    description: "Conservative porcelain restorations for damaged teeth.",
    image: inlaysAndOnlaysImg,
    benefits: ["Stronger than fillings", "Natural appearance", "Long-lasting"],
    suitable: "Teeth too damaged for fillings but not needing crowns.",
  },
  {
    name: "Dental Implants",
    description: "Permanent titanium roots that look and feel natural.",
    image: dentalImplantsImg,
    benefits: ["Lifetime solution", "Preserves jawbone", "Restores full function"],
    suitable: "Patients with one or more missing teeth.",
  },
  {
    name: "Dentures (Full & Partial)",
    description: "Premium dentures crafted for comfort and confidence.",
    image: denturesFullPartialImg,
    benefits: ["Custom shade matching", "Comfortable secure fit", "Restores chewing & speech"],
    suitable: "Patients missing multiple or all teeth.",
  },
  {
    name: "Dental Crowns & Bridges",
    description: "Restore strength and beauty with porcelain crowns.",
    image: dentalCrownsBridgesImg,
    benefits: ["High-strength ceramic", "Indistinguishable from natural teeth", "Long lifespan"],
    suitable: "Cracked, weakened or missing teeth.",
  },
  {
    name: "Tooth Recontouring",
    description: "Subtle reshaping for a more balanced smile.",
    image: toothRecontouringImg,
    benefits: ["Quick & painless", "No anaesthesia required", "Immediate results"],
    suitable: "Minor chips or uneven edges.",
  },
  {
    name: "Smile Makeovers",
    description: "A bespoke plan that transforms your entire smile.",
    image: smileMakeoversImg,
    benefits: [
      "Fully personalised design",
      "Combines multiple treatments",
      "Life-changing results",
    ],
    suitable: "Anyone wanting comprehensive cosmetic change.",
  },
  {
    name: "Cosmetic Bonding",
    description: "Repair chips and gaps with tooth-coloured composite.",
    image: cosmeticBondingImg,
    benefits: ["Single-visit treatment", "Affordable & reversible", "Natural finish"],
    suitable: "Minor chips, gaps or discoloration.",
  },
  {
    name: "Porcelain Veneers",
    description: "Ultra-thin shells for a flawless, bright smile.",
    image: porcelainVeneersImg,
    benefits: ["Stain-resistant", "Custom-designed", "Up to 15+ years lifespan"],
    suitable: "Patients seeking a permanent cosmetic upgrade.",
  },
  {
    name: "Dental Check-Ups",
    description: "Regular exams to keep problems small.",
    image: dentalCheckUpsImg,
    benefits: ["Early problem detection", "Personalised care plan", "Peace of mind"],
    suitable: "Recommended for every patient every 6 months.",
  },
  {
    name: "Teeth Cleaning & Polishing",
    description: "Professional scaling that removes plaque and brightens enamel.",
    image: teethCleaningPolishingImg,
    benefits: ["Removes tartar & stains", "Fresher breath", "Healthier gums"],
    suitable: "Recommended every 6 months.",
  },
  {
    name: "Digital X-Rays",
    description: "Low-radiation imaging for precise diagnosis.",
    image: digitalXRaysImg,
    benefits: ["90% less radiation", "Instant results", "Detailed imaging"],
    suitable: "Used for diagnostic evaluation when needed.",
  },
  {
    name: "Tooth-Colored Fillings",
    description: "Invisible, mercury-free restorations.",
    image: toothColoredFillingsImg,
    benefits: ["Matches natural enamel", "Bonds to tooth", "Mercury-free"],
    suitable: "Cavities and minor tooth damage.",
  },
  {
    name: "Sealants & Fluoride Treatments",
    description: "Preventive care, especially for children's teeth.",
    image: sealantsFluorideTreatmentsImg,
    benefits: ["Long-term cavity protection", "Quick & painless", "Strengthens enamel"],
    suitable: "Children, teens and high-risk adults.",
  },
  {
    name: "Teeth Whitening (Bleaching)",
    description: "Professional whitening that's safe and effective.",
    image: teethWhiteningBleachingImg,
    benefits: ["Up to 8 shades brighter", "Safe enamel-friendly", "Long-lasting results"],
    suitable: "Anyone with healthy teeth wanting a brighter smile.",
  },
];

export const advancedServices: Service[] = [
  {
    name: "Denture",
    description: "Premium full and partial dentures crafted for natural look and comfort.",
    image: dentureImg,
    benefits: ["High-grade materials", "Secure custom fit", "Aesthetic shade matching"],
    suitable: "Patients missing multiple or all teeth.",
  },
  {
    name: "Dental Implants",
    description: "Surgical-grade titanium implants restored with custom ceramic crowns.",
    image: dentalImplantsImg,
    benefits: ["Lifetime durability", "Preserves jawbone", "Looks & feels natural"],
    suitable: "Patients with one or more missing teeth.",
  },
  {
    name: "Veneer",
    description: "Ultra-thin porcelain veneers for a Hollywood-grade smile.",
    image: veneerImg,
    benefits: ["Stain resistant", "Minimally invasive", "Dramatic transformation"],
    suitable: "Patients seeking long-term cosmetic results.",
  },
  {
    name: "Zirconia Crown",
    description: "Metal-free, ultra-strong, life-like ceramic crowns.",
    image: zirconiaCrownImg,
    benefits: ["Exceptional strength", "Biocompatible", "Natural translucency"],
    suitable: "Front or back teeth needing strong, beautiful crowns.",
  },
  {
    name: "Invisalign",
    description: "Discreet clear aligners to straighten teeth without braces.",
    image: invisalignImg,
    benefits: ["Virtually invisible", "Removable for eating", "Faster than traditional braces"],
    suitable: "Teens and adults with mild–moderate misalignment.",
  },
  {
    name: "Teeth Whitening",
    description: "Advanced in-clinic whitening with predictable, safe results.",
    image: teethWhiteningImg,
    benefits: ["Visible results in one visit", "Enamel-safe formulation", "Custom shade goals"],
    suitable: "Anyone wanting a noticeably brighter smile.",
  },
  {
    name: "Oral Surgery",
    description: "Complex extractions, surgical procedures and OMFS care.",
    image: oralSurgeryImg,
    benefits: ["Specialist-led care", "Modern sedation options", "Smooth recovery"],
    suitable: "Patients needing surgical dental treatment.",
  },
];

export type Doctor = {
  id: string;
  name: string;
  role: string;
  image?: string;
  initials: string;
  bio: string;
  qualifications: string[];
  experience: string;
  memberships: string[];
};

export const doctors: Doctor[] = [
  {
    id: "barkat",
    name: "Dr. Barkat Ali Khan",
    role: "Chief Executive & Dental Consultant",
    initials: "BA",
    bio: "Dr. Barkat Ali Khan is the founder and chief dental consultant of MB Dental Clinic Wah. With years of clinical experience and a passion for premium, painless dentistry, he combines modern techniques with a warm, patient-first approach to deliver outstanding results.",
    qualifications: [
      "BDS — Bachelor of Dental Surgery",
      "Certified in Cosmetic & Restorative Dentistry",
      "Advanced training in Dental Implants",
    ],
    experience: "10+ years of clinical practice across cosmetic, restorative and family dentistry.",
    memberships: [
      "Pakistan Medical & Dental Council (PMDC) Registered",
      "Pakistan Dental Association",
    ],
  },
  {
    id: "ahsan",
    name: "Dr. Ahsan Rush",
    role: "Visiting Consultant & Head of Department (OMFS)",
    initials: "AR",
    bio: "Dr. Ahsan Rush is a distinguished Oral & Maxillofacial Surgeon serving as Head of Department and visiting consultant at MB Dental Clinic. He brings advanced surgical expertise to complex cases including implants, extractions and reconstructive procedures.",
    qualifications: [
      "BDS, FCPS (Oral & Maxillofacial Surgery)",
      "Specialist OMFS Training",
      "Implantology Certifications",
    ],
    experience:
      "Specialist consultant in Oral & Maxillofacial Surgery with extensive surgical experience.",
    memberships: ["College of Physicians and Surgeons Pakistan", "Pakistan Dental Association"],
  },
];

export const testimonials = [
  {
    name: "Ayesha K.",
    rating: 5,
    quote:
      "The most comfortable dental visit I've ever had. The clinic feels like a luxury spa and Dr. Barkat is incredibly gentle.",
  },
  {
    name: "Hassan M.",
    rating: 5,
    quote:
      "I had implants done here — the results are perfect and the entire process was painless. Highly recommended.",
  },
  {
    name: "Sana R.",
    rating: 5,
    quote:
      "Got my veneers at MB Dental and I can't stop smiling. Truly premium experience from start to finish.",
  },
  {
    name: "Imran A.",
    rating: 5,
    quote:
      "Modern equipment, immaculate hygiene and a doctor who genuinely listens. This is healthcare done right.",
  },
  {
    name: "Maria T.",
    rating: 5,
    quote:
      "Took my kids for check-ups — the staff made them feel so safe. We finally found our family dentist.",
  },
  {
    name: "Omar S.",
    rating: 5,
    quote:
      "Whitening results exceeded my expectations. The clinic itself is stunning and the team super professional.",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Click the Book Appointment button at the top of the page to open our booking form, or call us directly at 051-4916333. You can also message us on WhatsApp at 0313-4446333.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "We prefer scheduled appointments to give every patient the time and attention they deserve, but we accommodate urgent cases whenever possible. Please call ahead.",
  },
  {
    q: "Is dental treatment at MB Dental painful?",
    a: "We specialise in gentle, painless dentistry. We use modern anaesthesia, sedation options where appropriate, and a calm patient-first approach to ensure your comfort.",
  },
  {
    q: "How much do treatments cost?",
    a: "Costs vary based on your treatment plan. After a consultation we provide a clear, written estimate before any work begins — with no hidden fees.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We offer paediatric check-ups, cleanings, fluoride treatments and sealants in a warm, child-friendly environment.",
  },
  {
    q: "What hygiene protocols do you follow?",
    a: "We follow international sterilisation standards. Every instrument is autoclaved and treatment rooms are sanitised between every patient.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a check-up and professional cleaning every 6 months for most patients to catch issues early and maintain optimal oral health.",
  },
];

export const blogPosts = [
  {
    title: "A Modern Guide to Orthodontics",
    excerpt:
      "From traditional braces to Invisalign — how to choose the right path to a straighter smile.",
    category: "Orthodontics",
    image: blogOrthodonticsImg,
  },
  {
    title: "Daily Oral Hygiene, Done Right",
    excerpt:
      "Brushing, flossing and the small daily habits that prevent expensive treatments later.",
    category: "Oral Hygiene",
    image: blogOralHygieneImg,
  },
  {
    title: "Teeth Whitening: What Actually Works",
    excerpt:
      "Separating myths from facts — and the safest professional options for a brighter smile.",
    category: "Teeth Whitening",
    image: blogTeethWhiteningImg,
  },
];

export const processSteps = [
  {
    title: "Warm Welcome & Consultation",
    short: "A friendly first conversation about your goals and concerns.",
    long: "We start with a relaxed, no-pressure chat. We listen carefully to your concerns, your medical history and what you'd like to achieve so every recommendation is genuinely tailored to you.",
  },
  {
    title: "Advanced Digital Examination",
    short: "Modern imaging for a precise, evidence-based diagnosis.",
    long: "Using digital X-rays, intra-oral cameras and detailed clinical examination we build a complete picture of your oral health — so nothing is missed and nothing is over-treated.",
  },
  {
    title: "Choose Between Our Care Programs",
    short: "A clear, transparent plan with options that suit you.",
    long: "We walk you through every viable option — including costs, timelines and trade-offs — so you can confidently choose the program that fits your goals and your budget.",
  },
  {
    title: "Gentle, Painless Care",
    short: "Modern techniques and warm hospitality at every visit.",
    long: "From modern anaesthesia to a calm clinical environment, every step is designed for your comfort. Most patients are surprised by how relaxed treatment actually feels.",
  },
  {
    title: "Ongoing Support & Preventive Guidance",
    short: "We're here long after your treatment is complete.",
    long: "Healthy teeth need ongoing care. We provide personalised home-care guidance, recall reminders and lifetime support so your results last as long as possible.",
  },
];
