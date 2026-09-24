import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle, GraduationCap } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCV = () => {
    const cvText = `=====================================================
NIHARIKA RAVULAPALLI
Data Science Student | AI/ML Enthusiast | Developer
Email: ${PORTFOLIO_CONFIG.email}
Phone: ${PORTFOLIO_CONFIG.phone}
LinkedIn: ${PORTFOLIO_CONFIG.linkedin}
GitHub: ${PORTFOLIO_CONFIG.github}
=====================================================

ABOUT
I am a Data Science student passionate about turning real-world problems into practical solutions using data, machine learning, artificial intelligence, and modern web technologies.

CORE SKILLS
- Programming: Python, SQL, JavaScript, HTML, CSS
- Data Science: Pandas, NumPy, Matplotlib, Data Analysis & Visualization
- Machine Learning: Scikit-learn, Random Forest, XGBoost, SVM, KNN, MLP
- AI & Innovation: AI Agents, Generative AI, Computer Vision, Prompt Engineering
- Development & Tools: Streamlit, Git, GitHub, VS Code, Google Colab

FEATURED PROJECTS
1. Speech-Based Gender Recognition Agent
   - Analyzed acoustic speech features and trained classification models
   - Deployed on Streamlit Cloud: https://speech-based-gender-recognition-agent-lo6sqxpepsfsh7xsf7sedd.streamlit.app/
   - Tech: Python, Scikit-learn, Streamlit, Librosa

2. AI-Driven Grid Resilience & Public Communication System
   - Intelligent power-grid resilience prototype for fault detection and community updates
   - Prototype: https://esoteric-grid-rescue-flow.base44.app
   - Tech: AI Decision Support, Fault Detection Logic, Web Platform

3. Student Mental Health Assessment Agent
   - Multi-model comparative ML assessment across 6 algorithms
   - Tech: Scikit-learn, Random Forest, SVM, KNN, XGBoost

4. Crop Yield Prediction Agent
   - Agronomic modeling of rainfall, temperature, acreage, and yield forecasts
   - Tech: Python, Pandas, Scikit-learn

5. Diabetes Prediction Agent
   - Educational ML classification pipeline for biometric risk assessment
   - Tech: Python, Scikit-learn, Streamlit

6. Traffic Violation Detection
   - Computer vision and image preprocessing concept developed post-GenAI workshop
   - Tech: Python, Computer Vision, OpenCV

7. RetailVision AI
   - Retail shelf computer-vision architecture targeting 1200+ product categories
   - Tech: YOLOv8, Computer Vision

CERTIFICATIONS
- MSME Certification
- Infosys Certification
- FutureSkills Prime — Applications of Cloud Computing
- Hackathon Participation & Innovation Certificates
- GenAI Workshop Certification
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Niharika_Ravulapalli_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl text-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold text-xs">
              CV
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Niharika Ravulapalli — Resume</h2>
              <p className="text-xs text-slate-400">Data Science &amp; AI/ML Curriculum Vitae</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-300 hover:bg-slate-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadTextCV}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-500 text-xs font-semibold text-white hover:bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-200 print:bg-white print:text-black">
          {/* Header info */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-extrabold text-white">Niharika Ravulapalli</h1>
            <p className="text-sm font-medium text-sky-400 mt-0.5">
              Data Science Student | AI/ML Enthusiast | Developer
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
              <a href={`mailto:${PORTFOLIO_CONFIG.email}`} className="flex items-center gap-1 hover:text-sky-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{PORTFOLIO_CONFIG.email}</span>
              </a>
              <a href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-sky-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_CONFIG.phone}</span>
              </a>
              <a href={PORTFOLIO_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
                LinkedIn: /in/niharikaravulapalli
              </a>
              <a href={PORTFOLIO_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
                GitHub: /Niharika-ML
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Education
            </h3>
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-white text-sm">Undergraduate in Data Science</h4>
                <p className="text-xs text-slate-300 mt-0.5">College of Engineering &amp; Technology</p>
                <p className="text-xs text-slate-400 mt-1">
                  Focus: Machine Learning, Statistical Analysis, Algorithms, Python &amp; SQL
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Ongoing</span>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-semibold text-slate-200">Programming: </span>
                <span className="text-slate-400">Python, SQL, JavaScript, HTML, CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-semibold text-slate-200">Data Science: </span>
                <span className="text-slate-400">Pandas, NumPy, Matplotlib, Data Wrangling</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-semibold text-slate-200">Machine Learning: </span>
                <span className="text-slate-400">Scikit-learn, Random Forest, XGBoost, SVM, KNN</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                <span className="font-semibold text-slate-200">AI &amp; Tools: </span>
                <span className="text-slate-400">AI Agents, Streamlit, Git, VS Code, Google Colab</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Selected Projects
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>Speech-Based Gender Recognition Agent</span>
                  <span className="text-sky-400">Streamlit Deployed</span>
                </div>
                <p className="text-slate-300">
                  Extracted acoustic features via Librosa and trained predictive ML models with Scikit-learn.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>AI-Driven Grid Resilience &amp; Public Communication</span>
                  <span className="text-indigo-400">Web Prototype</span>
                </div>
                <p className="text-slate-300">
                  Intelligent power infrastructure disaster resilience concept with fault monitoring and public alert dispatch.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>Student Mental Health &amp; Crop Yield Predictive Agents</span>
                  <span className="text-slate-400">ML Pipelines</span>
                </div>
                <p className="text-slate-300">
                  Benchmarked supervised algorithms (XGBoost, Random Forest, SVM) for risk indicators and agricultural output.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              Certifications &amp; Training
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                • MSME Technical Certification
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                • Infosys Springboard Software Foundations
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                • FutureSkills Prime Cloud Computing (NASSCOM / MeitY)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                • Generative AI Workshop Certification
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
