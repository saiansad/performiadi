import { useEffect, useRef } from 'react';
import { Zap, TrendingUp, Award, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const kpis = [
  {
    icon: Zap,
    value: '99%',
    label: 'Disponibilité garantie',
    description: 'Uptime optimal pour vos services critiques',
  },
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projets livrés',
    description: 'Succès mesurables dans divers secteurs',
  },
  {
    icon: Award,
    value: '5+',
    label: 'Années d\'expertise',
    description: 'Excellence technologique au Cameroun',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Satisfaction client',
    description: 'Partenariats durables et confiance',
  },
];

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const kpisRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      // Content animation
      gsap.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
      });

      // KPIs animation
      const kpiEls = kpisRef.current?.children;
      if (kpiEls) {
        gsap.from(kpiEls, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: kpisRef.current,
            start: 'top 75%',
          },
        });

        // Counter animation for numbers
        kpiEls.forEach((el) => {
          const valueEl = el.querySelector('.kpi-value');
          if (valueEl) {
            const finalValue = valueEl.textContent;
            const isPercentage = finalValue?.includes('%');
            const isPlus = finalValue?.includes('+');
            const numericValue = parseInt(finalValue?.replace(/\D/g, '') || '0');
            
            gsap.from(valueEl, {
              textContent: 0,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              stagger: 0.5,
              scrollTrigger: {
                trigger: valueEl,
                start: 'top 80%',
                onEnter: () => {
                  let current = 0;
                  const increment = numericValue / 50;
                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                      current = numericValue;
                      clearInterval(timer);
                    }
                    valueEl.textContent = Math.floor(current) + (isPercentage ? '%' : isPlus ? '+' : '');
                  }, 30);
                },
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy bg-grid-pattern overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
            Notre Vision
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Catalyseur de la{' '}
            <span className="text-emerald">transformation technologique</span>
          </h2>
          <h3 className="text-white text-2xl md:text-3xl font-semibold mt-4 text-emerald/80">
            au Cameroun
          </h3>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={contentRef} className="space-y-6">
            <p className="text-silver text-lg md:text-xl leading-relaxed">
              Performia Digital ne se contente pas de coder. Nous bâtissons{' '}
              <span className="text-emerald font-semibold">l'infrastructure immatérielle</span>{' '}
              de l'économie camerounaise.
            </p>
            <p className="text-silver text-lg md:text-xl leading-relaxed">
              Notre approche fusionne{' '}
              <span className="text-emerald font-semibold">l'ingénierie logicielle de pointe</span>{' '}
              et une compréhension profonde des enjeux locaux pour offrir des solutions qui{' '}
              <span className="text-emerald font-semibold">redéfinissent les standards</span>{' '}
              du marché.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-px bg-emerald/50" />
              <span className="text-emerald text-sm font-medium uppercase tracking-[0.1em]">
                Excellence & Innovation
              </span>
              <div className="w-16 h-px bg-emerald/50" />
            </div>
          </div>

          {/* Animated illustration placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-light p-8">
              <div className="space-y-4">
                <div className="h-2 bg-emerald/20 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald rounded-full animate-[slide_2s_ease-in-out_infinite]" style={{ width: '75%' }} />
                </div>
                <div className="h-2 bg-blue/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue rounded-full animate-[slide_2s_ease-in-out_infinite_delay-500]" style={{ width: '90%' }} />
                </div>
                <div className="h-2 bg-purple/20 rounded-full overflow-hidden">
                  <div className="h-full bg-purple rounded-full animate-[slide_2s_ease-in-out_infinite_delay-1000]" style={{ width: '60%' }} />
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-emerald text-sm font-medium">Performance en temps réel</p>
              </div>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div ref={kpisRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="group relative glass-light border border-white/10 rounded-2xl p-8 hover:border-emerald/40 hover:-translate-y-2 transition-all duration-400 text-center"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <Icon className="w-7 h-7 text-emerald" />
                </div>
                <div className="kpi-value text-4xl md:text-5xl font-bold text-white mb-2">
                  {kpi.value}
                </div>
                <h3 className="text-emerald font-semibold text-lg mb-2">
                  {kpi.label}
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-slide_2s_ease-in-out_infinite {
          animation: slide 2s ease-in-out infinite;
        }
        .animate-slide_2s_ease-in-out_infinite_delay-500 {
          animation: slide 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-slide_2s_ease-in-out_infinite_delay-1000 {
          animation: slide 2s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
