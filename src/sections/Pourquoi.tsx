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
      // Title animation
      gsap.from(titleRef.current?.children || [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      // Cards animation
      const cardEls = cardsRef.current?.children;
      if (cardEls) {
        gsap.from(cardEls, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          stagger: 0.12,
          duration: 0.7,
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
      id="pourquoi"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy bg-grid-pattern overflow-hidden"
    >
      <AnimatedDots />
      <FloatingShapes />
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
