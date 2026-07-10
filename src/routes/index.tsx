import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";
import heroCommunity from "@/assets/hero-community.webp";
import {
  INTERVENTIONS,
  KEY_FIGURES,
  PARTNERS,
  RECENT_NEWS,
  RECENT_PROJECTS,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COVIAC asbl — Agir aujourd'hui pour un avenir durable" },
      {
        name: "description",
        content:
          "Congo Vision Afrique Centrale. Protection de l'enfance, autonomisation de la femme, santé, WASH, environnement, paix. Découvrez nos actions et soutenez-nous.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface">
        <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24 lg:py-28">
          <div className="md:col-span-6 flex flex-col justify-center">
            <p className="eyebrow">Congo Vision Afrique Centrale</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Agir aujourd'hui pour construire un avenir durable.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Organisation chrétienne de développement durable, de protection et de paix,
              COVIAC accompagne les communautés d'Afrique Centrale à travers des
              interventions humanitaires et de long terme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/interventions"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Découvrir nos actions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/don"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <HeartHandshake className="h-4 w-4" /> Faire un don
              </Link>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-elev)] md:aspect-[5/6]">
              <img
                src={heroCommunity}
                alt="Communauté en Afrique Centrale accompagnée par COVIAC"
                width={1920}
                height={1280}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 text-xs text-white/90">
                Communautés accompagnées par COVIAC · République Démocratique du Congo
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Qui sommes-nous</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              Une organisation ancrée dans les communautés.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              COVIAC (Congo Vision Afrique Centrale) est une organisation à but non lucratif
              engagée pour la protection, la paix et le développement durable des populations
              d'Afrique Centrale.
            </p>
            <p>
              Notre mission : <span className="text-foreground">protéger, accompagner et
              renforcer les capacités des communautés vulnérables</span> à travers des
              interventions humanitaires et de développement.
            </p>
            <div>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
              >
                En savoir plus sur COVIAC <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {KEY_FIGURES.map((f) => (
            <div key={f.label} className="text-center md:text-left">
              <div className="font-serif text-4xl font-medium md:text-5xl">{f.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="container-page py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos domaines d'intervention</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Huit domaines, une même exigence : la dignité.
            </h2>
          </div>
          <Link
            to="/interventions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            Voir tous les domaines <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INTERVENTIONS.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elev)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {item.summary}
                </p>
                <Link
                  to="/interventions"
                  hash={item.slug}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJETS RÉCENTS */}
      <section className="bg-sand">
        <div className="container-page py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Projets récents</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Sur le terrain</h2>
            </div>
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Tous nos projets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RECENT_PROJECTS.map((p) => (
              <article
                key={p.slug}
                className="group overflow-hidden rounded-xl bg-card border border-border shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.province}
                  </div>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <Link
                    to="/projets"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Voir le projet <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section className="container-page py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Actualités</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Dernières nouvelles</h2>
          </div>
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            Toutes les actualités <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {RECENT_NEWS.map((n) => (
            <article key={n.slug} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                <img
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-primary">
                  {n.category}
                </span>
                <time dateTime={n.date}>
                  {new Date(n.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h3 className="mt-3 font-serif text-xl leading-snug">
                <Link to="/actualites" className="hover:text-primary">
                  {n.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {n.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-14">
          <p className="eyebrow text-center">Ils nous font confiance</p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="text-center font-serif text-sm text-muted-foreground md:text-base"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPEL AU DON */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
                Soutenez notre action
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Chaque geste contribue à protéger une vie, un enfant, un avenir.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <p className="text-primary-foreground/80 md:text-right md:max-w-md">
                Votre don finance nos programmes de protection, de santé, d'eau potable
                et de reconstruction en Afrique Centrale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/don"
                  className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-primary hover:bg-background/90"
                >
                  Faire un don <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Devenir partenaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
