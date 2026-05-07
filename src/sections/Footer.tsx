import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Services', href: '#services' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Blog', href: '#cta' },
  { label: 'Contact', href: '#cta' },
];

const serviceLinks = [
  'Création web',
  'Marketing Digital',
  'Téléphonie IP',
  'Solutions IT',
  'Conseil',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy border-t border-white/[0.08] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/logo_transparent.png"
              alt="Performia Digital"
              className="h-8 w-auto mb-4"
            />
            <p className="text-silver/80 text-sm leading-relaxed mb-6">
              Performia Digital — Agence de transformation digitale & solutions
              technologiques au Cameroun.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white/60 hover:text-emerald transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-silver text-xs font-medium uppercase tracking-[0.15em] mb-4 block">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 text-sm hover:text-emerald hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-silver text-xs font-medium uppercase tracking-[0.15em] mb-4 block">
              Services
            </span>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <span className="text-white/70 text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-silver text-xs font-medium uppercase tracking-[0.15em] mb-4 block">
              Contact
            </span>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm">
                contact@performia-digital.com
              </li>
              <li className="text-white/70 text-sm">+237 6XX XXX XXX</li>
              <li className="text-white/70 text-sm">Douala, Cameroun</li>
            </ul>
            <button
              onClick={() => scrollTo('#cta')}
              className="mt-6 px-5 py-2.5 bg-emerald/10 border border-emerald/30 text-emerald text-sm font-medium rounded-full hover:bg-emerald/20 transition-colors duration-300"
            >
              Demander un devis
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver/60 text-sm">
            © 2025 Performia Digital. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-silver/60 text-sm">
            <span className="hover:text-white/70 cursor-pointer transition-colors">
              Mentions légales
            </span>
            <span className="text-white/20">|</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">
              Politique de confidentialité
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
