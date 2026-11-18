import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Code, 
  Cpu, 
  Terminal, 
  Award,
  BookOpen
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Shift-Left Security',
      description: 'Integrating threat modeling, static analysis (SAST), and OWASP defensive controls right from architecture inception rather than post-deployment patching.'
    },
    {
      icon: Code,
      title: 'Resilient Full-Stack',
      description: 'Engineering responsive, modular web applications utilizing React and modern TypeScript on the frontend, with robust Laravel and Python microservices on the backend.'
    },
    {
      icon: Cpu,
      title: 'AI & Data Intelligence',
      description: 'Harnessing Machine Learning, predictive models, and MySQL optimization to automate complex decision-making pipelines and threat detection heuristics.'
    },
    {
      icon: Terminal,
      title: 'Offensive Research Mindset',
      description: 'Applying bug bounty hunting and ethical penetration testing methodologies to uncover hidden logic flaws and protect critical business assets.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & Engineering Philosophy
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Where full-stack software development converges with offensive and defensive cybersecurity engineering.
          </p>
        </div>

        {/* Top Grid: Bio & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800/80 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>Engineering Secure, Scalable Digital Ecosystems</span>
              </h3>
              
              <p>
                I am a full-stack developer and active cybersecurity researcher. My journey began with an obsession for how complex distributed web systems operate under the hood—and equally, how they can be manipulated if defensive hardening is neglected.
              </p>
              
              <p className="mt-4">
                Rather than treating security as an isolated post-launch checklist, I apply a <span className="text-cyan-300 font-semibold">security-by-design</span> philosophy. Every system I build in <strong className="text-white">React, Laravel, PHP, and Python</strong> is fortified against the OWASP Top 10, hardened with strict authentication (OAuth 2.0 / JWT), and backed by high-throughput, parameterized <strong className="text-white">MySQL</strong> architectures.
              </p>

              <p className="mt-4">
                In parallel, my experience hunting vulnerabilities on public and private bug bounty programs gives me an acute attacker's perspective. Understanding exactly how adversaries scan for parameter tampering, IDORs, and race conditions empowers me to engineer inherently resilient web applications.
              </p>
            </div>

            {/* Core Values Quote */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-950/40 via-gray-900/40 to-indigo-950/40 border-l-4 border-cyan-400 text-sm italic text-gray-300">
              "The most elegant code is not merely clean and fast; it is architecturally impenetrable to unintended state transitions and unauthorized privilege escalation."
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/90 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal pl-12">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">Academic Foundation & Education</h3>
          </div>

          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gray-900/50 border border-gray-800/80 hover:border-blue-500/30 transition-all backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>{edu.degree}</span>
                  </h4>
                  <div className="text-sm text-cyan-400 font-medium mt-0.5">
                    {edu.institution}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 font-mono text-xs">
                    {edu.period}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {edu.description}
              </p>

              {edu.honors && (
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
                  <Award className="w-4 h-4" />
                  <span>{edu.honors}</span>
                </div>
              )}

              {/* Coursework tags */}
              <div className="mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Relevant Academic Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, cIdx) => (
                    <span 
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md bg-gray-950/80 border border-gray-800 text-gray-300 text-xs font-mono hover:border-gray-700 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
