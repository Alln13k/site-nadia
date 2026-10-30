/**
 * Facts, copy, and links taken from the public site
 * https://www.therapie-familiale-systemique.com/
 * (accueil, présentation, informations-tarifs, blank-4, blank-6).
 * Do not add services, prices, credentials, or biography that are not there.
 */

export const site = {
  name: "Nadia El Ferkane Blanc",
  role: "Thérapeute familiale systémique",
  title:
    "Nadia El Ferkane Blanc — Thérapeute familiale systémique",
  description:
    "Consultations thérapeutiques d’approche systémique : thérapie individuelle, thérapie de couple, thérapie familiale. Nadia El Ferkane Blanc, thérapeute familiale, intervenante en analyse des pratiques professionnelles. Marseille et La Ciotat.",
  phoneDisplay: "06.25.70.08.24",
  phoneHref: "tel:+33625700824",
  email: "elferkane.nadia@hotmail.fr",
  emailHref: "mailto:elferkane.nadia@hotmail.fr",
  consultHref:
    "mailto:elferkane.nadia@hotmail.fr?subject=Demande%20de%20consultation",
  siret: "922 238 316 00017",
  copyright:
    "© 2022 Nadia El Ferkane Blanc — Thérapeute familiale systémique",
  roles: [
    "Thérapeute familiale",
    "Formatrice",
    "Intervenante en analyse des pratiques professionnelles",
  ],
  memberships: [
    "Membre de la Société Française de Thérapie Familiale (S.F.T.F.)",
    "Membre de l’European Family Therapy Association (E.F.T.A.)",
  ],
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/informations-tarifs", label: "Informations & tarifs" },
  { href: "/contact", label: "Contact" },
  { href: "/liens-utiles", label: "Liens utiles" },
] as const;

export const locations = [
  {
    city: "La Ciotat",
    address: "50 Voie Ariane, Zone Athélia 1, 13600 La Ciotat, France",
    mapHref:
      "https://www.google.com/maps/place/50+Voie+Ariane,+13600+La+Ciotat/@43.200876,5.5912304,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9a57aca8fdb5b:0x80891852da30a58!8m2!3d43.2008721!4d5.5934244",
  },
  {
    city: "Marseille",
    address: "4 rue de la Calanque, 13008 Marseille, France",
    mapHref: "https://share.google/WiEdN0eobFd7mzmbQ",
  },
] as const;

export const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100089166795080",
  },
] as const;

export const sessions = [
  {
    title: "Thérapie individuelle",
    duration: "45 min",
    price: "60 €",
  },
  {
    title: "Thérapie de couple",
    duration: "1 h",
    price: "70 €",
  },
  {
    title: "Thérapie familiale",
    duration: "1 h",
    price: "80 €",
  },
] as const;

export const usefulLinks = [
  {
    title: "EFTA — Association européenne de thérapie familiale",
    note: "europeanfamilytherapy.eu",
    href: "https://europeanfamilytherapy.eu/fr/accueil/",
  },
  {
    title: "Société Française de Thérapie Familiale",
    note: "sftf.net",
    href: "http://www.sftf.net",
  },
  {
    title: "La Durance",
    note: "durance-formation.com",
    href: "http://www.durance-formation.com/",
  },
] as const;

export const appProfileHref =
  "https://www.analysedespratiques.com/formateurs/nadia-el-ferkane-blanc-ide-therapeute-familiale-formatrice-iapp/";

export const duranceHref = "http://www.durance-formation.com/";

/** Public origin for metadata and the sitemap. Set NEXT_PUBLIC_SITE_URL in production. */
export function siteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
