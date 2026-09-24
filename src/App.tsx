import React, { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Certifications } from './components/Certifications';
import { BeyondTheCode } from './components/BeyondTheCode';
import { ResumeCTA } from './components/ResumeCTA';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('niharika_portfolio_photo') || null;
  });

  const handleUpdatePhoto = (url: string) => {
    setCustomPhoto(url);
    try {
      localStorage.setItem('niharika_portfolio_photo', url);
    } catch {
      // Ignore quota error if base64 is large
    }
  };

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'what-i-build',
      'skills',
      'projects',
      'journey',
      'certifications',
      'beyond',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Dynamic Background Network Canvas */}
      <BackgroundGrid />

      {/* Connectivity Indicator (PWA Requirement) */}
      <OfflineIndicator />

      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8 md:space-y-12">
        {/* 1. Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          customProfilePhoto={customPhoto}
          onUpdateProfilePhoto={handleUpdatePhoto}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. What I Build */}
        <WhatIBuild />

        {/* 4. Skills & Technologies */}
        <Skills />

        {/* 5. Featured Projects */}
        <Projects onOpenProjectModal={(p) => setSelectedProject(p)} />

        {/* 6. My Journey Timeline */}
        <JourneyTimeline />

        {/* 7. Certifications & Achievements */}
        <Certifications />

        {/* 8. Beyond The Code */}
        <BeyondTheCode />

        {/* 9. Resume Call To Action */}
        <ResumeCTA onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Mobile App-Style Bottom Navigation Bar (Visible only on mobile) */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
