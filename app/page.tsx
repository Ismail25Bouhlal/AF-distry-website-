"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  UtensilsCrossed,
  Pill,
  BedDouble,
  Croissant,
  Beef,
  Fuel,
  Hospital,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/574dd64c-ec33-4084-9d5d-8729d7d18130.png";
import borneImg from "../assets/borne_de_commande.jpeg";
import ecranImg from "../assets/Ecran_indoor.jpg";
import monnayeurImg from "../assets/8bff627808f5da5e2b8580499e7ea7d667798c52.jpg";


const easePremium = [0.4, 0, 0.2, 1] as const;

const headingLineOne: { text: string; className: string }[] = [
  { text: "L'infrastructure", className: "text-white" },
  { text: "cash", className: "text-gold italic" },
];

const headingLineTwo: { text: string; className: string }[] = [
  { text: "de", className: "text-white" },
  { text: "demain.", className: "text-white" },
];

const innerRings = [
  { scale: 0.55, opacity: 0.3, duration: 30, direction: 1 },
  { scale: 0.4, opacity: 0.5, duration: 45, direction: -1 },
  { scale: 0.25, opacity: 0.7, duration: 60, direction: 1 },
];

const orbitDots = [
  { duration: 18, delay: 0, radius: 0.42 },
  { duration: 24, delay: 0.4, radius: 0.48 },
  { duration: 30, delay: 0.8, radius: 0.36 },
  { duration: 22, delay: 1.2, radius: 0.52 },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easePremium },
};

const fadeUpAbout = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easePremium },
};

const products = [
  {
    number: "01",
    label: "SOLUTION 01",
    title: "Caisses Automatiques (Monnayeur)",
    description:
      "Gestion cash automatisée, réconciliation en temps réel, sécurité maximale.",
    image: monnayeurImg,
    href: "/solutions/monnayeur",
  },
  {
    number: "02",
    label: "SOLUTION 02",
    title: "Bornes de Commande & Caisses",
    description:
      "Commande en libre-service, expérience client optimisée, augmentation du panier moyen.",
    image: borneImg,
    href: "/solutions/bornes",
  },
  {
    number: "03",
    label: "SOLUTION 03",
    title: "Écrans Digitaux",
    description:
      "Affichage dynamique et menus interactifs pour une communication visuelle impactante en point de vente.",
    image: ecranImg,
    href: "/solutions/ecrans",
  },
];

const stats = [
  { value: "10+", label: "ANNÉES D'EXPERTISE" },
  { value: "500+", label: "INSTALLATIONS AU MAROC" },
  { value: "24/7", label: "SUPPORT TECHNIQUE" },
];

const sectors = [
  { name: "Grande Distribution", icon: ShoppingCart },
  { name: "Restauration", icon: UtensilsCrossed },
  { name: "Boulangerie", icon: Croissant },
  { name: "Boucherie", icon: Beef },
  { name: "Pharmacies", icon: Pill },
  { name: "Hôpitaux", icon: Hospital },
  { name: "Hôtellerie", icon: BedDouble },
  { name: "Stations Service", icon: Fuel },
];

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  return (
    <motion.div
      {...fadeUpAbout}
      transition={{
        duration: 0.8,
        ease: easePremium,
        delay: index * 0.15,
      }}
    >
      <p className="font-serif text-6xl font-bold leading-none text-navy-deep md:text-7xl">
        {stat.value}
      </p>
      <span className="mt-4 block h-px w-5 bg-gold-muted" aria-hidden />
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[3px] text-navy-deep/60">
        {stat.label}
      </p>
    </motion.div>
  );
}

function AboutVisual() {
  return (
    <motion.div
      {...fadeUpAbout}
      transition={{ duration: 0.8, ease: easePremium, delay: 0.2 }}
      className="relative lg:sticky lg:top-32"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-navy-deep">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-9xl text-gold/20">&ldquo;</span>
        </div>
        <div className="absolute bottom-0 left-0 bg-navy-deep/80 px-4 py-2 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[3px] text-gold">
            <span className="font-sans font-black tracking-tight text-white">
              GLORY
            </span>{" "}
            PARTNERSHIP
          </p>
        </div>
        <p
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[4px] text-gold-muted"
          style={{ writingMode: "vertical-rl" }}
        >
          SINCE 2015
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedWord({
  word,
  index,
  baseDelay,
}: {
  word: { text: string; className: string };
  index: number;
  baseDelay: number;
}) {
  return (
    <motion.span
      className={`mr-[0.25em] inline-block last:mr-0 ${word.className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: easePremium,
        delay: baseDelay + index * 0.1,
      }}
    >
      {word.text}
    </motion.span>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const cardContent = (
    <>
      {product.image && (
        <>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover opacity-60 grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/20"
            aria-hidden
          />
        </>
      )}
      <div className="relative flex h-full flex-col justify-between p-10">
        {product.image ? (
          <span
            className="h-px w-10 bg-gold-muted transition-all duration-500 group-hover:w-16"
            aria-hidden
          />
        ) : (
          <span className="font-serif text-7xl italic text-gold/40 transition-all duration-500 group-hover:text-gold">
            {product.number}
          </span>
        )}

        <div>
          <p className="text-[10px] uppercase tracking-[3px] text-gold">
            {product.label}
          </p>
          <h3 className="mt-3 font-serif text-3xl font-bold text-white">
            {product.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-grey-light">
            {product.description}
          </p>
          <span className="mt-8 inline-block text-[11px] uppercase tracking-[2px] text-gold transition-transform duration-300 group-hover:translate-x-2">
            Explorer →
          </span>
        </div>
      </div>
    </>
  );

  const motionProps = {
    ...fadeUp,
    transition: {
      duration: 0.8,
      ease: easePremium,
      delay: index * 0.15,
    },
    className:
      "group relative aspect-[4/5] block cursor-pointer overflow-hidden border border-white/5 bg-navy-light transition-all duration-500 hover:-translate-y-1 hover:border-gold/30",
  };

  if (product.href) {
    return (
      <motion.div {...motionProps}>
        <Link href={product.href} className="absolute inset-0">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return <motion.article {...motionProps}>{cardContent}</motion.article>;
}

function HeroVisual() {
  return (
    <motion.div
      className="relative hidden items-center justify-center md:flex"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: easePremium, delay: 0.4 }}
    >
      <div className="relative aspect-square w-[300px] lg:w-[480px]">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden>
            <circle
              cx="240"
              cy="240"
              r="224"
              stroke="#d4a054"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </motion.div>

        {innerRings.map((ring, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: ring.direction === 1 ? 360 : -360 }}
            transition={{
              duration: ring.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="rounded-full border border-gold"
              style={{
                width: `${ring.scale * 100}%`,
                height: `${ring.scale * 100}%`,
                opacity: ring.opacity,
              }}
            />
          </motion.div>
        ))}

        {orbitDots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "linear",
              delay: dot.delay,
            }}
          >
            <div
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,160,84,0.6)]"
              style={{ top: `${(1 - dot.radius) * 50}%` }}
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/80 backdrop-blur-sm lg:h-24 lg:w-24">
            <span className="font-serif text-5xl text-gold lg:text-6xl">∞</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="bg-navy-deep">
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-navy-deep"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-light/10 via-transparent to-gold-muted/5"
          aria-hidden
        />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 pb-16 pt-24 md:px-12 lg:grid-cols-2">
          <div className="flex max-w-2xl flex-col justify-center">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.1 }}
            >
              <span className="h-px w-[30px] shrink-0 bg-gold" aria-hidden />
              <p className="text-[10px] font-medium uppercase tracking-[4px] text-gold">
                DISTRIBUTEUR OFFICIEL{" "}
                <span className="font-sans font-black tracking-tight text-white">
                  GLORY
                </span>{" "}
                AU MAROC
              </p>
            </motion.div>

            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">
                {headingLineOne.map((word, index) => (
                  <AnimatedWord
                    key={word.text}
                    word={word}
                    index={index}
                    baseDelay={0.2}
                  />
                ))}
              </span>
              <span className="block">
                {headingLineTwo.map((word, index) => (
                  <AnimatedWord
                    key={word.text}
                    word={word}
                    index={index}
                    baseDelay={0.4}
                  />
                ))}
              </span>
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-base font-normal leading-relaxed text-grey-light md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.6 }}
            >
              Caisses Automatiques (Monnayeur). Bornes de commande. Monayeurs{" "}
              <span className="font-sans font-black tracking-tight text-white">
                GLORY
              </span>{" "}
              Cash Infinity.Écrans Digitaux.<br /> Une distribution exclusive au Maroc.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-row flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.75 }}
            >
              <Link
                href="#solutions"
                className="group inline-flex items-center gap-2 whitespace-nowrap bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-navy-deep transition-all duration-300 hover:bg-gold-bright"
              >
                Découvrir nos solutions
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 whitespace-nowrap px-6 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-white/70 transition-all duration-300 hover:text-gold hover:underline"
              >
                Prendre rendez-vous
                <ArrowRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.8, ease: easePremium, delay: 0.9 }}
            >
              <p className="text-[9px] uppercase tracking-[4px] text-grey-light">
                En partenariat avec
              </p>
              <p className="mt-2 flex items-center gap-2 font-serif text-lg text-white">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <span className="font-sans font-black tracking-tight">
                  GLORY
                </span>{" "}
                GLOBAL SOLUTIONS
              </p>
            </motion.div>
          </div>

          <HeroVisual />
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easePremium, delay: 1.2 }}
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-[3px] text-grey-light">
            SCROLL
          </span>
          <motion.div
            className="h-10 w-px bg-gold"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <section id="solutions" className="bg-navy px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 gap-12 lg:grid-cols-3"
          >
            <div className="lg:col-span-2">
              <span className="block h-px w-10 bg-gold" aria-hidden />
              <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold">
                NOS SOLUTIONS
              </p>
              <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Trois piliers pour votre transformation{" "}
                <span className="italic text-gold">Digital</span>
              </h2>
            </div>

            <div className="flex items-end lg:col-span-1">
              <p className="max-w-md text-base leading-relaxed text-grey-light">
                De la caisse automatique au monayeur intelligent, nous équipons
                les commerces marocains avec les technologies{" "}
                <span className="font-sans font-black tracking-tight text-white">
                  GLORY
                </span>{" "}
                les plus avancées.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.number}
                product={product}
                index={index}
              />
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center">
            <Link
              href="#solutions"
              className="group inline-flex items-center gap-2 font-serif text-lg italic text-white transition-colors duration-300 hover:text-gold"
            >
              <span className="underline-offset-4 group-hover:underline">
                Découvrir tous nos produits
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-cream px-6 py-32 text-navy-deep md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <motion.div {...fadeUpAbout}>
                <span className="block h-px w-10 bg-gold" aria-hidden />
                <p className="mt-4 text-[11px] uppercase tracking-[4px] text-gold-muted">
                  POURQUOI AF DISTRY
                </p>
                <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-navy-deep md:text-5xl lg:text-6xl">
                  Dix ans d&apos;
                  <span className="italic text-gold-muted">expertise</span> au
                  service du retail marocain.
                </h2>
              </motion.div>

              <motion.p
                {...fadeUpAbout}
                transition={{
                  duration: 0.8,
                  ease: easePremium,
                  delay: 0.1,
                }}
                className="mt-8 max-w-xl text-base leading-relaxed text-navy-deep/70 md:text-lg"
              >
                Depuis 2015, AF DISTRY accompagne les enseignes marocaines dans
                leur transformation digitale. Distributeur exclusif de{" "}
                <span className="font-sans font-black tracking-tight">
                  GLORY
                </span>{" "}
                Global Solutions, nous combinons la précision de
                l&apos;ingénierie japonaise avec une expertise terrain locale.
              </motion.p>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <StatItem key={stat.label} stat={stat} index={index} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <AboutVisual />
            </div>
          </div>

          <motion.div
            {...fadeUpAbout}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.2 }}
            className="mt-32 border-t border-navy-deep/10 pt-16"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="font-serif text-6xl leading-none text-gold">
                  &ldquo;
                </span>
                <blockquote className="mt-4 max-w-2xl font-serif text-2xl italic leading-snug text-navy-deep md:text-3xl">
                  La précision est la seule chose qui compte. C&apos;est ce que{" "}
                  <span className="font-sans font-black tracking-tight">
                    GLORY
                  </span>{" "}
                  apporte, et c&apos;est ce que nous distribuons.
                </blockquote>
              </div>

              <div className="flex flex-col lg:col-span-2 lg:items-end lg:text-right">
                <span
                  className="h-px w-[30px] bg-gold-muted lg:ml-auto"
                  aria-hidden
                />
                <p className="mt-3 text-base font-semibold text-navy-deep">
                  Amina Bricha
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[2px] text-navy-deep/50">
                  Directrice Générale, AF DISTRY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ==================== SECTORS SECTION ==================== */}
      <section id="services" className="bg-navy-deep py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <div className="w-10 h-px bg-gold" />
            <p className="text-[11px] uppercase tracking-[4px] text-gold mt-4 font-medium">
              SECTEURS D'ACTIVITÉ
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
              Une expertise{" "}
              <span className="italic text-gold">multisectorielle</span>.
            </h2>
            <p className="text-base md:text-lg text-grey-light leading-relaxed mt-6 max-w-2xl">
              Nos solutions équipent les acteurs majeurs du retail marocain, de
              la grande distribution aux stations-service.
            </p>
          </motion.div>

          {/* Sectors Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative mt-20 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent md:w-32" />
            <div className="sector-marquee flex w-max gap-px bg-white/5">
              {[...sectors, ...sectors].map((sector, i) => (
              <div
                key={`${sector.name}-${i}`}
                aria-hidden={i >= sectors.length ? true : undefined}
                className="group flex w-[220px] shrink-0 flex-col items-center justify-center bg-navy-deep p-8 text-center transition-all duration-500 hover:bg-navy-light md:w-[260px] md:p-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-muted/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                  <sector.icon
                    className="h-6 w-6 stroke-[1.25] text-gold-muted/70 group-hover:text-gold transition-all duration-500"
                    aria-hidden
                  />
                </div>
                <div className="w-6 h-px bg-gold-muted my-4 group-hover:w-12 transition-all duration-500" />
                <h3 className="font-serif text-lg md:text-xl text-white leading-tight">
                  {sector.name}
                </h3>
              </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT CTA SECTION ==================== */}
      <section
        id="contact"
        className="bg-navy py-32 px-6 md:px-12 relative overflow-hidden"
      >
        {/* Decorative circle background */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Big CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-10 h-px bg-gold" />
              <p className="text-[11px] uppercase tracking-[4px] text-gold mt-4 font-medium">
                CONTACTEZ-NOUS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
                Parlons de votre{" "}
                <span className="italic text-gold">projet</span>.
              </h2>
              <p className="text-base md:text-lg text-grey-light leading-relaxed mt-6 max-w-lg">
                Un expert AF DISTRY vous répond sous 24 heures pour étudier vos
                besoins et proposer la solution adaptée.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-gold text-navy-deep font-semibold text-xs uppercase tracking-[2px] px-6 py-3 hover:bg-gold-bright transition-all duration-300 whitespace-nowrap">
                  Demander un devis
                </button>
                <button className="text-white/70 hover:text-gold text-xs uppercase tracking-[2px] font-medium px-2 py-3 transition-colors duration-300 whitespace-nowrap">
                  Prendre rendez-vous →
                </button>
              </div>
            </motion.div>

            {/* Right: Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy-deep border border-white/10 p-10 md:p-12"
            >
              <p className="text-[10px] uppercase tracking-[3px] text-gold mb-8">
                COORDONNÉES
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-grey-light mb-2">
                    Adresse
                  </p>
                  <p className="text-white font-serif text-lg">
                    116, Lotissement Bennis
                    <br />
                    Hay Raha, 30000 Fès
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-grey-light mb-2">
                      Téléphone
                    </p>
                    <p className="text-white text-sm">+212 5 35 XX XX XX</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-grey-light mb-2">
                      Email
                    </p>
                    <p className="text-white text-sm">contact@afdistry.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[2px] text-grey-light mb-2">
                    Horaires
                  </p>
                  <p className="text-white text-sm">
                    Lun - Ven: 09:00 - 18:00
                    <br />
                    Sam: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
