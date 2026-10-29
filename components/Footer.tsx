import Link from "next/link";
import { nav, site, social } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p>{site.role}</p>
          <p className="footer-meta">
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <br />
            <a href={site.emailHref}>{site.email}</a>
          </p>
          <p className="footer-meta">N° SIRET : {site.siret}</p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer-label">Réseaux</p>
          <ul className="footer-links">
            {social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer-copy">
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}
