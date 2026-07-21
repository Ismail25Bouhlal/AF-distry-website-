"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  TrendingUp,
  CreditCard,
  Settings2,
  Layers,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import kioskShot from "@/assets/81.png";
import totemShot from "@/assets/borne_de_commande.jpeg";
import wallKioskShot from "@/assets/Screenshot 2026-07-21 105811.png";
import rowKioskShot from "@/assets/selfservicekiosks1140x810.jpg";
import bakeryCounterShot from "@/assets/Screenshot 2026-07-21 110155.png";

const easePremium = [0.4, 0, 0.2, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easePremium },
};

const benefits = [
  "Réduire les files d'attente",
  "Augmenter le panier moyen",
  "Limiter les erreurs de commande",
  "Libérer votre personnel en caisse",
  "Personnaliser l'expérience client",
  "Collecter des données de vente précises",
];

const features = [
  {
    icon: MousePointerClick,
    title: "Commande en libre-service",
    description:
      "Le client compose sa commande à son rythme, sans pression ni file d'attente, pour une expérience détendue et personnalisée.",
  },
  {
    icon: TrendingUp,
    title: "Vente additionnelle intelligente",
    description:
      "Suggestions automatiques de produits complémentaires et menus : la borne augmente naturellement le panier moyen à chaque commande.",
  },
  {
    icon: CreditCard,
    title: "Paiement intégré sécurisé",
    description:
      "Carte bancaire, sans contact, mobile : tous les moyens de paiement sont centralisés directement sur la borne, en toute sécurité.",
  },
  {
    icon: Settings2,
    title: "Personnalisation totale",
    description:
      "Adaptez le design, les menus et le parcours client à votre image de marque et à votre offre, sans limite.",
  },
  {
    icon: Layers,
    title: "Intégration multi-format",
    description:
      "Borne autonome, murale ou comptoir : un format adapté à chaque configuration de point de vente, du fast-food à la boulangerie.",
  },
  {
    icon: BarChart3,
    title: "Statistiques en temps réel",
    description:
      "Suivez vos ventes, vos produits les plus demandés et vos heures de pointe pour piloter votre activité au quotidien.",
  },
];

const gallery = [
  {
    image: totemShot,
    alt: "Borne de commande digitale O Tacos avec offre promotionnelle",
  },
  {
    image: rowKioskShot,
    alt: "Rangée de bornes de commande en restauration rapide",
  },
  {
    image: bakeryCounterShot,
    alt: "Double poste de commande et encaissement en boulangerie",
  },
  {
    image: wallKioskShot,
    alt: "Borne de commande murale compacte pour restauration rapide",
  },
];

export default function BornesPage() {
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
                SOLUTION 02 — BORNES DE COMMANDE
              </p>
              <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
                C&apos;est quoi{" "}
                <span className="italic text-gold">une borne de commande</span>{" "}
                ?
              </h1>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[3px] text-gold-muted">
                Digitalisez votre prise de commande
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-grey-light md:text-lg">
                Une borne de commande permet à vos clients de composer et
                payer leur commande en toute autonomie, sans passer par la
                caisse traditionnelle. Écran tactile intuitif,
                personnalisation des produits, paiement intégré : le client
                avance à son rythme pendant que votre équipe se concentre sur
                la préparation et le service. Résultat : moins d&apos;attente,
                plus de ventes, une expérience moderne et fluide.
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
                  src={kioskShot}
                  alt="Borne de commande tactile en libre-service"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-navy-deep/90 px-5 py-3 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[3px] text-gold">
                  SELF-SERVICE <span className="text-white">KIOSK</span>
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
              Un format pour{" "}
              <span className="italic text-gold-muted">chaque commerce</span>.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-deep/70 md:text-lg">
              Autonome, murale ou intégrée au comptoir, nos bornes s&apos;adaptent
              à la restauration rapide, la boulangerie et le commerce de
              détail — pour un parcours client fluide, du premier écran
              jusqu&apos;au paiement.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {gallery.map((item, index) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: easePremium,
                  delay: index * 0.1,
                }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== POURQUOI CHOISIR NOS BORNES ==================== */}
      <section className="bg-navy-deep px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="block h-px w-10 bg-gold" aria-hidden />
            <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold">
              POURQUOI CHOISIR NOS BORNES DE COMMANDE
            </p>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Conçues pour la{" "}
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
            Prêt à équiper votre point de vente d&apos;une{" "}
            <span className="italic text-gold">borne de commande</span> ?
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
