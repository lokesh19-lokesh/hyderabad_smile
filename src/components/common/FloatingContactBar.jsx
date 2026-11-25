import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function FloatingContactBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-between sm:justify-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={siteData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full font-medium text-sm shadow-premium transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${siteData.phoneClean}`}
        className="flex items-center justify-center gap-2 px-4 py-3 bg-navy hover:bg-navy-light text-white rounded-full font-medium text-sm shadow-premium transition-all duration-300 hover:scale-105 active:scale-95"
        title={`Call ${siteData.phone}`}
      >
        <Phone className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">Call Hospital</span>
      </a>

      {/* Book Appointment CTA Button */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 btn-orange-gradient rounded-full font-semibold text-sm shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
}
