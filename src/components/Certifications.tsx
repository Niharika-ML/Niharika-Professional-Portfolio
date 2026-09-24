import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, FileCheck, X } from 'lucide-react';
import { PORTFOLIO_CONFIG, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          <span>06 / Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Certifications &amp; Achievements
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
          Verified academic and technical milestones across Cloud Computing, Software Development, and AI Innovations.
        </p>
        <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_CONFIG.certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div>
              {/* Badge & Year */}
              <div className="flex items-center justify-between pb-3">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                  {cert.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60">
                  {cert.year}
                </span>
              </div>

              {/* Title & Org */}
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors mt-1">
                {cert.title}
              </h3>

              <p className="text-xs font-medium text-slate-400 mt-1">
                {cert.organization}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-normal">
                {cert.description}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] font-medium font-mono">{cert.credentialId}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Detail Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sky-400">
                <Award className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider">Credential Verification</span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{activeCert.title}</h3>
                <p className="text-sm text-sky-300 mt-1">{activeCert.organization}</p>
                <span className="inline-block mt-2 text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-800">
                  Track: {activeCert.category} · {activeCert.year}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                {activeCert.description}
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-emerald-300">Verified Credential Record</div>
                  <div className="text-[11px] text-slate-400 font-mono">Reference: {activeCert.credentialId}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
