import React from 'react';
import { Target, Hammer, RefreshCw } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const BeyondTheCode: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Target,
    Hammer,
    RefreshCw,
  };

  return (
    <section id="beyond" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>07 / Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Beyond the Code
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Lead Manifesto Paragraph */}
      <div className="mb-12 rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/30 p-6 sm:p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
          &ldquo;{PORTFOLIO_CONFIG.beyondTheCode.lead}&rdquo;
        </p>
      </div>

      {/* 3 Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_CONFIG.beyondTheCode.cards.map((card, index) => {
          const Icon = iconMap[card.icon] || Target;
          return (
            <div
              key={card.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 group-hover:border-sky-500/40 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Pillar 0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors uppercase tracking-wider">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-sky-400/90 font-mono">
                  {card.tagline}
                </p>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Purpose-Driven Engineering</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
