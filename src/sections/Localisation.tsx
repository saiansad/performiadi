import { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Globe, Building, Users, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    city: 'Douala',
    country: 'Cameroun',
    address: 'Boulevard de la Liberté, Akwa',
    image: 'https://images.unsplash.com/photo-1559826264-d5526c7e5400?w=600&h=400&fit=crop&crop=center',
    coordinates: '3.9480° N, 9.7073° E',
    services: ['Développement Web', 'Marketing Digital', 'Consulting IT'],
    team: 15,
    established: '2020'
  },
  {
    city: 'Yaoundé',
    country: 'Cameroun',
    address: 'Avenue Charles de Gaulle, Bastos',
    image: 'https://images.unsplash.com/photo-1559717204-4164f7a6a5e8?w=600&h=400&fit=crop&crop=center',
    coordinates: '3.8480° N, 11.5021° E',
    services: ['Téléphonie IP', 'Audit IT', 'Solutions Cloud'],
    team: 12,
    established: '2021'
  },
  {
    city: 'Présence Panafricaine',
    country: 'Afrique Centrale',
    address: 'Réseau de partenaires dans 8 pays',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&h=400&fit=crop&crop=center',
    coordinates: 'Réseau continental',
    services: ['Support International', 'Déploiement Multi-pays', 'Formation'],
    team: 50,
    established: '2022'
  }
];

export default function Localisation() {
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
          const imageEl = card.querySelector('.location-image');
          const iconEl = card.querySelector('.location-icon');
          
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
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=300&h=300&fit=crop&crop=center" 
            alt="Africa map" 
            className="w-32 h-32 rounded-full shadow-2xl"
          />
        </div>
        <div className="absolute bottom-10 left-20 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1559826264-d5526c7e5400?w=300&h=300&fit=crop&crop=center" 
            alt="City landscape" 
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
            Notre Présence
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Au cœur de l'{' '}
            <span className="text-emerald">Afrique</span>
          </h2>
          <p className="text-silver text-lg mt-4 max-w-3xl mx-auto">
            Des bureaux stratégiques et un réseau continental pour servir nos clients avec excellence
          </p>
        </div>

        {/* Locations Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative bg-navy-light/50 backdrop-blur-sm border border-emerald/10 rounded-2xl overflow-hidden hover:border-emerald/30 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover location-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-2 bg-emerald/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-medium">{location.city}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* City Info */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">{location.city}</h3>
                    <p className="text-silver text-sm">{location.country}</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald/10 rounded-xl location-icon">
                    <Building className="w-6 h-6 text-emerald" />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <p className="text-silver text-sm flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-emerald flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                  <p className="text-silver text-xs mt-1 flex items-center space-x-2">
                    <Globe className="w-3 h-3 text-emerald flex-shrink-0" />
                    <span>{location.coordinates}</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="w-4 h-4 text-emerald" />
                      <span className="text-white text-lg font-bold">{location.team}</span>
                    </div>
                    <p className="text-silver text-xs">Équipe locale</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4 text-emerald" />
                      <span className="text-white text-lg font-bold">{location.established}</span>
                    </div>
                    <p className="text-silver text-xs">Depuis</p>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <p className="text-emerald text-sm font-medium mb-2">Services principaux :</p>
                  {location.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald rounded-full" />
                      <span className="text-silver text-xs">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-emerald/10 backdrop-blur-sm border border-emerald/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white text-2xl font-bold mb-6">Contactez-nous</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-emerald" />
                <span className="text-white">contact@performiadigital.online</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-emerald" />
                <span className="text-white">+237 6XX XXX XXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-emerald" />
                <span className="text-white">www.performiadigital.online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
