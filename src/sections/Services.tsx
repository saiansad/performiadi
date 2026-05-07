import { useEffect, useRef } from 'react';
import { Globe, Megaphone, Phone, Cpu, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: 'Développement Web & Mobile',
    description:
      'Applications natives et plateformes web scalables conçues pour la performance.',
    features: ['React & Next.js', 'React Native & Flutter', 'Architecture scalable', 'Performance optimisée']
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description:
      'Stratégies d\'acquisition data-driven pour dominer votre écosystème numérique.',
    features: ['SEO & SEA', 'Social Media Marketing', 'Content Strategy', 'Analytics & ROI']
  },
  {
    icon: Phone,
    title: 'Téléphonie IP',
    description:
      'Infrastructures de communication unifiées pour une collaboration sans frontières.',
    features: ['VoIP & SIP', 'Centres d\'appels', 'Intégration CRM', 'Solutions cloud']
  },
  {
    icon: Cpu,
    title: 'Audit IT & Sécurité',
    description:
      'Évaluation rigoureuse de vos systèmes pour une efficacité et une sécurité maximales.',
    features: ['Audit de sécurité', 'Tests de pénétration', 'Conformité RGPD', 'Monitoring 24/7']
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation with parallax
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        rotation: -2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      const cards = cardsRef.current?.children;
      if (cards) {
        const cardArray = Array.from(cards);
        
        // Staggered entrance animation with rotation
        gsap.from(cardArray, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotation: 3,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });

        // Parallax effect on cards
        gsap.to(cardArray, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // Enhanced hover effects for cards
        cardArray.forEach((card) => {
          const iconEl = card.querySelector('.service-icon');
          const titleEl = card.querySelector('.service-title');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -12,
              scale: 1.03,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
            
            if (iconEl) {
              gsap.to(iconEl, {
                rotation: 360,
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
            
            if (titleEl) {
              gsap.to(titleEl, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
            
            if (iconEl) {
              gsap.to(iconEl, {
                rotation: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
            
            if (titleEl) {
              gsap.to(titleEl, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          });
        });
      }

      // Floating elements animation
      const floatingElements = sectionRef.current?.querySelectorAll('.floating-element');
      if (floatingElements) {
        floatingElements.forEach((el, index) => {
          gsap.to(el, {
            y: 'random(-40, 40)',
            x: 'random(-30, 30)',
            rotation: 'random(-360, 360)',
            duration: 'random(4, 8)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-navy overflow-hidden"
    >
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 50%, rgba(0,208,132,0.03) 50%)',
        }}
      />
      
      {/* Additional visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stock images */}
        <div className="absolute top-10 right-20 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center" 
            alt="Web development" 
            className="w-20 h-20 rounded-full shadow-2xl"
          />
        </div>
        <div className="absolute bottom-10 left-20 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop&crop=center" 
            alt="Digital marketing" 
            className="w-16 h-16 rounded-full shadow-2xl"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-emerald/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-tl from-blue/5 to-transparent rounded-full blur-2xl" />
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-emerald/20 rounded-lg transform rotate-45 animate-spin floating-element" />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue/20 rounded-full animate-bounce floating-element" />
      </div>

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
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald/60" />
                        <span className="text-silver/80 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
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
