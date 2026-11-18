import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-500">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 border border-cyan-500/50 shadow-2xl shadow-cyan-950/80 text-white text-xs font-mono">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <span className="text-gray-200">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
