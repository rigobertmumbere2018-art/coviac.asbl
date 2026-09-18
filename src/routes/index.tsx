import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck, Sprout, Users, Waves, Sparkles } from "lucide-react";
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
          "Congo Vision Afrique Centrale. Protection, développement durable, santé, WASH, environnement et paix.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const pillars = [
    {
      title: "Développement durable",
      text: "Des solutions locales pensées pour durer et renforcer l'autonomie.",
      icon: Sprout,
    },
    {
      title: "Action humanitaire",
      text: "Une réponse de proximité pour les communautés en situation de vulnérabilité.",
      icon: ShieldCheck,
    },
    {
      title: "Paix & cohésion",
      text: "Créer des espaces de dialogue, de protection et de solidarité.",
      icon: Users,
    },
    {
      title: "Renforcement",
      text: "Former, accompagner et transmettre des compétences utiles.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fbf9]">
        <div className="container-page relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe3d7] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#02863e] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#02863e]" />
              Congo Vision Afrique Centrale
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-[#06382b] sm:text-5xl lg:text-[4.25rem]">
              Agir aujourd'hui.
              <span className="block text-[#02863e]">Construire demain.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5f7169] sm:text-lg">
              Organisation chrétienne de développement durable, de protection et de paix,
              COVIAC accompagne les communautés d'Afrique Centrale à travers des actions
              humanitaires et de long terme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/interventions"
                className="inline-flex items-center gap-2 rounded-full bg-[#02863e] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(2,134,62,0.22)] transition hover:-translate-y-0.5 hover:bg-[#026f35]"
              >
                Découvrir nos actions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 rounded-full border border-[#cfe3d7] bg-white px-6 py-3.5 text-sm font-bold text-[#10362b] transition hover:border-[#02863e] hover:text-[#02863e]"
              >
                Qui sommes-nous ?
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#5f7169]">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#02863e]" /> Protection</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#0151b9]" /> Développement</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#02863e]" /> Solidarité</span>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div <div className="relative overflow-hidden rounded-xl border border-[#dce8e1] bg-white p-2 shadow-[0_18px_50px_rgba(6,56,43,0.13)]">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={heroCommunity}
                  alt="Communauté accompagnée par COVIAC"
                  width={1920}
                  height={1280}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#06382b]/88 px-5 py-3.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <HeartHandshake className="h-4 w-4 text-[#69d27b]" />
                    Au service des communautés
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden border border-[#dce8e1] bg-white px-5 py-4 text-[#06382b] shadow-lg sm:block">
              <div className="text-2xl font-extrabold">COVIAC</div>
              <div className="mt-0.5 text-xs text-[#6b7d75]">Paix · Développement · Solidarité</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-4">
        <div className="container-page grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group rounded-xl border border-[#dce8e1] bg-white p-6 shadow-[0_12px_35px_rgba(6,56,43,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,56,43,0.11)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f3e9] text-[#02863e] transition group-hover:bg-[#02863e] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-base font-extrabold text-[#10362b]">{p.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#6b7d75]">{p.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="eyebrow">Notre raison d'être</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#06382b] md:text-4xl">
              Une organisation proche des réalités du terrain.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-[#52675e]">
              COVIAC (Congo Vision Afrique Centrale) est une organisation à but non lucratif
              engagée pour la protection, la paix et le développement durable des populations
              d'Afrique Centrale.
            </p>
            <p className="mt-5 text-base leading-7 text-[#6b7d75]">
              Notre mission est de <strong className="font-bold text-[#10362b]">protéger,
              accompagner et renforcer les capacités des communautés vulnérables</strong> à
              travers des interventions humanitaires et de développement.
            </p>
            <Link
              to="/a-propos"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#02863e] hover:text-[#0151b9]"
            >
              En savoir plus sur COVIAC <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce8e1] bg-white">
        <div className="container-page grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:py-16">
          {KEY_FIGURES.map((f) => (
            <div key={f.label} className="border-l-2 border-[#dce8e1] pl-5 first:border-0 md:first:border-l-2">
              <div className="text-4xl font-extrabold tracking-tight text-[#02863e] md:text-5xl">{f.value}</div>
              <div className="mt-2 max-w-[180px] text-sm leading-5 text-[#6b7d75]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos domaines d'intervention</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#06382b] md:text-4xl">
              Des actions concrètes, au plus près des besoins.
            </h2>
          </div>
          <Link to="/interventions" className="inline-flex items-center gap-2 text-sm font-bold text-[#02863e] hover:text-[#0151b9]">
            Voir tous les domaines <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INTERVENTIONS.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#dce8e1] bg-white shadow-[0_8px_28px_rgba(6,56,43,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(6,56,43,0.10)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#edf6f1]">
                <img src={item.image} alt="" loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06382b]/55 to-transparent opacity-70" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f3e9] text-[#02863e]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold leading-snug text-[#10362b]">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6b7d75]">{item.summary}</p>
                <Link to="/interventions" hash={item.slug} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#02863e]">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#06382b] text-white">
        <div className="container-page py-20 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#69d27b]">Projets récents</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Sur le terrain</h2>
            </div>
            <Link to="/projets" className="inline-flex items-center gap-2 text-sm font-bold text-[#69d27b] hover:text-white">
              Tous nos projets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RECENT_PROJECTS.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#8bd8a0]">{p.province}</div>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.summary}</p>
                  <Link to="/projets" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#69d27b]">
                    Voir le projet <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Actualités</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#06382b] md:text-4xl">Dernières nouvelles</h2>
          </div>
          <Link to="/actualites" className="inline-flex items-center gap-2 text-sm font-bold text-[#02863e]">
            Toutes les actualités <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {RECENT_NEWS.map((n) => (
            <article key={n.slug} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#edf6f1]">
                <img src={n.image} alt={n.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-[#6b7d75]">
                <span className="rounded-full bg-[#e4f3e9] px-2.5 py-1 font-bold text-[#02863e]">{n.category}</span>
                <time dateTime={n.date}>{new Date(n.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
              </div>
              <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#10362b]">
                <Link to="/actualites" className="hover:text-[#02863e]">{n.title}</Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7d75]">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dce8e1] bg-[#f4f8f5]">
        <div className="container-page py-12">
          <p className="eyebrow text-center">Partenaires</p>
          <div className="mt-7 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 md:grid-cols-6">
            {PARTNERS.map((p) => (
              <div key={p} className="text-center text-sm font-bold text-[#6b7d75] md:text-base">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="relative overflow-hidden rounded-xl bg-[#02863e] px-7 py-12 text-white shadow-[0_22px_60px_rgba(2,134,62,0.18)] md:px-14 md:py-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Soutenez notre action</p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
                Chaque geste contribue à protéger une vie, un enfant, un avenir.
              </h2>
            </div>
            <div className="md:justify-self-end md:max-w-md">
              <p className="text-white/80">
                Votre soutien contribue à nos programmes de protection, de santé, d'eau potable et de reconstruction en Afrique Centrale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/don" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#02863e] hover:bg-[#f8fbf9]">
                  Faire un don <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
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
