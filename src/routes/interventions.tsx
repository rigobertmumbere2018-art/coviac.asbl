import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INTERVENTIONS } from "@/lib/site-content";

export const Route = createFileRoute("/interventions")({
  head: () => ({
    meta: [
      { title: "Nos domaines d'intervention — COVIAC asbl" },
      {
        name: "description",
        content:
          "Protection de l'enfance, autonomisation de la femme, santé, WASH, environnement, relèvement, paix, communication communautaire.",
      },
      { property: "og:title", content: "Nos domaines d'intervention — COVIAC" },
    ],
  }),
  component: InterventionsPage,
});

function InterventionsPage() {
  return (
    <>
      <section className="border-b border-[#25483b] bg-[#071b15]">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Interventions</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Huit domaines pour répondre aux besoins essentiels des communautés.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#a8bdb3]">
            De la protection à la paix, en passant par la santé et l'environnement —
            découvrez comment COVIAC agit sur le terrain.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="space-y-20">
          {INTERVENTIONS.map((item, i) => (
            <article
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 grid gap-10 md:grid-cols-12 md:items-center"
            >
              <div
                className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  decoding="async"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#a8bdb3]">
                  {item.description}
                </p>
                <Link
                  to="/projets"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Voir les projets liés <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
