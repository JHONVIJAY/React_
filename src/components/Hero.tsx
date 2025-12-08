import { ArrowRight, Menu, X, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import logoWhite from '../assets/a5d0e834f891a5daece65776de2131ed38042678.png';

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navigation fade in
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      // Title animation with split effect
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });

      // Buttons animation
      gsap.from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1.1
      });

      // Stats animation
      gsap.from(statsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen">
      {/* Navigation */}
      <nav ref={navRef} className="absolute top-0 left-0 right-0 z-20 px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img 
            src={logoWhite} 
            alt="AVA Surfaces" 
            className="h-8 md:h-10 mix-blend-lighten relative z-10" 
            style={{ filter: 'brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 text-white text-sm">
            <a href="#products" className="hover:text-[#C9A55C] transition-colors uppercase tracking-[0.15em] relative group">
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A55C] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#gallery" className="hover:text-[#C9A55C] transition-colors uppercase tracking-[0.15em] relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A55C] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#features" className="hover:text-[#C9A55C] transition-colors uppercase tracking-[0.15em] relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A55C] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="hover:text-[#C9A55C] transition-colors uppercase tracking-[0.15em] relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A55C] group-hover:w-full transition-all duration-300" />
            </a>
            <button className="border-2 border-[#C9A55C] text-[#C9A55C] px-8 py-3 hover:bg-[#C9A55C] hover:text-white transition-all uppercase tracking-[0.15em] backdrop-blur-sm">
              Catalogue
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white backdrop-blur-sm bg-black/20 p-2 rounded"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg p-6 border-t border-white/10">
            <div className="flex flex-col gap-4 text-white">
              <a href="#products" onClick={() => setMenuOpen(false)} className="py-3 uppercase tracking-wider hover:text-[#C9A55C] transition-colors border-b border-white/10">Collections</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className="py-3 uppercase tracking-wider hover:text-[#C9A55C] transition-colors border-b border-white/10">Projects</a>
              <a href="#features" onClick={() => setMenuOpen(false)} className="py-3 uppercase tracking-wider hover:text-[#C9A55C] transition-colors border-b border-white/10">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-3 uppercase tracking-wider hover:text-[#C9A55C] transition-colors border-b border-white/10">Contact</a>
              <button className="border-2 border-[#C9A55C] text-[#C9A55C] px-6 py-3 hover:bg-[#C9A55C] hover:text-white transition-all uppercase tracking-wider mt-2">
                Catalogue
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Background - Split Screen */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left Side - Dark with Pattern */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 165, 92, 0.1) 35px, rgba(201, 165, 92, 0.1) 70px)`
            }} />
          </div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A55C]/10 rounded-full blur-3xl" />
        </div>

        {/* Right Side - Image (hidden on mobile, shown on md+) */}
        <div className="hidden md:block md:w-1/2 relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY0OTI3NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury tile showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full py-32 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-[#C9A55C]" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#C9A55C]">Luxury Surfaces</span>
              </div>
              
              <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-6 md:mb-8 leading-[0.9]">
                Redefine<br />
                <span className="text-[#C9A55C]">Your Space</span>
              </h1>
              
              <p ref={subtitleRef} className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-white/80 leading-relaxed max-w-lg">
                Experience the perfect blend of Italian artistry and modern innovation. Transform ordinary spaces into extraordinary sanctuaries.
              </p>
              
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16">
                <button className="bg-[#C9A55C] text-white px-8 md:px-10 py-4 md:py-5 hover:bg-[#B89449] transition-all duration-300 flex items-center justify-center gap-3 group uppercase tracking-wider shadow-lg shadow-[#C9A55C]/20 text-sm md:text-base">
                  Explore Collections
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border-2 border-white/50 text-white px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider backdrop-blur-sm flex items-center justify-center gap-3 group text-sm md:text-base">
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  Watch Story
                </button>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2 text-[#C9A55C]">500+</div>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Tile Designs</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2 text-[#C9A55C]">25+</div>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Years Legacy</p>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2 text-[#C9A55C]">15k+</div>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Projects Done</p>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Card */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 max-w-md">
                <div className="text-white">
                  <h3 className="text-2xl mb-4">New Collection 2025</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Introducing our latest porcelain series featuring ultra-thin large format tiles with advanced anti-slip technology.
                  </p>
                  <div className="flex items-center gap-3 text-[#C9A55C] text-sm uppercase tracking-wider group cursor-pointer">
                    Discover Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.2em] animate-bounce z-20">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/60">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#C9A55C] to-transparent" />
        </div>
      </div>
    </div>
  );
}