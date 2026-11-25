import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  MessageCircle,
  Heart
} from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  const treatmentsNav = [
    { label: 'Dental Implants & Fixed Teeth', path: '/dental-implant/' },
    { label: 'Invisible Clear Aligners', path: '/aligners/' },
    { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment-in-hyderabad/' },
    { label: 'Cosmetic Dentistry & Smile Makeover', path: '/cosmetic-dentistry/' },
    { label: 'Digital Smile Design (DSD)', path: '/digital-smile-design/' },
    { label: 'Laser Teeth Whitening', path: '/teeth-whitening-in-hyderabad/' },
    { label: 'Orthodontics & Braces', path: '/orthodontics/' },
    { label: 'Pediatric Dentistry', path: '/pedodontics/' },
    { label: 'Periodontics & Gum Care', path: '/periodontics/' },
    { label: 'Crowns & Bridges (Zirconia)', path: '/prosthodontic/' },
    { label: 'Oral & Maxillofacial Surgery', path: '/oral-and-maxillofacial-surgeon/' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us/' },
    { label: 'Vision & Mission', path: '/vision-mission/' },
    { label: 'Why Choose Us', path: '/why-choose-us/' },
    { label: 'Our Expert Dentists', path: '/expert-dentists-in-hyderabad/' },
    { label: 'International Patients', path: '/international-patients/' },
    { label: 'Dental Tourism', path: '/dental-tourism/' },
    { label: 'Patient Gallery (Before/After)', path: '/gallery/' },
    { label: 'Dental Blog & Guides', path: '/blog/' },
    { label: 'Contact Us', path: '/contact-us/' },
    { label: 'Privacy Policy', path: '/privacy-policy/' }
  ];

  return (
    <footer className="bg-navy-deep text-white border-t border-navy-light/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP CALLOUT BAR */}
        <div className="bg-navy p-6 sm:p-8 rounded-3xl border border-white/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-orange/20 text-orange flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-orange font-bold">
                Quality Healthcare Assurance
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                First ISO 9001:2008 Certified Dental Hospital in Hyderabad
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                Over 20 years of clinical distinction, 50+ awards, and 50,000+ smiling patients.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 btn-orange-gradient rounded-full text-xs font-bold tracking-wide shadow-premium hover:shadow-glow transition-all"
            >
              Book Appointment Now
            </button>
            <a
              href={`tel:${siteData.phoneClean}`}
              className="px-5 py-3 rounded-full border border-white/20 hover:border-orange hover:text-orange text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteData.phone}</span>
            </a>
          </div>
        </div>

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Hyderabad Smiles Logo" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-serif font-bold text-lg text-white">Hyderabad Smiles</div>
                <div className="text-[10px] text-orange tracking-wider uppercase font-semibold">
                  Advanced Dental Hospitals
                </div>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Hyderabad Smiles is a premier multi-specialty dental hospital delivering advanced cosmetic, implant, orthodontic, and restorative dentistry across 3 state-of-the-art centers in Hyderabad.
            </p>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <a href={`tel:${siteData.phoneClean}`} className="hover:text-orange transition-colors">
                  {siteData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-orange transition-colors">
                  {siteData.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange shrink-0" />
                <span>Mon–Sat: 9AM–10PM | Sun: 10AM–2PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Treatments */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange"></span>
              <span>Our Dental Treatments</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {treatmentsNav.map((t, i) => (
                <li key={i}>
                  <Link to={t.path} className="hover:text-orange transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-2.5 h-2.5 text-orange/60 group-hover:translate-x-1 group-hover:text-orange transition-all" />
                    <span>{t.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange"></span>
              <span>Quick Links & Information</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {quickLinks.map((ql, i) => (
                <li key={i}>
                  <Link to={ql.path} className="hover:text-orange transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-2.5 h-2.5 text-orange/60 group-hover:translate-x-1 group-hover:text-orange transition-all" />
                    <span>{ql.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Branch Locations */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange"></span>
              <span>Our 3 Prime Locations</span>
            </h4>
            <div className="space-y-4 text-xs text-white/70">
              {siteData.branches.map((b, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-2xl border border-white/5 hover:border-orange/30 transition-colors">
                  <div className="font-bold text-white text-xs mb-1 flex items-center justify-between">
                    <span>{b.name}</span>
                    <Link to={`/${b.slug}/`} className="text-orange text-[11px] hover:underline">
                      View Clinic
                    </Link>
                  </div>
                  <p className="text-[11px] text-white/60 line-clamp-2">
                    {b.address}
                  </p>
                  <div className="mt-1 text-[11px] text-white/80 font-medium">
                    📞 {b.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <div>
            © {currentYear} Hyderabad Smiles Advanced Dental Hospitals. All rights reserved. First ISO 9001:2008 Certified Dental Hospital in Hyderabad.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact-us/" className="hover:text-white transition-colors">Hospital Locations</Link>
            <span>•</span>
            <Link to="/blog/" className="hover:text-white transition-colors">Dental Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
