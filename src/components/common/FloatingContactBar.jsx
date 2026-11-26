import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function FloatingContactBar({ onOpenBooking }) {
  return (
    <>
      {/* 1. MOBILE DOCK (Visible only on <640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-warm-beige/80 py-2 px-3 shadow-[0_-4px_20px_rgba(7,59,92,0.12)] flex items-center justify-between gap-2 pb-safe">
        {/* WhatsApp Mobile Action */}
        <a
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-green-50 text-[#128C7E] active:scale-95 transition-transform"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Direct Call Mobile Action */}
        <a
          href={`tel:${siteData.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-navy/5 text-navy active:scale-95 transition-transform"
          title="Call Hospital"
        >
          <Phone className="w-5 h-5 text-orange" />
          <span className="text-[10px] font-bold mt-0.5">Call Us</span>
        </a>

        {/* Book Appointment CTA Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 btn-orange-gradient rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* 2. DESKTOP FLOATING ACTION BUTTONS (Visible only on >=640px) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${siteData.phoneClean}`}
          className="group flex items-center gap-2 bg-navy hover:bg-navy-light text-white p-3 rounded-full shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-105"
          title={`Call ${siteData.phone}`}
        >
          <Phone className="w-5 h-5 text-orange" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pr-0 group-hover:pr-2">
            {siteData.phone}
          </span>
        </a>

        {/* WhatsApp Floating FAB */}
        <a
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
          title="Chat with Doctor Coordinator on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pr-0 group-hover:pr-2">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
