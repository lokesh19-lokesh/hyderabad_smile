import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Stethoscope, 
  UserCheck, 
  Award, 
  Clock,
  Layers,
  HelpCircle
} from 'lucide-react';
import { treatmentsData } from '../../data/treatmentsData';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import AppointmentForm from '../../components/forms/AppointmentForm';
import FAQSection from '../../components/common/FAQSection';

export default function TreatmentDetail({ customSlug, onOpenBooking }) {
  const params = useParams();
  const slug = customSlug || params.slug || 'dental-implant';

  // Find matching treatment by slug or altSlug
  const treatment = treatmentsData.find(
    t => t.slug === slug || t.altSlug === slug || t.id === slug
  ) || treatmentsData[0];

  const relatedTreatments = treatmentsData.filter(t => t.id !== treatment.id).slice(0, 3);

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      {/* 1. BREADCRUMBS */}
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'Treatments', path: '/treatments/' },
          { label: treatment.title, path: `/${treatment.slug}/` }
        ]} />
      </div>

      {/* 2. TREATMENT HERO SECTION */}
      <section className="relative hero-gradient text-white py-14 sm:py-20 overflow-hidden border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{treatment.badge || 'Advanced Dental Care'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {treatment.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                {treatment.summary}
              </p>

              {/* Doctor In Charge Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3 max-w-xl">
                <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wider">Supervising Specialist</div>
                  <div className="text-sm font-bold text-white">{treatment.doctor}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-3.5 btn-orange-gradient rounded-full font-bold text-sm shadow-premium hover:shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Consultation for {treatment.shortTitle}</span>
                </button>
                <a
                  href={`tel:${siteData.phoneClean}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange shrink-0" />
                  <span>Call {siteData.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-navy-light/40">
                <img
                  src={treatment.heroImage}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                  ISO 9001:2008 Certified Clinical Protocol
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL OVERVIEW & BENEFITS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4">
              Understanding {treatment.title}
            </h2>
            <p className="text-navy/80 text-base leading-relaxed mb-8">
              {treatment.overview}
            </p>

            {/* Benefits Box */}
            <div className="bg-white p-7 rounded-3xl border border-warm-beige shadow-soft mb-12">
              <h3 className="font-serif font-bold text-xl text-navy mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange" />
                <span>Key Clinical Benefits</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.benefits && treatment.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80">
                    <CheckCircle2 className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Procedure */}
            {treatment.procedureSteps && treatment.procedureSteps.length > 0 && (
              <div className="mb-12">
                <h3 className="font-serif font-bold text-2xl text-navy mb-6">
                  Step-by-Step Procedure at Hyderabad Smiles
                </h3>
                <div className="space-y-4">
                  {treatment.procedureSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-warm-beige/70 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange font-serif font-bold text-lg flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-base text-navy">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-navy/70 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Treatment Options / Variations */}
            {treatment.options && treatment.options.length > 0 && (
              <div className="mb-12">
                <h3 className="font-serif font-bold text-2xl text-navy mb-6">
                  Treatment Options & Variations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.options.map((opt, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-warm-beige/60">
                      <h4 className="font-serif font-bold text-base text-navy mb-1">{opt.name}</h4>
                      <p className="text-xs text-navy/70 leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Consultation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Appointment Booking Card */}
              <div className="bg-white p-6 rounded-3xl border border-warm-beige shadow-soft">
                <div className="text-xs uppercase tracking-wider text-orange font-bold mb-1">
                  Book Consultation
                </div>
                <h3 className="font-serif font-bold text-xl text-navy mb-3">
                  Consult for {treatment.shortTitle}
                </h3>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Reserve a slot with our MDS specialists at Jubilee Hills, Madhapur, or Punjagutta.
                </p>
                <AppointmentForm defaultTreatment={treatment.title} />
              </div>

              {/* Direct Help Callout */}
              <div className="bg-navy p-6 rounded-3xl text-white shadow-soft">
                <h4 className="font-serif font-bold text-base mb-1">Have Questions?</h4>
                <p className="text-xs text-white/70 mb-4">
                  Speak directly with our senior dental patient coordinator.
                </p>
                <a
                  href={`tel:${siteData.phoneClean}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-orange hover:text-white border border-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteData.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection 
        faqs={treatment.faqs} 
        title={`Frequently Asked Questions about ${treatment.shortTitle}`}
        subtitle={`Everything you need to know about ${treatment.shortTitle} procedure, costs, and recovery.`}
      />

      {/* 5. RELATED TREATMENTS */}
      <section className="py-16 bg-warm-cream/50 border-t border-warm-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-orange font-bold">Comprehensive Care</div>
              <h3 className="font-serif font-bold text-2xl text-navy">Related Dental Treatments</h3>
            </div>
            <Link to="/treatments/" className="text-xs font-bold text-navy hover:text-orange flex items-center gap-1">
              <span>All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTreatments.map((rt, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-warm-beige/70 hover:border-orange transition-colors">
                <h4 className="font-serif font-bold text-base text-navy mb-1">{rt.title}</h4>
                <p className="text-xs text-navy/70 line-clamp-2 mb-3">{rt.summary}</p>
                <Link to={`/${rt.slug}/`} className="text-xs font-bold text-orange flex items-center gap-1 hover:underline">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
