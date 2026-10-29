import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactStrip } from "@/components/ContactStrip";
import { appProfileHref, duranceHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Présentation",
  description:
    "Parcours de Nadia El Ferkane Blanc : infirmière diplômée d’État, thérapeute familiale systémique certifiée par La Durance à Marseille, formatrice, membre de l’E.F.T.A.",
};

export default function PresentationPage() {
  return (
    <article className="page">
      <div className="wrap">
        <header className="page-intro presentation-intro">
          <div>
            <p className="kicker">Parcours</p>
            <h1>Qui suis-je&nbsp;?</h1>
            <ul className="memberships">
              {site.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="portrait-frame portrait-frame-small">
            <Image
              src="/portrait.png"
              alt="Portrait de Nadia El Ferkane Blanc"
              width={578}
              height={598}
              sizes="(max-width: 800px) 100vw, 22rem"
            />
          </div>
        </header>

        <div className="prose prose-wide">
          <p>
            Infirmière de formation initiale, j’ai exercé durant de nombreuses
            années au sein d’un pôle de psychiatrie infanto-juvénile, ainsi que
            dans le champ de la protection de l’enfance, auprès de mineurs non
            accompagnés. Ces expériences auprès des jeunes et de leurs
            familles, mais aussi ma pratique auprès des équipes
            pluridisciplinaires et des partenaires, m’ont amenée à
            m’interroger sur la complexité des situations et des contextes.
            C’est ainsi que je me suis intéressée à diverses approches, dans le
            but d’appréhender la singularité des individus, leur parcours de
            vie et les besoins qu’ils peuvent exprimer.
          </p>
          <p>
            L’approche systémique a su répondre à ces attentes. Elle m’a
            permis d’acquérir une posture professionnelle ainsi qu’un
            savoir-faire congruent avec une vision holistique du soin.
          </p>
          <p>
            Après m’être formée durant quatre ans au sein du centre de
            formation et de consultation{" "}
            <a href={duranceHref} target="_blank" rel="noopener noreferrer">
              La Durance
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            </a>{" "}
            à Marseille, j’ai obtenu une certification de thérapeute familiale
            systémique.
          </p>
          <p>
            J’ai pu par la suite y intervenir dans le cadre de ma pratique
            libérale, également auprès d’auteurs de violences conjugales.
          </p>
          <p>
            Aujourd’hui formatrice vacataire, je dispense des formations
            auprès d’équipes du champ social, médico-social ou de la petite
            enfance.
          </p>
          <p>
            Je propose également des interventions en analyse de la pratique
            professionnelle (APP).
          </p>
        </div>

        <div className="path-grid">
          <Link href="/informations-tarifs" className="path-card">
            <span className="kicker">Consultations</span>
            <span className="path-title">Thérapies</span>
            <span className="path-note">Modalités et tarifs des séances</span>
          </Link>
          <a
            href={appProfileHref}
            className="path-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="kicker">Interventions</span>
            <span className="path-title">
              Analyse des pratiques professionnelles
            </span>
            <span className="path-note">
              Fiche formatrice
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            </span>
          </a>
        </div>

        <section className="credential" aria-labelledby="certificat-titre">
          <h2 id="certificat-titre">Certification</h2>
          <p>
            Certificat de thérapeute familiale systémique — La Durance,
            Marseille.
          </p>
        </section>

        <section aria-labelledby="formations-titre">
          <h2 id="formations-titre">Formations</h2>
          <ul className="credential-list">
            <li>Diplôme d’État infirmier — IFSI Digne-les-Bains.</li>
            <li>
              Formation à l’analyse des pratiques professionnelles — Ifsmb
              Montpellier.
            </li>
          </ul>
        </section>

        <ContactStrip />
      </div>
    </article>
  );
}
