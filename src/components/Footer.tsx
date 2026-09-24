import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, FileText, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 pt-16 pb-24 md:pb-16 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-600/20 border border-sky-500/40 text-sky-400 font-extrabold text-xs">
                NR
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {PORTFOLIO_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-sky-400/90 font-mono">
              Data Science • AI/ML • Development
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An ambitious Data Science student building practical AI, machine learning, and modern web applications.
            </p>
          </div>

          {/* Contact Direct Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.email}`}
                  className="hover:text-sky-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PORTFOLIO_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="hover:text-sky-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PORTFOLIO_CONFIG.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Quick Links
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href={PORTFOLIO_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={PORTFOLIO_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                Email
              </a>
              <a
                href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                Phone
              </a>
              <button
                onClick={onOpenResumeModal}
                type="button"
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors text-left"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {PORTFOLIO_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 font-mono">
            <span>Built with curiosity &amp; code.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
