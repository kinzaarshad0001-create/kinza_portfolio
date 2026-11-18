import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Layout, 
  Server, 
  Cpu, 
  Terminal, 
  Layers, 
  Wrench
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const toolsList = [
    { name: 'Burp Suite Pro', category: 'Security' },
    { name: 'OWASP ZAP', category: 'Security' },
    { name: 'Nmap / Nikto', category: 'Security' },
    { name: 'Wireshark', category: 'Security' },
    { name: 'Postman', category: 'API' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Linux / Bash', category: 'OS' },
    { name: 'Scikit-Learn', category: 'AI/ML' },
    { name: 'Vite & Webpack', category: 'Frontend' },
    { name: 'Redis', category: 'Backend' },
    { name: 'MySQL Workbench', category: 'Database' }
  ];

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  const getIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity': return ShieldAlert;
      case 'frontend': return Layout;
      case 'backend': return Server;
      case 'data-ai': return Cpu;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative cyber-grid-dense">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competency Matrix
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Specialized toolsets and rigorous development practices across full-stack engineering, databases, machine learning, and offensive/defensive security.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category) => {
            const Icon = getIcon(category.id);
            return (
              <div 
                key={category.id}
                className="p-6 sm:p-7 rounded-2xl bg-gray-900/60 border border-gray-800/90 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-5 border-b border-gray-800 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <div className="text-xs text-gray-400 font-mono">
                      {category.skills.length} core competencies verified
                    </div>
                  </div>
                </div>

                {/* Individual Skill Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between mb-1.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-gray-800/90 border border-gray-700 text-gray-300 font-mono">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-cyan-400 font-bold text-xs">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-gray-950 border border-gray-800 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-1000 ease-out group-hover:brightness-125"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Sub-focus details */}
                      <div className="text-[11px] text-gray-400 mt-1 font-mono">
                        Key Areas: {skill.focus}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Tools & Utilities Arsenal Bar */}
        <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
              Verified Tooling & Workflow Integrations
            </h4>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {toolsList.map((tool, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-950/80 border border-gray-800/90 hover:border-cyan-500/40 text-xs font-mono text-gray-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{tool.name}</span>
                <span className="text-[10px] text-gray-400 ml-1">[{tool.category}]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
