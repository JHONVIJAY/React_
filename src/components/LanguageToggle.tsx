import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

type Language = 'en' | 'ta';

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
];

export function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      gsap.from(dropdownRef.current, {
        y: 10,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    console.log(`Language changed to: ${lang}`);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-40">
      {/* Language Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 sm:gap-3 border border-gray-200 group"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A55C] group-hover:rotate-12 transition-transform" />
        <span className="text-sm sm:text-base uppercase tracking-wider">{currentLang?.nativeName}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute bottom-full left-0 mb-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 min-w-[180px] sm:min-w-[200px]"
        >
          <div className="p-2">
            <div className="px-3 sm:px-4 py-2 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-100 mb-1">
              Select Language
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all flex items-center justify-between gap-3 ${
                  currentLanguage === lang.code
                    ? 'bg-[#C9A55C] text-white'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="min-w-0">
                  <div className="font-medium truncate text-sm sm:text-base">{lang.nativeName}</div>
                  <div className={`text-xs ${currentLanguage === lang.code ? 'text-white/80' : 'text-gray-500'}`}>
                    {lang.name}
                  </div>
                </div>
                {currentLanguage === lang.code && (
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}