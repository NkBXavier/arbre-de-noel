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
    location: "Douala & Kribi",
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
  "w-full border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-purple/30 focus:border-purple outline-none transition bg-white text-gray-800 placeholder-gray-400";

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
    { label: "Le SIFDA", href: "#sifda" },
    { label: "Temps forts", href: "#temps-forts" },
    { label: "Arbre de Noël", href: "#arbre-noel" },
    { label: "Programme", href: "#programme" },
    { label: "Partenaires", href: "#partenaires" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const openPartnerWithCategory = (category: string) => {
    setPartnerDefaultType(category);
    setPartnerSuccess(false);
    setPartnerModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow selection:text-purple-deep overflow-x-hidden">
      {/* ══════════════════════════════════════════════
          SECTION 00 — NAVBAR FIXE & STICKY
      ══════════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo SIFDA / SINFDA 2026 */}
          <a href="#accueil" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                <circle cx="50" cy="50" r="48" fill="#F4EEFB" />
                {/* Silhouette femme africaine avec coiffe stylisée */}
                <path
                  d="M50 15 C36 15 28 26 28 38 C28 47 33 53 38 56 C38 60 36 67 31 72 C35 73 42 72 47 67 C49 75 56 82 66 84 C68 76 66 69 64 62 C72 58 76 49 76 38 C76 25 64 15 50 15 Z"
                  fill="#4B1D8E"
                />
                {/* Détails dorés de la coiffe / foulard */}
                <path
                  d="M45 20 C55 18 64 23 68 30 C62 30 55 26 45 20 Z"
                  fill="#E8A820"
                />
                <path
                  d="M34 32 C42 33 50 37 54 44 C46 43 38 39 34 32 Z"
                  fill="#F5B731"
                />
                <circle cx="58" cy="40" r="2.5" fill="#E8A820" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-purple group-hover:text-purple-dark transition-colors">
                SINFDA
              </span>
              <span className="font-sans font-bold text-[10px] sm:text-xs tracking-wider text-yellow">
                SIFDA 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-purple transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Top Right CTA Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#arbre-noel"
              className="pill bg-purple hover:bg-purple-dark text-white font-semibold text-sm shadow-sm hover:shadow-md"
            >
              <Gift size={16} className="text-yellow" />
              <span>Soutenir l&apos;Arbre de Noël</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 hover:text-purple hover:bg-purple-light transition"
            aria-label="Menu de navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 px-5 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-3 text-sm font-semibold text-gray-800 hover:text-purple hover:bg-purple-light/50 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#arbre-noel"
                onClick={() => setMenuOpen(false)}
                className="pill bg-purple text-white w-full justify-center py-3 text-sm shadow-sm font-bold"
              >
                <Gift size={16} className="text-yellow" />
                Soutenir l&apos;Arbre de Noël
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════
          SECTION 01 — HERO / BANNIÈRE PRINCIPALE
      ══════════════════════════════════════════════ */}
      <section
        id="accueil"
        className="relative pt-16 sm:pt-20 overflow-hidden bg-gradient-to-br from-[#240A42] via-[#3B1570] to-[#552399] text-white flex flex-col justify-between min-h-[calc(100svh-4rem)]"
      >
        {/* Luminous festive ambient background effects */}
        <div className="absolute top-12 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-yellow/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-bright/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-12 pb-10 sm:pb-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-8 items-center flex-1">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Tagline pill with sparkles icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow/20 border border-yellow/40 text-yellow text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
              <Sparkles size={15} className="text-yellow animate-pulse" />
              <span>SINFDA 2026 · Douala &amp; Kribi</span>
            </div>

            {/* Titre officiel en icône / image (titre.png) */}
            <div className="relative my-2 sm:my-3">
              <img
                src="/images/titre.png"
                alt="L'Arbre de Noël Revient... Plus Grand"
                className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[550px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-transform duration-300"
              />
              <h1 className="sr-only">
                L&apos;Arbre de Noël Revient... Plus Grand — Salon International des Nouvelles Femmes Dynamiques Africaines (SINFDA 2026)
              </h1>
            </div>

            {/* Slogan officiel unifié */}
            <p className="font-display text-xl sm:text-2xl lg:text-[1.85rem] font-bold italic leading-snug text-white/95">
              Ensemble, faisons grandir{" "}
              <span className="text-yellow not-italic font-extrabold drop-shadow-sm">
                les ambitions des femmes
              </span>
              <br />
              et briller les rêves des enfants.
            </p>

            {/* Subtext date and locations */}
            <div className="pt-0.5 sm:pt-1 space-y-0.5 sm:space-y-1">
              <p className="text-lg sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                <Calendar size={20} className="text-yellow" /> Du 9 au 12 décembre 2026
              </p>
              <p className="text-base sm:text-xl font-bold text-white/90 flex items-center gap-2">
                <MapPin size={20} className="text-yellow" /> Douala &amp; Kribi · Carnaval le 5 Décembre
              </p>
            </div>

            {/* Intro paragraph from brief & flyers */}
            <p className="text-white/80 text-xs sm:text-base leading-relaxed max-w-lg pt-0.5">
              Le Salon International des Nouvelles Femmes Dynamiques Africaines (SINFDA 2026) : une plateforme de valorisation, d&apos;exposition « Made in Camer » et une grande opération de solidarité pour illuminer le sourire de plus de 500 enfants.
            </p>

            {/* The Two Hero CTAs matching mockup */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#temps-forts"
                className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold px-6 sm:px-7 py-3 sm:py-3.5 shadow-lg shadow-yellow/20 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                Découvrir les temps forts <ArrowRight size={17} />
              </a>
              <a
                href="#arbre-noel"
                className="pill bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Soutenir l&apos;Arbre de Noël</span>
                <Heart size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[540px]">
              {/* Glow backdrop ring */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-yellow/30 to-purple-400/20 rounded-3xl blur-xl sm:blur-2xl transform -rotate-1" />

              {/* Main Image container matching mockup */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/img2.png"
                  alt="Femmes dynamiques africaines et enfants célébrant Noël"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay on bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/70 via-transparent to-transparent pointer-events-none" />

                {/* Small celebratory badge on image from flyer */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-purple-deep/90 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-lg">
                  <Heart size={13} strokeWidth={2} className="text-yellow" />
                  <span>Plus de 500 enfants à célébrer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Golden Swoosh Wave Divider matching mockup */}
        <div className="relative w-full leading-none z-10 -mb-1">
          <svg
            viewBox="0 0 1440 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C320,70 820,95 1440,25 L1440,85 L0,85 Z"
              fill="#E8A820"
              opacity="0.9"
            />
            <path
              d="M0,25 C360,95 920,80 1440,55 L1440,85 L0,85 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTIONS 02 & 03 — LE SIFDA & LES DEUX DIMENSIONS
      ══════════════════════════════════════════════ */}
      <section id="sifda" className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3-Column Grid matching exactly the mockup visual */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Column 1: Presentation & Ambitions */}
            <div className="flex flex-col justify-between p-1 sm:p-2">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  Le SIFDA, bien plus qu&apos;un salon.
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6">
                  Une plateforme panafricaine de rencontres, de valorisation des talents et de création d&apos;opportunités économiques, unie à un formidable élan de solidarité.
                </p>

                {/* 3 Ambitions with yellow round icon markers */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Briefcase size={18} strokeWidth={1.8} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      Entrepreneuriat féminin &amp; Made in Camer
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Award size={18} strokeWidth={1.8} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      Talents africains &amp; Savoir-faire
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Handshake size={18} strokeWidth={1.8} />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      Partenariats &amp; Solidarité enfants
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#temps-forts"
                  className="pill bg-purple hover:bg-purple-dark text-white font-semibold text-xs sm:text-sm px-6 py-3 w-full sm:w-auto inline-flex justify-center shadow-sm"
                >
                  Découvrir les 8 temps forts <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Card LE SALON matching mockup */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-44 sm:h-56 relative overflow-hidden bg-gray-100">
                <img
                  src="/images/heros.png"
                  alt="Le Salon SIFDA - Made in Camer & Stands"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#3B1570] text-white p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-white">
                    Le Salon &amp; Stands
                  </h3>
                  <p className="font-semibold text-yellow text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Vous faites du Made in Camer ?
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    Nous avons un stand pour vous ! Formations, foire-exposition, conférences et networking à Bonanjo.
                  </p>
                </div>
                <div>
                  <a
                    href="#temps-forts"
                    className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-sm px-5 py-2.5 w-full sm:w-auto inline-flex justify-center"
                  >
                    Découvrir les activités <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Card L'ARBRE DE NOËL matching mockup */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-44 sm:h-56 relative overflow-hidden bg-gray-100">
                <img
                  src="/images/img1.png"
                  alt="Arbre de Noël - Plus de 500 enfants à célébrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#E8A820] text-purple-deep p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 text-purple-deep">
                    L&apos;Arbre de Noël
                  </h3>
                  <p className="font-bold text-purple-dark text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Revient... plus grand !
                  </p>
                  <p className="text-purple-deep/90 font-medium text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    Plus de 500 enfants à célébrer à travers l&apos;Arbre de Noël de la solidarité.
                  </p>
                </div>
                <div>
                  <a
                    href="#arbre-noel"
                    className="pill bg-white hover:bg-purple-light text-purple-deep font-bold text-xs sm:text-sm px-5 py-2.5 w-full sm:w-auto inline-flex justify-center shadow-sm"
                  >
                    Participer à la solidarité <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 05 — LES TEMPS FORTS DU SIFDA 2026 (FLYERS OFFICIELS)
      ══════════════════════════════════════════════ */}
      <section id="temps-forts" className="py-12 sm:py-20 lg:py-24 bg-gray-50/60 relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header matching brief & flyers */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow bg-yellow/15 px-3.5 py-1 rounded-full mb-2 inline-block">
              Programme Officiel
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-purple mb-2 sm:mb-3">
              Les temps forts du SIFDA 2026
            </h2>
            <p className="text-gray-600 text-xs sm:text-base lg:text-lg">
              Ensemble, faisons grandir les ambitions des femmes et briller les rêves des enfants.
            </p>
          </div>

          {/* Mobile swipe helper badge */}
          <div className="flex items-center justify-between lg:hidden mb-3.5 text-[11px] font-semibold text-purple bg-purple-light/80 px-3.5 py-2 rounded-xl border border-purple/10">
            <span>8 temps forts officiels</span>
            <span className="flex items-center gap-1 text-gray-500 font-normal">
              Glissez pour explorer <ArrowRight size={12} />
            </span>
          </div>

          {/* 8 Activities Cards matching the 8 official flyers in a responsive 4-column grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-5 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible no-scrollbar snap-x snap-mandatory">
            {ACTIVITIES.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="flex-shrink-0 w-[175px] sm:w-[220px] lg:w-auto snap-start flex flex-col justify-between group cursor-pointer bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Flyer Image Container */}
                  <div className="h-44 sm:h-56 rounded-xl overflow-hidden bg-gray-100 mb-3 relative shadow-xs group-hover:shadow-md transition">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500"
                    />
                    {/* Badge tag on image */}
                    <div className="absolute top-2 left-2 max-w-[85%]">
                      <span className="bg-purple-deep/90 backdrop-blur-sm text-yellow text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs line-clamp-1">
                        {act.badge}
                      </span>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <p className="text-[10px] sm:text-[11px] font-bold text-purple tracking-tight leading-none mb-1">
                    {act.date}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 mb-1.5 line-clamp-1">
                    {act.location}
                  </p>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-gray-900 leading-snug group-hover:text-purple transition-colors line-clamp-2 mb-1.5">
                    {act.title}
                  </h3>

                  {/* Flyer slogan quote */}
                  <p className="text-[10px] sm:text-[11px] text-gray-500 italic line-clamp-2 leading-relaxed">
                    « {act.slogan} »
                  </p>
                </div>

                {/* Card Footer: Action button */}
                <div className="mt-3 pt-2.5 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold text-purple group-hover:text-yellow transition-colors">
                    Détails &amp; Inscription
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow group-hover:bg-yellow-bright flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                    <ArrowRight size={12} className="text-purple-deep" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 04 — FOCUS ARBRE DE NOËL DE LA SOLIDARITÉ
      ══════════════════════════════════════════════ */}
      <section
        id="arbre-noel"
        className="relative py-12 sm:py-20 lg:py-28 overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0A2419 0%, #103625 50%, #194C35 100%)",
        }}
      >
        {/* Festive background elements */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5B731_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left side: Heading & Action matching flyer */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="inline-block bg-yellow/20 border border-yellow/40 text-yellow text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                L&apos;Arbre de Noël revient... plus grand !
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold italic text-white leading-tight">
                Cette année,
                <br />
                faisons briller plus de{" "}
                <span className="text-yellow not-italic font-extrabold">
                  500 sourires.
                </span>
              </h2>
              <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed max-w-md">
                À travers l&apos;Arbre de Noël de la solidarité, offrons un moment magique et inoubliable à plus de 500 enfants défavorisés et orphelins.
              </p>
              <div>
                <button
                  onClick={() => {
                    setDonModal(true);
                    setDonSuccess(false);
                  }}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-xl shadow-yellow/20 w-full sm:w-auto justify-center"
                >
                  Je souhaite faire un don <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Middle: 2 Clean White Chronological Cards matching mockup */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 sm:gap-4">
              {/* Card 1: 11 Décembre */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center">
                <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-purple flex items-center justify-center mb-2.5 sm:mb-4 text-white shadow-md">
                  <Calendar size={20} className="text-yellow" />
                </div>
                <h4 className="font-bold text-purple text-xs sm:text-lg lg:text-xl leading-tight">
                  11 déc. 2026
                </h4>
                <p className="text-gray-600 text-[11px] sm:text-sm font-medium mt-1 leading-snug">
                  Illumination du grand Arbre
                </p>
              </div>

              {/* Card 2: 12 Décembre */}
              <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center">
                <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-purple flex items-center justify-center mb-2.5 sm:mb-4 text-white shadow-md">
                  <Gift size={20} className="text-yellow" />
                </div>
                <h4 className="font-bold text-purple text-xs sm:text-lg lg:text-xl leading-tight">
                  12 déc. 2026
                </h4>
                <p className="text-gray-600 text-[11px] sm:text-sm font-medium mt-1 leading-snug">
                  Remise des cadeaux aux enfants
                </p>
              </div>
            </div>

            {/* Right side: Real Christmas celebration photo from flyer */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 w-full max-w-[240px] sm:max-w-[280px] aspect-[4/5] group">
                <img
                  src="/images/img3.png"
                  alt="Le Père Noël et les enfants de l'Arbre de Noël"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 inset-x-2.5 text-center text-[10px] sm:text-xs text-white/95 font-medium">
                  Plus de 500 enfants comblés de cadeaux
                </div>
              </div>
            </div>
          </div>

          {/* Sous-section: 4 Formes de contribution requises par le brief */}
          <div className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <h3 className="text-center font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Comment contribuer à l&apos;Arbre de Noël ?
            </h3>
            <p className="text-center text-white/70 text-xs sm:text-sm max-w-2xl mx-auto mb-6 sm:mb-10">
              Chaque geste, matériel ou financier, transforme directement le quotidien des 500 enfants bénéficiaires.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
              {[
                {
                  title: "Dons financiers",
                  desc: "Contribution dédiée à l'achat groupé des cadeaux et à l'organisation de la fête.",
                  icon: CreditCard,
                  action: "Don financier",
                },
                {
                  title: "Dons matériels",
                  desc: "Jouets neufs, fournitures scolaires, livres pour enfants, vêtements adaptés.",
                  icon: Package,
                  action: "Don matériel",
                },
                {
                  title: "Dons en nature",
                  desc: "Goûters, friandises, boissons festives et denrées alimentaires pour le jour J.",
                  icon: HeartHandshake,
                  action: "Don en nature",
                },
                {
                  title: "Partenariats logistiques",
                  desc: "Appui technique, sonorisation, transport des enfants et soutien institutionnel.",
                  icon: Truck,
                  action: "Partenariat logistique",
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setDonType(item.action);
                      setDonSuccess(false);
                      setDonModal(true);
                    }}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-yellow/60 hover:-translate-y-0.5 group flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-yellow mb-2.5 sm:mb-5 group-hover:bg-yellow group-hover:text-purple-deep group-hover:scale-105 transition-all shadow-sm">
                        <IconComponent size={18} strokeWidth={1.8} />
                      </div>
                      <h4 className="font-bold text-xs sm:text-base text-white group-hover:text-yellow transition-colors mb-1 sm:mb-2.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-white/75 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-2.5 sm:mt-5 text-[10px] sm:text-xs font-semibold text-yellow inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Participer <ArrowRight size={12} />
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs additionnels requis par le brief */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => openPartnerWithCategory("Solidaire")}
                className="pill bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xs sm:text-sm w-full sm:w-auto justify-center"
              >
                <Handshake size={16} className="text-purple" /> Devenir partenaire de l&apos;Arbre de Noël
              </button>
              <a
                href="https://wa.me/237693090733?text=Bonjour,%20je%20souhaite%20soutenir%20l'Arbre%20de%20Noël%20de%20la%20solidarité"
                target="_blank"
                rel="noreferrer"
                className="pill bg-sgreen hover:bg-sgreen/90 text-white font-semibold text-xs sm:text-sm w-full sm:w-auto justify-center"
              >
                <MessageCircle size={16} /> Contacter l&apos;organisation (+237 693 090 733)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTIONS 06 & 07 — PARTENAIRE, PROGRAMME & CITATION
      ══════════════════════════════════════════════ */}
      <section id="programme" className="py-12 sm:py-16 lg:py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Blocks Row matching mockup & flyers */}
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {/* Col 1: Card Devenir Partenaire / Réserver un stand */}
            <div
              id="partenaires"
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2E0F57 0%, #4B1D8E 100%)",
              }}
            >
              {/* Handshake background overlay photo */}
              <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
                <img
                  src="/images/img4.png"
                  alt="Poignée de main partenariats"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-yellow bg-yellow/20 px-2.5 py-1 rounded-md mb-2">
                  Entreprises &amp; Producteurs
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold italic mb-2 sm:mb-3 text-white">
                  Devenir partenaire ou Exposant
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Vous faites du Made in Camer ? Nous avons un stand pour vous à la Maison du Parti de Bonanjo.
                </p>
              </div>

              <div className="relative z-10 pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => openPartnerWithCategory("Commercial")}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 shadow-md w-full sm:w-auto justify-center"
                >
                  Réserver un stand <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Col 2: Card Programme en un coup d'œil adapté aux flyers */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-3.5 sm:mb-5">
                  Programme en un coup d&apos;œil
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      date: "05 décembre",
                      label: "Grand Carnaval des Femmes Dynamiques – Douala (Accès & rafraîchissements gratuits)",
                    },
                    {
                      date: "09–10 décembre",
                      label: "Ateliers & Immersion Femmes d'Impact – Kribi",
                    },
                    {
                      date: "11 décembre",
                      label: "Illumination du grand Arbre de Noël – Douala",
                    },
                    {
                      date: "12 décembre",
                      label: "Salon, Stands Made in Camer, Conférences, Remise des cadeaux & Soirée de Gala – Bonanjo",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-8 sm:h-9 rounded-full bg-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] sm:text-xs font-bold text-purple uppercase tracking-wider">
                          {item.date}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-gray-100 mt-3 sm:mt-4 text-[11px] sm:text-xs text-gray-500 font-medium">
                Maison du Parti, Bonanjo, Douala &amp; Kribi.
              </div>
            </div>

            {/* Col 3: Calligraphic Quote Card matching mockup & flyer message */}
            <div
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-amber-100"
              style={{
                background: "linear-gradient(135deg, #FFF9EB 0%, #FEF3D6 100%)",
              }}
            >
              <div className="relative z-10">
                <p className="font-display font-bold italic text-xl sm:text-2xl lg:text-[1.85rem] text-purple leading-snug">
                  Ensemble, faisons grandir les ambitions des femmes et briller les rêves des enfants.
                </p>
                {/* Decorative golden brush curve matching mockup */}
                <div className="mt-3 sm:mt-4 w-24 sm:w-28 h-1.5 bg-gradient-to-r from-yellow via-yellow-bright to-transparent rounded-full" />
                <p className="mt-3 text-xs text-purple-dark/80 font-bold uppercase tracking-wider">
                  Les Nouvelles Femmes Dynamiques Africaines
                </p>
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
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-purple mb-2 sm:mb-3">
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
                a: "Les festivités débutent le 05 décembre avec le grand Carnaval à Douala, puis les activités majeures se déroulent du 9 au 12 décembre 2026 à Douala (Maison du Parti) et Kribi.",
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
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-purple transition-colors pr-3">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-light flex items-center justify-center flex-shrink-0 text-purple group-hover:bg-purple group-hover:text-white transition">
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
          background: "linear-gradient(135deg, #2A0F52 0%, #4B1D8E 50%, #63229E 100%)",
        }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold italic leading-tight mb-3.5 sm:mb-5">
            Ensemble, faisons grandir les ambitions des femmes
            <br />
            <span className="text-yellow not-italic">
              et briller les rêves des enfants.
            </span>
          </h2>
          <p className="text-white/80 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            Rejoignez cette célébration inédite à Douala et Kribi. Réservez votre stand, participez au Carnaval ou parrainez le sourire d&apos;un enfant.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#temps-forts"
              className="pill bg-white hover:bg-gray-100 text-purple-deep font-bold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-lg w-full sm:w-auto justify-center"
            >
              Découvrir les activités <ArrowRight size={16} />
            </a>
            <button
              onClick={() => openPartnerWithCategory("Commercial")}
              className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 shadow-lg w-full sm:w-auto justify-center"
            >
              Réserver mon stand Made in Camer <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setDonModal(true);
                setDonSuccess(false);
              }}
              className="pill bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
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
      <footer id="contact" className="bg-[#180829] text-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start mb-8 sm:mb-12">
            {/* Col 1: Logo & Mission description */}
            <div className="md:col-span-4 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="#3B1570" />
                    <path
                      d="M50 15 C36 15 28 26 28 38 C28 47 33 53 38 56 C38 60 36 67 31 72 C35 73 42 72 47 67 C49 75 56 82 66 84 C68 76 66 69 64 62 C72 58 76 49 76 38 C76 25 64 15 50 15 Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M45 20 C55 18 64 23 68 30 C62 30 55 26 45 20 Z"
                      fill="#E8A820"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                    SINFDA
                  </span>
                  <span className="font-sans font-bold text-[10px] sm:text-xs tracking-wider text-yellow ml-1 sm:ml-1.5">
                    2026
                  </span>
                </div>
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
            {/* Flyer Image in Modal */}
            <div className="h-60 sm:h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 relative group">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover object-top"
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