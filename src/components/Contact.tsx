import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

      // Form animation
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        }
      });

      // Info animation
      gsap.from(infoRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 sm:py-24 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 bg-[#C9A55C]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C9A55C]">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Speak with our design consultants to find the perfect tiles for your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-2">
            <form className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">Project Type</label>
                <select
                  id="project"
                  className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors text-sm sm:text-base"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="retail">Retail</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-xs sm:text-sm uppercase tracking-wider">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-0 py-2 sm:py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#C9A55C] transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#C9A55C] text-white px-8 sm:px-12 py-3 sm:py-4 hover:bg-[#B89449] transition-colors duration-300 uppercase tracking-wider text-sm sm:text-base w-full sm:w-auto"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8 sm:space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A55C]" />
                <h3 className="text-xs sm:text-sm uppercase tracking-wider">Phone</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm sm:text-base text-gray-600">Mon-Fri, 9am-6pm EST</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A55C]" />
                <h3 className="text-xs sm:text-sm uppercase tracking-wider">Email</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">info@avasurfaces.com</p>
              <p className="text-sm sm:text-base text-gray-600">sales@avasurfaces.com</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A55C]" />
                <h3 className="text-xs sm:text-sm uppercase tracking-wider">Showroom</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                123 Design Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Opening Hours</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex justify-between gap-4">
                  <span>Monday - Friday</span>
                  <span>9am - 6pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span>10am - 4pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}