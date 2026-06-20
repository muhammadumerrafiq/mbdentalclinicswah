import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Clock, MapPin, Phone } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(80),
  address: z.string().trim().min(1, "Address required").max(200),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(200),
  treatment: z.string().min(1, "Select a treatment"),
  doctor: z.string().min(1, "Select a doctor"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  notes: z.string().max(500).optional(),
  terms: z.boolean().refine((v) => v, { message: "Please accept the terms" }),
});

export function BookingModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ firstName: "", address: "", phone: "", email: "", treatment: "", doctor: "", date: "", time: "", notes: "", terms: false });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Appointment request received — we'll call you shortly.");
    onOpenChange(false);
    setForm({ firstName: "", address: "", phone: "", email: "", treatment: "", doctor: "", date: "", time: "", notes: "", terms: false });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-3xl border-0 sm:rounded-3xl">
        <DialogTitle className="sr-only">Book an Appointment</DialogTitle>
        <div className="grid md:grid-cols-[1.2fr_1fr] max-h-[90vh] overflow-y-auto">
          {/* Form */}
          <form onSubmit={submit} className="p-6 sm:p-8 bg-card">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Schedule</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-semibold">Book Your Appointment</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the details and our team will confirm shortly.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name"><Input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Your first name" /></Field>
              <Field label="Phone"><Input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="03XX-XXXXXXX" /></Field>
              <Field label="Email" className="sm:col-span-2"><Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" /></Field>
              <Field label="Address" className="sm:col-span-2"><Input value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Street, city" /></Field>
              <Field label="Treatment">
                <Select value={form.treatment} onValueChange={(v) => set("treatment", v)}>
                  <SelectTrigger><SelectValue placeholder="Select treatment" /></SelectTrigger>
                  <SelectContent>
                    {["Consultation","Teeth Whitening","Dental Implants","Veneers","Invisalign","Root Canal","Cleaning & Polishing","Other"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Select Doctor">
                <Select value={form.doctor} onValueChange={(v) => set("doctor", v)}>
                  <SelectTrigger><SelectValue placeholder="Select doctor" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dr. Barkat Ali Khan">Dr. Barkat Ali Khan</SelectItem>
                    <SelectItem value="Dr. Ahsan Rush">Dr. Ahsan Rush</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Appointment Date"><Input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} /></Field>
              <Field label="Preferred Time"><Input type="time" value={form.time} onChange={(e) => set("time", e.target.value)} /></Field>
              <Field label="Optional Notes" className="sm:col-span-2"><Textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Anything we should know?" /></Field>
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <Checkbox checked={form.terms} onCheckedChange={(v) => set("terms", v === true)} className="mt-0.5" />
              <span>I agree to MB Dental's terms and privacy policy.</span>
            </label>
            <button disabled={submitting} className="btn-gold mt-6 w-full disabled:opacity-60">
              {submitting ? "Submitting…" : "Request Appointment"}
            </button>
          </form>

          {/* Info */}
          <div className="bg-secondary/60 p-6 sm:p-8 border-t md:border-t-0 md:border-l border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Visit Us</p>
            <h3 className="mt-1 text-xl font-semibold">Clinic Information</h3>

            <div className="mt-5 space-y-4 text-sm">
              <InfoRow icon={<Clock className="h-4 w-4" />} title="Working Hours">
                Mon – Sat · 10:00 AM – 9:00 PM<br />Sunday · Closed
              </InfoRow>
              <InfoRow icon={<Phone className="h-4 w-4" />} title="Phone">
                <a href="tel:+92514916333" className="hover:text-primary">051-4916333</a><br />
                <a href="https://wa.me/923134446333" className="hover:text-primary">WhatsApp: 0313-4446333</a>
              </InfoRow>
              <InfoRow icon={<MapPin className="h-4 w-4" />} title="Address">
                MB Dental Clinic, Wah Cantt, Pakistan
              </InfoRow>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="MB Dental Clinic Location"
                src="https://www.google.com/maps?q=MB+Dental+Clinic+Wah+Cantt&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
            <a href="https://maps.app.goo.gl/kjpFY3sURr2EKiUi7" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-primary hover:underline">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">{icon}</span>
      <div className="min-w-0">
        <p className="font-semibold text-foreground">{title}</p>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
