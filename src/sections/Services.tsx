import { useEffect, useRef } from 'react';
import { Globe, Megaphone, Phone, Cpu } from 'lucide-react';
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
      className="relative py-12 md:py-16 bg-navy overflow-hidden"
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
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 opacity-20">
          <div className="w-20 h-20 border-2 border-emerald/20 rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-20">
          <div className="w-16 h-16 border-2 border-blue/20 rounded-full animate-pulse delay-500" />
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
                Solutions complètes pour{' '}
                <span className="text-emerald">votre croissance</span>
              </h2>
              <p className="text-silver text-sm leading-relaxed mb-6">
                Nous combinons expertise technique et compréhension métier pour livrer des solutions qui transforment vos ambitions en réalité digitale.
              </p>
              
              {/* Service image */}
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center" 
                  alt="Digital services" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-light/30 border border-emerald/10 rounded-xl p-4">
                  <p className="text-emerald text-2xl font-bold">4</p>
                  <p className="text-silver text-xs">Services principaux</p>
                </div>
                <div className="bg-navy-light/30 border border-emerald/10 rounded-xl p-4">
                  <p className="text-emerald text-2xl font-bold">24/7</p>
                  <p className="text-silver text-xs">Support technique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Cards */}
          <div ref={cardsRef} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-navy-light/50 backdrop-blur-sm border border-emerald/10 rounded-2xl p-6 hover:border-emerald/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald/10 rounded-2xl mb-4 service-icon">
                    <Icon className="w-8 h-8 text-emerald" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-emerald transition-colors duration-300 service-title">
                    {service.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald rounded-full" />
                        <span className="text-silver text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
