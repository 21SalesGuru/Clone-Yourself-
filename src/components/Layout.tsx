import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['How It Works', 'Use Cases', 'FAQ'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 md:p-6 p-4`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-6 py-3 shadow-lg' : 'bg-transparent px-2 py-4'}`}>
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <svg viewBox="0 0 115 110" className="w-[36px] h-[34px] sm:w-[46px] sm:h-[44px] group-hover:scale-105 transition-transform shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 62,37.6 A 25,25 0 1,0 62,72.4" stroke="white" strokeWidth="16" fill="none" strokeLinecap="butt" />
            <polygon points="48,22 64,22 76,46 88,22 104,22 71,88 55,88 68,62" fill="#6C63FF" />
          </svg>
          <div className="flex flex-col pt-1">
            <span className="font-display font-bold text-base sm:text-xl tracking-widest text-white uppercase leading-none">Clone Yourself</span>
          </div>
        </a>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-brand-slate">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-brand-white transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-brand-slate ml-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-white/5 p-6 flex flex-col gap-4">
           {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-medium text-brand-slate hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function FooterCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center relative z-10 bg-gradient-to-br from-brand-indigo to-brand-violet rounded-[32px] p-12 md:p-20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[#000000] opacity-10 mix-blend-overlay rounded-[32px]" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-10 text-white leading-tight tracking-tight">
            Your time is finite.<br/>Your clone isn't.
          </h2>
          <a href="https://calendly.com/d/cxxb-mv8-zc6/clone-yourself-strategy-call?month=2026-05" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-brand-indigo text-lg font-bold px-6 py-4 md:px-8 rounded-xl shadow-xl hover:scale-[1.02] transition-transform w-full sm:w-auto text-center max-w-full">
            Speak With Our Team →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
