import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { RECENT_PROJECTS } from "@/lib/site-content";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Nos projets — COVIAC asbl" },
      {
        name: "description",
        content:
          "Découvrez les projets menés par COVIAC dans les provinces d'Afrique Centrale : eau, santé, protection, environnement, paix.",
      },
      { property: "og:title", content: "Nos projets — COVIAC" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Projets</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Sur le terrain, aux côtés des communautés.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Une sélection de projets récents menés par COVIAC dans les provinces
            d'intervention.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RECENT_PROJECTS.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elev)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.province}
                </div>
                <h2 className="mt-2 font-serif text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Voir le projet <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
