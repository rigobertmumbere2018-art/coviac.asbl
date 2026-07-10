import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — COVIAC asbl" },
      {
        name: "description",
        content: "Politique de confidentialité et protection des données personnelles.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <section className="container-page py-20 md:py-24 max-w-3xl">
      <p className="eyebrow">Confidentialité</p>
      <h1 className="mt-3 font-serif text-4xl">Politique de confidentialité</h1>
      <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
        <p>
          COVIAC asbl s'engage à protéger les données personnelles des visiteurs de
          son site. Nous ne collectons que les informations strictement nécessaires
          au traitement de vos demandes.
        </p>
        <p>
          Les données transmises via le formulaire de contact sont utilisées
          uniquement pour répondre à votre demande et ne sont jamais cédées à des
          tiers.
        </p>
        <p>
          Vous pouvez à tout moment demander l'accès, la rectification ou la
          suppression de vos données en écrivant à contact@coviac.org.
        </p>
      </div>
    </section>
  ),
});
