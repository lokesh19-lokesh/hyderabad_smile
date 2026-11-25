import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { pagesData } from '../../data/pagesData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function VisionMission() {
  const { visionMission } = pagesData;

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'About Us', path: '/about-us/' },
          { label: 'Vision & Mission', path: '/vision-mission/' }
        ]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Compass className="w-3.5 h-3.5" />
            <span>Guiding Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Our Vision & Mission
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Committed to international standards of dentistry, patient education, and long-term oral well-being.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-warm-beige shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-navy mb-4">Our Vision</h2>
            <p className="text-navy/80 text-sm sm:text-base leading-relaxed">
              {visionMission.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-navy p-8 rounded-3xl text-white shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-orange flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-white mb-4">Our Mission</h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {visionMission.mission}
            </p>
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-warm-cream/50 p-8 rounded-3xl border border-warm-beige">
          <h3 className="font-serif font-bold text-2xl text-navy mb-6 text-center">
            Strategic Clinical Objectives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visionMission.objectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-warm-beige/60">
                <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy/80 font-medium">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
