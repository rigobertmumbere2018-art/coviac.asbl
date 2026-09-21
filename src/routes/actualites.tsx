import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { RECENT_NEWS } from "@/lib/site-content";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — COVIAC asbl" },
      {
        name: "description",
        content:
          "Suivez les dernières actualités et actions de COVIAC en Afrique Centrale.",
      },
      { property: "og:title", content: "Actualités — COVIAC" },
    ],
  }),
  component: NewsPage,
});

const CATEGORIES = ["Toutes", "Santé", "Éducation", "Environnement", "Paix"];

function NewsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Toutes");

  const items = RECENT_NEWS.filter((n) => {
    const matchCat = cat === "Toutes" || n.category === cat;
    const matchQ = query
      ? (n.title + n.excerpt).toLowerCase().includes(query.toLowerCase())
      : true;
    return matchCat && matchQ;
  });

  return (
    <>
      <section className="border-b border-[#25483b] bg-[#071b15]">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Actualités</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Nouvelles du terrain
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#a8bdb3]">
            Actualités, communiqués et récits de nos programmes en Afrique Centrale.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-[#25483b] text-[#edf7f1]/70 hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a8bdb3]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher…"
              className="h-10 w-full rounded-md border border-[#25483b] bg-[#071b15] pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <article key={n.slug} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-muted">
                <img
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-[#a8bdb3]">
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
              <h2 className="mt-3 font-serif text-xl leading-snug">
                <Link to="/actualites" className="hover:text-primary">
                  {n.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#a8bdb3]">
                {n.excerpt}
              </p>
            </article>
          ))}
          {items.length === 0 && (
            <p className="text-[#a8bdb3]">Aucun résultat.</p>
          )}
        </div>
      </section>
    </>
  );
}
