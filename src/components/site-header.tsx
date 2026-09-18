import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Mail, Phone, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/interventions", label: "Interventions" },
  { to: "/projets", label: "Projets" },
  { to: "/actualites", label: "Actualités" },
  { to: "/publications", label: "Publications" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="hidden border-b border-white/10 bg-[#06382b] text-white/90 md:block">
        <div className="container-page flex min-h-10 items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#02863e]" /> Commune de Goma, Q. Les Volcans · Av. Butembo N°12, en diagonale d’Ecobank · Ville de Goma, Nord-Kivu, RD Congo</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#eaad01]" /> office.coviac@gmail.com</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#eaad01]" /> +243 816 606 176 · +243 994 875 398</span>
          </div>
          <a href="https://www.coviac-afrique.org" target="_blank" rel="noreferrer noopener" className="font-medium hover:text-white">
            www.coviac-afrique.org
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-[#dce8e1] bg-white transition-all",
          scrolled && "shadow-[0_8px_30px_rgba(6,56,43,0.10)]",
        )}
      >
        <div className="container-page flex min-h-[78px] items-center justify-between gap-4 py-2 md:min-h-[94px]">
          <Link to="/" className="flex min-w-0 items-center gap-3 md:gap-4" aria-label="Accueil COVIAC">
            <img
              src="/coviac-header.svg"
              alt="Logo COVIAC"
              className="h-14 w-14 shrink-0 object-contain md:h-[72px] md:w-[72px]"
            />
            <div className="min-w-0">
              <div className="font-sans text-2xl font-extrabold leading-none tracking-tight text-[#06382b] md:text-3xl">
                COVIAC
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#06382b]/80 sm:text-xs">
                Congo Vision Afrique Centrale
              </div>
              <div className="mt-0.5 hidden text-[10px] font-medium italic text-[#02863e] sm:block">
                Paix · Développement · Solidarité
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-md px-3 py-3 text-sm font-semibold text-[#10362b]/80 transition-colors hover:text-[#02863e]",
                    active && "text-[#02863e]",
                  )}
                >
                  {item.label}
                  {active && <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#02863e]" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/don"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#02863e] px-5 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#026f35]"
            >
              <HeartHandshake className="h-4 w-4" />
              Faire un don
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#dce8e1] text-[#06382b] hover:bg-[#edf6f1] xl:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[78px] bottom-0 z-40 overflow-y-auto border-t border-[#dce8e1] bg-white xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-5">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-lg px-4 py-3.5 text-base font-semibold text-[#10362b]/80",
                    active && "bg-[#edf6f1] text-[#02863e]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/don"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#02863e] px-5 py-3.5 text-sm font-bold text-white"
            >
              <HeartHandshake className="h-4 w-4" />
              Faire un don
            </Link>
            <div className="mt-5 space-y-2 border-t border-[#dce8e1] pt-5 text-sm text-[#10362b]/70">
              <p><MapPin className="mr-2 inline h-4 w-4 text-[#eaad01]" />Commune de Goma, Q. Les Volcans</p>
              <p><Mail className="mr-2 inline h-4 w-4 text-[#eaad01]" />office.coviac@gmail.com</p>
              <p><Phone className="mr-2 inline h-4 w-4 text-[#eaad01]" />+243 816 606 176 · +243 994 875 398</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
