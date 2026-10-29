import { site } from "@/lib/site";

export function ContactStrip() {
  return (
    <aside className="contact-strip" aria-label="Prendre contact">
      <div>
        <p className="kicker">Sur rendez-vous</p>
        <p className="contact-strip-title">La Ciotat et Marseille</p>
      </div>
      <div className="actions">
        <a className="button" href={site.phoneHref}>
          <span className="sr-only">Téléphone&nbsp;: </span>
          {site.phoneDisplay}
        </a>
        <a className="button button-ghost" href={site.consultHref}>
          Écrire un courriel
        </a>
      </div>
    </aside>
  );
}
