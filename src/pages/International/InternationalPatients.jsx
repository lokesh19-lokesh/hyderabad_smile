import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Plane, Hotel, MessageCircle, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { pagesData } from '../../data/pagesData';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function InternationalPatients({ onOpenBooking }) {
  const { internationalPatients } = pagesData;

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'International Patients', path: '/international-patients/' }]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Dental Healthcare Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            International Patients & Dental Care in Hyderabad
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {internationalPatients.subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-3.5 btn-orange-gradient rounded-full font-bold text-sm shadow-premium flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Virtual Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4">
            World-Class Care at Transparent, Affordable Costs
          </h2>
          <p className="text-navy/70 text-base leading-relaxed">
            {internationalPatients.intro}
          </p>
        </div>

        {/* 5 Services Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {internationalPatients.services.map((srv, idx) => (
            <div key={idx} className="bg-white p-7 rounded-3xl border border-warm-beige shadow-soft">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-4">
                {idx === 0 && <MessageCircle className="w-6 h-6" />}
                {idx === 1 && <Plane className="w-6 h-6" />}
                {idx === 2 && <Hotel className="w-6 h-6" />}
                {idx === 3 && <Clock className="w-6 h-6" />}
                {idx === 4 && <ShieldCheck className="w-6 h-6" />}
              </div>
              <h3 className="font-serif font-bold text-lg text-navy mb-2">{srv.title}</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

        {/* Most Requested Treatments */}
        <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <h3 className="font-serif font-bold text-2xl text-white mb-6 text-center">
            Most Popular Treatments for International Patients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalPatients.popularTreatments.map((t, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white rounded-full font-bold text-xs sm:text-sm shadow-premium hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send X-Rays via WhatsApp for Free Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
