import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Check, GraduationCap, Award, Mail, Phone } from "lucide-react";
import type { Service, Doctor } from "./data";
import { dentalServices, advancedServices } from "./data";
import drBarkatAsset from "@/assets/Dr. Barkat Ali.webp";

export function ServiceModal({
  service,
  onClose,
  onBook,
}: {
  service: Service | null;
  onClose: () => void;
  onBook: () => void;
}) {
  return (
    <Dialog open={!!service} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl border-0">
        {service && (
          <>
            <DialogTitle className="sr-only">{service.name}</DialogTitle>
            <div className="grid md:grid-cols-2 max-h-[88vh] overflow-y-auto">
              <div className="aspect-[4/5] md:aspect-auto bg-secondary">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  Treatment
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <h4 className="mt-6 text-sm font-semibold">Key Benefits</h4>
                <ul className="mt-2 space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-primary" /> <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold">Who It's For</h4>
                <p className="mt-1 text-sm text-muted-foreground">{service.suitable}</p>

                <button
                  onClick={() => {
                    onClose();
                    onBook();
                  }}
                  className="btn-gold mt-7 w-full"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function DoctorModal({
  doctor,
  onClose,
  onBook,
}: {
  doctor: Doctor | null;
  onClose: () => void;
  onBook: () => void;
}) {
  return (
    <Dialog open={!!doctor} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl border-0">
        {doctor && (
          <>
            <DialogTitle className="sr-only">{doctor.name}</DialogTitle>
            <div className="grid md:grid-cols-[1fr_1.2fr] max-h-[88vh] overflow-y-auto">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent to-primary/40 grid place-items-center md:aspect-auto">
                {doctor.id === "barkat" ? (
                  <img
                    src={drBarkatAsset}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-40 w-40 place-items-center rounded-full bg-white/90 text-5xl font-bold text-primary shadow-soft">
                    {doctor.initials}
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  {doctor.role}
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold">{doctor.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>

                <div className="mt-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <GraduationCap className="h-4 w-4 text-primary" /> Qualifications
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {doctor.qualifications.map((q) => (
                      <li key={q}>• {q}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Award className="h-4 w-4 text-primary" /> Experience
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{doctor.experience}</p>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold">Memberships</h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {doctor.memberships.map((m) => (
                      <li key={m}>• {m}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" /> 051-4916333
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-primary" /> info@mbdental.pk
                  </span>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBook();
                  }}
                  className="btn-gold mt-6 w-full"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function AllServicesModal({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick: (s: Service) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-4xl rounded-3xl border-0 p-0 overflow-hidden">
        <DialogTitle className="sr-only">All Services</DialogTitle>
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Complete List
          </p>
          <h3 className="mt-1 text-2xl sm:text-3xl font-semibold">All Services at MB Dental</h3>

          {[
            { title: "Our Dental Services", items: dentalServices },
            { title: "Advanced Dental Services", items: advancedServices },
          ].map((cat) => (
            <div key={cat.title} className="mt-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {cat.title}
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {cat.items.map((s) => (
                  <button
                    key={s.name + cat.title}
                    onClick={() => {
                      onClose();
                      onPick(s);
                    }}
                    className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-left text-sm transition-all hover:border-primary hover:shadow-soft"
                  >
                    <span className="font-medium">{s.name}</span>
                    <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProcessModal({
  step,
  onClose,
}: {
  step: { title: string; long: string; short: string; index: number } | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!step} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg rounded-3xl border-0">
        {step && (
          <>
            <DialogTitle className="sr-only">{step.title}</DialogTitle>
            <div className="p-2">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Step {String(step.index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.long}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
