import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page">
      <div className="wrap prose">
        <p className="kicker">404</p>
        <h1>Cette page n’existe pas</h1>
        <p>Le lien est peut-être incomplet, ou la page a été déplacée.</p>
        <p>
          <Link href="/" className="button">
            Retour à l’accueil
          </Link>
        </p>
      </div>
    </article>
  );
}
