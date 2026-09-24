import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  compact?: boolean;
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ compact = false, className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleAndroidInstall = async () => {
    const success = await install();
    if (success) {
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 4000);
    }
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <>
        <button
          onClick={handleAndroidInstall}
          type="button"
          aria-label="Install App"
          className={`group flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all duration-200 hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] active:scale-95 ${className}`}
        >
          <Smartphone className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover:scale-110" />
          <span>{compact ? 'Install' : 'Install App'}</span>
          <Download className="w-3 h-3 text-sky-400/80" />
        </button>

        {showSuccessToast && (
          <div className="fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-4 py-2.5 text-sm font-medium text-emerald-300 shadow-2xl backdrop-blur-md animate-fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Niharika Portfolio installed to home screen!</span>
          </div>
        )}
      </>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          type="button"
          aria-label="Install on iPhone / iPad"
          className={`flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-500/50 hover:text-sky-300 ${className}`}
        >
          <Smartphone className="w-3.5 h-3.5 text-sky-400" />
          <span>{compact ? 'Install' : 'Add to Home'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-sm rounded-2xl border border-slate-700/80 bg-slate-900 p-6 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold text-xs">
                    NR
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-100">Install Niharika Portfolio</h3>
                    <p className="text-[11px] text-slate-400">Add to iPhone / iPad Home Screen</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3 border border-slate-700/50">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[11px] font-bold text-sky-300">1</span>
                  <p>Tap the <strong>Share</strong> button (square with arrow up) at the bottom of Safari.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3 border border-slate-700/50">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[11px] font-bold text-sky-300">2</span>
                  <p>Scroll down in the action sheet and select <strong>&ldquo;Add to Home Screen&rdquo;</strong>.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 p-3 border border-slate-700/50">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-[11px] font-bold text-sky-300">3</span>
                  <p>Tap <strong>Add</strong> in the top-right corner to launch as a standalone app!</p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-sky-500/20 border border-sky-500/40 py-2.5 text-xs font-semibold text-sky-300 hover:bg-sky-500/30 transition active:scale-95"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback direct button for browsers that allow manual bookmarking / app notice
  return null;
};
