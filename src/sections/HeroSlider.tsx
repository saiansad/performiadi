import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    image: '/assets/hero_slide_1.jpg',
    accent: 'Accélérez votre croissance grâce au digital',
    headline: 'Votre performance devient un système, pas un hasard.',
    subline: 'Agence de transformation digitale \u0026 solutions technologiques au Cameroun',
  },
  {
    image: '/assets/hero_slide_2.jpg',
    accent: 'Étape 1: Diagnostic Stratégique',
    headline: 'Digitalisez. Automatisez. Dominez.',
    subline: 'Nous transformons vos processus en moteurs de croissance prévisibles',
  },
  {
    image: '/assets/hero_slide_3.jpg',
    accent: 'Étape 2: Analyse Structurelle',
    headline: 'La technologie au service de vos résultats.',
    subline: 'Sites web, applications, marketing digital et solutions IT sur mesure',
  },
  {
    image: '/assets/hero_slide_4.jpg',
    accent: 'Étape 3: Déploiement Intelligent',
    headline: 'Chaque clic compte. Chaque processus performe.',
    subline: 'De la génération de leads à l\'automatisation, nous optimisons tout',
  },
  {
    image: '/assets/hero_slide_5.jpg',
    accent: 'Étape 4: Croissance Systématisée',
    headline: 'L\'excellence digitale n\'est plus une option.',
    subline: 'Rejoignez les entreprises camerounaises qui choisissent la performance',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (hovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, next]);

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 1.08,
      x: dir > 0 ? -60 : 60,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: 'easeOut' as const },
    }),
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const scrollToNext = () => {
    const el = document.querySelector('#pourquoi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy/60 to-navy/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Accent Line */}
              <motion.div
                custom={0.3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald" />
                <span className="text-emerald text-sm font-medium uppercase tracking-[0.2em]">
                  {slides[current].accent}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={0.5}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
              >
                {slides[current].headline}
              </motion.h1>

              {/* Subline */}
              <motion.p
                custom={0.7}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-silver text-lg md:text-xl mt-6 max-w-lg"
              >
                {slides[current].subline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={0.9}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap gap-4 mt-10"
              >
                <button
                  onClick={() => {
                    const el = document.querySelector('#cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-emerald text-navy font-semibold rounded-full hover:scale-[1.03] transition-transform duration-300 glow-emerald-strong text-base"
                >
                  Demander un devis
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector('#services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-emerald/50 transition-all duration-300 text-base"
                >
                  Nos services
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute left-4 right-4 top-1/2 -translate-y-1/2 z-20 justify-between pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center hover:bg-emerald/20 hover:border-emerald/50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center hover:bg-emerald/20 hover:border-emerald/50 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === current
                ? 'w-8 bg-emerald'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/60 group-hover:text-emerald transition-colors">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-emerald transition-colors" />
        </motion.div>
      </button>
    </section>
  );
}
