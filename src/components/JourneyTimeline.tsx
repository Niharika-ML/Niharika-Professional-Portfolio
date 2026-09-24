import React from 'react';
import { GraduationCap, Code2, Rocket, Lightbulb, Users, Calendar } from 'lucide-react';
import { PORTFOLIO_CONFIG, TimelineItem } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    education: GraduationCap,
    project: Code2,
    hackathon: Rocket,
    workshop: Lightbulb,
    community: Users,
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>05 / Progression</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          My Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          An ongoing journey in Data Science — learning fundamentals, experimenting with AI algorithms, and building real-world solutions.
        </p>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
        {PORTFOLIO_CONFIG.journeyTimeline.map((item, index) => {
          const Icon = iconMap[item.icon] || Code2;
          return (
            <div key={item.title} className="relative pl-7 sm:pl-10 group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-700 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:border-sky-400 group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-300">
                <Icon className="w-3.5 h-3.5 text-sky-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                {/* Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Accomplishments / Details */}
                <div className="mt-4 pt-4 border-t border-slate-800/70 space-y-1.5">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
