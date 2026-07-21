"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Lock,
  RefreshCw,
  Plug,
  Box,
  Droplets,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import productShot from "@/assets/Screenshot 2026-07-21 100939.png";
import bakeryShot from "@/assets/Screenshot 2026-07-21 104557.png";
import posShot from "@/assets/8bff627808f5da5e2b8580499e7ea7d667798c52.jpg";

const easePremium = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easePremium },
};

const benefits = [
  "Sécuriser les encaissements",
  "Éliminer les erreurs de caisse",
  "Réduire pertes et vols",
  "Gagner du temps au comptage",
  "Améliorer l'hygiène en caisse",
  "Offrir une expérience client premium",
];

const features = [
  {
    icon: Zap,
    title: "Rendu instantané",
    description:
      "La monnaie est rendue en quelques secondes, fluidifiant chaque passage en caisse même aux heures de pointe.",
  },
  {
    icon: Lock,
    title: "Sécurité maximale",
    description:
      "Coffre-fort intégré, traçabilité totale des transactions et accès arrière discret pour interventions sans vue client.",
  },
  {
    icon: RefreshCw,
    title: "Recyclage intelligent",
    description:
      "Les billets et pièces encaissés sont réutilisés pour le rendu de monnaie — moins de réapprovisionnements, plus d'autonomie.",
  },
  {
    icon: Plug,
    title: "Intégration universelle",
    description:
      "Compatible avec caisses traditionnelles, libre-service et bornes. S'adapte à votre logiciel de caisse existant.",
  },
  {
    icon: Box,
    title: "Format compact",
    description:
      "Design pensé pour s'intégrer à vos meubles, sans encombrement ni travaux importants. Votre personnel est libéré pour le service client et des tâches plus valorisantes.",
  },
  {
    icon: Droplets,
    title: "Hygiène irréprochable",
    description:
      "Zéro contact direct avec les espèces pour le personnel — une exigence devenue essentielle dans tous les commerces.",
  },
];

export default function MonnayeurPage() {
  return (
    <main className="bg-navy-deep">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-navy-deep px-6 pb-24 pt-32 md:px-12 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easePremium }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2px] text-white/60 transition-colors duration-300 hover:text-gold"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Retour aux solutions
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <span className="block h-px w-10 bg-gold" aria-hidden />
              <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold">
                SOLUTION 01 — MONNAYEUR
              </p>
              <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
                C&apos;est quoi{" "}
                <span className="italic text-gold">un monnayeur</span> ?
              </h1>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[3px] text-gold-muted">
                Automatisez votre gestion des espèces
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-grey-light md:text-lg">
                Un monnayeur automatique prend en charge l&apos;intégralité de
                la gestion des espèces au point de vente. Il accepte billets
                et pièces, compte le montant exact et rend la monnaie sans
                intervention du personnel. Résultat : zéro erreur, zéro
                perte, expérience client fluide et professionnelle.
              </p>

              <div className="mt-10 flex flex-row flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 whitespace-nowrap bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-navy-deep transition-all duration-300 hover:bg-gold-bright"
                >
                  Demander un devis
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/#solutions"
                  className="group inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-white/70 transition-all duration-300 hover:text-gold hover:underline"
                >
                  Voir toutes nos solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white">
                <Image
                  src={productShot}
                  alt="GLORY CI-10X, monnayeur automatique"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-navy-deep/90 px-5 py-3 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[3px] text-gold">
                  GLORY <span className="text-white">CASH INFINITY</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== POURQUOI INDISPENSABLE ==================== */}
      <section className="bg-navy px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="block h-px w-10 bg-gold" aria-hidden />
            <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold">
              POURQUOI C&apos;EST INDISPENSABLE
            </p>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Un impact direct sur votre{" "}
              <span className="italic text-gold">point de vente</span>.
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                {...fadeUp}
                transition={{
                  duration: 0.6,
                  ease: easePremium,
                  delay: index * 0.08,
                }}
                className="flex items-start gap-4 bg-navy p-8 transition-colors duration-500 hover:bg-navy-light"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-gold"
                  aria-hidden
                />
                <p className="text-base leading-relaxed text-white">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SHOWCASE ==================== */}
      <section className="bg-cream px-6 py-28 text-navy-deep md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="block h-px w-10 bg-gold" aria-hidden />
            <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold-muted">
              EN SITUATION
            </p>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
              Intégré à vos <span className="italic text-gold-muted">comptoirs</span>,
              sans effort.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-deep/70 md:text-lg">
              Le CI-10X s&apos;installe directement dans vos meubles de caisse
              existants — boulangeries, commerces de proximité, grande
              distribution — pour une expérience fluide, du comptoir jusqu&apos;au
              rendu de monnaie.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easePremium }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={bakeryShot}
                alt="Monnayeur GLORY intégré à un comptoir de boulangerie"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={posShot}
                alt="Monnayeur GLORY associé à une caisse enregistreuse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== POURQUOI CHOISIR CI-10X ==================== */}
      <section className="bg-navy-deep px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="block h-px w-10 bg-gold" aria-hidden />
            <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold">
              POURQUOI CHOISIR LE GLORY CI-10X
            </p>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Conçu pour la{" "}
              <span className="italic text-gold">performance</span> au
              quotidien.
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  ease: easePremium,
                  delay: index * 0.1,
                }}
                className="group border border-white/5 bg-navy-light p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-muted/30 transition-all duration-500 group-hover:border-gold">
                  <feature.icon
                    size={20}
                    className="stroke-[1.5] text-gold-muted transition-colors duration-500 group-hover:text-gold"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-grey-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-navy px-6 py-28 md:px-12">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
        >
          <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Prêt à équiper votre point de vente d&apos;un{" "}
            <span className="italic text-gold">GLORY CI-10X</span> ?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-grey-light md:text-lg">
            Un expert AF DISTRY vous répond sous 24 heures pour étudier vos
            besoins et proposer la solution adaptée à votre commerce.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 whitespace-nowrap bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-navy-deep transition-all duration-300 hover:bg-gold-bright"
            >
              Demander un devis
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-white/70 transition-all duration-300 hover:text-gold hover:underline"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Retour à l&apos;accueil
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
