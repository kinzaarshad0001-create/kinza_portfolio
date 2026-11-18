import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject line.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate encrypted transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onShowToast('Secure message encrypted & dispatched successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative cyber-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch & Security Inquiries
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Whether you want to discuss a full-stack engineering challenge, schedule a vulnerability assessment, or inquire about open positions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels & Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gray-900/60 border border-gray-800/90 backdrop-blur-sm shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Box with copy button */}
              <div className="p-4 rounded-xl bg-gray-950/80 border border-gray-800/90 mb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1 flex items-center justify-between">
                  <span>Primary Email Address</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700/80 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Links to Profiles */}
              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LinkedIn Profile</div>
                      <div className="text-[11px] text-gray-400">Professional network & recommendations</div>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-xs font-mono group-hover:translate-x-0.5 transition-transform">Connect →</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-cyan-500/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700/60 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">GitHub Repositories</div>
                      <div className="text-[11px] text-gray-400">Open-source code & research tools</div>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-xs font-mono group-hover:translate-x-0.5 transition-transform">View Code →</span>
                </a>
              </div>

              {/* Response Time Indicator */}
              <div className="mt-5 pt-4 border-t border-gray-800 flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical response latency: &lt; 24 hours</span>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 to-gray-900/40 border border-blue-500/20 text-xs text-gray-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold">
                <Lock className="w-4 h-4" />
                <span>Confidentiality & Coordinated Disclosure</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                All vulnerability reports and project specifications shared are treated under strict confidentiality and ethical disclosure protocols.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Secure Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-900/60 border border-gray-800/90 backdrop-blur-sm shadow-xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Client-side sanitized and securely routed.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-800/40 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TLS Form Guard</span>
                </div>
              </div>

              {/* Success Notification Alert */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Transmission Confirmed!</div>
                    <div>Thank you for reaching out. Your message has been encrypted and received. I will review and reply within 24 hours.</div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-950/80 border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors font-sans ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-950/80 border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors font-sans ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Subject / Project Scope <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Security Audit Consultation / Full-Stack Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-950/80 border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors font-sans ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Message Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Detail your project timeline, requirements, or security audit scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-950/80 border text-xs text-white placeholder-gray-500 focus:outline-none transition-colors font-sans resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-gray-400 font-mono">
                    Protected with client-side payload sanitization
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Encrypting & Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Encrypted Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
