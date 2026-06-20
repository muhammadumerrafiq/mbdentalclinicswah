import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Menu, Phone, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle,
  Facebook, Instagram, MapPin, Mail, Sparkles, ShieldCheck, Smile, Users,
  ArrowRight, Plus, Minus,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import logoAsset from "@/assets/mb-logo.asset.json";
import drBarkatAsset from "@/assets/dr-barkat.asset.json";
import heroImg from "@/assets/hero-clinic.jpg";
import aboutImg from "@/assets/about-clinic.jpg";

import { MenuDrawer } from "@/components/site/menu-drawer";
import { BookingModal } from "@/components/site/booking-modal";
import { ServiceModal, DoctorModal, AllServicesModal, ProcessModal } from "@/components/site/modals";
import { dentalServices, advancedServices, doctors, testimonials, faqs, blogPosts, processSteps, type Service, type Doctor } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MB Dental Clinic Wah — Premium Dental Care by Dr. Barkat Ali Khan" },
      { name: "description", content: "Premium, painless dental care in Wah Cantt. Cosmetic, restorative & advanced treatments led by Dr. Barkat Ali Khan. Book your appointment today." },
      { property: "og:title", content: "MB Dental Clinic Wah — Premium Dental Care" },
      { property: "og:description", content: "Luxury dental care in Wah Cantt. Book your appointment with Dr. Barkat Ali Khan." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Page,
});

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  const [allOpen, setAllOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<{ title: string; short: string; long: string; index: number } | null>(null);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Nav onMenu={() => setMenuOpen(true)} onBook={() => setBookOpen(true)} />
      <Hero onBook={() => setBookOpen(true)} />
      <About />
      <Services
        onOpenService={setActiveService}
        onAll={() => setAllOpen(true)}
      />
      <Doctors onOpenDoctor={setActiveDoctor} />
      <Process onOpenStep={setActiveStep} />
      <Testimonials />
      <FAQ />
      <Blog />
      <FinalCTA onBook={() => setBookOpen(true)} />
      <Footer />

      <WhatsAppFab />

      <MenuDrawer open={menuOpen} onOpenChange={setMenuOpen} onBook={() => setBookOpen(true)} />
      <BookingModal open={bookOpen} onOpenChange={setBookOpen} />
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} onBook={() => setBookOpen(true)} />
      <DoctorModal doctor={activeDoctor} onClose={() => setActiveDoctor(null)} onBook={() => setBookOpen(true)} />
      <AllServicesModal open={allOpen} onClose={() => setAllOpen(false)} onPick={setActiveService} />
      <ProcessModal step={activeStep} onClose={() => setActiveStep(null)} />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ onMenu, onBook }: { onMenu: () => void; onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_30px_-20px_rgba(0,0,0,0.2)]" : "bg-transparent"}`}>
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className={`flex items-center gap-2 rounded-xl ${scrolled ? "" : "bg-charcoal/70 backdrop-blur px-3 py-2"}`}>
          <img src={logoAsset.url} alt="MB Dental Clinic" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
          {[
            ["Home", "#home"],
            ["About Us", "#about"],
            ["Our Services", "#services"],
          ].map(([l, h]) => (
            <a key={l} href={h} className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
              {l}
            </a>
          ))}
          <button onClick={onBook} className={`transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
            Book Appointment
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+92514916333" className={`hidden sm:flex items-center gap-2 text-sm font-medium ${scrolled ? "text-foreground" : "text-white"}`}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary"><Phone className="h-4 w-4" /></span>
            <span className="hidden lg:inline">051-4916333</span>
          </a>
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className={`grid h-11 w-11 place-items-center rounded-full border transition-all hover:bg-primary hover:text-white hover:border-primary ${scrolled ? "border-border text-foreground bg-card" : "border-white/30 text-white bg-white/10 backdrop-blur"}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="MB Dental Clinic interior" className="h-full w-full object-cover scale-[1.02] animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,155,94,0.25),transparent_55%)]" />
      </div>

      <div className="container-px relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center pt-28 pb-24 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Premium Dental Care · Wah Cantt
        </span>
        <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          A Smile Designed With <span className="text-gradient-gold">Craft & Care</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          MB Dental Clinic blends modern dentistry with the warmth and precision of premium healthcare —
          led by Dr. Barkat Ali Khan and a specialist team.
        </p>

        <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
          <button onClick={onBook} className="btn-gold text-base hover:[transform:translateY(-2px)] hover:brightness-110">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </button>
          <a href="tel:+92514916333" className="group flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-all group-hover:border-primary group-hover:text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium">Call 051-4916333</span>
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80">
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="block h-2 w-1 rounded-full bg-primary animate-scroll-hint" />
        </span>
      </a>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { label: "Experienced Dental Team", value: 10, suffix: "+", icon: Users },
    { label: "Happy Patients", value: 5000, suffix: "+", icon: Smile },
    { label: "Treatments Offered", value: 25, suffix: "+", icon: Sparkles },
    { label: "Years of Trust", value: 10, suffix: "+", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
            <img src={aboutImg} alt="Inside MB Dental Clinic" className="aspect-[4/5] h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-card p-5 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-semibold">PMDC</p>
                <p className="text-xs text-muted-foreground">Registered Practice</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About MB Dental</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            Modern dentistry, <br className="hidden sm:block" /> delivered with <span className="text-gradient-gold">care</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At MB Dental Clinic Wah, every detail is designed around your comfort — from a calming clinic environment
            to internationally-standard sterilisation and modern digital workflows. Our team takes the time to listen,
            explain and plan treatments that truly fit you.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <Stat key={s.label} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>

          <a href="#services" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Explore our treatments <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, value, suffix, label }: { icon: any; value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
      <p className="mt-4 text-3xl font-semibold text-foreground">{n.toLocaleString()}{suffix}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services({ onOpenService, onAll }: { onOpenService: (s: Service) => void; onAll: () => void }) {
  const [tab, setTab] = useState<"dental" | "advanced">("dental");
  const list = tab === "dental" ? dentalServices : advancedServices;

  return (
    <section id="services" className="bg-secondary/40 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What We Do</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Our Services</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">A complete spectrum of dental care — from gentle check-ups to advanced surgical and cosmetic treatments.</p>
          </div>
          <button onClick={onAll} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary">
            View All Services <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1 shadow-soft">
          {[
            { k: "dental", label: "Our Dental Services" },
            { k: "advanced", label: "Advanced Dental Services" },
          ].map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k as any)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${tab === t.k ? "bg-primary text-white shadow-gold" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <ServiceCarousel key={tab} services={list} onOpen={onOpenService} />
      </div>
    </section>
  );
}

function ServiceCarousel({ services, onOpen }: { services: Service[]; onOpen: (s: Service) => void }) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!embla) return;
    let id: number;
    const tick = () => { if (!hover && embla) embla.scrollNext(); };
    id = window.setInterval(tick, 3200);
    return () => window.clearInterval(id);
  }, [embla, hover]);

  return (
    <div className="relative mt-10" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-5">
          {services.map((s) => (
            <article key={s.name} className="group relative w-[80%] shrink-0 overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:-translate-y-1 sm:w-[45%] lg:w-[31%]">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.description}</p>
                <button onClick={() => onOpen(s)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button onClick={() => embla?.scrollPrev()} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-all hover:bg-primary hover:text-white hover:border-primary">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={() => embla?.scrollNext()} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-all hover:bg-primary hover:text-white hover:border-primary">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- DOCTORS ---------------- */
function Doctors({ onOpenDoctor }: { onOpenDoctor: (d: Doctor) => void }) {
  return (
    <section id="doctors" className="container-px mx-auto max-w-7xl py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Specialists</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Meet Our Doctors</h2>
        <p className="mt-3 text-muted-foreground">A specialist team committed to gentle, evidence-based care.</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
        {doctors.map((d) => (
          <button
            key={d.id}
            onClick={() => onOpenDoctor(d)}
            className="group relative overflow-hidden rounded-[2rem] bg-card text-left shadow-soft transition-all hover:-translate-y-1.5"
          >
            <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-accent/60 to-primary/30">
              {d.id === "barkat" ? (
                <img src={drBarkatAsset.url} alt={d.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="grid h-full w-full place-items-center">
                  <div className="grid h-44 w-44 place-items-center rounded-full bg-white/90 text-6xl font-bold text-primary shadow-soft">
                    {d.initials}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold">
                  View Details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="mt-1 text-sm text-primary">{d.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process({ onOpenStep }: { onOpenStep: (s: { title: string; short: string; long: string; index: number }) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const passed = Math.min(Math.max(vh - rect.top, 0), total);
      setProgress(Math.min(1, passed / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="bg-secondary/40 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">How It Works</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Your Treatment Journey</h2>
          <p className="mt-3 text-muted-foreground">A simple, transparent process — designed around your comfort.</p>
        </div>

        {/* Desktop timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative h-1.5 w-full rounded-full bg-border">
            <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-300" style={{ width: `${progress * 100}%` }} />
            <div className="absolute inset-0 flex justify-between">
              {processSteps.map((_, i) => {
                const pct = i / (processSteps.length - 1);
                const active = progress >= pct - 0.05;
                return (
                  <div key={i} className="-mt-2.5 grid place-items-center">
                    <div className={`grid h-6 w-6 place-items-center rounded-full border-2 transition-all ${active ? "border-primary bg-primary text-white shadow-gold" : "border-border bg-card text-muted-foreground"}`}>
                      <span className="text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.title} className="text-center">
                <h4 className="text-sm font-semibold">{s.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.short}</p>
                <button onClick={() => onOpenStep({ ...s, index: i })} className="mt-3 text-xs font-semibold text-primary hover:underline">Read More</button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-12 space-y-6 lg:hidden">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative pl-12">
              <div className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full bg-primary text-white text-sm font-bold shadow-gold">{i + 1}</div>
              {i < processSteps.length - 1 && <div className="absolute left-4 top-9 h-full w-px bg-border" />}
              <h4 className="text-base font-semibold">{s.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              <button onClick={() => onOpenStep({ ...s, index: i })} className="mt-2 text-sm font-semibold text-primary">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const [ref, embla] = useEmblaCarousel({ loop: true, align: "start" });
  useEffect(() => {
    if (!embla) return;
    const id = window.setInterval(() => embla.scrollNext(), 4500);
    return () => window.clearInterval(id);
  }, [embla]);

  return (
    <section id="testimonials" className="container-px mx-auto max-w-7xl py-24 sm:py-32">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Patient Stories</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">What Our Patients Say</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => embla?.scrollPrev()} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:border-primary hover:text-primary"><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={() => embla?.scrollNext()} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:border-primary hover:text-primary"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>

      <div ref={ref} className="mt-10 overflow-hidden">
        <div className="flex gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="w-[88%] shrink-0 rounded-3xl bg-card p-7 shadow-soft sm:w-[46%] lg:w-[31%]">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-charcoal font-semibold">{t.name.split(" ").map((p) => p[0]).join("")}</span>
                <span className="text-sm font-medium">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-24 sm:py-32">
      <div className="container-px mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Questions, answered.</h2>
          <p className="mt-4 text-muted-foreground">Can't find what you're looking for? Call us at <a href="tel:+92514916333" className="text-primary font-medium">051-4916333</a>.</p>
        </div>
        <ul className="space-y-3">
          {faqs.map((f, i) => (
            <li key={f.q} className="rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="text-base font-semibold">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ${open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                <div className="min-h-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  return (
    <section id="blog" className="container-px mx-auto max-w-7xl py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">From The Blog</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">Tips & insights for a healthier smile</h2>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {blogPosts.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:-translate-y-1">
            <div className="aspect-[5/4] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{p.category}</span>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="container-px mx-auto max-w-7xl pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal px-6 py-20 text-center text-white sm:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(184,155,94,0.4),transparent_60%)]" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Ready When You Are</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Book your visit today.</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">Premium dental care, painless treatments and a team that genuinely cares — all just one click away.</p>
          <button onClick={onBook} className="btn-gold mt-9 text-base">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white/80">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="rounded-xl bg-white/5 px-3 py-2 inline-block">
            <img src={logoAsset.url} alt="MB Dental" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            MB Dental Clinic Wah — premium, painless dental care led by Dr. Barkat Ali Khan and a team of specialists.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={[
          ["Home","#home"],["About","#about"],["Services","#services"],["Doctors","#doctors"],["FAQs","#faq"],["Contact","#contact"],
        ]} />

        <FooterCol title="Services" items={[
          ["Dental Implants","#services"],["Veneers","#services"],["Invisalign","#services"],["Teeth Whitening","#services"],["Root Canal","#services"],["Oral Surgery","#services"],
        ]} />

        <div>
          <h4 className="font-display text-base font-semibold text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href="tel:+92514916333" className="hover:text-primary">051-4916333</a></li>
            <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 text-primary" /><a href="https://wa.me/923134446333" className="hover:text-primary">WhatsApp 0313-4446333</a></li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /><a href="mailto:info@mbdental.pk" className="hover:text-primary">info@mbdental.pk</a></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>MB Dental Clinic, Wah Cantt, Pakistan</span></li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe title="Map" loading="lazy" src="https://www.google.com/maps?q=MB+Dental+Clinic+Wah+Cantt&output=embed" className="h-40 w-full border-0" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} MB Dental Clinic Wah. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-base font-semibold text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="hover:text-primary">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- WHATSAPP FAB ---------------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/923134446333"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.18_145)] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[oklch(0.7_0.18_145)] opacity-60 animate-ping" />
    </a>
  );
}
