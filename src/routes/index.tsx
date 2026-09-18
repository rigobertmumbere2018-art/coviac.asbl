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
  const pillars = [
    { title: "Développement durable", text: "Des solutions locales pour un impact durable", icon: "🌱", color: "bg-[#02863e]" },
    { title: "Action humanitaire", text: "Soutenir les communautés en situation de vulnérabilité", icon: "●●●", color: "bg-[#0151b9]" },
    { title: "Paix et cohésion sociale", text: "Bâtir des sociétés plus justes et plus pacifiques", icon: "✦", color: "bg-[#eaad01]" },
    { title: "Renforcement des capacités", text: "Former pour un avenir meilleur", icon: "▣", color: "bg-[#02863e]" },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#06382b] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border-[70px] border-[#02863e]/40" />
          <div className="absolute right-20 top-32 h-80 w-80 rounded-full border-[2px] border-[#eaad01]/40" />
        </div>
        <div className="container-page relative grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Congo Vision Afrique Centrale</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
              Agir aujourd'hui pour
              <span className="block text-[#69d27b]">construire un avenir durable.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
              Organisation chrétienne de développement durable, de protection et de paix,
              COVIAC accompagne les communautés d'Afrique Centrale à travers des interventions
              humanitaires et de long terme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/interventions" className="inline-flex items-center gap-2 rounded-full bg-[#69d27b] px-6 py-3.5 text-sm font-bold text-[#06382b] shadow-lg hover:bg-[#7add8a]">
                Découvrir nos actions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/a-propos" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-brand">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06382b]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-[#06382b]/80 p-5 backdrop-blur">
                <p className="font-serif text-xl italic">Des communautés plus fortes, un demain meilleur.</p>
                <div className="mt-3 h-1 w-24 rounded-full bg-[#eaad01]" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full bg-[#eaad01] lg:block" />
            <div className="absolute -right-5 -top-5 hidden h-20 w-20 rounded-full border-8 border-[#0151b9] lg:block" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#69d27b] via-[#eaad01] to-[#0151b9]" />
      </section>

      <section className="relative z-10 -mt-8">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-2xl border border-[#dce8e1] bg-white p-7 text-center shadow-[0_14px_35px_rgba(6,56,43,0.10)]">
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white ${p.color}`}>{p.icon}</div>
              <h2 className="mt-5 text-lg font-extrabold text-[#10362b]">{p.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#5f7169]">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow">Qui sommes-nous</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#06382b] md:text-4xl">
              Une organisation ancrée dans les communautés.
            </h2>
          </div>
          <div className="lg:col-span-8 text-lg leading-8 text-[#52675e]">
            <p>
              COVIAC (Congo Vision Afrique Centrale) est une organisation à but non lucratif
              engagée pour la protection, la paix et le développement durable des populations
              d'Afrique Centrale.
            </p>
            <p className="mt-5">
              Notre mission : <strong className="text-[#10362b]">protéger, accompagner et renforcer
              les capacités des communautés vulnérables</strong> à travers des interventions
              humanitaires et de développement.
            </p>
            <Link to="/a-propos" className="mt-6 inline-flex items-center gap-2 font-bold text-[#02863e] hover:text-[#0151b9]">
              En savoir plus sur COVIAC <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#edf6f1] py-16">
        <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
          {KEY_FIGURES.map((f) => (
            <div key={f.label} className="text-center md:text-left">
              <div className="text-4xl font-extrabold text-[#02863e] md:text-5xl">{f.value}</div>
              <div className="mt-2 text-sm font-medium text-[#5f7169]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Nos domaines d'intervention</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#06382b] md:text-4xl">
              Huit domaines, une même exigence : la dignité.
            </h2>
          </div>
          <Link to="/interventions" className="inline-flex items-center gap-2 text-sm font-bold text-[#02863e]">
            Voir tous les domaines <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INTERVENTIONS.map((item) => (
            <article key={item.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-[#dce8e1] bg-white shadow-[0_10px_30px_rgba(6,56,43,0.06)] hover:-translate-y-1 transition-transform">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#edf6f1]">
                <img src={item.image} alt="" loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f3e9] text-[#02863e]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg leading-snug text-[#10362b]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f7169] line-clamp-3">{item.summary}</p>
                <Link to="/interventions" hash={item.slug} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#02863e]">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#06382b] text-white">
        <div className="container-page py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#69d27b]">Projets récents</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Sur le terrain</h2>
            </div>
            <Link to="/projets" className="text-sm font-bold text-[#69d27b]">Tous nos projets <ArrowRight className="inline h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RECENT_PROJECTS.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="aspect-[3/2] overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover" /></div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#eaad01]">{p.province}</div>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.summary}</p>
                  <Link to="/projets" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#69d27b]">Voir le projet <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Actualités</p><h2 className="mt-3 text-3xl font-extrabold text-[#06382b] md:text-4xl">Dernières nouvelles</h2></div>
          <Link to="/actualites" className="text-sm font-bold text-[#02863e]">Toutes les actualités <ArrowRight className="inline h-4 w-4" /></Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {RECENT_NEWS.map((n) => (
            <article key={n.slug} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#edf6f1]"><img src={n.image} alt={n.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="mt-5 flex items-center gap-3 text-xs text-[#5f7169]"><span className="rounded-full bg-[#e4f3e9] px-2.5 py-1 font-bold text-[#02863e]">{n.category}</span><time dateTime={n.date}>{new Date(n.date).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}</time></div>
              <h3 className="mt-3 font-serif text-xl leading-snug text-[#10362b]"><Link to="/actualites" className="hover:text-[#02863e]">{n.title}</Link></h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f7169]">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dce8e1] bg-[#f4f8f5]">
        <div className="container-page py-14">
          <p className="eyebrow text-center">Ils nous font confiance</p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {PARTNERS.map((p) => <div key={p} className="text-center text-sm font-bold text-[#5f7169] md:text-base">{p}</div>)}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#02863e] px-8 py-14 text-white md:px-16 md:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-white/10" />
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Soutenez notre action</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Chaque geste contribue à protéger une vie, un enfant, un avenir.</h2>
            </div>
            <div className="md:justify-self-end md:max-w-md">
              <p className="text-white/80">Votre soutien contribue à nos programmes de protection, de santé, d'eau potable et de reconstruction en Afrique Centrale.</p>
              <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
                <Link to="/don" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#02863e] hover:bg-[#f8fbf9]">Faire un don <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Devenir partenaire</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
