import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = contentRef.current?.children;
      if (children) {
        gsap.from(children, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B1426 0%, #0a1f2e 50%, #0B1426 100%)',
      }}
    >
      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,208,132,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,102,204,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '10%',
        }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center relative">
        <div ref={contentRef}>
          <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
            Prêt à transformer votre business?
          </span>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Discutons de votre{' '}
            <span className="text-emerald">prochaine étape</span>
          </h2>

          <p className="text-silver text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Que vous ayez besoin d'un site web performant, d'une stratégie
            marketing ou d'une transformation digitale complète, nous sommes là
            pour vous accompagner.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@performia-digital.com"
              className="px-8 py-4 bg-emerald text-navy font-semibold rounded-full hover:scale-[1.03] transition-transform duration-300 glow-emerald-strong text-base inline-block"
            >
              Demander un devis
            </a>
            <a
              href="mailto:contact@performia-digital.com"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-emerald/50 transition-all duration-300 text-base inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
