import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Jean-Pierre K.',
    role: 'Business Developer',
    gradient: 'from-emerald/40 to-navy',
    initial: 'JP',
  },
  {
    name: 'Marie T.',
    role: 'Développeuse Full-Stack',
    gradient: 'from-blue/40 to-navy',
    initial: 'MT',
  },
  {
    name: 'Paul N.',
    role: 'Expert Marketing Digital',
    gradient: 'from-emerald/30 to-blue/20',
    initial: 'PN',
  },
  {
    name: 'Sarah F.',
    role: 'Consultante Stratégique',
    gradient: 'from-blue/30 to-emerald/20',
    initial: 'SF',
  },
];

export default function Equipe() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      // Cards animation
      const cardEls = cardsRef.current?.children;
      if (cardEls) {
        gsap.from(cardEls, {
          y: 60,
          opacity: 0,
          rotateX: 10,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      }

      // Parallax on team meeting image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -15 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy overflow-hidden"
    >
      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,208,132,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
            Notre Équipe
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Les experts derrière{' '}
            <span className="text-emerald">votre performance</span>
          </h2>
        </div>

        {/* Team Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Gradient Portrait */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
              >
                <span className="text-white/20 text-6xl font-bold select-none">
                  {member.initial}
                </span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-all duration-500 group-hover:via-navy/10" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-emerald text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Meeting Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <div ref={imageRef} className="relative">
            <img
              src="/assets/team_meeting.jpg"
              alt="L'équipe Performia Digital en réunion"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-xl md:text-2xl font-semibold max-w-xl">
              Une équipe passionnée par la performance digitale
            </p>
            <p className="text-silver mt-2">
              Ensemble, nous relevons vos défis technologiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
