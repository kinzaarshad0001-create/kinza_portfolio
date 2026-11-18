import React from 'react';
import { 
  Shield, 
  ArrowUp, 
  Mail, 
  Terminal, 
  FileDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono font-bold text-white text-base">
                Kinza<span className="text-cyan-400">.sec</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
              Full-Stack Developer & Cybersecurity Researcher dedicated to resilient software architecture, proactive vulnerability discovery, and ethical disclosure.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-mono text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>System Security: 100% OK</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Utilities */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Interactive Tools
            </h4>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenTerminal}
                className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Launch Security Terminal</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">CLI</span>
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/40 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-3.5 h-3.5 text-blue-400" />
                  <span>View & Download Resume</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">PDF/MD</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-gray-500 font-mono">
            © {new Date().getFullYear()} Kinza. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email Kinza"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-500/40 text-gray-300 hover:text-white transition-colors cursor-pointer ml-2"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
