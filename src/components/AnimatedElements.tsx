import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedDotsProps {
  className?: string;
}

export function AnimatedDots({ className = "" }: AnimatedDotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const dots = containerRef.current.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
      gsap.to(dot, {
        y: -20,
        opacity: 0.3,
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="dot absolute w-1 h-1 bg-emerald/20 rounded-full"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i * 5)}%`,
          }}
        />
      ))}
    </div>
  );
}

interface FloatingShapesProps {
  className?: string;
}

export function FloatingShapes({ className = "" }: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        rotation: 360,
        duration: 20 + index * 5,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(shape, {
        y: -30,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.3,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="shape absolute top-10 right-20 w-16 h-16 border border-emerald/10 rounded-full" />
      <div className="shape absolute top-1/3 left-10 w-12 h-12 border border-blue/10 rounded-lg rotate-45" />
      <div className="shape absolute bottom-20 right-1/3 w-20 h-20 border border-purple/10 rounded-full" />
      <div className="shape absolute bottom-1/3 left-1/4 w-8 h-8 bg-emerald/5 rounded-full" />
    </div>
  );
}

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className = "" }: GridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.line');
    
    lines.forEach((line, index) => {
      gsap.from(line, {
        scaleX: 0,
        duration: 1,
        ease: 'power2.out',
        delay: index * 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <line className="line" x1="0" y1="0" x2="0" y2="40" stroke="rgba(0, 208, 132, 0.1)" strokeWidth="0.5" />
            <line className="line" x1="0" y1="0" x2="40" y2="0" stroke="rgba(0, 208, 132, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

interface PulseCirclesProps {
  className?: string;
}

export function PulseCircles({ className = "" }: PulseCirclesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const circles = containerRef.current.querySelectorAll('.pulse-circle');
    
    circles.forEach((circle, index) => {
      gsap.to(circle, {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.out',
        delay: index * 0.7,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-32 h-32">
        <div className="pulse-circle absolute inset-0 border border-emerald/20 rounded-full" />
        <div className="pulse-circle absolute inset-0 border border-emerald/20 rounded-full" />
        <div className="pulse-circle absolute inset-0 border border-emerald/20 rounded-full" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24">
        <div className="pulse-circle absolute inset-0 border border-blue/20 rounded-full" />
        <div className="pulse-circle absolute inset-0 border border-blue/20 rounded-full" />
        <div className="pulse-circle absolute inset-0 border border-blue/20 rounded-full" />
      </div>
    </div>
  );
}

interface AnimatedGradientProps {
  className?: string;
}

export function AnimatedGradient({ className = "" }: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const gradient = containerRef.current.querySelector('.gradient');
    
    gsap.to(gradient, {
      backgroundPosition: '200% 0%',
      duration: 8,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="gradient absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 208, 132, 0.1), transparent)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
}
