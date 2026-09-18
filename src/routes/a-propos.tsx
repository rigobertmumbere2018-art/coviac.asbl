import { createFileRoute } from "@tanstack/react-router";
import { VALUES } from "@/lib/site-content";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — COVIAC asbl" },
      {
        name: "description",
        content:
          "Historique, mission, vision, valeurs et gouvernance de COVIAC — Congo Vision Afrique Centrale.",
      },
      { property: "og:title", content: "À propos — COVIAC asbl" },
      {
        property: "og:description",
        content: "Notre histoire, notre mission, notre vision et nos valeurs.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-[#dce8e1] bg-[#f8fbf9]">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Une organisation au service des communautés d'Afrique Centrale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            COVIAC — Congo Vision Afrique Centrale — est une organisation
            chrétienne à but non lucratif engagée pour la protection, la paix et le
            développement durable.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Notre histoire</p>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl">Depuis nos débuts</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>
              Née d'une conviction simple — nul ne devrait être laissé seul face à
              l'urgence — COVIAC a pris racine dans l'Est de la République
              Démocratique du Congo, aux côtés des communautés déplacées et
              vulnérables.
            </p>
            <p>
              Au fil des années, nous avons élargi notre action à l'ensemble de
              l'Afrique Centrale, sans jamais nous éloigner du terrain ni des
              personnes que nous servons.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-card border border-border p-8">
              <p className="eyebrow">Notre vision</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">
                Des communautés résilientes, autonomes et actrices de leur propre
                développement.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nous croyons en une Afrique Centrale où chaque personne peut vivre
                dignement, en paix, et participer pleinement à la construction de
                son avenir.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <p className="eyebrow">Notre mission</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">
                Protéger, accompagner et renforcer les capacités des communautés
                vulnérables.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                À travers des interventions humanitaires d'urgence et des programmes
                de développement durable, nous plaçons la personne au centre de nos
                actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Nos valeurs</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl md:text-4xl">
          Quatre principes qui guident chacune de nos décisions.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v.title} className="rounded-xl border border-border p-6">
              <div className="font-serif text-4xl text-primary">0{i + 1}</div>
              <h3 className="mt-4 font-serif text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Message du Directeur</p>
            </div>
            <div className="md:col-span-8">
              <blockquote className="font-serif text-2xl leading-snug md:text-3xl">
                « Notre engagement est simple : rester aux côtés des personnes que
                nous servons, écouter, protéger, et bâtir avec elles un avenir plus
                juste. La dignité n'est pas négociable. »
              </blockquote>
              <p className="mt-6 text-sm font-semibold">
                Directeur Exécutif · COVIAC asbl
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Organigramme</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Notre gouvernance</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Assemblée générale",
              d: "L'organe suprême de décision, garant de la mission de COVIAC.",
            },
            {
              t: "Conseil d'administration",
              d: "Oriente la stratégie et veille au bon fonctionnement de l'organisation.",
            },
            {
              t: "Direction exécutive",
              d: "Coordonne les programmes, les équipes terrain et les partenariats.",
            },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-border p-6">
              <h3 className="font-serif text-lg">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
