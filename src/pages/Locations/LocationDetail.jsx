import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import AppointmentForm from '../../components/forms/AppointmentForm';
import FAQSection from '../../components/common/FAQSection';

export default function LocationDetail({ branchId, onOpenBooking }) {
  const params = useParams();
  const id = branchId || params.id || 'jubilee-hills';

  // Find branch by slug or id or match URL pattern
  const branch = siteData.branches.find(
    b => b.id === id || b.slug === id || b.altSlug === id
  ) || siteData.branches[0];

  const branchFaqs = [
    {
      q: `How do I reach the Hyderabad Smiles ${branch.name}?`,
      a: `Our clinic is located at ${branch.address}. Landmark: ${branch.landmark}. Ample parking and elevator accessibility are available.`
    },
    {
      q: `What are the working hours for this branch?`,
      a: `${branch.hours}. Prior appointment is recommended for zero wait times.`
    },
    {
      q: `Which dental treatments are available at ${branch.name}?`,
      a: `All dental treatments including single tooth and full-mouth dental implants, fixed teeth in one day, clear aligners, root canals, cosmetic smile design, and pediatric dentistry are performed here by certified MDS specialists.`
    }
  ];

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'Locations', path: '/contact-us/' },
          { label: branch.name, path: `/${branch.slug}/` }
        ]} />
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 relative border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Dental Hospital Branch</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
                Best Dental Clinic in {branch.name.split(' ')[0]}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Advanced dental implants, invisible aligners, and painless root canal treatments at {branch.landmark}.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange" />
                  <span>{branch.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange" />
                  <span>{branch.phone}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 btn-orange-gradient rounded-full font-bold text-sm shadow-premium flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment at {branch.name.split(' ')[0]}</span>
                </button>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-navy-light/40">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt={`Hyderabad Smiles ${branch.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Details + Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4">
                Specialized Treatments at {branch.name}
              </h2>
              <p className="text-navy/80 text-base leading-relaxed">
                Whether you need a single dental implant, full-mouth fixed teeth in one day, clear aligners, or painless root canal therapy, our {branch.name.split(' ')[0]} hospital facility is equipped with state-of-the-art diagnostic imaging and dedicated specialist suites.
              </p>
            </div>

            {/* Branch Highlights */}
            <div className="bg-white p-6 rounded-3xl border border-warm-beige shadow-soft">
              <h3 className="font-serif font-bold text-lg text-navy mb-4">Branch Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branch.highlights && branch.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-navy/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Navigation Details */}
            <div className="bg-warm-cream/50 p-6 rounded-3xl border border-warm-beige">
              <h3 className="font-serif font-bold text-lg text-navy mb-2">Hospital Address</h3>
              <p className="text-sm text-navy/80 leading-relaxed mb-4">{branch.address}</p>
              <div className="text-xs text-navy/70 space-y-1">
                <div><strong>Landmark:</strong> {branch.landmark}</div>
                <div><strong>Direct Helpline:</strong> {branch.phone}</div>
                <div><strong>Email:</strong> {siteData.email}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-7 rounded-3xl border border-warm-beige shadow-premium">
              <div className="text-xs uppercase tracking-wider text-orange font-bold mb-1">
                Priority Booking
              </div>
              <h3 className="font-serif font-bold text-xl text-navy mb-3">
                Book at {branch.name.split(' ')[0]}
              </h3>
              <p className="text-xs text-navy/70 mb-5">
                Select your preferred treatment and date to secure your priority consultation.
              </p>
              <AppointmentForm defaultBranch={branch.name.split(' ')[0]} />
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={branchFaqs} 
        title={`Frequently Asked Questions — ${branch.name}`} 
      />
    </div>
  );
}
