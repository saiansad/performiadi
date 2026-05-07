import { useEffect, useRef } from 'react';
import { Search, FileText, Rocket, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const methodologySteps = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse des besoins',
    description: 'Immersion totale dans votre métier pour identifier les leviers de croissance.',
    details: [
      'Audit de vos processus existants',
      'Identification des opportunités digitales',
      'Analyse de la concurrence',
      'Définition des objectifs KPIs'
    ],
    color: 'from-emerald/20 to-emerald/5'
  },
  {
    number: '02',
    icon: FileText,
    title: 'Conception Stratégique',
    description: 'Architecture UX et technique optimisée pour vos objectifs.',
    details: [
      'Design thinking & UX research',
      'Architecture technique scalable',
      'Prototype interactif',
      'Validation utilisateur'
    ],
    color: 'from-blue/20 to-blue/5'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Déploiement Tech',
    description: 'Développement agile et intégration continue (CI/CD).',
    details: [
      'Développement par sprints',
      'Tests automatisés',
      'Déploiement continu',
      'Monitoring en temps réel'
    ],
    color: 'from-purple/20 to-purple/5'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimisation',
    description: 'Maintenance proactive et amélioration basée sur les analytics.',
    details: [
      'Analyse des performances',
      'A/B testing',
      'Optimisation SEO',
      'Évolution continue'
    ],
    color: 'from-orange/20 to-orange/5'
  },
];

export default function Methodologie() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Progress line animation
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          height: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 80%',
          },
        });
      }

      // Steps animation
      const stepEls = stepsRef.current?.children;
      if (stepEls) {
        const stepArray = Array.from(stepEls) as Element[];
        gsap.from(stepArray, {
          x: -60,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
          },
        });

        // Hover effect for steps
        stepArray.forEach((el: Element) => {
          const iconEl = el.querySelector('.step-icon');
          const detailsEl = el.querySelector('.step-details');
          
          el.addEventListener('mouseenter', () => {
            gsap.to(iconEl, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(detailsEl, {
              height: 'auto',
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          el.addEventListener('mouseleave', () => {
            gsap.to(iconEl, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="methodologie"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue/3 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
            Notre Expertise
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Une{' '}
            <span className="text-emerald">méthodologie</span>
            {' '}éprouvée pour{' '}
            <span className="text-emerald">votre succès</span>
          </h2>
          <p className="text-silver text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Chaque projet suit un processus structuré garantissant des résultats exceptionnels, 
            de la stratégie initiale à l'optimisation continue.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-px bg-gradient-to-b from-emerald/20 via-emerald/40 to-emerald/20 transform md:-translate-x-1/2" />
          <div 
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 md:w-px bg-gradient-to-b from-emerald to-emerald/20 transform md:-translate-x-1/2 origin-top"
          />

          <div ref={stepsRef} className="space-y-12 md:space-y-20">
            {methodologySteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;
              
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 md:gap-6 z-10">
                    <div className="step-icon relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-50 animate-pulse`} />
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.color} border border-emerald/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-emerald font-bold text-lg md:text-xl">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:block w-12 h-12 rounded-full bg-navy border-2 border-emerald/20 flex items-center justify-center group-hover:border-emerald/40 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-emerald" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 max-w-lg md:max-w-xl ${isEven ? 'md:text-right' : ''}`}>
                    <div className={`glass-light border border-white/10 rounded-2xl p-6 md:p-8 hover:border-emerald/30 transition-all duration-400 group`}>
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                        <div className="w-10 h-10 rounded-full bg-navy border border-emerald/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald" />
                        </div>
                        <span className="text-emerald font-bold text-lg">{step.number}</span>
                      </div>
                      
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-silver text-base md:text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Expandable Details */}
                      <div className="step-details overflow-hidden transition-all duration-300">
                        <div className="space-y-2 pt-4 border-t border-white/10">
                          {step.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0" />
                              <span className="text-silver text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-4 text-emerald group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-medium">Découvrir cette étape</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile spacer */}
                  <div className="w-16 md:hidden" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald/20 bg-emerald/5">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-emerald text-sm font-medium">
              Processus certifié ISO 9001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
