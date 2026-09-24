import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please write a message before sending.');
      return;
    }

    // Since no server email relay is provisioned, use validated mailto client dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Niharika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus('success');
  };

  const contactCards = [
    {
      type: 'EMAIL',
      label: 'Email',
      value: PORTFOLIO_CONFIG.email,
      href: `mailto:${PORTFOLIO_CONFIG.email}`,
      actionText: 'Email Me',
      icon: Mail,
      accent: 'text-sky-400',
      border: 'hover:border-sky-500/50',
    },
    {
      type: 'PHONE',
      label: 'Phone',
      value: PORTFOLIO_CONFIG.phone,
      href: `tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, '')}`,
      actionText: 'Call Me',
      icon: Phone,
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/50',
    },
    {
      type: 'LINKEDIN',
      label: 'LinkedIn',
      value: 'Niharika Ravulapalli',
      href: PORTFOLIO_CONFIG.linkedin,
      actionText: 'View LinkedIn',
      icon: Linkedin,
      accent: 'text-blue-400',
      border: 'hover:border-blue-500/50',
    },
    {
      type: 'GITHUB',
      label: 'GitHub',
      value: 'Niharika-ML',
      href: PORTFOLIO_CONFIG.github,
      actionText: 'View GitHub',
      icon: Github,
      accent: 'text-purple-400',
      border: 'hover:border-purple-500/50',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>08 / Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {PORTFOLIO_CONFIG.contact.heading}
        </h2>
        <p className="text-base text-slate-400 mt-2">
          {PORTFOLIO_CONFIG.contact.subheading}
        </p>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.type}
                  className={`group rounded-2xl border border-slate-800 bg-slate-900/60 p-4.5 sm:p-5 backdrop-blur-md transition-all duration-300 ${card.border} hover:bg-slate-900/90 flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 shrink-0">
                      <Icon className={`w-5 h-5 ${card.accent}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {card.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-200 truncate mt-0.5">
                        {card.value}
                      </div>
                    </div>
                  </div>

                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-sky-400 hover:bg-sky-500/20 hover:text-sky-300 border border-slate-700 hover:border-sky-500/40 transition-all shrink-0 active:scale-95"
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Quick Copy Email Card */}
          <div className="p-4 rounded-2xl border border-sky-500/20 bg-sky-500/5 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-sky-300">Quick Copy: </span>
              <span className="font-mono text-slate-400">{PORTFOLIO_CONFIG.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/40 text-xs font-medium text-sky-300 hover:bg-sky-500/30 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Functional Message Form */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Alex Johnson"
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g., alex@company.com"
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, opportunity, or idea..."
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
              />
            </div>

            {validationError && (
              <div className="text-xs text-rose-400 font-medium">
                {validationError}
              </div>
            )}

            {submittedStatus === 'success' && (
              <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Preparing mail client dispatch to <strong>{PORTFOLIO_CONFIG.email}</strong>. Thank you for connecting!
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            <p className="text-[11px] text-slate-500 text-center font-mono">
              Launches your local email client with your pre-formatted inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
