import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="text-3xl tracking-[0.15em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AVA TILES
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Premium Italian tiles for residential and commercial spaces.
              Crafting excellence since 1995.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6">
              Collections
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Porcelain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marble Effect
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ceramic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Outdoor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Large Format
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Showrooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl mb-4">Stay Inspired</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to receive design inspiration and new product launches
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-0 py-3 border-b border-white/30 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all uppercase flex items-center gap-2  sm:flex-none"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 Ava Tiles. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
