import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Featured() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      gsap.from(contentRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511405622496-1facf569089a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjB0aWxlc3xlbnwxfHx8fDE3NjQ5OTUxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-[#C9A55C] text-white p-6 sm:p-8 shadow-lg max-w-[200px] sm:max-w-xs">
              <div className="text-5xl sm:text-6xl mb-2">25+</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          <div ref={contentRef} className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#C9A55C]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C9A55C]">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
              Crafted for<br />Perfection
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Since 1995, Ava Surfaces has been at the forefront of tile innovation, combining traditional Italian craftsmanship with cutting-edge technology to create surfaces that inspire.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our commitment to quality, sustainability, and design excellence has made us a trusted partner for architects, designers, and homeowners worldwide.
            </p>
            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A55C] rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Premium Italian manufacturing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A55C] rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Sustainable production methods</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A55C] rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Award-winning design team</span>
              </li>
            </ul>
            <button className="border-2 border-[#C9A55C] text-[#C9A55C] px-8 sm:px-10 py-3 sm:py-4 hover:bg-[#C9A55C] hover:text-white transition-all duration-300 uppercase tracking-wider mt-6 sm:mt-8 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}