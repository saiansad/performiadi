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
      // Header animation with parallax effect
      gsap.from(headerRef.current?.children || [], {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      // Content animation with rotation
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        rotation: 2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // KPIs animation with enhanced effects
      const kpiEls = kpisRef.current?.children;
      if (kpiEls) {
        const kpiArray = Array.from(kpiEls) as Element[];
        
        // Staggered entrance animation
        gsap.from(kpiArray, {
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotation: 5,
          stagger: 0.2,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: kpisRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });

        // Parallax effect on scroll
        gsap.to(kpiArray, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: kpisRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // Counter animation for numbers with enhanced timing
        kpiArray.forEach((el: Element, index) => {
          const valueEl = el.querySelector('.kpi-value');
          const iconEl = el.querySelector('.kpi-icon');
          
          if (valueEl) {
            const finalValue = valueEl.textContent;
            const isPercentage = finalValue?.includes('%');
            const isPlus = finalValue?.includes('+');
            const numericValue = parseInt(finalValue?.replace(/\D/g, '') || '0');
            
            // Icon animation
            if (iconEl) {
              gsap.from(iconEl, {
                scale: 0,
                rotation: -180,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: kpisRef.current,
                  start: 'top 70%',
                  toggleActions: 'play none none reverse',
                },
              });
            }
            
            // Counter animation
            gsap.from(valueEl, {
              textContent: 0,
              duration: 2.5,
              ease: 'power2.out',
              snap: { textContent: 1 },
              delay: index * 0.2,
              scrollTrigger: {
                trigger: valueEl,
                start: 'top 80%',
                onEnter: () => {
                  let current = 0;
                  const increment = numericValue / 60;
                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                      current = numericValue;
                      clearInterval(timer);
                    }
                    valueEl.textContent = Math.floor(current) + (isPercentage ? '%' : isPlus ? '+' : '');
                  }, 25);
                },
              },
            });
          }
        });
      }

      // Floating elements animation
      const floatingElements = sectionRef.current?.querySelectorAll('.floating-particle');
      if (floatingElements) {
        floatingElements.forEach((el, index) => {
          gsap.to(el, {
            y: 'random(-30, 30)',
            x: 'random(-20, 20)',
            rotation: 'random(-180, 180)',
            duration: 'random(3, 6)',
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
      className="relative py-12 md:py-16 bg-navy overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-10 right-20 opacity-20">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald/20 to-blue/20 rounded-lg transform rotate-12" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-20">
          <div className="w-40 h-40 bg-gradient-to-tr from-blue/20 to-emerald/20 rounded-lg transform -rotate-12" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald/30 rounded-full animate-bounce floating-particle" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue/30 rounded-full animate-bounce delay-500 floating-particle" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-emerald/30 rounded-full animate-bounce delay-1000 floating-particle" />
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

        {/* Content with images */}
        <div ref={contentRef} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-silver text-lg leading-relaxed mb-6">
                Performia Digital ne se contente pas de coder. Nous bâtissons l'infrastructure immatérielle de l'économie camerounaise. Notre approche fusionne l'ingénierie logicielle de pointe et une compréhension profonde des enjeux locaux pour offrir des solutions qui redéfinissent les standards du marché.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation Technologique</h4>
                    <p className="text-silver text-sm">Intégration des dernières technologies pour des solutions avant-gardistes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expertise Locale</h4>
                    <p className="text-silver text-sm">Compréhension approfondie du marché camerounais et africain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Excellence Opérationnelle</h4>
                    <p className="text-silver text-sm">Standards de qualité internationale adaptés au contexte local</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-emerald/50" />
                <span className="text-emerald text-sm font-medium uppercase tracking-[0.1em]">
                  Excellence & Innovation
                </span>
                <div className="w-16 h-px bg-emerald/50" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                alt="Technology vision" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium">Depuis 2020</p>
                <p className="text-2xl font-bold">50+ Projets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance indicators */}
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
    </section>
  );
}
