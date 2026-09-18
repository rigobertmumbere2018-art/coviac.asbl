import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/coviac-logo-mark.webp";

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur transition-colors",
          scrolled && "border-border bg-background/95 shadow-[0_1px_0_0_var(--color-border)]",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 shrink-0"
            aria-label="Accueil COVIAC asbl"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white md:h-12 md:w-12">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain p-1"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-[1.05rem] font-extrabold tracking-[0.08em] text-foreground md:text-xl">
                COVIAC
              </span>
              <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.04em] text-foreground/65 md:text-xs">
                CONGO VISION AFRIQUE CENTRALE
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground",
                    active && "text-primary",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/don"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Faire un don
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden hover:bg-muted"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium text-foreground/80",
                    active && "text-primary bg-primary-soft",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/don"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Faire un don
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
