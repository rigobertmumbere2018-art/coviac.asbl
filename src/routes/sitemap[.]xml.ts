import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/a-propos", priority: "0.8", changefreq: "monthly" as const },
  { path: "/interventions", priority: "0.9", changefreq: "monthly" as const },
  { path: "/projets", priority: "0.8", changefreq: "weekly" as const },
  { path: "/actualites", priority: "0.8", changefreq: "weekly" as const },
  { path: "/publications", priority: "0.7", changefreq: "monthly" as const },
  { path: "/faq", priority: "0.5", changefreq: "monthly" as const },
  { path: "/don", priority: "0.9", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.6", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map((e) =>
            [
              "  <url>",
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              "  </url>",
            ].join("\n"),
          )
          .join("\n");
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
