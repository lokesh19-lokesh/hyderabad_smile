import React from 'react';
import { Phone, Mail, Clock, MapPin, MessageCircle, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import AppointmentForm from '../../components/forms/AppointmentForm';
import FAQSection from '../../components/common/FAQSection';

export default function ContactUs() {
  const contactFaqs = [
    {
      q: 'How can I book an appointment at Hyderabad Smiles?',
      a: 'You can book an appointment by calling us at +91 88016 27272, WhatsApp us, or filling out the appointment form on this page. Walk-ins are also welcome, but we recommend booking in advance to avoid waiting.'
    },
    {
      q: 'What are your clinic working hours?',
      a: 'Our clinics are open Monday to Saturday from 9:00 AM to 10:00 PM and Sunday from 10:00 AM to 2:00 PM.'
    },
    {
      q: 'Where are your branches located in Hyderabad?',
      a: 'We have 3 fully equipped hospital centers: in Jubilee Hills / Kavuri Hills (near D-Mart), Madhapur (Ayyappa Society Main Road), and Punjagutta (beside Dr. Agarwal Eye Hospital).'
    },
    {
      q: 'How often should I visit the dentist for a routine checkup?',
      a: 'For most individuals, a routine dental checkup and scaling every six months is recommended to maintain optimal oral health and detect any dental decay or gum disease early.'
    },
    {
      q: 'What should I do in case of a dental emergency or severe toothache?',
      a: 'Call our emergency helpline immediately at +91 88016 27272. We provide priority same-day pain relief, emergency root canal treatments, and dental trauma care.'
    }
  ];

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact-us/' }]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Patient Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Connect with the Dentist Directly!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We’re here to help you achieve your best smile. Contact Hyderabad Smiles Advanced Dental Hospitals today!
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Branches */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-orange font-bold mb-1">Get in Touch</div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4">
                Hospital Contact Information
              </h2>
              <p className="text-navy/70 text-sm leading-relaxed">
                Looking for the best dental care near you in Hyderabad? Hyderabad Smiles is your trusted partner for comprehensive and compassionate dental treatments.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-4">
              <a
                href={`tel:${siteData.phoneClean}`}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-beige/80 hover:border-orange transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-navy/50 font-semibold uppercase">Call Us Directly</div>
                  <div className="text-base font-bold text-navy group-hover:text-orange transition-colors">
                    {siteData.phone}
                  </div>
                  <div className="text-xs text-navy/60">Available 9:00 AM – 10:00 PM</div>
                </div>
              </a>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-beige/80 hover:border-[#25D366] transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-navy/50 font-semibold uppercase">WhatsApp Chat</div>
                  <div className="text-base font-bold text-navy group-hover:text-[#25D366] transition-colors">
                    Chat with Doctor Coordinator
                  </div>
                  <div className="text-xs text-navy/60">Quick responses & report reviews</div>
                </div>
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-beige/80 hover:border-orange transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-navy/50 font-semibold uppercase">Email Us</div>
                  <div className="text-base font-bold text-navy group-hover:text-orange transition-colors">
                    {siteData.email}
                  </div>
                  <div className="text-xs text-navy/60">For treatment plans & corporate queries</div>
                </div>
              </a>
            </div>

            {/* Timings Box */}
            <div className="p-6 bg-navy rounded-3xl text-white shadow-soft">
              <h3 className="font-serif font-bold text-lg mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange" />
                <span>Working Timings</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Monday – Saturday:</span>
                  <strong className="text-white">9:00 AM – 10:00 PM</strong>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Sunday:</span>
                  <strong className="text-orange">10:00 AM – 2:00 PM</strong>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Emergency On-Call:</span>
                  <strong className="text-white">24/7 Helpline</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-warm-beige shadow-premium">
              <div className="text-xs uppercase tracking-wider text-orange font-bold mb-1">
                Online Reservation
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-2">
                Book Your Dental Appointment
              </h2>
              <p className="text-xs sm:text-sm text-navy/70 mb-6 leading-relaxed">
                Fill in your details below. Our senior hospital coordinator will confirm your exact slot within 15–30 minutes.
              </p>
              <AppointmentForm />
            </div>
          </div>
        </div>

        {/* 3 Physical Branches Detailed */}
        <div className="mt-20 pt-16 border-t border-warm-beige">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy">Our 3 Hospital Branches</h2>
            <p className="text-navy/70 text-sm mt-2">
              Visit our state-of-the-art dental centers located in Hyderabad's prime destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.branches.map((b, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-warm-beige/80 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-orange uppercase tracking-wider mb-2">Branch #{idx + 1}</div>
                  <h3 className="font-serif font-bold text-xl text-navy mb-3">{b.name}</h3>
                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed mb-4">{b.address}</p>
                  <div className="text-xs text-navy/80 space-y-1 mb-6 p-3 bg-warm-ivory rounded-xl">
                    <div><strong>Landmark:</strong> {b.landmark}</div>
                    <div><strong>Phone:</strong> {b.phone}</div>
                    <div><strong>Timings:</strong> {b.hours}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-warm-beige/40">
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 bg-navy hover:bg-navy-light text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Get Google Maps Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection 
        faqs={contactFaqs} 
        title="Frequently Asked Questions about Appointments & Visiting"
      />
    </div>
  );
}
