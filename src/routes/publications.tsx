import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { PUBLICATIONS } from "@/lib/site-content";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — COVIAC asbl" },
      {
        name: "description",
        content: "Rapports annuels, études et guides publiés par COVIAC.",
      },
      { property: "og:title", content: "Publications — COVIAC" },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const [q, setQ] = useState("");
  const items = PUBLICATIONS.filter((p) =>
    p.title.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <section className="border-b border-[#25483b] bg-[#071b15]">
        <div className="container-page py-20 md:py-24">
          <p className="eyebrow">Publications</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Rapports, études et guides
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#a8bdb3]">
            Retrouvez nos rapports annuels, études sectorielles et guides pratiques —
            librement téléchargeables au format PDF.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a8bdb3]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher une publication…"
            className="h-11 w-full rounded-md border border-[#25483b] bg-[#071b15] pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <ul className="mt-10 divide-y divide-border rounded-xl border border-[#25483b] bg-[#102f25]">
          {items.map((p) => (
            <li key={p.title} className="flex flex-wrap items-center gap-4 p-5 md:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.type} · {p.year}
                </div>
                <h2 className="mt-1 font-serif text-lg leading-snug">{p.title}</h2>
              </div>
              <div className="text-xs text-[#a8bdb3]">{p.size}</div>
              <a
                href={p.href}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#315447] px-3.5 py-2 text-sm font-semibold hover:bg-[#16382d]"
              >
                <Download className="h-4 w-4" /> PDF
              </a>
            </li>
          ))}
          {items.length === 0 && (
            <li className="p-6 text-[#a8bdb3]">Aucun résultat.</li>
          )}
        </ul>
      </section>
    </>
  );
}
