import type { Metadata } from "next";
import { ContactStrip } from "@/components/ContactStrip";
import { usefulLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liens utiles",
  description:
    "Ressources : European Family Therapy Association, Société Française de Thérapie Familiale, La Durance.",
};

export default function LiensPage() {
  return (
    <article className="page">
      <div className="wrap">
        <p className="kicker">Ressources</p>
        <h1>Liens utiles</h1>
        <ul className="resource-list">
          {usefulLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="resource-title">{link.title}</span>
                <span className="resource-note">
                  {link.note}
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ContactStrip />
      </div>
    </article>
  );
}
