import React from 'react';
import { Sparkles, Calendar, Phone, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { siteData } from '../../data/siteData';
import AppointmentForm from '../../components/forms/AppointmentForm';

export default function LandingPageTemplate({ title = "Transform Your Smile With Hyderabad Smiles", subtitle = "Advanced Clear Aligners & Dental Implants in Hyderabad", defaultTreatment = "Invisible Clear Aligners" }) {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      {/* High Conversion Hero */}
      <section className="hero-gradient text-white py-14 sm:py-20 border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Promotion & Consultation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {subtitle}
              </p>

              <div className="mt-8 space-y-3 text-xs sm:text-sm text-white/80 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Complimentary 3D Intraoral Digital Scan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Consult directly with Senior MDS Dental Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Flexible payment plans & transparent pricing</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex text-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-white/70">
                  4.9/5 Rating based on 200+ Verified Patient Reviews
                </span>
              </div>
            </div>

            {/* Direct Booking Card in Hero */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-warm-beige shadow-2xl">
                <div className="text-xs uppercase tracking-wider text-orange font-bold mb-1">
                  Limited Consultation Slots
                </div>
                <h3 className="font-serif font-bold text-xl text-navy mb-4">
                  Claim Your Consultation Today
                </h3>
                <AppointmentForm defaultTreatment={defaultTreatment} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Hospital Locations Quick Bar */}
      <section className="py-12 bg-white border-b border-warm-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {siteData.branches.map((b, i) => (
              <div key={i} className="p-4 bg-warm-ivory rounded-2xl border border-warm-beige/40">
                <div className="font-bold text-navy text-sm">{b.name}</div>
                <div className="text-xs text-navy/60 mt-0.5 line-clamp-1">{b.address}</div>
                <div className="text-xs text-orange font-semibold mt-1">📞 {b.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
