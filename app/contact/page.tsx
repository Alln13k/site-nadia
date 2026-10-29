import type { Metadata } from "next";
import { Locations } from "@/components/Locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Coordonnées de Nadia El Ferkane Blanc, thérapeute familiale systémique. Consultations sur rendez-vous à La Ciotat et à Marseille.",
};

export default function ContactPage() {
  return (
    <article className="page">
      <div className="wrap">
        <p className="kicker">Rendez-vous</p>
        <h1>Pour me joindre</h1>
        <p className="lede">
          Je vous invite à prendre contact par courriel de préférence, afin de
          me communiquer les éléments de votre demande ainsi que vos
          coordonnées. Vous pouvez aussi me joindre par téléphone et laisser
          un message, afin que je puisse vous recontacter.
        </p>

        <div className="contact-grid">
          <a className="contact-card" href={site.emailHref}>
            <span className="kicker">Courriel</span>
            <span className="contact-value">{site.email}</span>
          </a>
          <a className="contact-card" href={site.phoneHref}>
            <span className="kicker">Téléphone</span>
            <span className="contact-value">{site.phoneDisplay}</span>
          </a>
        </div>

        <section aria-labelledby="adresses-titre">
          <h2 id="adresses-titre">Adresses</h2>
          <Locations />
        </section>
      </div>
    </article>
  );
}
