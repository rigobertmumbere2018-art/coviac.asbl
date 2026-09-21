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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <div className="hidden border-b border-white/10 bg-[#06382b] text-white/85 md:block">
        <div className="container-page flex min-h-9 items-center justify-between gap-6 text-[11px]">
          <div className="flex min-w-0 items-center gap-5">
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#69d27b]" />
              Commune de Goma, Q. Les Volcans · Av. Butembo N°12, en diagonale d’Ecobank · Nord-Kivu, RD Congo
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-white/70" /> office.coviac@gmail.com
            </span>
            <span className="hidden shrink-0 items-center gap-1.5 lg:inline-flex">
              <Phone className="h-3.5 w-3.5 text-white/70" /> +243 816 606 176 · +243 994 875 398
            </span>
          </div>
          <a href="https://www.coviac-afrique.org" target="_blank" rel="noreferrer noopener" className="shrink-0 font-semibold text-white hover:text-[#69d27b]">
            coviac-afrique.org
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-[#25483b]/90 bg-[#102f25]/95 backdrop-blur-xl transition-all",
          scrolled && "shadow-[0_10px_35px_rgba(6,56,43,0.10)]",
        )}
      >
        <div className="container-page flex min-h-[76px] items-center justify-between gap-4 py-2.5 md:min-h-[88px]">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Accueil COVIAC">
            <img
              src="/coviac-header.svg"
              alt="Logo COVIAC"
              className="h-[58px] w-[58px] shrink-0 object-contain md:h-[70px] md:w-[70px]"
            />
            <div className="min-w-0">
              <div className="text-[1.55rem] font-extrabold leading-none tracking-[-0.04em] text-[#edf7f1] md:text-[1.8rem]">
                COVIAC
              </div>
              <div className="mt-1 whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.09em] text-[#edf7f1]/75 sm:text-[10px]">
                Congo Vision Afrique Centrale
              </div>
              <div className="mt-0.5 hidden text-[9px] font-semibold text-[#02863e] sm:block">
                Paix · Développement · Solidarité
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 rounded-full border border-[#25483b] bg-[#071b15] p-1">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] font-bold text-[#edf7f1]/75 transition-all hover:bg-[#102f25] hover:text-[#02863e]",
                    active && "bg-[#102f25] text-[#02863e] shadow-sm",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/don"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#02863e] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(2,134,62,0.18)] transition hover:-translate-y-0.5 hover:bg-[#026f35]"
            >
              <HeartHandshake className="h-4 w-4" />
              Faire un don
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#25483b] bg-[#102f25] text-[#edf7f1] transition hover:border-[#02863e] hover:bg-[#143b2d] xl:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto border-t border-[#25483b] bg-[#102f25] xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-5">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-semibold text-[#edf7f1]/80",
                    active && "bg-[#143b2d] text-[#02863e]",
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
            <div className="mt-5 space-y-2 border-t border-[#25483b] pt-5 text-sm leading-6 text-[#edf7f1]/70">
              <p><MapPin className="mr-2 inline h-4 w-4 text-[#02863e]" />Commune de Goma, Q. Les Volcans<br />Av. Butembo, N°12, en Diagonal de Ecobank<br />Ville de Goma, Nord-Kivu, RD Congo</p>
              <p><Mail className="mr-2 inline h-4 w-4 text-[#02863e]" />office.coviac@gmail.com</p>
              <p><Phone className="mr-2 inline h-4 w-4 text-[#02863e]" />+243 816 606 176 · +243 994 875 398</p>
              <p><span className="font-semibold">Site :</span> www.coviac-afrique.org</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
