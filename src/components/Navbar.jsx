import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Phone, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/results', label: 'Results' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'}`}>
      <nav className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-brand-900">EduPrime</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative py-2 ${isActive(link.path)
                    ? 'text-brand-600'
                    : 'text-gray-600 hover:text-brand-600'
                  }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors">
              <Phone size={18} />
              <span className="text-sm font-semibold">+91 98765 43210</span>
            </a>
            <button className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-xl hover:from-brand-700 hover:to-brand-800 shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5">
              Enquire Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t shadow-xl transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg font-medium transition-colors ${isActive(link.path)
                  ? 'bg-brand-50 text-brand-600'
                  : 'hover:bg-gray-50 text-gray-700'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919876543210" className="flex items-center gap-2 p-3 text-gray-600">
            <Phone size={18} />
            <span className="font-semibold">+91 98765 43210</span>
          </a>
          <button className="mt-2 w-full py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-xl">
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;