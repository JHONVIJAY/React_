import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(contentRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511405622496-1facf569089a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjB0aWxlc3xlbnwxfHx8fDE3NjQ5OTUxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-lg max-w-xs">
              <div className="text-6xl mb-2">25+</div>
              <p className="text-sm uppercase tracking-wider">
                Years of Excellence
              </p>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-black" />
              <span className="text-sm uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl leading-tight">
              Crafted for
              <br />
              Perfection
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 1995, Ava Tiles has been at the forefront of tile
              innovation, combining traditional Italian craftsmanship with
              cutting-edge technology to create surfaces that inspire.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality, sustainability, and design excellence
              has made us a trusted partner for architects, designers, and
              homeowners worldwide.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-black mt-2 flex-shrink-0" />
                <span className="text-gray-600">
                  Premium Italian manufacturing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-black mt-2 flex-shrink-0" />
                <span className="text-gray-600">
                  Sustainable production methods
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-black mt-2 flex-shrink-0" />
                <span className="text-gray-600">Award-winning design team</span>
              </li>
            </ul>
            <button className="border-2 border-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider mt-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
