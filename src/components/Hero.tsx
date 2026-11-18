import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  FileDown, 
  ArrowUpRight, 
  Mail, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenCvModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid"
    >
      {/* Background ambient glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Kinza</span>.
              <span className="block text-2xl sm:text-4xl font-semibold text-gray-300 mt-2">
                Full-Stack Developer & Cybersecurity Researcher
              </span>
            </h1>

            {/* Tagline / Intro */}
            <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Bridging modern full-stack web engineering with defensive & offensive cybersecurity. 
              I engineer resilient architectures with <span className="text-blue-300 font-medium">React</span>, <span className="text-blue-300 font-medium">Laravel</span>, <span className="text-blue-300 font-medium">PHP</span>, and <span className="text-blue-300 font-medium">Python</span>, integrating <span className="text-cyan-300 font-medium">Machine Learning</span> and rigorous <span className="text-cyan-300 font-medium">OWASP penetration testing</span> to eliminate vulnerabilities before deployment.
            </p>

            {/* CTAs Button Cluster */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-gray-700/80 hover:border-blue-500/50 font-medium text-sm transition-all cursor-pointer shadow-sm group"
              >
                <FileDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>

              <button
                type="button"
                onClick={onOpenTerminal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-950/80 hover:bg-gray-900 text-cyan-400 border border-cyan-800/40 hover:border-cyan-500 font-mono text-xs transition-all cursor-pointer shadow-sm"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch CLI ~/</span>
              </button>
            </div>

            {/* Social Channels & Contact pill */}
            <div className="mt-8 flex items-center gap-4 text-gray-400 text-sm">
              <span className="text-xs uppercase font-mono tracking-wider text-gray-400">Connect:</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900/80 hover:bg-gray-800 hover:text-white border border-gray-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-900/80 hover:bg-gray-800 hover:text-cyan-400 border border-gray-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-gray-900/80 hover:bg-gray-800 hover:text-blue-400 border border-gray-800 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                | {personalInfo.location}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Cyber & Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-950/95 border border-cyan-500/20 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800/80 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-gray-400 font-medium">sec_posture_monitor.sh</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40 text-[11px]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>ARMED</span>
                </div>
              </div>

              {/* Terminal Code Preview */}
              <div className="font-mono text-xs space-y-2.5 text-gray-300">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-gray-400">$</span>
                  <span>kinza --inspect-stack --verify-defense</span>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-950/80 border border-gray-800/90 space-y-1.5 text-[11px]">
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Target Stack:</span>
                    <span className="text-blue-400 font-semibold">React + Laravel + Python (AI)</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Database:</span>
                    <span className="text-indigo-300 font-semibold">MySQL (Strict Indexes + Least Priv)</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Cryptographic Ciphers:</span>
                    <span className="text-cyan-400 font-semibold">AES-256-GCM / HMAC-SHA256</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>OWASP Top 10 Audit:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> PASS (0 Critical Flaws)
                    </span>
                  </div>
                </div>

                {/* Live Telemetry Cards */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-blue-950/30 border border-blue-800/30">
                    <div className="flex items-center gap-1.5 text-blue-400 text-[11px]">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Defensive Posture</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Shift-Left DevSec</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Automated SAST & DAST</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-800/30">
                    <div className="flex items-center gap-1.5 text-indigo-400 text-[11px]">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>AI & Automation</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Machine Learning</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Career & Threat Analytics</div>
                  </div>
                </div>

                {/* Live Console Output Line */}
                <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between border-t border-gray-800/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Status: Listening for incoming requests</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={onOpenTerminal}
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
                  >
                    Open Console →
                  </button>
                </div>
              </div>

            </div>

            {/* Decorative Cyber Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700/80 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Ethical Bug Bounty</div>
                <div className="text-[10px] text-emerald-400">Coordinated Disclosure</div>
              </div>
            </div>

          </div>

        </div>

        {/* Hero Quick Stats Row */}
        <div className="mt-16 pt-10 border-t border-gray-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-gray-900/40 border border-gray-800/80 hover:border-blue-500/30 transition-colors backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <a 
            href="#about"
            className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors text-xs font-mono group"
            aria-label="Scroll to About Me section"
          >
            <span>DISCOVER MORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
