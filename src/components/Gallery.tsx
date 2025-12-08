import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjQ5Mjc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Private Residence',
    location: 'Beverly Hills'
  },
  {
    image: 'https://images.unsplash.com/photo-1758565811145-619f5e20f196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ5Mjc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Manhattan Loft',
    location: 'New York'
  },
  {
    image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ5MTU4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Coastal Villa',
    location: 'Miami'
  },
  {
    image: 'https://images.unsplash.com/photo-1659720879195-d5a108231648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0OTEyNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Tech Office',
    location: 'San Francisco'
  },
  {
    image: 'https://images.unsplash.com/photo-1700913405415-faab521d05ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlJTIwcGF0dGVybnxlbnwxfHx8fDE3NjQ5OTUxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Boutique Hotel',
    location: 'Paris'
  },
  {
    image: 'https://images.unsplash.com/photo-1760372056041-11e0fc48042e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvb3IlMjB0aWxlc3xlbnwxfHx8fDE3NjQ5OTUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Urban Apartment',
    location: 'Tokyo'
  }
];

export function Gallery() {
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

      // Gallery items with parallax-like effect
      gsap.from(gridRef.current?.children || [], {
        y: 80,
        opacity: 0,
        duration: 1,
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
    <section ref={sectionRef} id="gallery" className="py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 bg-[#C9A55C]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C9A55C]">Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">Recent Work</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Explore how Ava Surfaces has transformed spaces around the world
              </p>
            </div>
            <button className="border-2 border-[#C9A55C] text-[#C9A55C] px-8 sm:px-10 py-3 sm:py-4 hover:bg-[#C9A55C] hover:text-white transition-all duration-300 uppercase tracking-wider flex items-center gap-2 group self-start md:self-end text-sm sm:text-base">
              All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer bg-gray-100"
            >
              <div className="aspect-[3/4]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-[#C9A55C] uppercase tracking-wider">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}