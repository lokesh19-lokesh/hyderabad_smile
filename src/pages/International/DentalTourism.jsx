import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Calendar, Phone, Globe, ShieldCheck, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function DentalTourism({ onOpenBooking }) {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'International Patients', path: '/international-patients/' },
          { label: 'Dental Tourism', path: '/dental-tourism/' }
        ]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Plane className="w-3.5 h-3.5" />
            <span>Dental Tourism in Hyderabad</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            World-Class Dentistry & Tourism in Hyderabad
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Save up to 70% on premium dental implants, veneers, and full mouth smile rehabilitation while exploring the historic City of Pearls.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">
              Why Choose Hyderabad for Dental Tourism?
            </h2>
            <p className="text-navy/80 text-sm sm:text-base leading-relaxed space-y-3">
              Hyderabad is recognized globally as a premier medical and IT capital, home to Rajiv Gandhi International Airport with non-stop direct flights connecting Dubai, London, Singapore, and Doha.
            </p>
            <p className="text-navy/80 text-sm sm:text-base leading-relaxed mt-3">
              At Hyderabad Smiles, our clinics in Jubilee Hills and Madhapur sit at the heart of the luxury hospitality zone, surrounded by 5-star hotels, gourmet dining, and iconic heritage landmarks.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span>Zero waiting periods — pre-booked priority slots</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span>Immediate loading implants: Fixed teeth in 1–3 days</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span>MDS dental surgeons trained in international surgical techniques</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-warm-beige shadow-soft">
            <h3 className="font-serif font-bold text-xl text-navy mb-4">
              Plan Your Dental Trip in 3 Easy Steps
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-beige/50">
                <div className="text-xs font-bold text-orange uppercase">Step 1: Virtual Estimate</div>
                <div className="text-xs text-navy/70 mt-1">Send us your OPG X-ray or dental photos via WhatsApp for a provisional plan and cost estimate.</div>
              </div>
              <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-beige/50">
                <div className="text-xs font-bold text-orange uppercase">Step 2: Flight & Booking</div>
                <div className="text-xs text-navy/70 mt-1">Book your travel dates. Our coordinator assists with airport transfer and hotel booking near our Jubilee Hills clinic.</div>
              </div>
              <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-beige/50">
                <div className="text-xs font-bold text-orange uppercase">Step 3: Treatment & Smile</div>
                <div className="text-xs text-navy/70 mt-1">Complete your treatment in express comfort and return home with a flawless, radiant new smile.</div>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-6 w-full py-3 btn-orange-gradient rounded-xl font-bold text-xs sm:text-sm shadow-sm"
            >
              Request International Itinerary
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
