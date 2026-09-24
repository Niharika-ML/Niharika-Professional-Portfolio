import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 via-slate-800/80 to-purple-600/20 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-transform duration-300 group-hover:scale-105 group-hover:border-sky-400">
              <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-purple-300">
                NR
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
                Niharika
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-slate-900/60 border border-slate-800/70 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? 'text-sky-300 bg-sky-500/15 shadow-[0_0_12px_rgba(56,189,248,0.25)] border border-sky-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: PWA + Resume */}
          <div className="hidden md:flex items-center gap-3">
            <PWAInstallButton />
            <button
              onClick={onOpenResumeModal}
              type="button"
              className="group relative flex items-center gap-2 rounded-full border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 px-4 py-2 text-xs font-semibold text-slate-100 shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-sky-300 transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Install + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <PWAInstallButton compact />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Accessible for deep sections) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#0a0d14]/95 backdrop-blur-xl pt-20 px-6 pb-28 animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 pb-1">
              Explore Portfolio
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/80 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View / Download Resume</span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                <a href={PORTFOLIO_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">LinkedIn</a>
                <span>•</span>
                <a href={PORTFOLIO_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">GitHub</a>
                <span>•</span>
                <a href={`mailto:${PORTFOLIO_CONFIG.email}`} className="hover:text-sky-300">Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
