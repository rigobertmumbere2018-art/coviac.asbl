import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-content";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/coviac-logo-mark.webp";


export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 md:mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-8 py-10 md:gap-12 md:py-16 md:grid-cols-12">

        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center" aria-label="Accueil COVIAC asbl">
            <img
              src={logo}
              alt="COVIAC asbl — Congo Vision Afrique Centrale"
              className="h-12 w-auto"
            />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Organisation chrétienne de développement durable, de protection et de paix
            en Afrique Centrale.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>{CONTACT.phones.join(" · ")}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-foreground">Explorer</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/interventions" className="hover:text-primary">Nos interventions</Link></li>
            <li><Link to="/projets" className="hover:text-primary">Projets</Link></li>
            <li><Link to="/actualites" className="hover:text-primary">Actualités</Link></li>
            <li><Link to="/publications" className="hover:text-primary">Publications</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-foreground">S'engager</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/don" className="hover:text-primary">Faire un don</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Partenariat</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-foreground">Suivre COVIAC</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {CONTACT.socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} className="hover:text-primary" rel="noreferrer noopener">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} COVIAC asbl — Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-primary">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
