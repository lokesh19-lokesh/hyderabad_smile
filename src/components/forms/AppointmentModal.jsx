import React from 'react';
import { X } from 'lucide-react';
import AppointmentForm from './AppointmentForm';

export default function AppointmentModal({ isOpen, onClose, defaultBranch, defaultTreatment }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-deep/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-warm-beige overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy p-6 text-white flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-orange">Hyderabad Smiles</div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl mt-0.5">Book Your Dental Consultation</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <AppointmentForm 
            defaultBranch={defaultBranch} 
            defaultTreatment={defaultTreatment}
            onSuccess={() => {
              // keep modal open to show success state
            }}
          />
        </div>
      </div>
    </div>
  );
}
