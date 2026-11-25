import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Plane, Hotel, MessageCircle, Calendar, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function InternationalPatientServices({ onOpenBooking }) {
  const services = [
    {
      title: 'Dedicated Personal Care Manager',
      desc: 'From your first WhatsApp message to your final post-treatment checkup, a dedicated international patient coordinator manages all your appointments, bills, and local transport.'
    },
    {
      title: 'Airport Meet & Greet',
      desc: 'Chauffeur pickup from Hyderabad International Airport (RGIA) directly to your hotel or our hospital facility.'
    },
    {
      title: 'Hotel & Serviced Apartment Assistance',
      desc: 'Preferred rates with luxury and budget hotels in Kavuri Hills, Madhapur, and Jubilee Hills within walking distance of our centers.'
    },
    {
      title: 'Digital Diagnostics & Express Turnaround',
      desc: 'In-house digital CAD/CAM milling and 3D intraoral scanners minimize laboratory turnaround time so you can travel back on schedule.'
    },
    {
      title: 'International Payment Options',
      desc: 'Convenient payment via international credit cards, wire transfers, and transparent itemized receipts for travel and insurance claims.'
    },
    {
      title: 'Remote Post-Op Follow-Up',
      desc: 'Continuous telehealth checkups via video calls once you return home to monitor your long-term healing.'
    }
  ];

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'International Patients', path: '/international-patients/' },
          { label: 'Patient Services', path: '/international-patient-services/' }
        ]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Dedicated Hospitality</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            International Patient Services & Support
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tailored concierge medical services designed to make your dental journey to Hyderabad completely smooth, luxurious, and stress-free.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-7 rounded-3xl border border-warm-beige shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange font-bold flex items-center justify-center mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-serif font-bold text-lg text-navy mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h3 className="font-serif font-bold text-2xl mb-2">Speak with our International Desk</h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
            Available 24/7 on WhatsApp for overseas time zones. Receive prompt medical feedback and personalized treatment estimates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] text-white rounded-full font-bold text-xs sm:text-sm shadow-premium hover:bg-[#20ba59] transition-colors"
            >
              Chat on WhatsApp: +91 88016 27272
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-3.5 btn-orange-gradient text-white rounded-full font-bold text-xs sm:text-sm shadow-premium"
            >
              Book Virtual Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
