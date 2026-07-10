import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — COVIAC asbl" },
      { name: "description", content: "Mentions légales du site COVIAC." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <section className="container-page py-20 md:py-24 max-w-3xl">
      <p className="eyebrow">Mentions légales</p>
      <h1 className="mt-3 font-serif text-4xl">Mentions légales</h1>
      <div className="prose prose-neutral mt-8 space-y-5 text-foreground/80 leading-relaxed">
        <p>
          Éditeur : COVIAC asbl — Congo Vision Afrique Centrale. Siège social : Goma,
          Nord-Kivu, République Démocratique du Congo.
        </p>
        <p>
          Directeur de la publication : Direction Exécutive de COVIAC.
        </p>
        <p>
          Hébergement : ce site est hébergé sur une infrastructure cloud sécurisée.
        </p>
        <p>
          Les contenus, textes et photographies publiés sont la propriété de COVIAC
          asbl ou utilisés avec autorisation. Toute reproduction est soumise à
          autorisation préalable.
        </p>
      </div>
    </section>
  ),
});
