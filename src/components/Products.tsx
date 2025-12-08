import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: 'Porcelain Tiles',
    subtitle: 'Wall & Floor',
    description: 'High-performance porcelain for residential and commercial spaces',
    image: 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHRpbGVzfGVufDF8fHx8MTc2NDkyMDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Marble Effect',
    subtitle: 'Luxury Collection',
    description: 'Sophisticated marble aesthetics with modern durability',
    image: 'https://images.unsplash.com/photo-1669643219984-2ff3eea887a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0aWxlcyUyMHBhdHRlcm58ZW58MXx8fHwxNzY0OTI3NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Outdoor Collection',
    subtitle: 'Weather Resistant',
    description: 'Durable solutions for exterior applications',
    image: 'https://images.unsplash.com/photo-1715934514062-553910307ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjB0aWxlc3xlbnwxfHx8fDE3NjQ5MjA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Ceramic Tiles',
    subtitle: 'Classic & Contemporary',
    description: 'Versatile ceramic tiles for every design vision',
    image: 'https://images.unsplash.com/photo-1559925534-3ef09900cfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzY0OTI3NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      });

      // Products grid animation
      gsap.from(gridRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
    <section ref={sectionRef} id="products" className="py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 bg-[#C9A55C]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C9A55C]">Collections</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">Our Range</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Each collection is carefully designed to bring beauty and functionality to your space
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden bg-gray-50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-[#C9A55C] mb-2">{product.subtitle}</div>
                <h3 className="text-2xl sm:text-3xl mb-2 sm:mb-3">{product.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider group-hover:gap-4 transition-all text-[#C9A55C]">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="border-2 border-[#C9A55C] text-[#C9A55C] px-8 sm:px-12 py-3 sm:py-4 hover:bg-[#C9A55C] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm sm:text-base">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}