import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  FileDown, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCvModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTerminal, 
  onOpenCvModal, 
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/80 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <div className="w-full h-full bg-gray-950 rounded-[7px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                  Kinza<span className="text-cyan-400">.sec</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                  Dev & Cybersec
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-900/40 border border-gray-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-cyan-300 bg-blue-950/80 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Interactive Terminal Button */}
              <button
                type="button"
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-gray-700/80 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-xs font-mono group cursor-pointer shadow-sm"
                title="Launch Cyber Security Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Terminal</span>
                <span className="hidden xl:inline text-[10px] bg-gray-800 px-1 rounded text-gray-400">~/cli</span>
              </button>

              {/* Download CV Button */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 hover:text-white hover:border-blue-400 transition-all text-xs font-medium cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-blue-400" />
                <span>Resume / CV</span>
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all"
              >
                <span>Hire / Audit</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenTerminal}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-cyan-400"
                aria-label="Open Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-gray-950 border-l border-gray-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="font-mono font-bold text-white text-sm">Kinza.sec</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-950/70 text-cyan-300 border border-cyan-500/30'
                          : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Actions */}
            <div className="pt-6 border-t border-gray-800 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 text-sm font-medium hover:bg-blue-600/30"
              >
                <FileDown className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-800 text-cyan-400 text-sm font-mono hover:border-cyan-500/40"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch Security CLI</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 shadow-md shadow-blue-600/30"
              >
                <span>Hire / Request Security Audit</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
