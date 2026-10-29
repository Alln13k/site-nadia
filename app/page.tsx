import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Locations } from "@/components/Locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">La Ciotat · Marseille</p>
            <h1>{site.name}</h1>
            <ul className="role-list">
              {site.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <ul className="memberships">
              {site.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="lede">
              Vous souhaitez entreprendre une thérapie individuelle, de couple
              ou familiale&nbsp;? Je vous accueille sur rendez-vous à La Ciotat
              et à Marseille.
            </p>
            <div className="actions">
              <a className="button" href={site.phoneHref}>
                <span className="sr-only">Téléphone&nbsp;: </span>
                {site.phoneDisplay}
              </a>
              <a className="button button-ghost" href={site.emailHref}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="portrait-frame">
            <Image
              src="/portrait.png"
              alt="Portrait de Nadia El Ferkane Blanc"
              width={578}
              height={598}
              priority
              sizes="(max-width: 800px) 100vw, 36rem"
            />
          </div>
        </div>
      </section>

      <section className="visit" aria-labelledby="visite-titre">
        <div className="wrap visit-grid">
          <div>
            <h2 id="visite-titre">Qu’attendre de votre visite&nbsp;?</h2>
          </div>
          <div className="prose">
            <p>
              Vous traversez une étape de vie douloureuse, vous êtes en
              situation de souffrance et vous cherchez un nouvel équilibre&nbsp;?
            </p>
            <p>
              Je vous propose de nous rencontrer afin d’échanger sur ce qui
              vous pose problème.
            </p>
            <p>
              L’approche systémique à laquelle je me réfère s’intéresse à la
              personne au regard des différents systèmes auxquels elle
              appartient&nbsp;: couple, famille, milieu professionnel. Les
              difficultés rencontrées sont ainsi considérées à partir des
              relations entretenues avec l’environnement.
            </p>
            <p>
              Dans ce cadre, je propose un accompagnement thérapeutique
              individuel, de couple ou familial. Nous déterminerons ensemble
              les modalités du travail, selon vos attentes et mon champ de
              compétence.
            </p>
            <p>
              <Link href="/informations-tarifs" className="text-link">
                Informations et tarifs
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="quote-band" aria-label="Citation">
        <div className="wrap">
          <figure className="quote">
            <blockquote>
              <p>
                Autant l’homme que l’animal ont une tendance à s’accrocher aux
                solutions qu’ils connaissent. Ces solutions étaient sans doute
                les meilleures ou les seules possibles à un moment donné, mais
                on continue de les mettre en œuvre alors que les circonstances
                ont changé et les ont rendu inopérantes.
              </p>
              <p>À cet instant la solution devient le problème.</p>
            </blockquote>
            <figcaption>Paul Watzlawick, 1987</figcaption>
          </figure>
        </div>
      </section>

      <section className="places" aria-labelledby="lieux-titre">
        <div className="wrap">
          <p className="kicker">Thérapie systémique</p>
          <h2 id="lieux-titre">Où me rencontrer</h2>
          <Locations />
        </div>
      </section>
    </>
  );
}
