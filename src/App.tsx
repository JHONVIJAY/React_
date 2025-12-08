import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { LanguageToggle } from './components/LanguageToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Products />
      <Featured />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
      <ChatBot />
      <LanguageToggle />
    </div>
  );
}