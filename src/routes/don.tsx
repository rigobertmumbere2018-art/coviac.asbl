import { createFileRoute } from "@tanstack/react-router";
import { Copy, HeartHandshake, Smartphone, Building2 } from "lucide-react";
import { DONATION_METHODS } from "@/lib/site-content";
import { useState } from "react";

export const Route = createFileRoute("/don")({
  head: () => ({
    meta: [
      { title: "Faire un don — COVIAC asbl" },
      {
        name: "description",
        content:
          "Soutenez COVIAC via Mobile Money (Orange, Airtel, M-Pesa) ou par virement bancaire. Chaque don compte.",
      },
      { property: "og:title", content: "Faire un don — COVIAC" },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (v: string) => {
    navigator.clipboard.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <>
      <section className="border-b border-[#dce8e1] bg-[#f8fbf9]">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Faire un don</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Votre don protège, soigne, éduque et reconstruit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Chaque contribution finance directement nos programmes de protection, de
            santé, d'accès à l'eau et de paix en Afrique Centrale. Nous vous rendons
            compte de l'usage de vos dons dans notre rapport annuel.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {DONATION_METHODS.map((m) => {
            const isBank = m.name.includes("Virement");
            const Icon = isBank ? Building2 : Smartphone;
            return (
              <div
                key={m.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-serif text-xl">{m.name}</h2>
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                      Numéro / IBAN
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <p className="font-mono text-base font-semibold text-foreground">
                        {m.number}
                      </p>
                      <button
                        onClick={() => copy(m.number)}
                        className="inline-flex h-8 items-center gap-1 rounded-md border border-border px-2 text-xs hover:bg-muted"
                        aria-label={`Copier ${m.number}`}
                      >
                        <Copy className="h-3.5 w-3.5" />
                        {copied === m.number ? "Copié" : "Copier"}
                      </button>
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                      Bénéficiaire
                    </p>
                    <p className="mt-1 text-sm">{m.holder}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
          <div className="flex items-start gap-4">
            <HeartHandshake className="h-8 w-8 shrink-0" />
            <div>
              <h2 className="font-serif text-2xl">Bientôt : dons en ligne</h2>
              <p className="mt-2 text-primary-foreground/85">
                Nous préparons l'intégration de PayPal, Stripe et Flutterwave pour
                faciliter les dons en ligne. En attendant, vous pouvez nous soutenir
                via Mobile Money ou virement bancaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
