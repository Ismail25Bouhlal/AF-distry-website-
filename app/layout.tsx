import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "AF DISTRY — Distributeur Officiel GLORY au Maroc",
    template: "%s | AF DISTRY",
  },
  description:
    "Distributeur exclusif Glory Cash Infinity au Maroc. Caisses automatiques, bornes de commande et monayeurs pour la grande distribution, restauration, pharmacies et hôtellerie.",
  keywords: [
    "Glory Maroc",
    "Cash Infinity Maroc",
    "Monayeur automatique",
    "Caisse automatique Maroc",
    "Borne de commande",
    "AF DISTRY",
    "Distributeur Glory",
    "POS Maroc",
    "Cash handling Maroc",
  ],
  authors: [{ name: "AF DISTRY" }],
  creator: "AF DISTRY",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://afdistry.com",
    title: "AF DISTRY — Distributeur Officiel GLORY au Maroc",
    description: "Solutions Glory Cash Infinity pour le retail marocain.",
    siteName: "AF DISTRY",
  },
  twitter: {
    card: "summary_large_image",
    title: "AF DISTRY — Glory Digital",
    description: "Distributeur exclusif Glory Cash Infinity au Maroc.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
