import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — COVIAC asbl" },
      {
        name: "description",
        content:
          "Réponses aux questions fréquentes sur COVIAC : partenariats, dons, provinces d'intervention, recrutement.",
      },
      { property: "og:title", content: "FAQ — COVIAC" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Questions fréquentes
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Vous trouverez ici les réponses aux questions les plus courantes.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
