import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/70 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // CREDENTIALS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Credentials
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Verified industry certifications across cybersecurity, penetration testing, modern full-stack development, and database architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {certificationsData.map((cert) => (
            <div 
              key={cert.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-gray-900/60 border border-gray-800/90 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    cert.category === 'Security'
                      ? 'bg-blue-950/80 text-cyan-400 border-blue-800/40'
                      : cert.category === 'Development'
                      ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/40'
                      : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/40'
                  }`}>
                    {cert.category}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="mt-1 text-xs text-cyan-400 font-mono">
                  {cert.issuer}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mt-2 text-[11px] text-gray-400 font-mono">
                    ID: <span className="text-gray-300">{cert.credentialId}</span>
                  </div>
                )}

                {/* Skills Validated */}
                <div className="mt-4 pt-3 border-t border-gray-800/70">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                    Skills Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-gray-950/90 border border-gray-800 text-[10px] font-mono text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>{cert.issueDate}</span>
                <span className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  <span>Authentic Record</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Credential Integrity Banner */}
        <div className="p-5 rounded-2xl bg-gray-900/40 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Strict commitment to ethical disclosure standards and authentic credentials without inflated or fabricated claims.</span>
          </div>
          <span className="text-cyan-400 font-semibold shrink-0">Ethical Security First</span>
        </div>

      </div>
    </section>
  );
};
