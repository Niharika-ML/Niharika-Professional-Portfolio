import React from 'react';
import { GraduationCap, Bot, Code, Rocket, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Data Science Student',
      subtitle: 'Undergraduate Program',
      description: 'Foundational coursework in probability, statistics, algorithms, and practical data structures.',
      icon: GraduationCap,
      color: 'text-sky-400',
      border: 'border-sky-500/30',
      bg: 'bg-sky-500/10',
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'Models & Classification',
      description: 'Experimenting with supervised algorithms, evaluation metrics, and speech & vision pipelines.',
      icon: Bot,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-500/10',
    },
    {
      title: 'Project Builder',
      subtitle: 'Practical Solutions',
      description: 'Transforming theoretical notebook concepts into usable Streamlit tools and web prototypes.',
      icon: Code,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
    },
    {
      title: 'Innovation & Hackathons',
      subtitle: 'Rapid Sprints',
      description: 'Brainstorming and creating disaster resilience, agritech, and community-driven solutions.',
      icon: Rocket,
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>01 / Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Narrative Text */}
        <div className="lg:col-span-6 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {PORTFOLIO_CONFIG.aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-300">
              {paragraph}
            </p>
          ))}

          <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span>Passionate about learning by building &amp; sharing code</span>
          </div>
        </div>

        {/* Right Column: Highlight Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.border} border`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-mono text-slate-400 group-hover:text-sky-400 transition-colors">
                  <span>Continuous Learner</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
