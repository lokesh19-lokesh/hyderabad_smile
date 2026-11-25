import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function Gallery({ onOpenBooking }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Smile Makeover', 'Dental Implants', 'Aligners', 'Teeth Whitening'];

  const filteredItems = filter === 'All' 
    ? siteData.galleryItems 
    : siteData.galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'Patient Gallery', path: '/gallery/' }]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Clinical Outcomes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Smile Transformations — Before & After Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Authentic treatment transformations completed by our senior cosmetic dentists, implantologists, and orthodontists.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-orange text-white shadow-md'
                  : 'bg-white border border-warm-beige text-navy hover:border-orange hover:text-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-warm-beige/80 shadow-soft hover:shadow-premium transition-all p-5"
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-warm-ivory border border-warm-beige/40">
                  <img src={item.before} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-navy/85 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Before
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-warm-ivory border border-warm-beige/40">
                  <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    After
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-warm-cream text-navy">
                  {item.category}
                </span>
                <span className="text-[10px] text-navy/50 font-medium">Hyderabad Smiles Verified</span>
              </div>

              <h3 className="font-serif font-bold text-lg text-navy mb-1">{item.title}</h3>
              <p className="text-xs text-navy/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-navy rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h3 className="font-serif font-bold text-2xl mb-2">Ready for Your Own Smile Transformation?</h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
            Consult with our Digital Smile Design and cosmetic dental team to preview your new smile today.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-3.5 btn-orange-gradient text-white rounded-full font-bold text-xs sm:text-sm shadow-premium"
          >
            Book Free Smile Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
