import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Services', href: '#services' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Blog', href: '#cta' },
  { label: 'Contact', href: '#cta' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={() => scrollTo('#hero')} className="flex items-center gap-2">
            <img
              src="/assets/logo_transparent.png"
              alt="Performia Digital"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-medium text-white/80 hover:text-emerald transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('#cta')}
              className="px-6 py-2.5 bg-emerald text-navy font-semibold text-sm rounded-full hover:scale-[1.03] transition-transform duration-300 glow-emerald"
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-emerald p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/95 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-semibold text-white/90 hover:text-emerald transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#cta')}
            className="mt-4 px-8 py-3 bg-emerald text-navy font-semibold rounded-full glow-emerald"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </>
  );
}
