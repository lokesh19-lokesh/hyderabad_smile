import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  MapPin, 
  Stethoscope, 
  Play, 
  ChevronRight,
  HeartHandshake,
  Activity,
  Layers,
  Smile,
  ShieldAlert
} from 'lucide-react';
import { siteData } from '../../data/siteData';
import { treatmentsData } from '../../data/treatmentsData';
import { blogPosts } from '../../data/blogPosts';
import TreatmentCard from '../../components/cards/TreatmentCard';
import DoctorCard from '../../components/cards/DoctorCard';
import BlogCard from '../../components/cards/BlogCard';
import AppointmentForm from '../../components/forms/AppointmentForm';
import FAQSection from '../../components/common/FAQSection';

export default function Home({ onOpenBooking }) {
  const [activeBranchTab, setActiveBranchTab] = useState(0);

  const homeFaqs = [
    {
      q: 'How do I book a dental appointment at Hyderabad Smiles?',
      a: 'You can easily book online using our booking form on this website, chat with our team on WhatsApp, or call our centralized patient desk at +91 88016 27272. We confirm all slots within 15 to 30 minutes.'
    },
    {
      q: 'What makes Hyderabad Smiles the first choice for dental implants?',
      a: 'Hyderabad Smiles is led by Senior Oral & Maxillofacial Surgeon Dr. Dilip Kumar Kowkonda (12+ years experience) and is the first dental hospital in Hyderabad with ISO 9001:2008 Certification. We use top international implant systems with 3D CBCT computer guidance, painless anesthesia, and offer "Fixed Teeth in One Day" immediate loading protocols.'
    },
    {
      q: 'Are your dental treatments really painless?',
      a: 'Yes. We utilize computer-controlled local anesthesia, soft-tissue diode lasers, and micro-rotary instruments. Our specialists prioritize gentle care and patient relaxation, ensuring even complex procedures like root canals and implants are completely comfortable.'
    },
    {
      q: 'Which branch is closest to me?',
      a: 'We have 3 prime locations across Hyderabad: Jubilee Hills / Kavuri Hills (near D-Mart), Madhapur (Ayyappa Society Main Road), and Punjagutta (beside Dr. Agarwal Eye Hospital). All branches offer identical high sterilization standards and specialist access.'
    },
    {
      q: 'Do you offer dental tourism and international patient support?',
      a: 'Yes! Over 15% of our patients travel from the US, UK, Australia, UAE, Saudi Arabia, and Africa. We offer virtual treatment planning before arrival, airport transfers, express appointments, and hotel accommodation assistance.'
    }
  ];

  return (
    <div className="bg-warm-ivory min-h-screen text-navy overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (Deep Navy, Elegant Typography, High-End Healthcare Vibe)
      ========================================================================== */}
      <section className="relative hero-gradient text-white pt-6 sm:pt-14 pb-14 sm:pb-24 lg:pb-28 overflow-hidden border-b border-navy-light/40">
        {/* Soft decorative background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dental-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Trust Pill with High Contrast & Readability */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-orange/20 border border-orange/40 text-white text-[11px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange shrink-0" />
                <span className="leading-tight">First ISO 9001:2008 Certified Dental Hospital in Hyderabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.2]">
                Expert Dental Care for a <br className="hidden sm:inline" />
                <span className="italic font-normal text-orange underline decoration-orange/40 decoration-wavy decoration-1">
                  Confident Smile
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                World-class treatments, cutting-edge 3D technology, and experienced MDS dental surgeons — all under one roof across Jubilee Hills, Madhapur & Punjagutta.
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 btn-orange-gradient rounded-full font-bold text-sm tracking-wide shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${siteData.phoneClean}`}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange shrink-0" />
                  <span>Call {siteData.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights below CTA */}
              <div className="mt-7 sm:mt-10 pt-5 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">20+</div>
                  <div className="text-[11px] sm:text-xs text-white/70">Years of Care</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-orange">50,000+</div>
                  <div className="text-[11px] sm:text-xs text-white/70">Happy Smiles</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">50+</div>
                  <div className="text-[11px] sm:text-xs text-white/70">Medical Awards</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative mt-8 sm:mt-12 lg:mt-0">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Main Hero Clinic/Patient Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-navy-light/40 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Hyderabad Smiles Modern Hospital Suite & Patient Care"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent"></div>
                  
                  {/* Floating Rating Badge (Inside container on mobile, perfectly positioned) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md text-navy py-1.5 px-3 sm:py-2.5 sm:px-3.5 rounded-2xl shadow-premium border border-warm-beige flex items-center gap-2 sm:gap-2.5 z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-orange/15 text-orange flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      ★
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-navy leading-none">4.9 / 5 Rating</div>
                      <div className="text-[9px] sm:text-[10px] text-navy/60 mt-0.5">200+ Google Reviews</div>
                    </div>
                  </div>

                  {/* Floating Doctor Profile Card on Image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-navy-deep/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/15 text-white shadow-premium">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-warm-cream border-2 border-orange shrink-0">
                        <img 
                          src="https://hyderabadsmiles.com/wp-content/uploads/2025/05/dr.-dilip-kumar.webp" 
                          alt="Dr. Dilip Kumar Kowkonda"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80';
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-bold text-white truncate">Dr. Dilip Kumar Kowkonda</div>
                        <div className="text-[10px] sm:text-[11px] text-orange truncate">BDS, MDS (Oral & Maxillofacial Surgeon)</div>
                        <div className="text-[9px] sm:text-[10px] text-white/60 truncate">Chief Surgeon • 12+ Yrs Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST INDICATORS BAR (4 Key Pillars with Elegant Line Icons)
      ========================================================================== */}
      <section className="bg-white border-b border-warm-beige/70 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.trustBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-warm-ivory/50 border border-warm-beige/40 hover:border-orange/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                  {idx === 0 && <Stethoscope className="w-6 h-6" />}
                  {idx === 1 && <Sparkles className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-navy">{badge.title}</h4>
                  <p className="text-xs text-navy/70 mt-1 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE TREATMENTS SHOWCASE (Luxury Rounded Cards)
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advanced Dental Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy">
            Specialized Care for Every Dental Need
          </h2>
          <p className="mt-4 text-navy/70 text-base leading-relaxed">
            From single-sitting painless root canals and invisible aligners to full-mouth dental implants and cosmetic smile design, experience international hospital-grade dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.slice(0, 6).map((treatment, idx) => (
            <TreatmentCard key={idx} treatment={treatment} />
          ))}
        </div>

        {/* View All Treatments Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/treatments/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy hover:bg-navy-light text-white rounded-full font-bold text-sm shadow-premium hover:shadow-glow transition-all duration-300"
          >
            <span>View All 12 Dental Specializations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          4. ABOUT SECTION (Split Layout with Clinic Interior, ISO, and Story)
      ========================================================================== */}
      <section className="py-20 bg-warm-cream/50 border-y border-warm-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interior & Facility Photos */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                  alt="Hyderabad Smiles Advanced Clinic Interior"
                  className="w-full h-64 sm:h-80 lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-orange font-bold">World-Class Infrastructure</div>
                  <div className="font-serif font-bold text-lg">Hospital-Grade Sterilization & Comfort</div>
                </div>
              </div>

              {/* ISO Badge Pill */}
              <div className="absolute -bottom-5 -right-5 bg-navy text-white p-4 rounded-2xl shadow-premium border border-white/10 hidden sm:block">
                <div className="text-xs text-orange font-bold">Certified Standard</div>
                <div className="font-serif font-bold text-sm">ISO 9001:2008 Quality</div>
              </div>
            </div>

            {/* Right: Narrative & Verified Accomplishments */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>About Hyderabad Smiles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
                20+ Years of Crafting Smiles with Compassion & Medical Precision
              </h2>
              <p className="mt-5 text-navy/80 text-sm sm:text-base leading-relaxed">
                Hyderabad Smiles Advanced Dental Hospitals is one of the most sophisticated dental institutions in Hyderabad, India. We are proud to be the first dental hospital in the city to earn the prestigious <strong>ISO 9001:2008 Certification</strong>.
              </p>
              <p className="mt-3 text-navy/80 text-sm sm:text-base leading-relaxed">
                Ever since our inception, we have been relentlessly offering international standards of dentistry to our patients. Equipped with state-of-the-art diagnostic technology, 3D intraoral scanners, and in-house laboratory facilities, we restore oral health and gift bright, confident smiles that last a lifetime.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>First ISO 9001:2008 Hospital in Hyderabad</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Recipient of 50+ Healthcare Awards</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Senior MDS Specialist Surgeons</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  <span>Full International Dental Tourism Support</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/about-us/"
                  className="px-6 py-3 bg-navy hover:bg-navy-light text-white rounded-full font-bold text-xs sm:text-sm transition-colors"
                >
                  Read Our Full Hospital Story
                </Link>
                <Link
                  to="/why-choose-us/"
                  className="text-orange hover:text-orange-dark font-bold text-xs sm:text-sm flex items-center gap-1"
                >
                  <span>Why Choose Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. DOCTORS & SPECIALISTS (Verified Real MDS Doctors with Qualifications)
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Medical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
            Meet Our Senior MDS Dental Specialists
          </h2>
          <p className="mt-4 text-navy/70 text-base leading-relaxed">
            Our multidisciplinary team comprises specialized oral & maxillofacial surgeons, endodontists, orthodontists, and periodontists committed to painless excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.doctors.slice(0, 3).map((doctor, idx) => (
            <DoctorCard 
              key={idx} 
              doctor={doctor} 
              onConsult={(name) => onOpenBooking()} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/expert-dentists-in-hyderabad/"
            className="inline-flex items-center gap-2 px-7 py-3 border border-navy/20 hover:border-orange hover:text-orange text-navy rounded-full font-bold text-xs sm:text-sm transition-colors"
          >
            <span>View All Doctor Profiles & Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          6. REAL PATIENT TESTIMONIALS & REVIEWS (Verified Google TrustIndex)
      ========================================================================== */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Patient Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Over 50,000 Happy Smiles Transformed
            </h2>
            <p className="mt-4 text-white/70 text-base">
              Read authentic feedback from patients who underwent root canals, implants, and aligner treatments at our clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.testimonials.slice(0, 6).map((t, idx) => (
              <div 
                key={idx} 
                className="bg-navy-light/40 border border-white/10 p-6 sm:p-7 rounded-3xl flex flex-col justify-between hover:border-orange/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-orange">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-white/50">{t.source}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-orange">{t.treatment}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PATIENT GALLERY TRANSFORMATIONS (Real Before & After)
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
            Smile Transformations — Before & After
          </h2>
          <p className="mt-4 text-navy/70 text-base">
            Witness the real aesthetic and functional results achieved for our patients using porcelain veneers, dental implants, aligners, and laser teeth whitening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.galleryItems.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-warm-beige/70 shadow-soft p-5">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-warm-ivory">
                  <img src={item.before} alt={`${item.title} Before`} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-navy/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Before
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-square bg-warm-ivory">
                  <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    After
                  </span>
                </div>
              </div>
              <h4 className="font-serif font-bold text-base text-navy">{item.title}</h4>
              <p className="text-xs text-navy/70 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-warm-cream hover:bg-warm-beige text-navy rounded-full font-bold text-xs sm:text-sm transition-colors"
          >
            <span>View Complete Before & After Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          8. 3 PRIME BRANCH LOCATIONS (Interactive Tabbed Showcase)
      ========================================================================== */}
      <section className="py-20 bg-warm-cream/40 border-t border-warm-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Accessible Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Visit Our 3 Hospital Centers in Hyderabad
            </h2>
            <p className="mt-4 text-navy/70 text-base">
              Conveniently situated in major commercial and residential hubs for seamless accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.branches.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 border border-warm-beige/80 shadow-soft hover:shadow-premium transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-navy mb-2">{b.name}</h3>
                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed mb-4">
                    {b.address}
                  </p>
                  <div className="p-3 bg-warm-ivory rounded-xl text-xs text-navy/80 space-y-1 mb-6">
                    <div><strong>Landmark:</strong> {b.landmark}</div>
                    <div><strong>Hours:</strong> {b.hours}</div>
                    <div><strong>Phone:</strong> {b.phone}</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-warm-beige/40">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-2.5 btn-orange-gradient rounded-xl font-bold text-xs tracking-wide shadow-sm"
                  >
                    Book at {b.name.split(' ')[0]}
                  </button>
                  <Link
                    to={`/${b.slug}/`}
                    className="block text-center py-2 text-xs font-semibold text-navy hover:text-orange transition-colors"
                  >
                    View Clinic Details & Directions →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. INTEGRATED APPOINTMENT BOOKING SECTION
      ========================================================================== */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6">
        <div className="bg-navy rounded-3xl sm:rounded-4xl p-5 sm:p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="text-xs uppercase tracking-wider text-orange font-bold mb-2">Direct Hospital Scheduling</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Schedule Your Priority Consultation Today
              </h2>
              <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
                Take the first step toward a healthier, brighter smile. Our friendly senior coordinators will confirm your exact appointment slot within 15–30 minutes.
              </p>

              <div className="mt-8 space-y-3 text-xs sm:text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange shrink-0" />
                  <span>Zero waiting time with pre-booked appointments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange shrink-0" />
                  <span>Consultations directly with qualified MDS specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange shrink-0" />
                  <span>Complimentary 3D intraoral digital evaluation</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/15">
                <div className="text-xs text-white/60">Prefer to speak directly right now?</div>
                <div className="text-lg font-bold text-orange mt-0.5">
                  📞 <a href={`tel:${siteData.phoneClean}`} className="hover:underline">{siteData.phone}</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm defaultBranch="Jubilee Hills" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. RECENT BLOG & DENTAL GUIDES PREVIEW
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 border-t border-warm-beige/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-bold text-orange uppercase tracking-wider">Patient Education</div>
            <h2 className="text-3xl font-serif font-bold text-navy mt-1">
              Latest Insights & Dental Health Guides
            </h2>
          </div>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 font-bold text-sm text-navy hover:text-orange transition-colors"
          >
            <span>Browse All 46 Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS
      ========================================================================== */}
      <FAQSection 
        faqs={homeFaqs} 
        title="Frequently Asked Questions about Hyderabad Smiles"
        subtitle="Clear, verified answers to common questions about our dental treatments, appointments, costs, and clinic safety."
      />
    </div>
  );
}
