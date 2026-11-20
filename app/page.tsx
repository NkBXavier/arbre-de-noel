"use client";

import { useState } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Gift,
  Handshake,
  Heart,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
  Store,
  Truck,
  Users,
  X,
} from "lucide-react";

/* ─── Type definitions ─── */
interface ActivityDetail {
  id: string;
  title: string;
  badge: string;
  date: string;
  location: string;
  slogan: string;
  summary: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  actionText: string;
  actionType: "stand" | "don" | "carnaval" | "partenaire";
}

const ACTIVITIES: ActivityDetail[] = [
  {
    id: "carnaval",
    title: "Grand Carnaval des Femmes Dynamiques",
    badge: "Accès & rafraîchissements gratuits",
    date: "05 Décembre 2026",
    location: "Douala",
    slogan: "Et si la fierté de nos talents se partageait dans les rues ?",
    summary:
      "Grande parade populaire et festive à travers les artères de Douala pour célébrer les talents, l'énergie et la fierté féminine africaine.",
    fullDescription:
      "Le grand coup d'envoi populaire du SINFDA 2026 ! Retrouvez des centaines de femmes dynamiques, entrepreneures, créatrices et associations habillées aux couleurs de l'événement dans une immense marche festive dans les rues de Douala. Une ambiance rythmée par les musiques, les percussions et la célébration de nos savoir-faire.",
    highlights: [
      "Grande parade populaire dans les artères de Douala",
      "Accès libre et rafraîchissements entièrement gratuits",
      "Animations culturelles, percussions et célébration des talents",
      "Mobilisation festive pour lancer le mois de la solidarité",
    ],
    image: "/images/carnaval-flyer.jpg",
    actionText: "Rejoindre le Carnaval",
    actionType: "carnaval",
  },
  {
    id: "stand-terroir",
    title: "Stands Made in Camer – Terroir & Agri-Business",
    badge: "Vous faites du Made in Camer ?",
    date: "12 Décembre 2026",
    location: "Maison du Parti, Bonanjo, Douala",
    slogan: "Nous avons un stand pour vous !",
    summary:
      "Espace d'exposition et de vente dédié aux producteurs et transformateurs locaux : café africain, miel naturel, thé vert et trésors agricoles.",
    fullDescription:
      "Vous produisez ou transformez au Cameroun ? Le Salon International des Nouvelles Femmes Dynamiques met à votre disposition un stand premium pour présenter vos produits directement à un public de milliers d'acheteurs, décideurs et distributeurs régionaux et internationaux.",
    highlights: [
      "Stands d'exposition dédiés à l'agro-business et aux produits du terroir",
      "Mise en lumière du café camerounais, miel pur, thés et denrées locales",
      "Rencontres B2B directes avec distributeurs et supermarchés",
      "Accompagnement et opportunités de débouchés commerciaux",
    ],
    image: "/images/stand-terroir-flyer.jpg",
    actionText: "Réserver un Stand Terroir",
    actionType: "stand",
  },
  {
    id: "stand-produits",
    title: "Cameroon Made Expo – Produits Locaux & Artisanat",
    badge: "Stands & Vente Directe",
    date: "12 Décembre 2026",
    location: "Maison du Parti, Bonanjo, Douala",
    slogan: "Valoriser nos marques et le savoir-faire 100% camerounais",
    summary:
      "Foire commerciale mettant à l'honneur les jus naturels (ZAA Ananas), miel blanc d'Oku, cosmétiques naturels et l'artisanat d'art féminin.",
    fullDescription:
      "Une vitrine prestigieuse au cœur de Bonanjo pour faire rayonner les marques émergentes et confirmées du Cameroun. Mode, cosmétique bio, artisanat, jus de fruits pressés et innovations portées par des femmes dynamiques.",
    highlights: [
      "Exposition de produits certifiés et étiquetés 100% Made in Camer",
      "Espace dégustation et démonstration directe au public",
      "Vente directe sans intermédiaire pour booster la visibilité",
      "Couverture médiatique et présence d'investisseurs",
    ],
    image: "/images/stand-produits-flyer.jpg",
    actionText: "Réserver un Stand Exposition",
    actionType: "stand",
  },
  {
    id: "entrepreneuriat",
    title: "Entrepreneuriat & Métiers Féminins d'Avenir",
    badge: "Formation & Masterclasses",
    date: "Du 9 au 12 décembre 2026",
    location: "Douala",
    slogan: "Faisons grandir les ambitions des femmes",
    summary:
      "Valorisation de l'audace entrepreneuriale féminine dans tous les secteurs : métiers techniques, mécanique, artisanat, industrie et services.",
    fullDescription:
      "L'entrepreneuriat au féminin sous toutes ses facettes. Que vous soyez dans les métiers traditionnels ou pionnière dans les secteurs techniques et industriels (mécanique, BTP, tech), ce volet propose des masterclasses de gestion, de résilience et de passage à l'échelle.",
    highlights: [
      "Masterclasses exclusives animées par des dirigeantes d'entreprises",
      "Ateliers pratiques de gestion financière, stratégie et pitch",
      "Valorisation des femmes dans les métiers techniques et innovants",
      "Accès aux opportunités de financement et d'accompagnement",
    ],
    image: "/images/entrepreneuriat-flyer.jpg",
    actionText: "Participer aux Ateliers",
    actionType: "partenaire",
  },
  {
    id: "conferences",
    title: "Conférences, Panels & Networking d'Affaires",
    badge: "Leadership & Réseau",
    date: "Du 9 au 12 décembre 2026",
    location: "Maison du Parti, Bonanjo, Douala",
    slogan: "Connecter, inspirer et propulser les talents",
    summary:
      "Grands débats et partages d'expériences réunissant des femmes leaders d'horizons variés pour transformer les défis en réussites collectives.",
    fullDescription:
      "Une tribune d'expression et d'échange puissante. Des femmes leaders d'entreprises, personnalités publiques, artisanes et figures inspirantes se réunissent pour débattre de l'autonomisation économique, du mentorat intergénérationnel et des synergies panafricaines.",
    highlights: [
      "Panels d'inspiration sur l'audace et le leadership féminin",
      "Sessions de speed-networking d'affaires B2B",
      "Partage d'expériences sans filtre et résolution de freins au développement",
      "Création de partenariats stratégiques durables",
    ],
    image: "/images/conferences-flyer.jpg",
    actionText: "S'inscrire aux Conférences",
    actionType: "partenaire",
  },
  {
    id: "illumination-sapin",
    title: "Illumination du Grand Arbre de Noël",
    badge: "L'Arbre revient... plus grand !",
    date: "11 Décembre 2026",
    location: "Douala",
    slogan: "Faire briller les rêves des enfants",
    summary:
      "Cérémonie féerique d'illumination du grand Arbre de Noël pour célébrer l'espérance, l'esprit des fêtes et la solidarité partagée.",
    fullDescription:
      "L'Arbre de Noël revient... plus grand ! Une soirée magique où le grand sapin scintillant s'illumine au cœur de Douala, annonçant les festivités et la distribution de cadeaux à plus de 500 enfants. Un moment chaleureux avec chorales et émerveillement.",
    highlights: [
      "Illumination spectaculaire du grand Arbre de Noël féerique",
      "Chants de Noël, chorales et prestations artistiques en direct",
      "Lancement officiel de la grande opération de solidarité",
      "Rassemblement chaleureux des familles, marraines et partenaires",
    ],
    image: "/images/sapin-lumineux-flyer.jpg",
    actionText: "Soutenir l'Arbre de Noël",
    actionType: "don",
  },
  {
    id: "remise-cadeaux",
    title: "Grande Remise des Cadeaux aux 500+ Enfants",
    badge: "Plus de 500 enfants célébrés",
    date: "12 Décembre 2026",
    location: "Douala",
    slogan: "À célébrer à travers l'Arbre de Noël de la solidarité",
    summary:
      "Journée magique avec le Père Noël : distribution de jouets, fournitures scolaires, vêtements neufs et friandises à plus de 500 enfants.",
    fullDescription:
      "Le cœur battant de l'opération solidaire. Grâce aux dons et soutiens de nos partenaires, plus de 500 enfants défavorisés et orphelins reçoivent leurs cadeaux des mains du Père Noël et des marraines du SINFDA, avec animations géantes et goûter festif.",
    highlights: [
      "Distribution de cadeaux individuels neufs à plus de 500 enfants",
      "Présence du Père Noël, jeux, mascottes et animations festives",
      "Don de fournitures scolaires et vêtements adaptés",
      "Goûter géant et moments d'amour inoubliables",
    ],
    image: "/images/arbre-noel-enfants-flyer.jpg",
    actionText: "Faire un don pour les cadeaux",
    actionType: "don",
  },
  {
    id: "distinctions-gala",
    title: "Distinctions de la Femme Dynamique & Gala",
    badge: "Célébration & Trophées",
    date: "12 Décembre 2026 au soir",
    location: "Douala",
    slogan: "Ensemble, faisons grandir les ambitions des femmes",
    summary:
      "Soirée de clôture prestigieuse honorant les femmes d'exception, les partenaires solidaires et les bienfaiteurs de l'Arbre de Noël.",
    fullDescription:
      "Le grand final solennel et élégant du SINFDA 2026. Une soirée de gala réunissant personnalités, délégations africaines et partenaires pour remettre les Distinctions de la Femme Dynamique et célébrer le succès de l'initiative solidaire.",
    highlights: [
      "Remise solennelle des Trophées de la Femme Dynamique Africaine",
      "Dîner gastronomique et défilé de haute couture africaine",
      "Reconnaissance officielle des entreprises et donateurs partenaires",
      "Concert live et célébration festive de clôture",
    ],
    image: "/images/arbre-noel-fete-flyer.jpg",
    actionText: "Devenir Partenaire du Gala",
    actionType: "partenaire",
  },
];

/* ─── Modal Wrapper ─── */
function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 pt-3.5 pb-2.5 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-sm sm:text-lg font-bold text-purple font-display pr-2 line-clamp-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition flex-shrink-0"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-4 sm:px-5 py-3 sm:py-4">{children}</div>
      </div>
    </div>
  );
}

const inputClasses =
  "w-full border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-magenta/30 focus:border-magenta outline-none transition bg-white text-gray-800 placeholder-gray-400";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donModal, setDonModal] = useState(false);
  const [partnerModal, setPartnerModal] = useState(false);
  const [partnerDefaultType, setPartnerDefaultType] = useState("Commercial");
  const [selectedActivity, setSelectedActivity] = useState<ActivityDetail | null>(null);

  const [donSuccess, setDonSuccess] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  // Form states for donation
  const [donType, setDonType] = useState("Don financier");

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Temps Forts", href: "#temps-forts" },
    { label: "Arbre de Noël", href: "#arbre-noel" },
    { label: "Programme", href: "#programme" },
    { label: "Partenaires", href: "#partenaires" },
    { label: "FAQ", href: "#faq" },
  ];

  const tickerMessages = [
    "Placé sous le haut patronage de Monsieur le Ministre de la Communication, Porte-parole du gouvernement",
    "SIFDA 2026 · Salon International des Femmes Dynamiques Africaines",
    "Arbre de Noël Solidaire · Plus de 500 sourires d'enfants",
    "Du 03 au 12 Décembre 2026 à Douala (Cameroun)",
    "Ensemble, faisons grandir les ambitions des femmes et briller les rêves des enfants",
  ];

  // ─────────────────────────────────────────────────────────────
  // CONFIGURATION DES PARTENAIRES
  // Pour modifier ou ajouter un partenaire :
  // 1. Déposez votre logo dans le dossier public/images/partners/ (format .png, .jpg ou .svg)
  // 2. Modifiez ou ajoutez simplement une ligne dans la liste ci-dessous :
  // ─────────────────────────────────────────────────────────────
  const PARTNERS = [
    {
      id: "minpmeesa",
      name: "MINPMEESA",
      category: "Ministère des PME",
      logo: "/images/partners/minpmeesa.svg",
    },
    {
      id: "minproff",
      name: "MINPROFF",
      category: "Ministère de la Femme",
      logo: "/images/partners/minproff.svg",
    },
    {
      id: "mincom",
      name: "MINCOM",
      category: "Ministère de la Communication",
      logo: "/images/partners/mincom.svg",
    },
    {
      id: "partner-4",
      name: "Partenaire Officiel",
      category: "Institutionnel",
      logo: "/images/partners/partner-4.svg",
    },
    {
      id: "partner-5",
      name: "Partenaire Solidaire",
      category: "Arbre de Noël",
      logo: "/images/partners/partner-5.svg",
    },
    {
      id: "partner-6",
      name: "Partenaire Média",
      category: "Couverture Presse",
      logo: "/images/partners/partner-6.svg",
    },
  ];

  const openPartnerWithCategory = (category: string) => {
    setPartnerDefaultType(category);
    setPartnerSuccess(false);
    setPartnerModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-magenta selection:text-white overflow-x-hidden">
      {/* ══════════════════════════════════════════════
          SECTION 00 — NAVBAR FIXE & STICKY
      ══════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════
          HEADER FIXE : NAVBAR + BANDEAU OFFICIEL DE PATRONAGE
      ══════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white shadow-xs">
        {/* Navigation Bar */}
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 sm:h-18 flex items-center justify-between">
            {/* Logo SIFDA / SINFDA */}
            <a href="#accueil" className="flex items-center gap-3 group" aria-label="SIFDA 2026 Accueil">
              <div className="bg-plum px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl flex items-center shadow-xs group-hover:bg-plum-hover transition-colors">
                <img
                  src="/images/logo.png"
                  alt="SIFDA 2026"
                  className="h-5 sm:h-6 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-display font-extrabold text-base tracking-tight text-plum group-hover:text-plum-hover transition-colors">
                  SIFDA
                </span>
                <span className="text-[9px] text-gray-500 font-medium">
                  Salon International des Femmes Dynamiques Africaines
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-plum transition-colors relative py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#arbre-noel"
                className="pill bg-[#DD0B7D] hover:bg-[#c2096d] text-white font-bold text-xs sm:text-sm px-4 py-2 shadow-xs"
              >
                <Heart size={14} className="text-yellow" />
                <span>Soutenir l&apos;Arbre</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 hover:text-plum hover:bg-gray-100 transition"
              aria-label="Menu de navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 text-sm font-semibold text-gray-800 hover:text-plum hover:bg-plum-light/40 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#arbre-noel"
                  onClick={() => setMenuOpen(false)}
                  className="pill bg-[#DD0B7D] text-white w-full justify-center py-2.5 text-xs shadow-sm font-bold"
                >
                  <Heart size={14} className="text-yellow" />
                  Soutenir l&apos;Arbre de Noël
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Bandeau officiel défilant (Marquee) — Défilement horizontal continu */}
        <div
          className="bg-[#DD0B7D] text-white text-[10px] sm:text-xs font-semibold py-1.5 overflow-hidden shadow-xs relative flex items-center select-none cursor-default"
          title="Bandeau officiel d'annonces SIFDA 2026 (Survoler pour mettre en pause)"
        >
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translate3d(-50%, 0, 0); }
              100% { transform: translate3d(0%, 0, 0); }
            }
            .sifda-marquee-track {
              display: flex !important;
              width: max-content !important;
              animation: marqueeScroll 35s linear infinite !important;
              will-change: transform;
            }
            .sifda-marquee-track:hover {
              animation-play-state: paused !important;
            }
          `}</style>
          <div className="sifda-marquee-track whitespace-nowrap flex items-center">
            {/* Duplication pour un défilement infini et fluide sans rupture */}
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex items-center shrink-0">
                {tickerMessages.map((msg, idx) => (
                  <span key={idx} className="inline-flex items-center mx-4 sm:mx-6">
                    <span className="text-[#F9B42F] mr-2 sm:mr-2.5 text-xs font-bold">✦</span>
                    <span className="tracking-wide">{msg}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          SECTION 01 — HERO / BANNIÈRE PRINCIPALE (STYLE MAQUETTE)
      ══════════════════════════════════════════════ */}
      <section
        id="accueil"
        className="relative pt-24 sm:pt-28 pb-0 bg-[#7A0045] text-white flex flex-col justify-between overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Badge LA NFDA ORGANISE */}
            <div className="inline-block bg-white text-[#7A0045] px-3.5 py-1.5 font-extrabold text-xs sm:text-sm tracking-wider rounded-md uppercase shadow-xs">
              LA NFDA ORGANISE
            </div>

            {/* Main Title */}
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              LE 1<sup>er</sup> SALON INTERNATIONAL DES FEMMES DYNAMIQUES AFRICAINES
              <br />
              <span className="text-white">ET 6<sup>e</sup> ÉDITION DE L&apos;ARBRE DE NOËL SOLIDAIRE.</span>
            </h1>

            {/* Thème officiel */}
            <p className="text-white/85 text-xs sm:text-sm italic leading-relaxed max-w-xl">
              Thème : « Émergence territoriale, partenariats transfrontaliers et mécanismes innovants pour l&apos;autonomisation socio-économique de la femme africaine »
            </p>

            {/* Dates & Lieu */}
            <div className="space-y-0.5 text-xs sm:text-sm font-bold pt-1">
              <p className="text-yellow text-sm sm:text-base">Du 03 au 12 Décembre 2026</p>
              <p className="text-white/95">Douala (Cameroun)</p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#temps-forts"
                className="pill bg-[#DD0B7D] hover:bg-[#c2096d] text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-md"
              >
                Découvrez les temps forts
              </a>
              <button
                onClick={() => openPartnerWithCategory("Visiteur")}
                className="pill bg-[#DD0B7D]/70 hover:bg-[#DD0B7D] text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-md"
              >
                Participez gratuitement
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Magenta border and +10 Pays Africains Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-[#DD0B7D] shadow-2xl bg-[#5C0034]">
                <img
                  src="/images/img6.png"
                  alt="Femmes dynamiques africaines et +10 pays représentés au SIFDA"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Liseré inférieur doré/orange (exactement comme sur la maquette) */}
        <div className="w-full h-2.5 bg-[#F9B42F]" />
      </section>

      {/* ══════════════════════════════════════════════
          SECTIONS 02 — LE SIFDA, BIEN PLUS QU'UN SALON (STYLE MAQUETTE)
      ══════════════════════════════════════════════ */}
      <section id="sifda" className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Presentation */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#8A004F] leading-tight mb-3 sm:mb-4">
                Le SIFDA,
                <br />
                bien plus qu&apos;un salon.
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Une plateforme panafricaine de rencontres, de valorisation des talents et de création d&apos;opportunités économiques, unie à un formidable élan de solidarité.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#temps-forts"
                  className="pill bg-[#DD0B7D] hover:bg-[#c2096d] text-white font-bold text-xs sm:text-sm px-6 py-2.5 shadow-sm inline-flex items-center gap-2"
                >
                  <span>Découvrir les 8 temps forts</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: 2 Cards (Le Salon & L'Arbre de Noël) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1: Le Salon & Stands */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
                <div className="h-44 sm:h-52 relative overflow-hidden bg-gray-100">
                  <img
                    src="/images/heros.png"
                    alt="Le Salon SIFDA - Made in Camer & Stands"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#5C0034] text-white p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-1 text-white">
                      Le Salon &amp; Stands
                    </h3>
                    <p className="font-semibold text-yellow text-xs mb-1.5">
                      Vous faites du Made in Camer ?
                    </p>
                    <p className="text-white/80 text-xs leading-relaxed mb-4">
                      Nous avons un stand pour vous ! Formations, foire-exposition, conférences et networking à Bonanjo.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => openPartnerWithCategory("Commercial")}
                      className="pill bg-yellow hover:bg-yellow-bright text-[#2A0017] font-bold text-xs px-4 py-2 w-full justify-center shadow-xs"
                    >
                      Réserver un stand
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: L'Arbre de Noël */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
                <div className="h-44 sm:h-52 relative overflow-hidden bg-gray-100">
                  <img
                    src="/images/img1.png"
                    alt="Arbre de Noël - Plus de 500 enfants à célébrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#F9B42F] via-[#E8A320] to-[#D48F10] text-[#2A0017] p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-1 text-[#2A0017]">
                      L&apos;Arbre de Noël
                    </h3>
                    <p className="font-bold text-[#450027] text-xs mb-1.5">
                      Revient... plus grand !
                    </p>
                    <p className="text-[#2A0017]/90 font-medium text-xs leading-relaxed mb-4">
                      Plus de 500 enfants à célébrer à travers l&apos;Arbre de Noël de la solidarité.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setDonModal(true)}
                      className="pill bg-white hover:bg-plum-light text-plum font-bold text-xs px-4 py-2 w-full justify-center shadow-xs"
                    >
                      Faire un don
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 03 — LES TEMPS FORTS DU SIFDA 2026 (STYLE MAQUETTE)
      ══════════════════════════════════════════════ */}
      <section id="temps-forts" className="py-10 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header pill & Title matching mockup */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-[#FDE2CB] text-[#9A4B00] font-bold text-xs sm:text-sm px-5 py-1.5 rounded-full mb-3 shadow-xs">
              Programme Officiel
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#8A004F]">
              Découvrez Les temps forts
              <br className="sm:hidden" /> du SIFDA 2026
            </h2>
          </div>

          {/* Grand bloc Prune sombre englobant les 8 cartes comme sur la maquette */}
          <div className="bg-[#7A0045] rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  onClick={() => setSelectedActivity(act)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Cadre orange/or arrondi accueillant le flyer complet en 4:5 */}
                    <div className="w-full aspect-[4/5] rounded-2xl bg-[#F98A15] p-1.5 sm:p-2.5 shadow-sm group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex items-center justify-center">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>

                    {/* Titre de l'activité en blanc */}
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-white leading-snug mt-2.5 mb-1 line-clamp-2">
                      {act.title}
                    </h3>

                    {/* Lien Détails & Inscription en doré/jaune */}
                    <p className="text-[11px] sm:text-xs font-bold text-[#F9B42F] group-hover:underline flex items-center gap-1">
                      Détails &amp; Inscription
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 04 — NOS PARTENAIRES (MODULAIRE & ÉLÉGANT)
      ══════════════════════════════════════════════ */}
      <section id="partenaires" className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge officiel unique */}
          <span className="inline-block bg-[#FDE2CB] text-[#9A4B00] font-bold text-xs sm:text-sm px-6 py-1.5 rounded-full mb-6 shadow-xs">
            Nos partenaires
          </span>

          {/* Grille responsive de logos modulaires */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center justify-center max-w-5xl mx-auto">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100 hover:border-[#F98A15]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center h-22 sm:h-26"
                title={`${partner.name} — ${partner.category}`}
              >
                <div className="w-full h-11 sm:h-13 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-11 sm:max-h-13 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 group-hover:text-plum mt-1.5 truncate max-w-full transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Appel à devenir partenaire */}
          <div className="mt-6">
            <button
              onClick={() => openPartnerWithCategory("Institutionnel")}
              className="text-xs sm:text-sm font-bold text-[#F98A15] hover:text-[#e0770a] inline-flex items-center gap-1.5 transition-colors"
            >
              Rejoindre nos partenaires pour l&apos;édition 2026 →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 05 — ARBRE DE NOËL SOLIDAIRE (BANNIÈRE MAQUETTE)
      ══════════════════════════════════════════════ */}
      <section id="arbre-noel" className="py-6 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bannière grand format avec enfant et bokeh festif */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] flex items-center">
            {/* Background image avec cadrage soigné sur les visages */}
            <div className="absolute inset-0">
              <img
                src="/images/img2.png"
                alt="Cette année faisons briller plus de 500 sourires"
                className="w-full h-full object-cover object-top sm:object-[center_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 sm:to-transparent pointer-events-none" />
            </div>

            {/* Banner Content overlay */}
            <div className="relative z-10 p-5 sm:p-10 lg:p-12 max-w-2xl text-white">
              <span className="inline-block bg-[#F98A15] text-white font-bold text-[11px] sm:text-xs px-4 py-1 rounded-full mb-3 shadow-xs">
                L&apos;arbre de noel revient plus grand
              </span>
              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 sm:mb-3">
                Cette année, faisons briller plus de 500 sourires.
              </h2>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-5 max-w-lg">
                À travers l&apos;Arbre de Noël de la solidarité, offrons un moment magique et inoubliable à plus de 500 enfants défavorisés et orphelins.
              </p>
              <div>
                <button
                  onClick={() => {
                    setDonType("Don financier");
                    setDonModal(true);
                  }}
                  className="pill bg-[#F98A15] hover:bg-[#e0770a] text-white font-extrabold text-xs sm:text-sm px-6 py-3 shadow-lg inline-flex items-center gap-2"
                >
                  <Heart size={15} />
                  <span>Je souhaite faire un don</span>
                </button>
              </div>
            </div>
          </div>

          {/* Les 2 dates clés sous la bannière comme sur la maquette */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-8 sm:pt-10 text-center">
            <div>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7A0045]">
                11 déc. 2026
              </p>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-[#F98A15] mt-1">
                Illumination du grand Arbre
              </p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#7A0045]">
                12 déc. 2026
              </p>
              <p className="text-xs sm:text-sm lg:text-base font-bold text-[#F98A15] mt-1">
                Remise des cadeaux aux enfants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 06 — APPELS À L'ACTION & TIMELINE PROGRAMME
      ══════════════════════════════════════════════ */}
      <section id="programme" className="py-8 sm:py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Les deux grands boutons orange de la maquette */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={() => openPartnerWithCategory("Institutionnel")}
              className="pill bg-[#F98A15] hover:bg-[#e0770a] text-white font-bold text-sm sm:text-base px-8 py-3.5 shadow-md w-full sm:w-auto justify-center"
            >
              Devenir partenaire
            </button>
            <button
              onClick={() => openPartnerWithCategory("Commercial")}
              className="pill bg-[#F98A15] hover:bg-[#e0770a] text-white font-bold text-sm sm:text-base px-8 py-3.5 shadow-md w-full sm:w-auto justify-center"
            >
              Réserver un stand
            </button>
          </div>

          {/* Titre Programme en un coup d'œil */}
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-display text-xl sm:text-3xl font-extrabold text-[#7A0045]">
              Programme en un coup d&apos;œil
            </h3>
          </div>

          {/* Frise chronologique (Timeline horizontale connectée avec ligne traversante centrée) */}
          <div className="max-w-5xl mx-auto px-2 overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[580px] md:min-w-0">
              {/* Ligne 1 : Dates au-dessus de chaque étape */}
              <div className="grid grid-cols-4 text-center mb-2">
                {[
                  "05 décembre",
                  "09–10 décembre",
                  "11 décembre",
                  "12 décembre",
                ].map((date, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm font-extrabold text-[#7A0045] tracking-tight block px-1"
                  >
                    {date}
                  </span>
                ))}
              </div>

              {/* Ligne 2 : Ligne prune continue traversant exactement le centre des cercles */}
              <div className="relative flex items-center justify-between px-[12.5%] my-2.5">
                {/* La ligne prune traversante de centre à centre */}
                <div className="absolute inset-x-[12.5%] h-1 bg-[#7A0045] rounded-full z-0" />

                {/* Les 4 nœuds circulaires oranges */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F98A15] border-3 sm:border-4 border-white shadow-md flex items-center justify-center hover:scale-125 transition-transform cursor-pointer -translate-x-1/2 last:translate-x-1/2 first:translate-x-0"
                    style={{
                      transform: i === 0 ? "none" : i === 3 ? "none" : "none",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                ))}
              </div>

              {/* Ligne 3 : Titres et descriptions en dessous */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center mt-2.5">
                {[
                  {
                    title: "Grand Carnaval des Femmes Dynamiques",
                    desc: "Rues de Douala · Accès & rafraîchissements gratuits",
                  },
                  {
                    title: "Ateliers & Immersion Femmes d'Impact",
                    desc: "Formations certifiantes & masterclasses de leadership",
                  },
                  {
                    title: "Illumination du grand Arbre de Noël",
                    desc: "Célébration féerique et ouverture solidaire",
                  },
                  {
                    title: "Salon, Stands Made in Camer & Soirée de Gala",
                    desc: "Maison du Parti de Bonanjo · Remise des 500 cadeaux",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center px-1">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 08 — FOIRE AUX QUESTIONS (FAQ)
      ══════════════════════════════════════════════ */}
      <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-plum mb-2 sm:mb-3">
              Foire aux questions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
              Tout ce que vous devez savoir pour participer, réserver un stand et vous engager.
            </p>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {[
              {
                q: "Qu'est-ce que le SINFDA / SIFDA 2026 ?",
                a: "Le Salon International des Nouvelles Femmes Dynamiques Africaines (SINFDA 2026) est un événement d'envergure internationale dédié à la promotion de l'entrepreneuriat féminin, à la valorisation du Made in Camer et à la création de réseaux. Il porte également l'Arbre de Noël de la solidarité en faveur de plus de 500 enfants.",
              },
              {
                q: "Quand a lieu le grand Carnaval des Femmes Dynamiques ?",
                a: "Le Carnaval se tiendra le 05 Décembre 2026 à Douala dans les rues de la ville. L'accès ainsi que les rafraîchissements sont entièrement gratuits pour toutes les participantes !",
              },
              {
                q: "Comment réserver un stand pour exposer du « Made in Camer » ?",
                a: "Si vous produisez ou transformez localement (café, thé, miel, mode, cosmétique, artisanat), nous avons un stand pour vous à la Maison du Parti de Bonanjo le 12 décembre 2026. Vous pouvez réserver via notre formulaire ou au +237 693 090 733.",
              },
              {
                q: "Quelles sont les dates de l'événement ?",
                a: "Les festivités débutent le 05 décembre avec le grand Carnaval à Douala, puis les activités majeures se déroulent du 9 au 12 décembre 2026 à Douala (Maison du Parti).",
              },
              {
                q: "Comment soutenir l'Arbre de Noël de la solidarité ?",
                a: "Vous pouvez participer sous forme de dons financiers, dons matériels (jouets neufs, fournitures, vêtements), dons en nature (goûters, denrées) ou partenariats logistiques pour célébrer plus de 500 enfants.",
              },
              {
                q: "Comment contacter directement l'organisation ?",
                a: "Par WhatsApp / Téléphone au +237 693 090 733, par e-mail à contact@femmesdynamiques.com ou sur notre site www.femmesdynamiques.com.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group py-3.5 sm:py-5">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-plum transition-colors pr-3">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-plum-light flex items-center justify-center flex-shrink-0 text-plum group-hover:bg-plum group-hover:text-white transition">
                    <ChevronDown size={16} className="chev" />
                  </div>
                </summary>
                <div className="pt-2.5 pb-1 text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed max-w-3xl">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 09 — BLOC FINAL / APPEL À L'ACTION
      ══════════════════════════════════════════════ */}
      <section
        className="relative py-14 sm:py-20 lg:py-28 overflow-hidden text-white text-center"
        style={{
          background: "linear-gradient(135deg, #2A0017 0%, #5C0034 50%, #85004A 100%)",
        }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-magenta/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold italic leading-tight mb-3.5 sm:mb-5">
            Ensemble, faisons grandir les ambitions des femmes
            <br />
            <span className="text-yellow not-italic font-extrabold">
              et briller les rêves des enfants.
            </span>
          </h2>
          <p className="text-white/80 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            Rejoignez cette célébration inédite à Douala. Réservez votre stand, participez au Carnaval ou parrainez le sourire d&apos;un enfant.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#temps-forts"
              className="pill bg-white hover:bg-gray-100 text-[#2A0017] font-bold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-lg w-full sm:w-auto justify-center"
            >
              Découvrir les activités <ArrowRight size={16} />
            </a>
            <button
              onClick={() => openPartnerWithCategory("Commercial")}
              className="pill bg-yellow hover:bg-yellow-bright text-[#2A0017] font-bold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-lg shadow-yellow/20 w-full sm:w-auto justify-center"
            >
              Réserver mon stand Made in Camer <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setDonModal(true);
                setDonSuccess(false);
              }}
              className="pill bg-magenta hover:bg-magenta-hover text-white text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-magenta/25"
            >
              <span>Soutenir l&apos;Arbre de Noël</span>
              <Heart size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 10 — FOOTER (COORDONNÉES OFFICIELLES)
      ══════════════════════════════════════════════ */}
      <footer id="contact" className="bg-[#180010] text-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start mb-8 sm:mb-12">
            {/* Col 1: Logo & Mission description */}
            <div className="md:col-span-4 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="SINFDA 2026"
                  className="h-7 sm:h-8.5 w-auto object-contain"
                />
                <span className="font-sans font-bold text-[10px] sm:text-xs tracking-wider text-yellow bg-yellow/15 border border-yellow/30 px-2.5 py-0.5 rounded-full uppercase">
                  2026
                </span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-semibold">
                Les Nouvelles Femmes Dynamiques Africaines
              </p>
              <p className="text-white/50 text-xs leading-relaxed max-w-sm">
                Solidaire pour une Afrique Convergente · Célébration du talent féminin, du Made in Camer et de l&apos;Arbre de Noël de la solidarité.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-4">
              <p className="text-[11px] sm:text-xs font-bold text-yellow uppercase tracking-wider mb-3 sm:mb-4">
                Navigation
              </p>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Coordonnées officielles issues des flyers */}
            <div className="md:col-span-4 flex flex-col md:items-end space-y-3 sm:space-y-4">
              <p className="text-[11px] sm:text-xs font-bold text-yellow uppercase tracking-wider mb-1">
                Contacts Officiels
              </p>
              
              <div className="space-y-2 text-xs sm:text-sm text-white/80 md:text-right">
                <a
                  href="tel:+237693090733"
                  className="flex items-center md:justify-end gap-2 hover:text-yellow transition"
                >
                  <Phone size={15} className="text-yellow" />
                  <span>+237 693 090 733</span>
                </a>
                <a
                  href="mailto:contact@femmesdynamiques.com"
                  className="flex items-center md:justify-end gap-2 hover:text-yellow transition"
                >
                  <Mail size={15} className="text-yellow" />
                  <span>contact@femmesdynamiques.com</span>
                </a>
                <a
                  href="https://www.femmesdynamiques.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center md:justify-end gap-2 hover:text-yellow transition"
                >
                  <Store size={15} className="text-yellow" />
                  <span>www.femmesdynamiques.com</span>
                </a>
              </div>

              {/* WhatsApp CTA officiel */}
              <a
                href="https://wa.me/237693090733?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20le%20SINFDA%202026"
                target="_blank"
                rel="noreferrer"
                className="pill bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs px-4 sm:px-5 py-2.5 shadow-md inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={15} /> WhatsApp (+237 693 090 733)
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Legal links */}
          <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-[11px] text-white/40 text-center sm:text-left">
            <p>© 2026 Les Nouvelles Femmes Dynamiques Africaines. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/70 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white/70 transition">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════
          BOUTON FLOTTANT WHATSAPP OFFICIEL (+237 693 090 733)
      ══════════════════════════════════════════════ */}
      <a
        href="https://wa.me/237693090733?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20le%20SINFDA%202026"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 group"
        aria-label="Contacter sur WhatsApp au +237 693 090 733"
      >
        <MessageCircle size={24} className="sm:hidden" />
        <MessageCircle size={28} className="hidden sm:block" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          Discuter au +237 693 090 733
        </span>
      </a>

      {/* ══════════════════════════════════════════════
          MODAL 1: FORMULAIRE DE DON (Section 04)
      ══════════════════════════════════════════════ */}
      <Modal
        open={donModal}
        onClose={() => setDonModal(false)}
        title="Faire un don pour l'Arbre de Noël"
      >
        {donSuccess ? (
          <div className="text-center py-5 sm:py-6 space-y-2.5 sm:space-y-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-gray-900">
              Merci pour votre générosité !
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Votre engagement contribue directement à illuminer le sourire de plus de 500 enfants. Notre équipe vous contactera au numéro indiqué ou au +237 693 090 733.
            </p>
            <button
              onClick={() => setDonModal(false)}
              className="pill bg-purple text-white font-semibold text-xs px-5 py-2 mt-1 w-full sm:w-auto"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDonSuccess(true);
            }}
            className="space-y-2 sm:space-y-2.5"
          >
            <p className="text-[11px] text-gray-500 leading-snug">
              Remplissez ce formulaire pour notifier l&apos;équipe de votre promesse de don. Aucune coordonnée bancaire n&apos;est prélevée en ligne.
            </p>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Nom complet ou Entreprise <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Ex. Amina Bello ou Fondation Espoir"
                className={inputClasses}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Adresse e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="contact@exemple.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Téléphone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+237 6..."
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Forme de contribution <span className="text-red-500">*</span>
              </label>
              <select
                value={donType}
                onChange={(e) => setDonType(e.target.value)}
                className={inputClasses}
              >
                <option value="Don financier">Don financier</option>
                <option value="Don matériel">Don matériel (jouets, fournitures, vêtements)</option>
                <option value="Don en nature">Don en nature (goûters, denrées alimentaires)</option>
                <option value="Partenariat logistique">Partenariat logistique ou technique</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Détails de la contribution ou Message
              </label>
              <textarea
                rows={2}
                placeholder="Précisez le montant envisagé, la nature des articles..."
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple hover:bg-purple-dark text-white font-bold py-2.5 rounded-lg shadow-md transition text-xs sm:text-sm mt-1"
            >
              Confirmer ma promesse de don
            </button>
          </form>
        )}
      </Modal>

      {/* ══════════════════════════════════════════════
          MODAL 2: FORMULAIRE DE PARTENARIAT & STANDS (Section 07)
      ══════════════════════════════════════════════ */}
      <Modal
        open={partnerModal}
        onClose={() => setPartnerModal(false)}
        title="Partenariat & Réservation de Stand SINFDA 2026"
      >
        {partnerSuccess ? (
          <div className="text-center py-5 sm:py-6 space-y-2.5 sm:space-y-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-light text-purple flex items-center justify-center mx-auto">
              <Handshake size={28} />
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-gray-900">
              Demande enregistrée avec succès
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Nous vous remercions de votre intérêt pour le SINFDA 2026. La direction des partenariats examinera votre proposition et vous contactera au +237 693 090 733.
            </p>
            <button
              onClick={() => setPartnerModal(false)}
              className="pill bg-purple text-white font-semibold text-xs px-5 py-2 mt-1 w-full sm:w-auto"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPartnerSuccess(true);
            }}
            className="space-y-2 sm:space-y-2.5"
          >
            <p className="text-[11px] text-gray-500 leading-snug">
              Réservez votre stand Made in Camer ou associez votre entreprise à l&apos;événement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Organisation / Entreprise <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Marque Camerounaise ou Entreprise"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Représentant légal <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Aminata Kamdem"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Adresse e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="contact@entreprise.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Téléphone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+237 6..."
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Type de partenariat / Stand <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue={partnerDefaultType}
                required
                className={inputClasses}
              >
                <option value="Commercial">Stand Exposant Made in Camer (Agri-business, Terroir, Mode)</option>
                <option value="Institutionnel">Partenariat Institutionnel</option>
                <option value="Financier">Partenariat Financier / Sponsoring</option>
                <option value="Technique et logistique">
                  Partenariat Technique et Logistique
                </option>
                <option value="Médiatique">Partenariat Médiatique / Presse</option>
                <option value="Solidaire">Partenariat Solidaire (Arbre de Noël)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Message ou Produits à exposer
              </label>
              <textarea
                rows={2}
                placeholder="Précisez la nature de vos produits Made in Camer ou vos souhaits..."
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple hover:bg-purple-dark text-white font-bold py-2.5 rounded-lg shadow-md transition text-xs sm:text-sm mt-1"
            >
              Envoyer ma demande
            </button>
          </form>
        )}
      </Modal>

      {/* ══════════════════════════════════════════════
          MODAL 3: DÉTAILS D'ACTIVITÉ / FLYER OFFICIEL (Section 05)
      ══════════════════════════════════════════════ */}
      {selectedActivity && (
        <Modal
          open={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
          title={selectedActivity.title}
        >
          <div className="space-y-4">
            {/* Flyer Image in Modal - Affichage intégral 4/5 sans recadrage */}
            <div className="w-full flex justify-center items-center bg-gray-50 rounded-2xl p-2 sm:p-3 border border-gray-100">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full max-w-[340px] sm:max-w-[390px] h-auto aspect-[4/5] object-contain rounded-xl shadow-md border border-gray-200/60"
              />
            </div>

            {/* Slogan from flyer */}
            <div className="bg-yellow/15 border-l-4 border-yellow px-3.5 py-2 rounded-r-lg">
              <p className="text-xs sm:text-sm font-bold text-purple-deep italic">
                « {selectedActivity.slogan} »
              </p>
            </div>

            {/* Tags date & location */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="bg-purple text-white px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Calendar size={13} /> {selectedActivity.date}
              </span>
              <span className="bg-yellow/20 text-purple px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs">
                <MapPin size={13} /> {selectedActivity.location}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {selectedActivity.fullDescription}
            </p>

            <div>
              <h4 className="text-[11px] sm:text-xs font-bold text-purple uppercase tracking-wider mb-2">
                Points clés du programme :
              </h4>
              <ul className="space-y-1.5">
                {selectedActivity.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-600">
                    <CheckCircle2 size={14} className="text-yellow flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 sm:pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
              {selectedActivity.actionType === "stand" && (
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    openPartnerWithCategory("Commercial");
                  }}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs px-5 py-2.5 flex-1 justify-center w-full sm:w-auto shadow-sm"
                >
                  {selectedActivity.actionText}
                </button>
              )}

              {selectedActivity.actionType === "don" && (
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    setDonModal(true);
                  }}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs px-5 py-2.5 flex-1 justify-center w-full sm:w-auto shadow-sm"
                >
                  {selectedActivity.actionText}
                </button>
              )}

              {selectedActivity.actionType === "carnaval" && (
                <a
                  href="https://wa.me/237693090733?text=Bonjour,%20je%20souhaite%20participer%20au%20grand%20Carnaval%20des%20Femmes%20Dynamiques%20du%2005%20décembre%20à%20Douala"
                  target="_blank"
                  rel="noreferrer"
                  className="pill bg-sgreen hover:bg-sgreen/90 text-white font-bold text-xs px-5 py-2.5 flex-1 justify-center w-full sm:w-auto shadow-sm inline-flex items-center gap-1.5"
                >
                  <MessageCircle size={15} /> {selectedActivity.actionText} (WhatsApp)
                </a>
              )}

              {selectedActivity.actionType === "partenaire" && (
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    openPartnerWithCategory("Institutionnel");
                  }}
                  className="pill bg-purple text-white text-xs px-5 py-2.5 flex-1 justify-center w-full sm:w-auto shadow-sm"
                >
                  {selectedActivity.actionText}
                </button>
              )}

              <button
                onClick={() => setSelectedActivity(null)}
                className="pill bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-5 py-2.5 w-full sm:w-auto justify-center"
              >
                Fermer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}