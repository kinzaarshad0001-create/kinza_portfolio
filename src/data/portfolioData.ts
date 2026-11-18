import type { Project, SkillCategory, ExperienceItem, CertificationItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Kinza',
  title: 'Full-Stack Developer & Cybersecurity Researcher',
  tagline: 'Building high-performance, resilient web applications while hunting vulnerabilities before adversaries do.',
  bio: 'I am a full-stack engineer and cybersecurity researcher who bridges modern software architecture with proactive offensive and defensive security. With hands-on proficiency in React, Laravel, PHP, Python, and Machine Learning, I engineer production-grade systems and actively research vulnerabilities to keep systems bulletproof.',
  status: 'Open to High-Impact Security Audits & Engineering Roles',
  location: 'Available Worldwide (Remote / Hybrid)',
  email: 'kinza.dev.security@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  twitter: 'https://x.com/',
  stats: [
    { label: 'Vulnerabilities Disclosed', value: '25+', subtext: 'Responsible disclosure on web & API endpoints' },
    { label: 'Full-Stack & AI Projects', value: '18+', subtext: 'Production React, Laravel & Python builds' },
    { label: 'Security Audits Conducted', value: '30+', subtext: 'OWASP Top 10 & threat modeling' },
    { label: 'Code Quality & Uptime', value: '99.9%', subtext: 'Defensive, clean, and tested code' },
  ]
};

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'University Department of Computer Science & Information Technology',
    period: '2020 — 2024',
    description: 'Specialized in Software Engineering, Network Security, and Distributed Systems. Graduated with top academic standing and completed capstone research in machine learning and automated vulnerability assessment.',
    coursework: [
      'Design & Analysis of Algorithms',
      'Web Engineering & Cloud Architecture',
      'Information Security & Cryptography',
      'Database Management Systems & Optimization',
      'Machine Learning & Artificial Intelligence',
      'Operating Systems & Socket Programming'
    ],
    honors: 'Dean’s Honor List | Capstone Distinction in AI & Security'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Defense',
    icon: 'ShieldAlert',
    skills: [
      { name: 'Web Penetration Testing', level: 92, focus: 'Burp Suite, OWASP ZAP, Postman', tag: 'Offensive' },
      { name: 'OWASP Top 10 Mitigation', level: 95, focus: 'SQLi, XSS, CSRF, IDOR, SSRF', tag: 'Core' },
      { name: 'Vulnerability Assessment', level: 90, focus: 'Nessus, Nmap, Recon-ng, Nikto', tag: 'Analysis' },
      { name: 'Secure Code Auditing', level: 88, focus: 'Static & Dynamic Code Analysis (SAST/DAST)', tag: 'Defensive' },
      { name: 'Network Traffic Analysis', level: 85, focus: 'Wireshark, Scapy, Packet Inspection', tag: 'Network' },
      { name: 'Auth & Cryptography', level: 90, focus: 'OAuth 2.0, JWT, PKI, AES-GCM, Hashicorp', tag: 'Crypto' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: 'Layout',
    skills: [
      { name: 'React (18 / 19)', level: 94, focus: 'Hooks, Context, Performance, Custom Hooks', tag: 'Primary' },
      { name: 'JavaScript (ES6+)', level: 95, focus: 'Async/Await, Closures, DOM, Web APIs', tag: 'Core' },
      { name: 'TypeScript', level: 88, focus: 'Type Safety, Generics, Interfaces, Strict Linting', tag: 'Modern' },
      { name: 'Tailwind CSS', level: 96, focus: 'Responsive UI, Glassmorphism, Custom Theme', tag: 'Styling' },
      { name: 'HTML5 & Accessible UX', level: 95, focus: 'WCAG 2.1 AA Compliance, Semantic Markup', tag: 'A11y' },
      { name: 'State & API Integration', level: 90, focus: 'TanStack Query, Axios, REST, WebSockets', tag: 'Data' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Server Architecture',
    icon: 'Server',
    skills: [
      { name: 'Laravel (8 / 9 / 10 / 11)', level: 92, focus: 'Eloquent ORM, Middleware, Service Container', tag: 'Primary' },
      { name: 'PHP (7.4 / 8.x)', level: 90, focus: 'OOP, Type Hinting, Security Hardening, MVC', tag: 'Core' },
      { name: 'Python', level: 91, focus: 'FastAPI, Flask, Automation, Security Scripts', tag: 'Versatile' },
      { name: 'RESTful API Engineering', level: 94, focus: 'Rate-limiting, Versioning, Swagger/OpenAPI', tag: 'API' },
      { name: 'Node.js & Express', level: 82, focus: 'Microservices, Middleware, CLI Utilities', tag: 'Runtime' }
    ]
  },
  {
    id: 'data-ai',
    name: 'Databases & Machine Learning',
    icon: 'Cpu',
    skills: [
      { name: 'MySQL', level: 90, focus: 'Indexing, Query Optimization, Foreign Keys, RBAC', tag: 'Database' },
      { name: 'Machine Learning', level: 85, focus: 'Scikit-Learn, Predictive Modeling, Supervised ML', tag: 'AI' },
      { name: 'Data Preprocessing & NLP', level: 84, focus: 'Pandas, NumPy, TF-IDF, Feature Engineering', tag: 'Data' },
      { name: 'Database Security', level: 92, focus: 'Prepared Statements, Principle of Least Privilege', tag: 'Secured' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'ai-career-advisor',
    title: 'AI-Powered Student Career Advisor',
    category: 'ai',
    categoryLabel: 'Machine Learning & AI',
    summary: 'An intelligent recommendation system analyzing student profiles, skill gaps, and industry benchmarks to deliver personalized career roadmaps.',
    description: 'Engineered an end-to-end AI career planning system designed for computer science and engineering students. The platform evaluates academic coursework, technical competencies, and project history against live market trends to generate data-backed career paths, skill gap analyses, and automated learning roadmaps.',
    architecture: [
      'Frontend built with React and Tailwind CSS providing an interactive assessment wizard and visual career radar',
      'Python/FastAPI backend hosting machine learning classification and collaborative filtering models',
      'Scikit-Learn pipeline for feature extraction and multi-label career trajectory prediction',
      'MySQL relational database storing structured student skill trees and benchmark competencies with strict encryption'
    ],
    securityFeatures: [
      'Anonymized student profile records to ensure privacy compliance',
      'JWT-authenticated API routes with granular role-based permissions',
      'Input validation & sanitizer preventing prototype pollution and prompt/SQL injection',
      'Rate-limiting middleware throttling automated crawling attempts'
    ],
    technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'React', 'FastAPI', 'Tailwind CSS', 'MySQL', 'Pandas'],
    metrics: '91% Career Match Accuracy • 500+ Simulated Student Trajectories',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: true
  },
  {
    id: 'owasp-vuln-audit-engine',
    title: 'Automated Vulnerability & OWASP Audit Engine',
    category: 'security',
    categoryLabel: 'Cybersecurity Research',
    summary: 'A Python-driven vulnerability assessment suite detecting OWASP Top 10 flaws, misconfigured headers, and API endpoint exposures.',
    description: 'Developed a comprehensive security scanner engineered to conduct automated reconnaissance and non-destructive active probing on web applications. Checks for critical security misconfigurations, missing HTTP response headers (CSP, HSTS, X-Frame-Options), exposed debug endpoints, and common SQLi / XSS vulnerabilities.',
    architecture: [
      'Modular Python testing core with concurrent asynchronous probing using aiohttp and asyncio',
      'Signature-based heuristic engine matching payload reflections and error-based responses',
      'Automated CVSS v3.1 severity calculator scoring vulnerabilities from Low to Critical',
      'Executive Markdown & HTML report generator detailing remediation and patch code samples'
    ],
    securityFeatures: [
      'Safe non-destructive fuzzing logic designed to prevent denial of service (DoS)',
      'Custom user-agent rotation and rate throttling to simulate realistic traffic',
      'Strict verification of TLS/SSL certificates and cipher suite vulnerabilities',
      'Automated remediation diffs providing developers with direct secure code fixes'
    ],
    technologies: ['Python', 'Burp Suite API', 'OWASP Standards', 'Asyncio', 'Nmap', 'Docker', 'Bash'],
    metrics: 'Detects 35+ Vulnerability Signatures • Sub-3 Minute Full Web Recon',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: true
  },
  {
    id: 'enterprise-cloud-portal',
    title: 'Enterprise Cloud Asset & Workflow Platform',
    category: 'web',
    categoryLabel: 'Full-Stack Web Development',
    summary: 'High-availability enterprise management system engineered with Laravel, PHP, React, and MySQL featuring strict multi-tenant isolation.',
    description: 'Designed and implemented an enterprise-grade cloud resource and workflow orchestration portal. Enables multi-tier team collaboration, dynamic role-based access control (RBAC), and automated audit logs for enterprise asset tracking with zero data leaks across organizational boundaries.',
    architecture: [
      'React frontend with custom responsive dashboard components, interactive charts, and live metrics',
      'Laravel 11 backend leveraging clean Service-Repository pattern and Event-Driven architecture',
      'MySQL database with partitioned indexes and query caching for sub-50ms latency',
      'Asynchronous task queues powered by Redis for background processing and email reporting'
    ],
    securityFeatures: [
      'Multi-tenant data isolation enforced through global Eloquent database scopes',
      'CSRF defense using encrypted anti-forgery tokens on all state-altering requests',
      'Strict parameter binding preventing any form of SQL injection vulnerability',
      'Immutable audit trail recording every user action with IP and device fingerprinting'
    ],
    technologies: ['Laravel', 'PHP', 'React', 'MySQL', 'Tailwind CSS', 'Redis', 'Docker'],
    metrics: '99.9% High Availability • Supports 10,000+ Concurrent Asset Records',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: true
  },
  {
    id: 'secure-fintech-gateway',
    title: 'Secure FinTech & E-Commerce Payment Engine',
    category: 'web',
    categoryLabel: 'Web Development & Security',
    summary: 'Resilient transaction processing portal with cryptographic payload verification, tokenized payments, and fraud prevention heuristics.',
    description: 'Engineered a resilient e-commerce checkout and transaction verification gateway. Built with modern security-first development principles to protect sensitive financial payloads, prevent race condition double-spending, and defend against brute-force carding attacks.',
    architecture: [
      'React UI with atomic state management and client-side credit card number masking',
      'Laravel & PHP REST API implementing strict webhook signature validation',
      'MySQL relational transaction storage with ACID compliance and row-level locking',
      'Automated ledger reconciliation system detecting transaction discrepancies'
    ],
    securityFeatures: [
      'HMAC-SHA256 signature verification ensuring incoming payment webhooks are authentic',
      'PCI-DSS compliance practices with zero raw payment card data stored locally',
      'Advanced rate limiting with exponential backoff on authentication and checkout endpoints',
      'Strict Content Security Policy (CSP) headers blocking unauthorized scripts'
    ],
    technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'Stripe API', 'Tailwind CSS', 'Crypto'],
    metrics: 'Zero Security Incidents • Sub-second Transaction Signature Verification',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: false
  },
  {
    id: 'network-packet-ids',
    title: 'Network Packet Analyzer & Threat IDS',
    category: 'security',
    categoryLabel: 'Cybersecurity Research',
    summary: 'A real-time network security monitoring daemon built in Python for socket inspection, ARP spoofing alarms, and packet anomaly telemetry.',
    description: 'Constructed an intrusion detection system (IDS) using raw network socket programming and packet filtering in Python. The tool passively monitors local network segments, flags unauthorized ARP cache poisoning attempts, detects synchronous port scans, and visualizes packet payload statistics.',
    architecture: [
      'Python socket capture engine operating at the network protocol layer (Ethernet/IP/TCP/UDP)',
      'Real-time packet parser extracting protocol headers and computing payload entropy',
      'Heuristic detection algorithm tracking threshold frequency for port scanning flags (SYN flood, NULL, XMAS)',
      'Alert dispatcher with console telemetry and optional webhook dispatch'
    ],
    securityFeatures: [
      'Detection of Man-In-The-Middle (MITM) ARP spoofing attacks',
      'Identification of malicious packet payloads with anomalous high-entropy signatures',
      'Safe capture ring buffer minimizing memory consumption during high network loads'
    ],
    technologies: ['Python', 'Scapy', 'Raw Sockets', 'Network Security', 'Wireshark Heuristics', 'Linux'],
    metrics: '1,000+ Packets/Sec Inspected • Real-time Terminal Telemetry',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: false
  },
  {
    id: 'zero-trust-auth-gateway',
    title: 'Zero-Trust Identity & API Gatekeeper',
    category: 'security',
    categoryLabel: 'Web & Security Architecture',
    summary: 'A lightweight Zero-Trust identity verification layer featuring OAuth 2.0 PKCE, continuous device posture checks, and JWT rotation.',
    description: 'Designed a security gateway that acts as a reverse proxy authentication filter. Implements zero-trust security tenets: never trust, always verify. Every request undergoes cryptographic token validation, device context checks, and anomaly detection before reaching backend application services.',
    architecture: [
      'React administration portal showing real-time active sessions and security posture grades',
      'Python / FastAPI microservice managing token lifecycles and cryptographic key pairs (RSA 2048)',
      'Redis distributed cache storing blacklisted tokens and temporary challenge nonces'
    ],
    securityFeatures: [
      'Short-lived JWTs combined with secure HttpOnly SameSite refresh cookies',
      'Proof Key for Code Exchange (PKCE) implementation preventing authorization code interception',
      'Granular IP geolocation and user-agent deviation anomaly detection'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'JWT', 'OAuth 2.0 / PKCE', 'Tailwind CSS'],
    metrics: '100% Token Verification • Sub-10ms Authentication Latency',
    demoUrl: '#',
    githubUrl: 'https://github.com/',
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'bug-bounty-researcher',
    role: 'Independent Vulnerability Researcher & Bug Bounty Hunter',
    organization: 'HackerOne / Bugcrowd / Coordinated Disclosure Programs',
    period: '2023 — Present',
    location: 'Remote',
    type: 'bug-bounty',
    summary: 'Conducting in-depth offensive security assessments on public and private targets, uncovering high-impact web and API vulnerabilities following coordinated vulnerability disclosure (CVD) standards.',
    responsibilities: [
      'Targeted reconnaissance, asset mapping, and parameter analysis across large-scale web applications',
      'Identification and manual verification of vulnerabilities: Insecure Direct Object References (IDOR), Broken Access Control, Cross-Site Scripting (XSS), and Server-Side Request Forgery (SSRF)',
      'Authoring comprehensive, reproducible Proof of Concepts (PoCs) with clear impact assessments and actionable patch recommendations for engineering teams',
      'Collaborating transparently with program security teams and triage personnel to ensure swift remediation'
    ],
    highlights: [
      'Disclosed multiple valid high-severity vulnerabilities across major corporate disclosure programs',
      'Maintained a 100% ethical disclosure track record with zero out-of-scope violations',
      'Achieved multiple hall-of-fame recognitions and kudos for rapid, clear technical documentation'
    ],
    technologies: ['Burp Suite Professional', 'OWASP ZAP', 'FFUF', 'Nmap', 'Python', 'Curl', 'Bash', 'Postman']
  },
  {
    id: 'fullstack-sec-engineer',
    role: 'Full-Stack Developer & Security Consultant',
    organization: 'Independent Engineering & Client Solutions',
    period: '2022 — Present',
    location: 'Remote / Hybrid',
    type: 'engineering',
    summary: 'Delivering production web applications using React, Laravel, PHP, and MySQL while instituting defensive security standards into development lifecycles.',
    responsibilities: [
      'Architecting end-to-end full-stack web applications from database schema design to responsive UI implementation',
      'Implementing OWASP-recommended defensive controls: strict CORS, Content Security Policy (CSP), parameterized SQL queries, and secure session management',
      'Conducting pre-deployment code audits and static analysis to identify security weaknesses before production release',
      'Integrating machine learning inference pipelines into modern web applications using Python and REST APIs'
    ],
    highlights: [
      'Shipped 15+ bespoke web solutions with zero reported post-launch security breaches',
      'Reduced database query execution times by up to 60% through proper MySQL indexing and normalization',
      'Created reusable secure authentication templates adopted across multiple client projects'
    ],
    technologies: ['React', 'Laravel', 'PHP', 'Python', 'MySQL', 'Tailwind CSS', 'Docker', 'Git']
  },
  {
    id: 'security-tools-contributor',
    role: 'Security Tools Contributor & Community Researcher',
    organization: 'Open Source Security Research',
    period: '2022 — Present',
    location: 'Global',
    type: 'research',
    summary: 'Developing automated scripts and sharing technical analyses to assist web developers in securing modern applications.',
    responsibilities: [
      'Publishing open-source automation scripts for reconnaissance, header verification, and vulnerability scanning',
      'Writing technical deep-dives on modern web vulnerability classes and how developers can eliminate them at the architecture level',
      'Participating in CTF (Capture the Flag) security competitions focusing on web exploitation and reverse engineering'
    ],
    highlights: [
      'Authored automated Python tools for security auditing',
      'Active participant in regional cybersecurity workshops and developer defense panels'
    ],
    technologies: ['Python', 'Linux', 'Network Security', 'OWASP Top 10', 'Git', 'Markdown']
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-ejpt',
    title: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE Security / eLearnSecurity',
    issueDate: 'Verified Credential',
    credentialId: 'INE-SEC-2024-EJPT',
    category: 'Security',
    skills: ['Network Penetration Testing', 'Web Application Assessment', 'Host Exploitation', 'Metasploit', 'Reconnaissance'],
    badgeColor: 'blue'
  },
  {
    id: 'cert-sec-plus',
    title: 'CompTIA Security+ Certification',
    issuer: 'CompTIA',
    issueDate: 'Verified Credential',
    credentialId: 'COMP0010214892',
    category: 'Security',
    skills: ['Threats, Attacks & Vulnerabilities', 'Architecture & Design', 'Incident Response', 'Governance, Risk & Compliance'],
    badgeColor: 'cyan'
  },
  {
    id: 'cert-meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    issueDate: 'Verified Credential',
    credentialId: 'META-FE-994821',
    category: 'Development',
    skills: ['React', 'Advanced JavaScript', 'UI/UX Principles', 'Version Control', 'Responsive Web Design'],
    badgeColor: 'indigo'
  },
  {
    id: 'cert-pcap-python',
    title: 'PCAP — Certified Associate in Python Programming',
    issuer: 'Python Institute',
    issueDate: 'Verified Credential',
    credentialId: 'PCAP-31-03-8841',
    category: 'Development',
    skills: ['Python OOP', 'Data Structures', 'Exceptions', 'Socket & File I/O', 'Algorithm Design'],
    badgeColor: 'sky'
  },
  {
    id: 'cert-bug-bounty-hof',
    title: 'Bug Bounty Responsible Disclosure Recognition',
    issuer: 'Security Hall of Fame Programs',
    issueDate: '2023 — Present',
    credentialId: 'HOF-CVD-ACK',
    category: 'Recognition',
    skills: ['Coordinated Vulnerability Disclosure', 'High-Impact Bug Hunting', 'Ethical Reporting', 'Web Vulnerability Mitigation'],
    badgeColor: 'emerald'
  },
  {
    id: 'cert-db-mysql',
    title: 'Relational Database Design & MySQL Optimization',
    issuer: 'Database Systems Institute',
    issueDate: 'Verified Credential',
    credentialId: 'DBS-SQL-4401',
    category: 'Development',
    skills: ['MySQL Query Optimization', 'Database Security', 'Indexing Strategy', 'Stored Procedures & Triggers'],
    badgeColor: 'amber'
  }
];

export const terminalCommandList = [
  { cmd: 'help', desc: 'Display all available terminal commands' },
  { cmd: 'whoami', desc: 'Display developer & researcher profile identity' },
  { cmd: 'skills', desc: 'List core technical competencies and security focus' },
  { cmd: 'projects', desc: 'List key featured projects with stack and status' },
  { cmd: 'scan', desc: 'Execute real-time website security posture audit' },
  { cmd: 'experience', desc: 'Show bug bounty and engineering journey' },
  { cmd: 'certifications', desc: 'Display verified professional certifications' },
  { cmd: 'contact', desc: 'Show verified contact details & transmission channels' },
  { cmd: 'cv', desc: 'Trigger developer CV/Resume overview and download' },
  { cmd: 'clear', desc: 'Clear the terminal output screen' },
];
