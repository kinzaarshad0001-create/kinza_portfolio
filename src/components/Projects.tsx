import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles,
  Search
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'security'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'ai':
        return 'bg-purple-950/70 text-purple-300 border-purple-800/40';
      case 'security':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-800/40';
      case 'web':
        return 'bg-blue-950/70 text-blue-300 border-blue-800/40';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Systems & Research Projects
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            A curated portfolio spanning machine learning applications, resilient full-stack systems, and offensive/defensive cybersecurity tools.
          </p>

          {/* Filter & Search Bar */}
          <div className="w-full max-w-4xl mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-gray-900/90 border border-gray-800">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('ai')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === 'ai'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                AI & Machine Learning
              </button>
              <button
                type="button"
                onClick={() => setFilter('web')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === 'web'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Web Development
              </button>
              <button
                type="button"
                onClick={() => setFilter('security')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === 'security'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Security Research
              </button>
            </div>

            {/* Live Filter Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by tech or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900/90 border border-gray-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-gray-900/60 border border-gray-800/90 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl p-6 group hover:-translate-y-1"
            >
              <div>
                {/* Header Category & Metrics */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${getCategoryBadgeClass(project.category)}`}>
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mt-2.5 text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Metrics if available */}
                {project.metrics && (
                  <div className="mt-3.5 px-3 py-1.5 rounded-lg bg-gray-950/70 border border-gray-800/80 text-[11px] font-mono text-cyan-400">
                    {project.metrics}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-gray-950/90 border border-gray-800 text-[10px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded bg-gray-950/90 border border-gray-800 text-[10px] font-mono text-gray-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-mono text-sm">
            No projects found matching "{searchTerm}". Try clearing your filter.
          </div>
        )}

      </div>
    </section>
  );
};
