import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  X, 
  Maximize2, 
  Minimize2, 
  Trash2, 
  CornerDownLeft
} from 'lucide-react';
import { terminalCommandList, personalInfo, projectsData, skillCategories, certificationsData } from '../data/portfolioData';

interface SecurityTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvModal: () => void;
}

interface OutputLine {
  id: string;
  type: 'cmd' | 'resp' | 'sec' | 'err';
  content: string | string[];
}

export const SecurityTerminal: React.FC<SecurityTerminalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenCvModal 
}) => {
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'welcome-1',
      type: 'resp',
      content: [
        '╔══════════════════════════════════════════════════════════════════════╗',
        '║   KINZA DEFENSIVE & OFFENSIVE CYBERSECURITY CONSOLE (v2.4.0)         ║',
        '║   Stack: React 19 • Laravel • Python • ML • MySQL • OWASP Top 10     ║',
        '╚══════════════════════════════════════════════════════════════════════╝',
        'Type "help" to view available diagnostic commands or "scan" to test system defense.'
      ]
    }
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    const newHistory = [...history, { id: `${Date.now()}-cmd`, type: 'cmd' as const, content: `$ ${rawCmd}` }];
    
    if (cmd) {
      setCmdHistory(prev => [rawCmd, ...prev]);
      setHistoryIdx(-1);
    }

    switch (cmd) {
      case 'help':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            'AVAILABLE COMMANDS:',
            ...terminalCommandList.map(c => `  ${c.cmd.padEnd(15, ' ')} : ${c.desc}`)
          ]
        });
        break;

      case 'whoami':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            `NAME       : ${personalInfo.name}`,
            `ROLE       : ${personalInfo.title}`,
            `MISSION    : ${personalInfo.tagline}`,
            `STATUS     : ${personalInfo.status}`,
            `LOCATION   : ${personalInfo.location}`
          ]
        });
        break;

      case 'skills':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            'PRIMARY TECHNICAL COMPETENCIES:',
            ...skillCategories.map(cat => 
              `[${cat.name}]: ${cat.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}`
            )
          ]
        });
        break;

      case 'projects':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            'SELECTED FEATURED PROJECTS:',
            ...projectsData.map(p => 
              `• [${p.category.toUpperCase()}] ${p.title} — ${p.summary}`
            )
          ]
        });
        break;

      case 'scan':
        newHistory.push({
          id: `${Date.now()}-sec`,
          type: 'sec',
          content: [
            '[*] INITIATING LIVE APPLICATION SECURITY AUDIT...',
            '[✓] TLS 1.3 / Perfect Forward Secrecy ............. ENFORCED',
            '[✓] Content-Security-Policy (CSP) ................ STRICT (Nonced)',
            '[✓] Strict-Transport-Security (HSTS) ............ PRELOAD 31536000',
            '[✓] X-Frame-Options .............................. DENY',
            '[✓] X-Content-Type-Options ....................... NOSNIFF',
            '[✓] Cross-Site Scripting (XSS) Sanitization ..... VERIFIED (React DOM & Clean HTML)',
            '[✓] SQL Injection Defenses ....................... 100% Parameterized Statements',
            '[✓] Rate Limiting & DoS Shield ................... ACTIVE',
            '========================================================================',
            '[+] AUDIT STATUS: 100% OWASP COMPLIANT — ZERO CRITICAL VULNERABILITIES'
          ]
        });
        break;

      case 'experience':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            'EXPERIENCE & VULNERABILITY RESEARCH:',
            '• Bug Bounty Hunter (HackerOne / Bugcrowd) — Responsible disclosure of IDOR, XSS, CSRF.',
            '• Full-Stack & Security Engineer — Hardened React, Laravel, Python & MySQL systems.',
            '• Open-Source Security Tools Developer — Recon and vulnerability automation scripts.'
          ]
        });
        break;

      case 'certifications':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            'VERIFIED CREDENTIALS:',
            ...certificationsData.map(c => `• ${c.title} (${c.issuer}) [ID: ${c.credentialId || 'Verified'}]`)
          ]
        });
        break;

      case 'contact':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: [
            `EMAIL    : ${personalInfo.email}`,
            `GITHUB   : ${personalInfo.github}`,
            `LINKEDIN : ${personalInfo.linkedin}`,
            'To dispatch an encrypted message, use the contact form at #contact.'
          ]
        });
        break;

      case 'cv':
        newHistory.push({
          id: `${Date.now()}-resp`,
          type: 'resp',
          content: 'Launching CV preview & download dialog...'
        });
        onOpenCvModal();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          id: `${Date.now()}-err`,
          type: 'err',
          content: `Command not recognized: "${rawCmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx + 1 < cmdHistory.length) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const prevIdx = historyIdx - 1;
        setHistoryIdx(prevIdx);
        setInputVal(cmdHistory[prevIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Terminal Window */}
      <div 
        className={`relative z-10 w-full bg-gray-950 border border-cyan-500/40 rounded-xl shadow-2xl shadow-blue-950/80 flex flex-col font-mono transition-all duration-200 ${
          isMaximized 
            ? 'h-[95vh] max-w-[96vw]' 
            : 'h-[580px] max-w-4xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 rounded-t-xl select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-gray-300 font-bold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>kinza@sec-workstation:~$</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <button
              type="button"
              onClick={() => setHistory([])}
              className="p-1 hover:text-white hover:bg-gray-800 rounded"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white hover:bg-gray-800 rounded"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 hover:text-white hover:bg-gray-800 rounded"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed selection:bg-cyan-900 selection:text-white">
          {history.map((line) => {
            if (line.type === 'cmd') {
              return (
                <div key={line.id} className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span>{line.content}</span>
                </div>
              );
            }
            if (line.type === 'sec') {
              return (
                <div key={line.id} className="text-emerald-400 bg-emerald-950/20 p-2.5 rounded border border-emerald-900/30 whitespace-pre-wrap font-mono">
                  {Array.isArray(line.content) ? line.content.join('\n') : line.content}
                </div>
              );
            }
            if (line.type === 'err') {
              return (
                <div key={line.id} className="text-red-400 whitespace-pre-wrap">
                  {Array.isArray(line.content) ? line.content.join('\n') : line.content}
                </div>
              );
            }
            return (
              <div key={line.id} className="text-gray-300 whitespace-pre-wrap">
                {Array.isArray(line.content) ? line.content.join('\n') : line.content}
              </div>
            );
          })}
          <div ref={endRef} />
        </div>

        {/* Terminal Command Input Prompt */}
        <div className="p-3 bg-gray-900/90 border-t border-gray-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-xs">kinza@cyber:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'scan', 'skills', 'projects'..."
            className="flex-1 bg-transparent text-xs text-white placeholder-gray-600 focus:outline-none font-mono"
            autoFocus
          />
          <button
            type="button"
            onClick={() => handleCommand(inputVal)}
            className="p-1 text-cyan-400 hover:text-white bg-blue-950/50 hover:bg-blue-900/70 border border-blue-700/50 rounded"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
