import { ArrowRight, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);

  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const buttonsRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navigation fade in
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      // Buttons animation
      gsap.from(buttonsRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen">
      {/* Navigation */}

      <nav
        ref={navRef}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12 bg-gradient-to-b from-black/30 to-transparent"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="text-white text-3xl tracking-[0.15em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AVA TILE
          </div>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-12 text-white text-sm">
            <a
              href="#products"
              className="hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Collections
            </a>

            <a
              href="#gallery"
              className="hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Projects
            </a>

            <a
              href="#features"
              className="hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity uppercase tracking-wider"
            >
              Contact
            </a>

            <button
              onClick={() => {
                const productsSection = document.querySelector("#products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              Catalogue
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg p-6">
            <div className="flex flex-col gap-4 text-white">
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase tracking-wider"
              >
                Collections
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase tracking-wider"
              >
                Projects
              </a>

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase tracking-wider"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase tracking-wider"
              >
                Contact
              </a>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  const productsSection = document.querySelector("#products");
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all uppercase tracking-wider mt-2"
              >
                Catalogue
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Image */}

      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY0OTI3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury tile showroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Hero Content */}

      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-white">
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl mb-8 leading-tight"
            >
              Timeless
              <br />
              Elegance
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed"
            >
              Discover our curated collection of premium tiles, where Italian
              craftsmanship meets contemporary design
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const productsSection = document.querySelector("#products");
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group uppercase tracking-wider"
              >
                Explore Collections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-all uppercase tracking-wider"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm uppercase tracking-wider animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>

          <div className="w-px h-12 bg-white/50" />
        </div>
      </div>
    </div>
  );
}
