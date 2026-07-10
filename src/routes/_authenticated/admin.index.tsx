import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminHome,
});

function AdminHome() {
  const cards = [
    { title: "Actualités", desc: "Publier et gérer les articles", count: "—" },
    { title: "Projets", desc: "Ajouter et suivre les projets terrain", count: "—" },
    { title: "Publications", desc: "Gérer les documents à télécharger", count: "—" },
    { title: "Messages", desc: "Consulter les demandes de contact", count: "—" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.title} className="rounded-lg border bg-card p-5">
          <p className="text-2xl font-serif">{c.count}</p>
          <h3 className="mt-2 font-semibold">{c.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
        </div>
      ))}
      <div className="col-span-full mt-4 rounded-lg border border-dashed bg-muted/30 p-6 text-sm text-muted-foreground">
        Les modules CRUD (actualités, projets, publications) seront ajoutés dans
        les prochaines étapes. L'authentification, les rôles et la protection
        des routes sont opérationnels.
      </div>
    </div>
  );
}
