import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { treatmentsData } from '../../data/treatmentsData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import TreatmentCard from '../../components/cards/TreatmentCard';

export default function TreatmentsIndex({ onOpenBooking }) {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'Treatments', path: '/treatments/' }]} />
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Dental Specialties Under One Roof</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Advanced Dental Treatments & Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Providing advanced, personalized, and painless dental care with cutting-edge technology for a healthier, brighter smile across Jubilee Hills, Madhapur & Punjagutta.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-3.5 btn-orange-gradient rounded-full font-bold text-sm shadow-premium flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Dental Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map((treatment, idx) => (
            <TreatmentCard key={idx} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* Quality Commitment Banner */}
      <section className="py-16 bg-white border-t border-warm-beige/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ShieldCheck className="w-12 h-12 text-orange mx-auto mb-4" />
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-navy">
            First ISO 9001:2008 Certified Dental Hospital in Hyderabad
          </h3>
          <p className="text-navy/70 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            All surgical and cosmetic treatments strictly adhere to international sterilization, biomaterial, and clinical safety standards.
          </p>
        </div>
      </section>
    </div>
  );
}
