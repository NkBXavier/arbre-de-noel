import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SINFDA 2026 — L'Arbre de Noël Revient... Plus Grand",
  description:
    "Du 9 au 12 décembre 2026 à Douala. Ensemble, faisons grandir les ambitions des femmes et briller les rêves des enfants. Salon International des Nouvelles Femmes Dynamiques Africaines et Arbre de Noël de la solidarité pour plus de 500 enfants.",
  keywords: [
    "SINFDA 2026",
    "SIFDA 2026",
    "L'Arbre de Noël Revient Plus Grand",
    "Salon International des Nouvelles Femmes Dynamiques Africaines",
    "Arbre de Noël de la solidarité",
    "Entrepreneuriat féminin",
    "Made in Camer",
    "Douala",
    "Cameroun",
  ],
  icons: {
    icon: "/images/titre.png",
    apple: "/images/titre.png",
  },
  openGraph: {
    title: "SINFDA 2026 — L'Arbre de Noël Revient... Plus Grand",
    description: "Ensemble, faisons grandir les ambitions des femmes et briller les rêves des enfants. Du 9 au 12 décembre 2026 – Douala.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
