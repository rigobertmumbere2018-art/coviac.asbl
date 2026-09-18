import childProtection from "@/assets/child-protection.webp";
import womenEmpowerment from "@/assets/women-empowerment.webp";
import health from "@/assets/health.webp";
import wash from "@/assets/wash.webp";
import environment from "@/assets/environment.webp";
import recovery from "@/assets/recovery.webp";
import peace from "@/assets/peace.webp";
import communication from "@/assets/communication.webp";

import {
  Baby,
  HeartHandshake,
  Stethoscope,
  Droplets,
  Leaf,
  HomeIcon,
  Handshake,
  Radio,
  type LucideIcon,
} from "lucide-react";

export type Intervention = {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  description: string;
};

export const INTERVENTIONS: Intervention[] = [
  {
    slug: "protection-enfance",
    title: "Protection de l'enfance",
    icon: Baby,
    image: childProtection,
    summary:
      "Prévention, prise en charge et réinsertion des enfants exposés aux violences, à la séparation familiale et au recrutement.",
    description:
      "Nous accompagnons les enfants vulnérables — enfants séparés, non accompagnés, victimes de violences ou associés aux groupes armés — à travers l'identification, la documentation, la prise en charge psychosociale et la réunification familiale.",
  },
  {
    slug: "femme",
    title: "Protection et autonomisation de la femme",
    icon: HeartHandshake,
    image: womenEmpowerment,
    summary:
      "Prévention des violences basées sur le genre et appui économique aux femmes cheffes de ménage.",
    description:
      "Groupes de parole, prise en charge des survivantes, alphabétisation, formations professionnelles et micro-activités génératrices de revenus pour renforcer l'autonomie des femmes.",
  },
  {
    slug: "sante",
    title: "Santé",
    icon: Stethoscope,
    image: health,
    summary:
      "Accès aux soins essentiels, santé maternelle et infantile, sensibilisation communautaire.",
    description:
      "Appui aux structures sanitaires, campagnes de sensibilisation, distribution de kits et soutien aux relais communautaires pour améliorer l'accès aux soins primaires.",
  },
  {
    slug: "wash",
    title: "Eau, Hygiène et Assainissement",
    icon: Droplets,
    image: wash,
    summary:
      "Forages, réhabilitation de points d'eau, latrines et promotion de l'hygiène en milieu communautaire et scolaire.",
    description:
      "Nous améliorons l'accès à l'eau potable et aux infrastructures d'assainissement, et animons des campagnes de promotion de l'hygiène auprès des ménages et des écoles.",
  },
  {
    slug: "environnement",
    title: "Protection de l'environnement",
    icon: Leaf,
    image: environment,
    summary:
      "Reboisement, agroforesterie, éducation environnementale et lutte contre la déforestation.",
    description:
      "Programmes de reboisement communautaire, foyers améliorés, agroforesterie et sensibilisation à la préservation des écosystèmes fragiles d'Afrique Centrale.",
  },
  {
    slug: "relevement",
    title: "Relèvement communautaire",
    icon: HomeIcon,
    image: recovery,
    summary:
      "Reconstruction de moyens de subsistance et infrastructures communautaires après les crises.",
    description:
      "Cash-for-work, appui aux coopératives, réhabilitation d'infrastructures socio-économiques et transferts monétaires pour accompagner les communautés vers l'autonomie.",
  },
  {
    slug: "cohesion",
    title: "Cohésion sociale et paix",
    icon: Handshake,
    image: peace,
    summary:
      "Médiation, dialogue intercommunautaire et prévention des conflits.",
    description:
      "Nous formons des noyaux de paix, animons des dialogues intercommunautaires et accompagnons les mécanismes locaux de résolution non violente des conflits.",
  },
  {
    slug: "communication",
    title: "Communication communautaire",
    icon: Radio,
    image: communication,
    summary:
      "Radios communautaires, messages de sensibilisation et information des populations.",
    description:
      "Production de contenus audio, appui aux radios communautaires et campagnes multi-canaux pour informer les populations sur leurs droits et les services disponibles.",
  },
];

export const KEY_FIGURES = [
  { value: "12+", label: "Années d'engagement communautaire" },
  { value: "45k", label: "Bénéficiaires accompagnés" },
  { value: "8", label: "Domaines d'intervention" },
  { value: "6", label: "Provinces couvertes" },
];

export const PROVINCES = [
  "Nord-Kivu",
  "Sud-Kivu",
  "Ituri",
  "Tanganyika",
  "Kasaï",
  "Kinshasa",
];

export const RECENT_PROJECTS = [
  {
    slug: "eau-goma",
    title: "Accès à l'eau potable — quartiers péri-urbains de Goma",
    province: "Nord-Kivu",
    image: wash,
    summary:
      "Réhabilitation de bornes-fontaines et sensibilisation à l'hygiène pour 12 000 personnes déplacées et hôtes.",
  },
  {
    slug: "femmes-bukavu",
    title: "Autonomisation économique des femmes — Bukavu",
    province: "Sud-Kivu",
    image: womenEmpowerment,
    summary:
      "Formation professionnelle, appui en kits et accompagnement en épargne pour 300 femmes cheffes de ménage.",
  },
  {
    slug: "paix-ituri",
    title: "Dialogue intercommunautaire — Territoire de Djugu",
    province: "Ituri",
    image: peace,
    summary:
      "Mise en place de noyaux de paix et médiation entre communautés dans 8 chefferies.",
  },
];

export const RECENT_NEWS = [
  {
    slug: "rentree-scolaire-2026",
    title: "Rentrée scolaire 2026 : 1 200 kits distribués aux enfants vulnérables",
    date: "2026-06-14",
    excerpt:
      "COVIAC a soutenu la reprise des cours dans 14 écoles primaires du Nord-Kivu avec des kits scolaires et une remise à niveau psychosociale.",
    image: childProtection,
    category: "Éducation",
  },
  {
    slug: "reboisement-goma",
    title: "40 000 arbres plantés autour de Goma en partenariat avec les jeunes",
    date: "2026-05-22",
    excerpt:
      "Une campagne de reboisement communautaire mobilisant 350 volontaires pour restaurer les collines fragilisées.",
    image: environment,
    category: "Environnement",
  },
  {
    slug: "sante-tanganyika",
    title: "Ouverture d'un centre de santé communautaire au Tanganyika",
    date: "2026-04-08",
    excerpt:
      "Un nouvel espace de soins primaires accessible à plus de 8 000 personnes dans le territoire de Kalemie.",
    image: health,
    category: "Santé",
  },
];

export const PARTNERS = [
  "Ministère des Affaires Sociales",
  "UNHCR",
  "UNICEF",
  "OCHA",
  "PAM",
  "Église du Christ au Congo",
];

export const VALUES = [
  {
    title: "Humanité",
    text: "Placer la dignité de la personne au centre de chaque intervention.",
  },
  {
    title: "Impartialité",
    text: "Agir selon les seuls besoins, sans distinction d'origine, de religion ou de sensibilité.",
  },
  {
    title: "Transparence",
    text: "Rendre compte à nos communautés, à nos partenaires et à nos donateurs.",
  },
  {
    title: "Redevabilité",
    text: "Écouter les personnes que nous servons et adapter notre action à leurs retours.",
  },
];

export const FAQS = [
  {
    q: "Qui est COVIAC ?",
    a: "COVIAC asbl — Congo Vision Afrique Centrale — est une organisation chrétienne à but non lucratif engagée dans le développement durable, la protection, la paix et la solidarité. Elle accompagne les communautés vulnérables à travers des interventions humanitaires et de développement.",
  },
  {
    q: "Où intervient COVIAC ?",
    a: "COVIAC intervient principalement dans six provinces de la République Démocratique du Congo : Nord-Kivu, Sud-Kivu, Ituri, Tanganyika, Kasaï et Kinshasa. Son siège est situé à Goma, dans la province du Nord-Kivu.",
  },
  {
    q: "Quels sont les domaines d'intervention de COVIAC ?",
    a: "COVIAC intervient notamment dans la protection de l'enfance, la protection et l'autonomisation de la femme, la santé, l'eau-hygiène-assainissement, la protection de l'environnement, le relèvement communautaire, la cohésion sociale et la paix, ainsi que la communication communautaire.",
  },
  {
    q: "Comment devenir partenaire de COVIAC ?",
    a: "Pour proposer un partenariat ou une collaboration, contactez directement COVIAC à l'adresse office.coviac@gmail.com en présentant brièvement votre organisation, votre proposition et les objectifs de la collaboration.",
  },
  {
    q: "Comment soutenir les actions de COVIAC ?",
    a: "Vous pouvez soutenir COVIAC en contribuant à ses actions, en devenant partenaire ou en utilisant les moyens de don indiqués sur la page « Faire un don ». Pour obtenir les coordonnées de paiement à jour, contactez directement le bureau de COVIAC.",
  },
  {
    q: "Comment contacter COVIAC ?",
    a: "Vous pouvez contacter COVIAC au +243 816 606 176 ou au +243 994 875 398, par email à office.coviac@gmail.com, ou via le formulaire de la page Contact. Le bureau est situé à la Commune de Goma, quartier Les Volcans, Av. Butembo N°12, en diagonale d'Ecobank, Ville de Goma, Nord-Kivu, RD Congo.",
  },
  {
    q: "Comment postuler à une opportunité au sein de COVIAC ?",
    a: "Les opportunités et informations de recrutement sont publiées par COVIAC sur ses canaux de communication. Pour toute demande, utilisez l'adresse office.coviac@gmail.com afin d'obtenir les informations à jour sur les postes et modalités de candidature.",
  },
];

export const PUBLICATIONS = [
  {
    title: "Rapport annuel 2025",
    type: "Rapport",
    year: 2025,
    size: "2.4 Mo",
    href: "#",
  },
  {
    title: "Étude sur l'accès à l'eau potable dans les zones péri-urbaines de Goma",
    type: "Étude",
    year: 2025,
    size: "3.1 Mo",
    href: "#",
  },
  {
    title: "Guide pratique de la médiation communautaire",
    type: "Guide",
    year: 2024,
    size: "1.8 Mo",
    href: "#",
  },
  {
    title: "Rapport annuel 2024",
    type: "Rapport",
    year: 2024,
    size: "2.1 Mo",
    href: "#",
  },
];

export const CONTACT = {
  address: "Commune de Goma, Q. Les Volcans — Av. Butembo, N°12, En Diagonal de Ecobank — Ville de Goma, Nord-Kivu, RD Congo",
  phones: ["+243 816 606 176", "+243 994 875 398"],
  email: "office.coviac@gmail.com",
  website: "www.coviac-afrique.org",
  hours: "Lundi – Vendredi · 08h00 – 17h00",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/coviac" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/coviac" },
    { name: "YouTube", href: "https://www.youtube.com/@COVIAC-CongoVisionAfriqueCentr" },
  ],
};

export const DONATION_METHODS = [
  {
    name: "Orange Money",
    number: "+243 000 000 010",
    holder: "COVIAC ASBL",
  },
  {
    name: "Airtel Money",
    number: "+243 000 000 011",
    holder: "COVIAC ASBL",
  },
  {
    name: "M-Pesa",
    number: "+243 000 000 012",
    holder: "COVIAC ASBL",
  },
  {
    name: "Virement bancaire",
    number: "IBAN — à communiquer sur demande",
    holder: "COVIAC ASBL — Rawbank Goma",
  },
];
