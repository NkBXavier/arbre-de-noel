import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIFDA 2026 — Salon International des Femmes Dynamiques Africaines & Arbre de Noël",
  description:
    "Du 9 au 12 décembre 2026 à Douala & Kribi. Une célébration, mille opportunités. Entrepreneuriat féminin, talents africains et Arbre de Noël de la solidarité pour plus de 500 enfants.",
  keywords: [
    "SIFDA 2026",
    "Salon International des Femmes Dynamiques Africaines",
    "Arbre de Noël de la solidarité",
    "Entrepreneuriat féminin",
    "Douala",
    "Kribi",
    "Cameroun",
    "Afrique",
  ],
  openGraph: {
    title: "SIFDA 2026 — Salon International des Femmes Dynamiques Africaines",
    description: "Une célébration, mille opportunités. Du 9 au 12 décembre 2026 – Douala & Kribi.",
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
