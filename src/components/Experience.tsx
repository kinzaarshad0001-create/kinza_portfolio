import React from 'react';
import { 
  Bug, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const vulnHighlights = [
    { name: 'Insecure Direct Object Reference (IDOR)', severity: 'High', desc: 'Disclosed unauthorized access to sensitive financial invoice records across multi-tenant boundaries.' },
    { name: 'Broken Access Control & Privilege Escalation', severity: 'Critical', desc: 'Identified vertical escalation flaw allowing unprivileged users to alter tenant administrative configs.' },
    { name: 'Cross-Site Scripting (Stored XSS)', severity: 'Medium', desc: 'Demonstrated sanitization bypass in markdown rendering engines leading to session cookie hijacking.' },
    { name: 'Server-Side Request Forgery (SSRF)', severity: 'High', desc: 'Flagged internal cloud metadata service exposure (/latest/meta-data) via webhook URL parser.' }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative cyber-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Bug className="w-3.5 h-3.5" />
            <span>04 // EXPERIENCE & FIELD RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bug Bounty Hunting & Security Experience
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            A verified track record in coordinated vulnerability disclosure, full-stack defensive engineering, and offensive penetration testing.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-gray-900/60 border border-gray-800/90 hover:border-blue-500/30 transition-all backdrop-blur-sm shadow-xl"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-gray-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    {exp.type === 'bug-bounty' ? <Bug className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-cyan-400 font-mono mt-0.5">
                      {exp.organization} • {exp.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3 py-1 rounded-full bg-gray-950 border border-gray-800 text-gray-300 font-mono text-xs">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Key Scope & Methodologies:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-5 p-4 rounded-xl bg-gray-950/70 border border-gray-800/80">
                <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Demonstrated Outcomes & Accolades:</span>
                </div>
                <div className="space-y-1.5">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-gray-950 border border-gray-800 text-[11px] font-mono text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bug Bounty Case Studies / Vulnerability Focus Matrix */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-950/90 border border-cyan-500/20 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Vulnerability Research & Responsible Disclosure Case Matrix
              </h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
              100% CVD Adherence
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vulnHighlights.map((vuln, vIdx) => (
              <div 
                key={vIdx}
                className="p-4 rounded-xl bg-gray-950/80 border border-gray-800/90 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white font-mono">
                    {vuln.name}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    vuln.severity === 'Critical' 
                      ? 'bg-red-950/70 text-red-300 border border-red-800/40' 
                      : vuln.severity === 'High'
                      ? 'bg-amber-950/70 text-amber-300 border border-amber-800/40'
                      : 'bg-blue-950/70 text-blue-300 border border-blue-800/40'
                  }`}>
                    {vuln.severity}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {vuln.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
