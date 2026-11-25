import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { pagesData } from '../../data/pagesData';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function WhyChooseUs({ onOpenBooking }) {
  const { whyChooseUs } = pagesData;

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'About Us', path: '/about-us/' },
          { label: 'Why Choose Us', path: '/why-choose-us/' }
        ]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Award className="w-3.5 h-3.5" />
            <span>The Hyderabad Smiles Advantage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Why Choose Hyderabad Smiles?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {whyChooseUs.subtitle}
          </p>
        </div>
      </section>

      {/* Grid of 6 Key Differentiators */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-3xl border border-warm-beige shadow-soft hover:shadow-premium transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center font-serif font-bold text-lg mb-5">
                0{idx + 1}
              </div>
              <h3 className="font-serif font-bold text-lg text-navy mb-2">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-navy rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-premium">
          <div>
            <h3 className="font-serif font-bold text-2xl text-white">
              Experience the Highest Standards of Dental Care
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1">
              Consult with senior MDS doctors at Jubilee Hills, Madhapur, or Punjagutta.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3.5 btn-orange-gradient rounded-full font-bold text-xs sm:text-sm shadow-premium shrink-0"
          >
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
