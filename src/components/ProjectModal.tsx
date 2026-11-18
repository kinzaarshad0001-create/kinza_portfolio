import React from 'react';
import { 
  X, 
  Cpu, 
  Layers, 
  Lock, 
  CheckCircle2, 
  Server
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-gray-950 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-blue-950/60 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-blue-950/90 text-cyan-400 border border-blue-500/30">
                {project.categoryLabel}
              </span>
              {project.metrics && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview & Scope</span>
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed bg-gray-900/40 p-4 rounded-xl border border-gray-800/80">
              {project.description}
            </p>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
              <Server className="w-4 h-4 text-blue-400" />
              <span>Engineering & System Architecture</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architecture.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/60 border border-gray-800/90 text-xs text-gray-300"
                >
                  <span className="w-5 h-5 rounded bg-blue-950 text-cyan-400 font-mono text-[10px] flex items-center justify-center shrink-0 border border-blue-800/40 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Mitigations & Hardening */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Defensive Security Controls & Mitigations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.securityFeatures.map((sec, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Technologies & Tools Employed</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-gray-400 font-mono">
            Security Verified • Production-Ready Specs
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
            >
              Close View
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
