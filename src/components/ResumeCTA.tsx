import React from 'react';
import { FileText, Linkedin, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface ResumeCTAProps {
  onOpenResumeModal: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0d1424] to-[#141830] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {/* Ambient background glows */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Opportunities &amp; Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {PORTFOLIO_CONFIG.resumeCTA.heading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {PORTFOLIO_CONFIG.resumeCTA.text}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenResumeModal}
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-200 hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] hover:from-sky-400 hover:to-blue-500 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href={PORTFOLIO_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white active:scale-95"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
