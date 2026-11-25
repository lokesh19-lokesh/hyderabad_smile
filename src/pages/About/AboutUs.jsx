import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { pagesData } from '../../data/pagesData';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function AboutUs({ onOpenBooking }) {
  const { aboutUs } = pagesData;

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'About Us', path: '/about-us/' }]} />
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Award className="w-3.5 h-3.5" />
            <span>Over 20 Years of Clinical Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {aboutUs.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {aboutUs.subtitle}
          </p>
        </div>
      </section>

      {/* Story & Infrastructure */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>{aboutUs.isoText}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight mb-6">
              Restoring, Enhancing, and Gifting Smiles with a Lasting Effect
            </h2>
            <div className="text-navy/80 text-sm sm:text-base leading-relaxed space-y-4">
              {aboutUs.story.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 btn-orange-gradient rounded-full font-bold text-xs sm:text-sm shadow-premium flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
              <Link
                to="/expert-dentists-in-hyderabad/"
                className="px-6 py-3.5 bg-white border border-warm-beige hover:border-orange text-navy rounded-full font-bold text-xs sm:text-sm transition-colors flex items-center gap-1"
              >
                <span>Meet Our Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-warm-cream">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Hyderabad Smiles Facility & Patient Comfort"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-wider text-orange font-bold">First in Hyderabad</div>
                <div className="font-serif font-bold text-xl">ISO 9001:2008 Certified Dental Hospital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-warm-cream/50 border-t border-warm-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-serif font-bold text-navy">Our Core Clinical Values</h2>
            <p className="mt-2 text-navy/70 text-sm">
              The fundamental principles that guide our dentists, surgeons, and healthcare staff every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutUs.values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-warm-beige/70 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-navy mb-2">{v.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
