export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'security';
  categoryLabel: string;
  summary: string;
  description: string;
  architecture: string[];
  securityFeatures: string[];
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  focus: string;
  tag?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'bug-bounty' | 'engineering' | 'research';
  summary: string;
  responsibilities: string[];
  highlights: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  category: 'Security' | 'Development' | 'Cloud' | 'Recognition';
  skills: string[];
  badgeColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  coursework: string[];
  honors?: string;
}

export interface TerminalLog {
  id: string;
  command: string;
  output: string | string[];
  type?: 'standard' | 'success' | 'warning' | 'error' | 'code';
}
