import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — COVIAC asbl" },
      {
        name: "description",
        content:
          "Contactez COVIAC : téléphone, email, adresse à Goma. Formulaire de contact et réseaux sociaux.",
      },
      { property: "og:title", content: "Contact — COVIAC" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(80),
  email: z.string().trim().email("Email invalide").max(160),
  subject: z.string().trim().min(3, "Sujet requis").max(120),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }
    setSending(true);
    // Simulate submission — a real implementation would POST to a server route.
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Message envoyé — merci, nous vous répondrons rapidement.");
    setValues({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Écrivez-nous
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Nos équipes reviennent vers vous sous quelques jours ouvrables.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <ContactItem
              icon={<MapPin className="h-5 w-5" />}
              label="Adresse"
              value={CONTACT.address}
            />
            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              label="Téléphone"
              value={CONTACT.phones.join(" · ")}
            />
            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <div className="rounded-xl border border-border p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Horaires
              </div>
              <div className="mt-2 font-medium">{CONTACT.hours}</div>
            </div>

            <div className="rounded-xl border border-border p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Réseaux sociaux
              </div>
              <ul className="mt-3 flex flex-wrap gap-3">
                {CONTACT.socials.map((s) => {
                  const Icon =
                    s.name === "Facebook"
                      ? Facebook
                      : s.name === "LinkedIn"
                        ? Linkedin
                        : Youtube;
                  return (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={`COVIAC sur ${s.name}`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="aspect-video overflow-hidden rounded-xl border border-border">
              <iframe
                title="Localisation COVIAC à Goma"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.19%2C-1.72%2C29.28%2C-1.63&layer=mapnik&marker=-1.68%2C29.23"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]"
          >
            <h2 className="font-serif text-2xl">Formulaire de contact</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Nom complet"
                name="name"
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
              />
            </div>
            <div className="mt-4">
              <Field
                label="Sujet"
                name="subject"
                value={values.subject}
                onChange={(v) => setValues((s) => ({ ...s, subject: v }))}
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={values.message}
                onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? "Envoi…" : "Envoyer le message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-4 hover:text-primary">
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-4">{inner}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
