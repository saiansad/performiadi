import { useEffect, useRef } from 'react';
import { TrendingUp, Target, Settings, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedDots, FloatingShapes } from '../components/AnimatedElements';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: TrendingUp,
    title: 'Digitalisation',
    description:
      'Transformons votre présence en actif stratégique. Sites web, applications et outils digitaux conçus pour performer.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description:
      'Attirez, convertissez, fidélisez. Nos stratégies marketing génèrent un flux continu de prospects qualifiés.',
  },
  {
    icon: Settings,
    title: 'Process Automation',
    description:
      "Dites adieu aux tâches répétitives. Automatisez vos processus métier pour gagner en efficacité et en précision.",
  },
  {
    icon: BarChart3,
    title: 'Performance Data',
    description:
      'Chaque décision pilotée par les données. Tableaux de bord et analytics pour une visibilité totale sur vos résultats.',
  },
];

export default function Pourquoi() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title animation with parallax
      gsap.from(titleRef.current?.children || [], {
        y: 60,
        opacity: 0,
        rotation: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
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
          yPercent: -20,
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
          const iconEl = card.querySelector('.card-icon');
          const titleEl = card.querySelector('.card-title');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
            
            if (iconEl) {
              gsap.to(iconEl, {
                rotation: 15,
                scale: 1.1,
                duration: 0.4,
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
              duration: 0.3,
              ease: 'power2.out',
            });
            
            if (iconEl) {
              gsap.to(iconEl, {
                rotation: 0,
                scale: 1,
                duration: 0.4,
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

      // Animated lines effect
      const lines = sectionRef.current?.querySelectorAll('.animated-line');
      if (lines) {
        lines.forEach((line, index) => {
          gsap.from(line, {
            scaleX: 0,
            opacity: 0,
            duration: 1.5,
            delay: index * 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }

      // Geometric shapes animation
      const shapes = sectionRef.current?.querySelectorAll('.geometric-shape');
      if (shapes) {
        shapes.forEach((shape, index) => {
          gsap.to(shape, {
            rotation: 'random(-180, 180)',
            scale: 'random(0.8, 1.2)',
            duration: 'random(4, 8)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
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
      <AnimatedDots />
      <FloatingShapes />
      
      {/* Additional visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-emerald/20 rounded-lg transform rotate-45 geometric-shape" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-blue/20 rounded-full geometric-shape" />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-emerald/10 to-transparent rounded-lg geometric-shape" />
        
        {/* Animated lines */}
        <div className="absolute top-1/3 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent animated-line" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent animated-line" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
            Pourquoi nous
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            La performance digitale,{' '}
            <span className="text-emerald">systématisée</span>
          </h2>
          <p className="text-silver text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Nous ne créons pas juste des sites web ou des campagnes. Nous concevons des{' '}
            <span className="text-emerald font-medium">systèmes de croissance</span>{' '}
            — des architectures digitales complètes qui génèrent des résultats mesurables, prévisibles et durables.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative glass-light border border-white/10 rounded-2xl p-8 hover:border-emerald/40 hover:-translate-y-2 transition-all duration-400"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-emerald" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
