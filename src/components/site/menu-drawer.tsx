import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import logoAsset from "@/assets/mb-logo.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Dental Services", href: "#services" },
  { label: "Advanced Dental Services", href: "#services" },
  { label: "Meet Our Doctors", href: "#doctors" },
  { label: "Treatment Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function MenuDrawer({ open, onOpenChange, onBook }: { open: boolean; onOpenChange: (v: boolean) => void; onBook: () => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-charcoal text-white border-0 overflow-y-auto [&>button]:text-white">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="rounded-xl bg-white/5 px-3 py-2">
              <img src={logoAsset.url} alt="MB Dental Clinic" className="h-10 w-auto" />
            </div>
          </div>

          <nav className="mt-6 flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.label + i}
                href={l.href}
                onClick={() => onOpenChange(false)}
                className="group flex items-center justify-between border-b border-white/5 py-4 text-lg font-medium text-white/90 transition-colors hover:text-primary"
              >
                <span>{l.label}</span>
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => { onOpenChange(false); onBook(); }}
            className="btn-gold mt-8 w-full"
          >
            Book Appointment
          </button>

          <div className="mt-8 space-y-3 text-sm text-white/80">
            <a href="tel:+92514916333" className="flex items-center gap-3 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> 051-4916333
            </a>
            <a href="https://wa.me/923134446333" className="flex items-center gap-3 hover:text-primary">
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp · 0313-4446333
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              MB Dental Clinic, Wah Cantt, Pakistan
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
