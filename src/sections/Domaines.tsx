import { useEffect, useRef } from 'react';
import { Globe, MapPin, Users, Building, Cpu, Smartphone, Shield, BarChart3, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const domaines = [
  {
    icon: Globe,
    title: 'Développement Web & Mobile',
    description: 'Applications natives et plateformes web scalables conçues pour la performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center',
    features: ['React & Next.js', 'React Native & Flutter', 'Architecture scalable', 'Performance optimisée']
  },
  {
    icon: Users,
    title: 'Marketing Digital',
    description: 'Stratégies d\'acquisition data-driven pour dominer votre écosystème numérique.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
    features: ['SEO & SEA', 'Social Media Marketing', 'Content Strategy', 'Analytics & ROI']
  },
  {
    icon: Cpu,
    title: 'Téléphonie IP',
    description: 'Infrastructures de communication unifiées pour une collaboration sans frontières.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&crop=center',
    features: ['VoIP & SIP', 'Centres d\'appels', 'Intégration CRM', 'Solutions cloud']
  },
  {
    icon: Shield,
    title: 'Audit IT & Sécurité',
    description: 'Évaluation rigoureuse de vos systèmes pour une efficacité et une sécurité maximales.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbcc31b?w=400&h=300&fit=crop&crop=center',
    features: ['Audit de sécurité', 'Tests de pénétration', 'Conformité RGPD', 'Monitoring 24/7']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transformez vos données en décisions stratégiques avec nos solutions BI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
    features: ['Tableaux de bord', 'Analytics avancés', 'Reporting automatisé', 'KPI tracking']
  },
  {
    icon: Zap,
    title: 'Automatisation Processus',
    description: 'Optimisez vos opérations avec nos solutions d\'automatisation intelligentes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    features: ['Workflow automation', 'RPA', 'Integration API', 'Process optimization']
  }
];

export default function Domaines() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with parallax
      gsap.from(headerRef.current?.children || [], {
        y: 60,
        opacity: 0,
        rotation: 1,
        stagger: 0.15,
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
          rotation: 2,
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
        cardArray.forEach((card, index) => {
          const iconEl = card.querySelector('.domaine-icon');
          const imageEl = card.querySelector('.domaine-image');
          
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
            
            if (imageEl) {
              gsap.to(imageEl, {
                scale: 1.05,
                duration: 0.4,
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
            
            if (imageEl) {
              gsap.to(imageEl, {
                scale: 1,
                duration: 0.4,
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
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-navy overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stock images */}
        <div className="absolute top-10 right-20 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558629363-cbdc2b8dd0d8?w=200&h=200&fit=crop&crop=center" 
            alt="Digital transformation" 
            className="w-32 h-32 rounded-full shadow-2xl"
          />
        </div>
        <div className="absolute bottom-10 left-20 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-15172453868074-12cc5b982d03?w=200&h=200&fit=crop&crop=center" 
            alt="Technology solutions" 
            className="w-24 h-24 rounded-full shadow-2xl"
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
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
            Nos Domaines d'Intervention
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Solutions complètes pour{' '}
            <span className="text-emerald">tous vos besoins</span>
          </h2>
        </div>

        {/* Domaines Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => {
            const Icon = domaine.icon;
            return (
              <div
                key={index}
                className="group relative bg-navy-light/50 backdrop-blur-sm border border-emerald/10 rounded-2xl p-6 hover:border-emerald/30 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={domaine.image}
                    alt={domaine.title}
                    className="w-full h-48 object-cover rounded-xl domaine-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-emerald/10 rounded-2xl mb-4 domaine-icon">
                  <Icon className="w-8 h-8 text-emerald" />
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-emerald transition-colors duration-300">
                  {domaine.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  {domaine.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {domaine.features.slice(0, 3).map((feature, featureIndex) => (
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
    </section>
  );
}
