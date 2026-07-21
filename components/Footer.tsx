export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="font-sans text-2xl font-black tracking-tight text-white leading-none">
              GLORY
            </h3>
            <h3 className="font-serif text-2xl font-bold text-gold leading-none mt-1">
              DIGITAL
            </h3>
            <p className="text-[8px] uppercase tracking-[3px] text-grey-light mt-3">
              BY AF DISTRY
            </p>
            <p className="text-sm text-grey-light leading-relaxed mt-6 max-w-xs">
              Distributeur officiel des solutions{" "}
              <span className="font-sans font-black tracking-tight text-white">
                GLORY
              </span>{" "}
              Cash Infinity au Maroc.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-gold font-medium mb-6">
              Solutions
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Caisses Automatiques
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Bornes de Commande
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Monayeurs Cash Infinity
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-gold font-medium mb-6">
              Entreprise
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Secteurs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Partenariat{" "}
                  <span className="font-sans font-black tracking-tight text-white">
                    GLORY
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-gold font-medium mb-6">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="text-sm text-white/70">
                116, Lot. Bennis
                <br />
                Hay Raha, Fès
              </li>
              <li className="text-sm text-white/70">+212 5 35 XX XX XX</li>
              <li>
                <a
                  href="mailto:contact@afdistry.com"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  contact@afdistry.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle: Partnership badge */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-gold" />
            <p className="text-[10px] uppercase tracking-[3px] text-grey-light">
              Partenaire Officiel
            </p>
            <p className="font-serif text-lg text-white">
              <span className="font-sans font-black tracking-tight">
                GLORY
              </span>{" "}
              Global Solutions
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[2px] text-white/60 hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[2px] text-white/60 hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[2px] text-grey-light">
            © 2026 AF DISTRY. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[2px] text-grey-light hover:text-gold transition-colors"
            >
              Mentions Légales
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[2px] text-grey-light hover:text-gold transition-colors"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
