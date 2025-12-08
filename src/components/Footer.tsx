import { Instagram, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoWhite from '../assets/a5d0e834f891a5daece65776de2131ed38042678.png';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-[#1a1a1a] to-black text-white py-16 sm:py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A55C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2">
            <img 
              src={logoWhite} 
              alt="AVA Surfaces" 
              className="h-10 sm:h-12 mb-4 sm:mb-6 mix-blend-lighten" 
              style={{ filter: 'brightness(1.2)' }}
            />
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-md">
              Premium Italian tiles for residential and commercial spaces. Crafting excellence since 1995.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-[#C9A55C]/50 flex items-center justify-center hover:bg-[#C9A55C] hover:border-[#C9A55C] transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-[#C9A55C]/50 flex items-center justify-center hover:bg-[#C9A55C] hover:border-[#C9A55C] transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-[#C9A55C]/50 flex items-center justify-center hover:bg-[#C9A55C] hover:border-[#C9A55C] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-[#C9A55C]">Collections</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Porcelain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marble Effect</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ceramic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outdoor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Large Format</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-[#C9A55C]">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showrooms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">Stay Inspired</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Subscribe to receive design inspiration and new product launches</p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-0 py-2 sm:py-3 border-b border-white/30 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
              />
              <button
                type="submit"
                className="border border-[#C9A55C] bg-[#C9A55C] text-white px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-[#B89449] hover:border-[#B89449] transition-all uppercase tracking-wider flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 Ava Surfaces. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C9A55C] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}