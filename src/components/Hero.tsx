import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Briefcase,
  Linkedin,
  Github,
  Mail,
  Phone,
  ArrowDown,
  Sparkles,
  Camera,
  Activity,
  Code2,
  Database,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  customProfilePhoto: string | null;
  onUpdateProfilePhoto: (url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  customProfilePhoto,
  onUpdateProfilePhoto,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const rotatingPhrases = [
    'Data Science',
    'Machine Learning',
    'AI Agents',
    'Web Applications',
    'Intelligent Solutions',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setFadeState('in');
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProfilePhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
            <span>{PORTFOLIO_CONFIG.badge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                Niharika.
              </span>
            </h1>

            {/* Second Heading with Animated Rotation */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 min-h-[2.5rem] flex flex-wrap items-center gap-2">
              <span>I Build</span>
              <span
                className={`inline-block font-mono text-sky-400 transition-all duration-300 transform ${
                  fadeState === 'in'
                    ? 'opacity-100 translate-y-0 text-shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                    : 'opacity-0 -translate-y-2'
                }`}
              >
                {rotatingPhrases[currentPhraseIndex]}
              </span>
              <span className="text-slate-400 hidden sm:inline">&amp; Meaningful Digital Solutions.</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
            {PORTFOLIO_CONFIG.heroIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] hover:from-sky-400 hover:to-blue-500 active:scale-95"
            >
              <Briefcase className="w-4 h-4" />
              <span>View My Projects</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              type="button"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white active:scale-95"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Secondary Social & Contact Links */}
          <div className="pt-3 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Connect:</span>
            
            <a
              href={PORTFOLIO_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}`}
              aria-label="Send email"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, '')}`}
              aria-label="Call phone"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PORTFOLIO_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Circular Frame + Subtle 3D Floating Visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Subtle 3D decorative background elements */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Outer rotating decorative ring */}
            <div
              className="absolute inset-0 rounded-full border border-sky-500/20 border-dashed animate-ring-rotate"
              style={{ animationDuration: '28s' }}
            />

            {/* Inner counter-rotating ring with accent gradient */}
            <div
              className="absolute inset-3 rounded-full border border-indigo-500/30 border-t-sky-400 border-r-purple-400 animate-ring-rotate"
              style={{ animationDuration: '18s', animationDirection: 'reverse' }}
            />

            {/* Soft backdrop glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-600/15 to-purple-600/20 blur-2xl animate-pulse-glow" />

            {/* Floating 3D Data Nodes */}
            <div className="absolute -top-3 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] text-[11px] font-mono text-sky-300 animate-float-slow backdrop-blur-md">
              <Database className="w-3 h-3 text-sky-400" />
              <span>Data Science</span>
            </div>

            <div
              className="absolute -bottom-2 -left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)] text-[11px] font-mono text-purple-300 animate-float-slow backdrop-blur-md"
              style={{ animationDelay: '1.5s' }}
            >
              <Activity className="w-3 h-3 text-purple-400" />
              <span>ML Agents</span>
            </div>

            <div
              className="absolute top-1/2 -left-8 -translate-y-1/2 hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-900/90 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 animate-float-slow backdrop-blur-md"
              style={{ animationDelay: '3s' }}
            >
              <Code2 className="w-3 h-3 text-indigo-400" />
              <span>Python &amp; SQL</span>
            </div>

            {/* Profile Frame Container */}
            <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-purple-600 shadow-[0_0_35px_rgba(56,189,248,0.35)] group">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center relative border-2 border-slate-900">
                {customProfilePhoto ? (
                  <img
                    src={customProfilePhoto}
                    alt="Niharika Ravulapalli"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#121a30] text-center p-4 select-none">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/40 flex items-center justify-center mb-2 shadow-inner">
                      <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                        NR
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Niharika Ravulapalli</span>
                    <span className="text-[10px] text-sky-400/90 font-mono mt-0.5">Data Science Student</span>
                  </div>
                )}

                {/* Upload Photo Button Overlay */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                  title="Upload profile photo"
                  aria-label="Upload your profile photo"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1.5 text-xs text-white backdrop-blur-xs cursor-pointer"
                >
                  <Camera className="w-5 h-5 text-sky-400" />
                  <span className="text-[11px] font-medium">Upload My Photo</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Prompt to customize / personal touch caption */}
          <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for internships &amp; collaborative opportunities</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-14 sm:mt-18 flex flex-col items-center justify-center">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-sky-400 transition-colors focus-visible:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
          <div className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-sky-500/50">
            <div className="w-1 h-2 rounded-full bg-sky-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
