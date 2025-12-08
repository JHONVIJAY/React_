import { Shield, Droplets, Sparkles, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Italian craftsmanship with advanced materials'
  },
  {
    icon: Droplets,
    title: 'Water Resistant',
    description: 'Perfect for high-moisture environments'
  },
  {
    icon: Sparkles,
    title: 'Easy to Clean',
    description: 'Low-maintenance surfaces that last'
  },
  {
    icon: Award,
    title: '25-Year Warranty',
    description: 'Backed by our quality guarantee'
  }
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features animation with scale
      gsap.from(gridRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#1a1a1a] to-black text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A55C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A55C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="mb-6 text-[#C9A55C]">
                  <Icon className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}