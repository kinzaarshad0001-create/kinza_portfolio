import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Copy, 
  Check, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Award
} from 'lucide-react';
import { personalInfo, educationData, experienceData, certificationsData, projectsData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownResume = () => {
    return `# ${personalInfo.name}
${personalInfo.title}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

## PROFESSIONAL SUMMARY
${personalInfo.bio}

## CORE COMPETENCIES
- Frontend: React, JavaScript (ES6+), TypeScript, Tailwind CSS, REST APIs
- Backend: Laravel, PHP, Python, FastAPI, Microservices
- Data & AI: MySQL, Machine Learning, Scikit-Learn, Pandas, Query Optimization
- Cybersecurity: Web Penetration Testing, OWASP Top 10 Mitigation, Burp Suite, Network Security, Secure Code Auditing

## PROFESSIONAL EXPERIENCE
${experienceData.map(e => `### ${e.role} — ${e.organization} (${e.period})
${e.summary}
Key Achievements:
${e.highlights.map(h => `- ${h}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

## FEATURED PROJECTS
${projectsData.map(p => `### ${p.title} [${p.categoryLabel}]
${p.summary}
Stack: ${p.technologies.join(', ')}
`).join('\n')}

## EDUCATION
${educationData.map(ed => `### ${ed.degree}
${ed.institution} (${ed.period})
${ed.description}
Honors: ${ed.honors || 'Distinction in Computing'}
`).join('\n')}

## CERTIFICATIONS
${certificationsData.map(c => `- ${c.title} (${c.issuer}) — ID: ${c.credentialId || 'Verified'}`).join('\n')}
`;
  };

  const handleDownloadFile = () => {
    const content = generateMarkdownResume();
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Kinza_FullStack_Cybersecurity_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast('Resume downloaded successfully!');
  };

  const handleCopyText = () => {
    const content = generateMarkdownResume();
    navigator.clipboard.writeText(content);
    setCopied(true);
    onShowToast('Resume copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-gray-950 border border-blue-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto print:max-h-none print:border-none print:shadow-none print:p-0">
        
        {/* Actions Bar (Hidden during printing) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-800 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-[11px] text-gray-400 font-mono">Verified Full-Stack & Cybersecurity Profile</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 text-xs font-mono transition-colors cursor-pointer"
              title="Copy plain-text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 text-xs font-mono transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="mt-6 space-y-7 text-gray-200">
          
          {/* Header Contact Info */}
          <div className="pb-6 border-b border-gray-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
              {personalInfo.title}
            </div>
            <div className="mt-2 text-xs font-mono text-gray-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>Location: {personalInfo.location}</span>
              <span>•</span>
              <span>GitHub: {personalInfo.github}</span>
              <span>•</span>
              <span>Status: {personalInfo.status}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <span>// PROFESSIONAL SUMMARY</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-900/30 p-4 rounded-xl border border-gray-800/80">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <span>// TECHNICAL PROFICIENCIES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800">
                <span className="font-bold text-white block mb-1">Frontend Engineering:</span>
                <span className="text-gray-400">React 18/19, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive UX/UI, REST API integration.</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800">
                <span className="font-bold text-white block mb-1">Backend & Frameworks:</span>
                <span className="text-gray-400">Laravel, PHP, Python, FastAPI, Node.js, Microservices, MVC patterns.</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800">
                <span className="font-bold text-white block mb-1">Data & Machine Learning:</span>
                <span className="text-gray-400">MySQL, Query Tuning & Indexes, Scikit-Learn, Pandas, NumPy, NLP.</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800">
                <span className="font-bold text-white block mb-1">Offensive & Defensive Security:</span>
                <span className="text-gray-400">OWASP Top 10 Mitigation, Burp Suite, Vulnerability Assessment, Wireshark, Cryptography.</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>// BUG BOUNTY & PROFESSIONAL EXPERIENCE</span>
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-gray-900/30 border border-gray-800/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="font-mono text-cyan-400 text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono mb-2">
                    {exp.organization} — {exp.location}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-2">
                    {exp.summary}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-gray-400 space-y-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>// ACADEMIC EDUCATION</span>
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-900/30 border border-gray-800/70 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white text-sm">{edu.degree}</span>
                  <span className="font-mono text-cyan-400 text-[11px]">{edu.period}</span>
                </div>
                <div className="text-gray-400 mb-1">{edu.institution}</div>
                <div className="text-emerald-400 font-semibold mb-2">{edu.honors}</div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>// CREDENTIALS & CERTIFICATIONS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-gray-900/40 border border-gray-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">{cert.title}</span>
                    <span className="text-[11px] text-gray-400">{cert.issuer}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-gray-800 flex items-center justify-between print:hidden">
          <div className="text-[11px] font-mono text-gray-500">
            Security & Full-Stack Profile • Ready for Instant Evaluation
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
