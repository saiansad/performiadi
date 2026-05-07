import { useEffect, useRef } from 'react';
import { Globe, Megaphone, Phone, Cpu, Wrench, MessageCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: 'Création de sites web & applications',
    description:
      'Sites vitrines, e-commerce et applications mobiles sur mesure. Design premium, performance optimale, expérience utilisateur irréprochable.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description:
      'SEO, SEA, social media et content marketing. Une stratégie intégrée pour maximiser votre visibilité et votre ROI.',
  },
  {
    icon: Phone,
    title: 'Téléphonie IP',
    description:
      'Solutions de communication modernes et économiques. VoIP, centres d\'appel, intégration CRM — tout pour rester connecté.',
  },
  {
    icon: Cpu,
    title: 'Solutions Technologiques/IT',
    description:
      'Infrastructure cloud, cybersécurité, intégration de systèmes. Une architecture IT robuste et évolutive.',
  },
  {
    icon: Wrench,
    title: 'DevOps & Automatisation',
    description:
      'Déploiement continu, CI/CD, monitoring. Accélérez vos cycles de développement avec des pratiques DevOps éprouvées.',
  },
  {
    icon: MessageCircle,
    title: 'Conseil & Accompagnement',
    description:
      'Stratégie digitale, transformation des processus, formation. Nous vous guidons à chaque étape de votre évolution.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      const cardEls = cardsRef.current?.children;
      if (cardEls) {
        gsap.from(cardEls, {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy overflow-hidden"
    >
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 50%, rgba(0,208,132,0.03) 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div ref={headerRef}>
              <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
                Nos Services
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Des solutions{' '}
                <span className="text-emerald">complètes</span> pour votre
                transformation digitale
              </h2>
              <p className="text-silver text-base leading-relaxed">
                Une approche intégrée qui couvre tous les aspects de votre
                présence digitale — de la conception technique à la stratégie
                marketing, en passant par l'infrastructure IT.
              </p>
            </div>
          </div>

          {/* Right — Cards Grid */}
          <div
            ref={cardsRef}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-navy-light border border-white/[0.08] rounded-[20px] p-7 hover:-translate-y-1.5 hover:border-emerald/30 transition-all duration-400"
                  style={{
                    transitionTimingFunction:
                      'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald/10 flex items-center justify-center mb-5 group-hover:bg-emerald/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-emerald group-hover:drop-shadow-[0_0_8px_rgba(0,208,132,0.4)] transition-all duration-300" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-emerald text-sm font-medium group/link">
                    <span className="relative">
                      En savoir plus
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
