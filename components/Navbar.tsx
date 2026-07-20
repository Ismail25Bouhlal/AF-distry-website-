"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <div className="flex items-stretch gap-3">
      <div
        className="w-px shrink-0 self-stretch bg-gold-muted/50"
        aria-hidden
      />
      <div className="flex flex-col">
        <span className="font-serif text-2xl font-bold leading-none tracking-tight text-white">
          GLORY
        </span>
        <span className="mt-1 font-serif text-2xl font-bold leading-none tracking-tight text-gold">
          DIGITIL
        </span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[3px] text-grey-light">
          BY AF DISTRY
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isScrolled = scrollY > 50;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-navy-deep/95 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="flex h-20 items-center justify-between px-6 md:px-12">
          <Link href="/" aria-label="GLORY DIGITIL by AF DISTRY">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[2px] text-navy-deep transition-all duration-300 hover:bg-gold-bright md:inline-block"
          >
            DEMANDER UN DEVIS
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="text-white md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col bg-navy-deep"
          >
            <Link
              href="/"
              className="absolute left-6 top-6"
              aria-label="GLORY DIGITIL by AF DISTRY"
              onClick={() => setMobileOpen(false)}
            >
              <Logo />
            </Link>

            <button
              type="button"
              aria-label="Fermer le menu"
              className="absolute right-6 top-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-4xl text-white transition-colors hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-6 pb-12">
              <Link
                href="#contact"
                className="block w-full bg-gold px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[2px] text-navy-deep transition-all duration-300 hover:bg-gold-bright"
                onClick={() => setMobileOpen(false)}
              >
                DEMANDER UN DEVIS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
