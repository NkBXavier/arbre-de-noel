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
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Truck,
  Users,
  X,
} from "lucide-react";

/* ─── Type definitions ─── */
interface ActivityDetail {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  fullDescription: string;
  highlights: string[];
  image: string;
}

const ACTIVITIES: ActivityDetail[] = [
  {
    id: "ateliers",
    title: "Ateliers Femmes d'Impact",
    date: "9 – 10 décembre 2026",
    location: "Kribi",
    summary: "Immersion de formation, leadership et résilience pour entrepreneures.",
    fullDescription:
      "Deux journées intensives de formation, de mentorat et de ressourcement sur la côte de Kribi. Conçus pour renforcer les compétences managériales, la résilience entrepreneuriale et le développement personnel des femmes leaders et porteuses de projets innovants.",
    highlights: [
      "Masterclasses exclusives animées par des expertes internationales",
      "Ateliers de gestion financière et stratégie de croissance",
      "Séances de coaching en leadership et prise de parole en public",
      "Cadre propice à la réflexion et au networking de haut niveau",
    ],
    image: "/images/activite-ateliers.jpg",
  },
  {
    id: "carnaval",
    title: "Carnaval des Femmes Dynamiques",
    date: "11 décembre 2026",
    location: "Douala",
    summary: "Grande parade festive et culturelle célébrant les talents féminins.",
    fullDescription:
      "Une immense célébration populaire dans les artères de Douala. Le Carnaval rassemble des centaines de femmes, associations, artisanes et créatrices dans un défilé haut en couleur, rythmé par les musiques traditionnelles et modernes du Cameroun et d'Afrique.",
    highlights: [
      "Parade culturelle et défilé de costumes traditionnels africains",
      "Animations musicales, percussions et danses urbaines & patrimoniales",
      "Visibilité médiatique exceptionnelle pour les collectifs et délégations",
      "Point de départ festif vers l'illumination de l'Arbre de Noël",
    ],
    image: "/images/activite-carnaval.jpg",
  },
  {
    id: "expo",
    title: "Cameroon–Africa Made Expo",
    date: "12 décembre 2026",
    location: "Maison du Parti, Douala",
    summary: "Foire-exposition des innovations, créations et savoir-faire féminins.",
    fullDescription:
      "Vitrine par excellence de la production locale et africaine portée par des femmes. Des dizaines de stands mettant en avant la mode, la cosmétique naturelle, l'agroalimentaire, l'artisanat d'art, les solutions technologiques et les services innovants.",
    highlights: [
      "Plus de 60 exposantes d'Afrique centrale et de la diaspora",
      "Espace de vente directe et de démonstration de produits",
      "Rencontres acheteurs – productrices pour débouchés commerciaux",
      "Dégustations et découvertes de produits du terroir camerounais",
    ],
    image: "/images/activite-expo.jpg",
  },
  {
    id: "talk",
    title: "Women's Talk Experience",
    date: "12 décembre 2026",
    location: "Maison du Parti, Douala",
    summary: "Panels d'inspiration et partages d'expériences avec des femmes leaders.",
    fullDescription:
      "Une tribune de parole puissante où des femmes pionnières dans les affaires, la technologie, la culture et l'action sociale partagent sans filtre leurs réussites, leurs échecs surmontés et leurs clés pour transformer les obstacles en opportunités.",
    highlights: [
      "4 panels thématiques aux formats dynamiques et interactifs",
      "Interventions de personnalités publiques et figures de proue de l'entrepreneuriat",
      "Session de questions-réponses directes avec le public",
      "Retransmission en direct pour toucher une audience panafricaine",
    ],
    image: "/images/activite-talk.jpg",
  },
  {
    id: "boost",
    title: "Women Business Boost",
    date: "12 décembre 2026",
    location: "Maison du Parti, Douala",
    summary: "Pitchs, mentorat express et accélération de projets entrepreneuriaux.",
    fullDescription:
      "Le tremplin concret pour financer et développer son entreprise. Les entrepreneures sélectionnées pitchent leurs projets devant un jury d'investisseurs, de banquiers et de mentors, avec des opportunités d'accompagnement et d'accès aux marchés.",
    highlights: [
      "Concours de pitch de projets à fort impact social et économique",
      "Accès privilégié à des fonds d'amorçage et partenaires bancaires",
      "Speed-mentoring individuel avec des dirigeantes d'entreprises",
      "Prix d'accélération et dotations pour les lauréates",
    ],
    image: "/images/activite-boost.jpg",
  },
  {
    id: "distinctions",
    title: "Distinctions de la Femme Dynamique",
    date: "12 décembre 2026",
    location: "Douala",
    summary: "Trophées solennels honorant les parcours féminins d'excellence.",
    fullDescription:
      "Une cérémonie prestigieuse dédiée à la reconnaissance des mérites et du courage des femmes africaines. Plusieurs catégories récompensent l'audace entrepreneuriale, l'engagement communautaire, l'innovation et l'impact social durable.",
    highlights: [
      "Remise de 8 trophées majeurs de l'excellence féminine",
      "Hommage rendu aux figures inspirantes et mentorat intergénérationnel",
      "Couverture médiatique nationale et internationale",
      "Présence d'autorités institutionnelles et de leaders économiques",
    ],
    image: "/images/activite-distinctions.jpg",
  },
  {
    id: "gala",
    title: "Networking & Gala",
    date: "12 décembre 2026 au soir",
    location: "Douala",
    summary: "Soirée de clôture prestigieuse, dîner d'affaires et festivités.",
    fullDescription:
      "Le point d'orgue du SIFDA 2026. Une soirée de gala élégante alliant dîner gastronomique, défilé de mode éthique africaine, prestations artistiques en direct et opportunités de networking stratégique au plus haut niveau.",
    highlights: [
      "Dîner de gala gastronomique et accords mets-vins raffinés",
      "Concert live d'artistes de renom et défilé de mode haute couture",
      "Cocktail de networking d'affaires haut de gamme",
      "Célébration festive de clôture avec toutes les délégations",
    ],
    image: "/images/activite-gala.jpg",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto no-scrollbar shadow-2xl border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-3.5 pb-2.5 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-purple font-display">{title}</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-5 py-3 sm:py-4">{children}</div>
      </div>
    </div>
  );
}

const inputClasses =
  "w-full border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:ring-2 focus:ring-purple/30 focus:border-purple outline-none transition bg-white text-gray-800 placeholder-gray-400";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donModal, setDonModal] = useState(false);
  const [partnerModal, setPartnerModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<ActivityDetail | null>(null);

  const [donSuccess, setDonSuccess] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  // Form states for donation
  const [donType, setDonType] = useState("Don financier");

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Le SIFDA", href: "#sifda" },
    { label: "Programme", href: "#programme" },
    { label: "Arbre de Noël", href: "#arbre-noel" },
    { label: "Partenaires", href: "#partenaires" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow selection:text-purple-deep">
      {/* ══════════════════════════════════════════════
          SECTION 00 — NAVBAR FIXE & STICKY
      ══════════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo SIFDA 2026 */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex-shrink-0">
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
              <span className="font-display font-extrabold text-2xl tracking-tight text-purple group-hover:text-purple-dark transition-colors">
                SIFDA
              </span>
              <span className="font-sans font-bold text-xs tracking-wider text-yellow">
                2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
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
          <div className="hidden lg:flex items-center">
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
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-purple hover:bg-purple-light transition"
            aria-label="Menu de navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-base font-medium text-gray-800 hover:text-purple border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#arbre-noel"
                onClick={() => setMenuOpen(false)}
                className="pill bg-purple text-white w-full justify-center py-3.5 shadow-sm"
              >
                <Gift size={18} className="text-yellow" />
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
        className="relative pt-20 overflow-hidden bg-gradient-to-br from-[#240A42] via-[#3B1570] to-[#552399] text-white"
        style={{
          minHeight: "calc(100vh - 5rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Luminous festive ambient background effects */}
        <div className="absolute top-12 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-yellow/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-bright/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-16 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Title exact matching mockup */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold italic leading-[1.12] tracking-tight">
              Une célébration,
              <br />
              <span className="text-yellow not-italic font-extrabold drop-shadow-sm">
                mille opportunités.
              </span>
            </h1>

            {/* Subtext date and locations */}
            <div className="pt-1 space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Du 9 au 12 décembre 2026
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white/95">
                Douala &amp; Kribi
              </p>
            </div>

            {/* Intro paragraph from brief */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg pt-1">
              Quatre jours de célébration, d&apos;apprentissage et de solidarité pour propulser l&apos;entrepreneuriat féminin et illuminer l&apos;avenir de plus de 500 enfants.
            </p>

            {/* The Two Hero CTAs matching mockup */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#programme"
                className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold px-7 py-3.5 shadow-lg shadow-yellow/20 text-sm sm:text-base"
              >
                Découvrir le programme <ArrowRight size={18} />
              </a>
              <a
                href="#arbre-noel"
                className="pill bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-7 py-3.5 text-sm sm:text-base inline-flex items-center gap-2"
              >
                <span>Soutenir l&apos;Arbre de Noël</span>
                <Heart size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual composition matching mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              {/* Glow backdrop ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow/30 to-purple-400/20 rounded-3xl blur-2xl transform -rotate-1" />

              {/* Main Image container matching mockup */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/hero.jpg"
                  alt="Femmes dynamiques africaines et enfants célébrant Noël"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay on bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/70 via-transparent to-transparent pointer-events-none" />

                {/* Small celebratory badge on image */}
                <div className="absolute bottom-4 left-4 bg-purple-deep/85 backdrop-blur-md border border-white/20 text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <Heart size={14} strokeWidth={2} className="text-yellow" />
                  <span>500+ enfants accompagnés</span>
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
      <section id="sifda" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3-Column Grid matching exactly the mockup visual */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Column 1: Presentation & Ambitions */}
            <div className="flex flex-col justify-between p-2">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Le SIFDA, bien plus qu&apos;un salon.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Une plateforme de rencontres, de valorisation des talents féminins et de création d&apos;opportunités pour un avenir plus solidaire.
                </p>

                {/* 3 Ambitions with yellow round icon markers */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Briefcase size={19} strokeWidth={1.8} />
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      Entrepreneuriat féminin
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Award size={19} strokeWidth={1.8} />
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      Talents africains
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-yellow/15 flex items-center justify-center flex-shrink-0 text-yellow">
                      <Handshake size={19} strokeWidth={1.8} />
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      Partenariats
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#temps-forts"
                  className="pill bg-purple hover:bg-purple-dark text-white font-semibold text-sm px-6 py-3 inline-flex shadow-sm"
                >
                  En savoir plus <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Card LE SALON matching mockup */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <img
                  src="/images/salon.jpg"
                  alt="Le Salon SIFDA - Femmes d'affaires"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#3B1570] text-white p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-white">
                    Le Salon
                  </h3>
                  <p className="font-semibold text-yellow text-sm mb-2">
                    Célébrer, connecter, propulser.
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                    Formations, expositions, rencontres et opportunités.
                  </p>
                </div>
                <div>
                  <a
                    href="#temps-forts"
                    className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-sm px-5 py-2.5 inline-flex"
                  >
                    Découvrir les activités <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Card L'ARBRE DE NOËL matching mockup */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition duration-300">
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <img
                  src="/images/arbre-noel-card.jpg"
                  alt="Arbre de Noël - Sourires d'enfants avec cadeaux"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#E8A820] text-purple-deep p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-purple-deep">
                    L&apos;Arbre de Noël
                  </h3>
                  <p className="font-bold text-purple-dark text-sm mb-2">
                    Partager, donner, faire briller les sourires.
                  </p>
                  <p className="text-purple-deep/90 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                    Plus de 500 enfants à célébrer.
                  </p>
                </div>
                <div>
                  <a
                    href="#arbre-noel"
                    className="pill bg-white hover:bg-purple-light text-purple-deep font-bold text-xs sm:text-sm px-5 py-2.5 inline-flex shadow-sm"
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
          SECTION 04 — FOCUS ARBRE DE NOËL DE LA SOLIDARITÉ
      ══════════════════════════════════════════════ */}
      <section
        id="arbre-noel"
        className="relative py-20 lg:py-28 overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0A2419 0%, #103625 50%, #194C35 100%)",
        }}
      >
        {/* Festive background elements */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5B731_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left side: Heading & Action matching mockup */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold italic text-white leading-tight">
                Cette année,
                <br />
                faisons briller plus de{" "}
                <span className="text-yellow not-italic font-extrabold">
                  500 sourires.
                </span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
                À travers l&apos;Arbre de Noël de la solidarité, offrons un moment inoubliable à plus de 500 enfants.
              </p>
              <div>
                <button
                  onClick={() => {
                    setDonModal(true);
                    setDonSuccess(false);
                  }}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-base px-7 py-3.5 shadow-xl shadow-yellow/20"
                >
                  Je souhaite faire un don <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Middle: 2 Clean White Chronological Cards matching mockup */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row gap-4">
              {/* Card 1: 11 Décembre */}
              <div className="flex-1 bg-white text-gray-900 rounded-2xl p-6 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center">
                <div className="w-13 h-13 rounded-full bg-purple flex items-center justify-center mb-4 text-white shadow-md">
                  <Calendar size={24} className="text-yellow" />
                </div>
                <h4 className="font-bold text-purple text-lg sm:text-xl">
                  11 décembre 2026
                </h4>
                <p className="text-gray-600 text-sm font-medium mt-1.5">
                  Illumination du grand Arbre de Noël
                </p>
              </div>

              {/* Card 2: 12 Décembre */}
              <div className="flex-1 bg-white text-gray-900 rounded-2xl p-6 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center">
                <div className="w-13 h-13 rounded-full bg-purple flex items-center justify-center mb-4 text-white shadow-md">
                  <Gift size={24} className="text-yellow" />
                </div>
                <h4 className="font-bold text-purple text-lg sm:text-xl">
                  12 décembre 2026
                </h4>
                <p className="text-gray-600 text-sm font-medium mt-1.5">
                  Remise des cadeaux aux enfants
                </p>
              </div>
            </div>

            {/* Right side: Festive Christmas tree visual matching mockup */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-[280px] aspect-[4/5]">
                <img
                  src="/images/sapin-noel.jpg"
                  alt="Sapin de Noël illuminé et cadeaux"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-center text-xs text-white/90 font-medium">
                  Un Noël de joie &amp; de partage
                </div>
              </div>
            </div>
          </div>

          {/* Sous-section: 4 Formes de contribution requises par le brief */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-center font-display text-2xl font-bold text-white mb-2">
              Comment contribuer à l&apos;Arbre de Noël ?
            </h3>
            <p className="text-center text-white/70 text-sm max-w-2xl mx-auto mb-10">
              Chaque geste, matériel ou financier, transforme directement le quotidien des 500 enfants bénéficiaires.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-yellow/60 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-yellow mb-5 group-hover:bg-yellow group-hover:text-purple-deep group-hover:scale-105 transition-all shadow-sm">
                        <IconComponent size={22} strokeWidth={1.8} />
                      </div>
                      <h4 className="font-bold text-base text-white group-hover:text-yellow transition-colors mb-2.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-5 text-xs font-semibold text-yellow inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      Participer <ArrowRight size={13} />
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs additionnels requis par le brief */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setPartnerModal(true);
                  setPartnerSuccess(false);
                }}
                className="pill bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm"
              >
                <Handshake size={16} className="text-purple" /> Devenir partenaire de l&apos;Arbre de Noël
              </button>
              <a
                href="#contact"
                className="pill bg-sgreen hover:bg-sgreen/90 text-white font-semibold text-sm"
              >
                <MessageCircle size={16} /> Contacter l&apos;organisation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 05 — LES TEMPS FORTS DU SIFDA 2026
      ══════════════════════════════════════════════ */}
      <section id="temps-forts" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header matching mockup */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-purple mb-3">
              Les temps forts du SIFDA 2026
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Quatre jours pour apprendre, découvrir, célébrer et créer des opportunités.
            </p>
          </div>

          {/* 7 Activities Cards matching mockup row */}
          <div className="flex gap-4 overflow-x-auto pb-6 lg:grid lg:grid-cols-7 lg:overflow-visible no-scrollbar snap-x snap-mandatory">
            {ACTIVITIES.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="flex-shrink-0 w-44 sm:w-48 lg:w-auto snap-start flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Image */}
                  <div className="h-32 sm:h-36 rounded-2xl overflow-hidden bg-gray-100 mb-3 relative shadow-xs group-hover:shadow-md transition">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Date & Location */}
                  <p className="text-[11px] font-semibold text-purple tracking-tight leading-none mb-1">
                    {act.date}
                  </p>
                  <p className="text-[11px] font-medium text-gray-400 mb-1.5">
                    {act.location}
                  </p>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-gray-900 leading-snug group-hover:text-purple transition-colors">
                    {act.title}
                  </h3>
                </div>

                {/* Circular Arrow Button matching mockup */}
                <div className="mt-3">
                  <div className="w-7 h-7 rounded-full bg-yellow group-hover:bg-yellow-bright flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                    <ArrowRight size={13} className="text-purple-deep" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTIONS 06 & 07 — PARTENAIRE, PROGRAMME & CITATION
      ══════════════════════════════════════════════ */}
      <section id="programme" className="py-16 lg:py-20 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Blocks Row matching mockup */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Col 1: Card Devenir Partenaire with Handshake Photo */}
            <div
              id="partenaires"
              className="rounded-3xl p-7 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2E0F57 0%, #4B1D8E 100%)",
              }}
            >
              {/* Handshake background overlay photo */}
              <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
                <img
                  src="/images/partenaires.jpg"
                  alt="Poignée de main partenariats"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold italic mb-3 text-white">
                  Devenir partenaire
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                  Ensemble, donnons plus de portée aux talents et plus de lumière aux initiatives solidaires.
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <button
                  onClick={() => {
                    setPartnerModal(true);
                    setPartnerSuccess(false);
                  }}
                  className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-xs sm:text-sm px-5 py-3 shadow-md"
                >
                  Découvrir les opportunités <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Col 2: Card Programme en un coup d'œil */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-gray-900 mb-5">
                  Programme en un coup d&apos;œil
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      date: "5 décembre",
                      label: "Conférence de presse – MiCasa, Douala",
                    },
                    {
                      date: "9–10 décembre",
                      label: "Ateliers Femmes d'Impact – Kribi",
                    },
                    {
                      date: "11 décembre",
                      label: "Carnaval & Arbre de Noël – Douala",
                    },
                    {
                      date: "12 décembre",
                      label: "Salon, remise des cadeaux & Gala",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-1.5 h-9 rounded-full bg-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-purple uppercase tracking-wider">
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
              <div className="pt-4 border-t border-gray-100 mt-4 text-xs text-gray-400">
                Horaires détaillés communiqués à l&apos;ouverture officielle.
              </div>
            </div>

            {/* Col 3: Calligraphic Quote Card matching mockup */}
            <div
              className="rounded-3xl p-7 sm:p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-amber-100"
              style={{
                background: "linear-gradient(135deg, #FFF9EB 0%, #FEF3D6 100%)",
              }}
            >
              <div className="relative z-10">
                <p className="font-display font-bold italic text-2xl sm:text-3xl lg:text-[1.85rem] text-purple leading-snug">
                  Femmes dynamiques, talents en action, avenir en construction.
                </p>
                {/* Decorative golden brush curve matching mockup */}
                <div className="mt-4 w-28 h-1.5 bg-gradient-to-r from-yellow via-yellow-bright to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 08 — FOIRE AUX QUESTIONS (FAQ)
      ══════════════════════════════════════════════ */}
      <section id="faq" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-purple mb-3">
              Foire aux questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Tout ce que vous devez savoir pour participer et vous engager au SIFDA 2026.
            </p>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {[
              {
                q: "Qu'est-ce que le SIFDA ?",
                a: "Le Salon International des Femmes Dynamiques Africaines (SIFDA 2026) est un événement d'envergure internationale dédié à la célébration, la formation, la valorisation et la mise en réseau des femmes entrepreneures, créatrices et leaders africaines. Il intègre également une dimension solidaire majeure à travers l'Arbre de Noël de la solidarité.",
              },
              {
                q: "Quelles sont les dates de l'événement ?",
                a: "Le SIFDA se tiendra officiellement du 9 au 12 décembre 2026. Une conférence de presse introductive aura lieu le 5 décembre à Douala (MiCasa).",
              },
              {
                q: "Où se déroulent les activités ?",
                a: "Les activités se déploient sur deux villes : Kribi pour les Ateliers Femmes d'Impact (9 et 10 décembre), et Douala pour le Carnaval, le Salon principal, les conférences et l'Arbre de Noël (Maison du Parti, Bonanjo, les 11 et 12 décembre).",
              },
              {
                q: "Qui peut participer ?",
                a: "Le salon est ouvert à toutes les femmes entrepreneures, professionnelles, porteuses de projets, partenaires institutionnels, entreprises privées ainsi qu'au grand public désireux de découvrir les talents locaux et de soutenir la solidarité.",
              },
              {
                q: "Comment devenir exposant ?",
                a: "Les inscriptions d'exposantes sont ouvertes via notre formulaire de partenariat ou en contactant directement le secrétariat général de l'organisation. Un comité sélectionne les stands pour garantir une diversité de secteurs (mode, agroalimentaire, cosmétique, tech, services).",
              },
              {
                q: "Comment soutenir l'Arbre de Noël ?",
                a: "Vous pouvez contribuer sous quatre formes : dons financiers, dons matériels (jouets, fournitures scolaires, vêtements neufs), dons en nature (goûters, denrées) ou par un partenariat logistique et technique.",
              },
              {
                q: "Combien d'enfants sont concernés ?",
                a: "L'Arbre de Noël de la solidarité a pour ambition d'illuminer le regard de plus de 500 enfants issus de milieux défavorisés ou d'orphelinats partenaires.",
              },
              {
                q: "Comment contacter l'organisation ?",
                a: "Vous pouvez nous joindre directement via WhatsApp avec le bouton dédié sur cette page, remplir nos formulaires interactifs de partenariat ou de don, ou nous écrire à nos coordonnées officielles.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-purple transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center flex-shrink-0 text-purple group-hover:bg-purple group-hover:text-white transition">
                    <ChevronDown size={18} className="chev" />
                  </div>
                </summary>
                <div className="pt-3 pb-1 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
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
        className="relative py-20 lg:py-28 overflow-hidden text-white text-center"
        style={{
          background: "linear-gradient(135deg, #2A0F52 0%, #4B1D8E 50%, #63229E 100%)",
        }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold italic leading-tight mb-5">
            Une célébration, mille opportunités.
            <br />
            <span className="text-yellow not-italic">
              Et des milliers de raisons de partager.
            </span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Le SIFDA est à la fois une célébration des femmes, une plateforme d&apos;opportunités économiques et une formidable initiative de solidarité envers les enfants.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#programme"
              className="pill bg-white hover:bg-gray-100 text-purple-deep font-bold text-sm sm:text-base px-7 py-3.5 shadow-lg"
            >
              Découvrir le programme <ArrowRight size={16} />
            </a>
            <a
              href="#temps-forts"
              className="pill bg-yellow hover:bg-yellow-bright text-purple-deep font-bold text-sm sm:text-base px-7 py-3.5 shadow-lg"
            >
              Participer au Salon <ArrowRight size={16} />
            </a>
            <button
              onClick={() => {
                setDonModal(true);
                setDonSuccess(false);
              }}
              className="pill bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm text-sm sm:text-base px-7 py-3.5 inline-flex items-center gap-2"
            >
              <span>Soutenir l&apos;Arbre de Noël</span>
              <Heart size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 10 — FOOTER
      ══════════════════════════════════════════════ */}
      <footer id="contact" className="bg-[#180829] text-white pt-16 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start mb-12">
            {/* Col 1: Logo & Mission description */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
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
                  <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                    SIFDA
                  </span>
                  <span className="font-sans font-bold text-xs tracking-wider text-yellow ml-1.5">
                    2026
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                Le Salon International des Femmes Dynamiques Africaines, une célébration du talent, de la solidarité et de l&apos;espoir.
              </p>
            </div>

            {/* Col 2: Navigation Links matching mockup */}
            <div className="md:col-span-4">
              <p className="text-xs font-bold text-yellow uppercase tracking-wider mb-4">
                Navigation
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5">
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

            {/* Col 3: Social & WhatsApp Button matching mockup */}
            <div className="md:col-span-4 flex flex-col md:items-end space-y-4">
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* WhatsApp CTA matching mockup */}
              <a
                href="https://wa.me/237699000000?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20le%20SIFDA%202026"
                target="_blank"
                rel="noreferrer"
                className="pill bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs px-5 py-2.5 shadow-md inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> Nous contacter
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Legal links */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/40">
            <p>© 2026 SIFDA. Tous droits réservés.</p>
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
          BOUTON FLOTTANT WHATSAPP (Mobile & Desktop)
      ══════════════════════════════════════════════ */}
      <a
        href="https://wa.me/237699000000?text=Bonjour,%20je%20souhaite%20participer%20au%20SIFDA%202026"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Discuter avec l&apos;organisation
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
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-display text-xl font-bold text-gray-900">
              Merci pour votre générosité !
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Votre engagement contribue directement à illuminer le sourire de plus de 500 enfants. Notre équipe vous contactera très prochainement pour finaliser les modalités de remise.
            </p>
            <button
              onClick={() => setDonModal(false)}
              className="pill bg-purple text-white font-semibold text-xs px-5 py-2 mt-1"
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
            className="space-y-2.5"
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
              className="w-full bg-purple hover:bg-purple-dark text-white font-bold py-2.5 rounded-lg shadow-md transition text-sm mt-1"
            >
              Confirmer ma promesse de don
            </button>
          </form>
        )}
      </Modal>

      {/* ══════════════════════════════════════════════
          MODAL 2: FORMULAIRE DE PARTENARIAT (Section 07)
      ══════════════════════════════════════════════ */}
      <Modal
        open={partnerModal}
        onClose={() => setPartnerModal(false)}
        title="Devenir partenaire du SIFDA 2026"
      >
        {partnerSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-purple-light text-purple flex items-center justify-center mx-auto">
              <Handshake size={32} />
            </div>
            <h4 className="font-display text-xl font-bold text-gray-900">
              Demande enregistrée avec succès
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Nous vous remercions de votre intérêt pour le SIFDA. La direction des partenariats examinera votre proposition et reprendra contact avec vous dans les 48 heures.
            </p>
            <button
              onClick={() => setPartnerModal(false)}
              className="pill bg-purple text-white font-semibold text-xs px-5 py-2 mt-1"
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
            className="space-y-2.5"
          >
            <p className="text-[11px] text-gray-500 leading-snug">
              Associez votre institution ou votre entreprise à cet événement panafricain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Organisation / Entreprise <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Groupe Alliance"
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
                  placeholder="Ex. Dr. Marcelle Ewandé"
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
                  placeholder="partenariat@entreprise.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                  Téléphone <span className="text-red-500">*</span>
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
                Type de partenariat envisagé <span className="text-red-500">*</span>
              </label>
              <select required className={inputClasses}>
                <option value="">Sélectionnez une option...</option>
                <option value="Institutionnel">Partenariat Institutionnel</option>
                <option value="Financier">Partenariat Financier / Sponsoring</option>
                <option value="Technique et logistique">
                  Partenariat Technique et Logistique
                </option>
                <option value="Médiatique">Partenariat Médiatique / Diffusion</option>
                <option value="Commercial">Partenariat Commercial / Exposant</option>
                <option value="Solidaire">Partenariat Solidaire (Arbre de Noël)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-0.5">
                Message ou proposition de collaboration
              </label>
              <textarea
                rows={2}
                placeholder="Présentez brièvement vos attentes ou la forme d'association souhaitée..."
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple hover:bg-purple-dark text-white font-bold py-2.5 rounded-lg shadow-md transition text-sm mt-1"
            >
              Envoyer la demande de partenariat
            </button>
          </form>
        )}
      </Modal>

      {/* ══════════════════════════════════════════════
          MODAL 3: DÉTAILS D'ACTIVITÉ (Section 05)
      ══════════════════════════════════════════════ */}
      {selectedActivity && (
        <Modal
          open={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
          title={selectedActivity.title}
        >
          <div className="space-y-5">
            <div className="h-52 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="bg-purple text-white px-3 py-1 rounded-full flex items-center gap-1.5">
                <Calendar size={13} /> {selectedActivity.date}
              </span>
              <span className="bg-yellow/20 text-purple px-3 py-1 rounded-full flex items-center gap-1.5">
                <MapPin size={13} /> {selectedActivity.location}
              </span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedActivity.fullDescription}
            </p>

            <div>
              <h4 className="text-xs font-bold text-purple uppercase tracking-wider mb-2.5">
                Points clés du programme :
              </h4>
              <ul className="space-y-2">
                {selectedActivity.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                    <CheckCircle2 size={15} className="text-yellow flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => {
                  setSelectedActivity(null);
                  setPartnerModal(true);
                }}
                className="pill bg-purple text-white text-xs px-5 py-2.5 flex-1 justify-center"
              >
                Participer / Réserver
              </button>
              <button
                onClick={() => setSelectedActivity(null)}
                className="pill bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-5 py-2.5"
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
