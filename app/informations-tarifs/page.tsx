import type { Metadata } from "next";
import { ContactStrip } from "@/components/ContactStrip";
import { sessions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Informations et tarifs",
  description:
    "Modalités de prise de contact, entretien téléphonique préalable gratuit, tarifs des séances individuelle, de couple et familiale, règlement, remboursement et annulation.",
};

export default function TarifsPage() {
  return (
    <article className="page">
      <div className="wrap">
        <p className="kicker">Consultations</p>
        <h1>Modalités des demandes de consultation</h1>

        <ol className="steps">
          <li>
            <h2>Prendre contact</h2>
            <p>
              Je vous invite à prendre contact par courriel de préférence, afin
              de me communiquer les éléments de votre demande ainsi que vos
              coordonnées. Vous pouvez également me joindre par téléphone et
              laisser un message avec ces éléments afin que je puisse vous
              recontacter.
            </p>
            <p>
              <a className="button" href={site.consultHref}>
                Courriel
              </a>
            </p>
          </li>
          <li>
            <h2>Entretien téléphonique</h2>
            <p>
              Nous conviendrons ensuite d’un entretien téléphonique préalable
              gratuit. Prévoyez environ 20&nbsp;minutes.
            </p>
          </li>
          <li>
            <h2>Premier rendez-vous</h2>
            <p>
              À l’issue de celui-ci, je vous proposerai un premier rendez-vous,
              adapté à votre demande.
            </p>
          </li>
        </ol>

        <section aria-labelledby="tarifs-titre">
          <h2 id="tarifs-titre">Tarifs</h2>
          <div className="price-grid">
            {sessions.map((session) => (
              <article key={session.title} className="price-card">
                <h3>{session.title}</h3>
                <p className="price-duration">
                  Durée des séances&nbsp;: {session.duration}
                </p>
                <p className="price">
                  <span>{session.price}</span>
                  <span className="price-unit"> / séance</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="info-block" aria-labelledby="infos-titre">
          <h2 id="infos-titre">Informations</h2>
          <div className="info-grid">
            <section>
              <h3>Règlement des séances</h3>
              <p>Paiement par chèque et espèces uniquement.</p>
            </section>
            <section>
              <h3>Remboursement</h3>
              <p>
                Les consultations ne sont pas remboursées par la Sécurité
                sociale. Certaines mutuelles peuvent prendre en charge une
                partie des frais de consultation&nbsp;: renseignez-vous auprès
                de votre mutuelle santé.
              </p>
            </section>
            <section>
              <h3>Annulation de rendez-vous</h3>
              <p>
                Si vous souhaitez reporter ou annuler votre rendez-vous, merci
                de le faire au plus tard 48&nbsp;heures à l’avance. Toute
                consultation non décommandée dans ce délai vous sera facturée.
              </p>
            </section>
          </div>
        </section>

        <ContactStrip />
      </div>
    </article>
  );
}
