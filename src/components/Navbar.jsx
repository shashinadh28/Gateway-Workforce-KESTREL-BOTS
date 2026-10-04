import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Specs', href: '#specs' },
  { name: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D75FE] to-[#0A4BB5] flex items-center justify-center shadow-md shadow-[#1D75FE]/20 group-hover:scale-105 transition-transform duration-200">
            {/* Geometric Gateway icon */}
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm tracking-wider uppercase leading-none">Gateway</span>
            <span className="text-gray-400 font-semibold text-[9px] tracking-[0.22em] uppercase leading-tight mt-0.5">
              Kestrel Bots
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 text-xs font-medium tracking-wide hover:text-white transition-colors duration-150 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#1D75FE] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#specs"
            className="flex items-center gap-2 bg-[#1D75FE] hover:bg-[#1565E6] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md shadow-[#1D75FE]/30 hover:shadow-[#1D75FE]/50"
          >
            Get Yours
            <ArrowRight size={13} className="stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0B0E]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#1D75FE] text-sm font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#1D75FE] text-white text-sm font-semibold py-2.5 rounded-full"
            >
              Get Yours
              <ArrowRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
