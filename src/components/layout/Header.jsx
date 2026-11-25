import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Globe, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      path: '/about-us/',
      children: [
        { label: 'About Hyderabad Smiles', path: '/about-us/', desc: '20+ years of dental excellence & ISO certification' },
        { label: 'Vision & Mission', path: '/vision-mission/', desc: 'Our clinical philosophy & patient-first mission' },
        { label: 'Why Choose Us', path: '/why-choose-us/', desc: '50+ awards, sterile protocols & advanced tech' },
        { label: 'Our Expert Dentists', path: '/expert-dentists-in-hyderabad/', desc: 'Meet our senior MDS dental surgeons' }
      ]
    },
    {
      label: 'Treatments',
      path: '/treatments/',
      children: [
        { label: 'Dental Implants & Fixed Teeth', path: '/dental-implant/', desc: 'Permanent tooth replacement in 1 day' },
        { label: 'Invisible Clear Aligners', path: '/aligners/', desc: 'Discreet orthodontic smile straightening' },
        { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment-in-hyderabad/', desc: 'Painless single-sitting microscopic RCT' },
        { label: 'Cosmetic Dentistry & Veneers', path: '/cosmetic-dentistry/', desc: 'Aesthetic smile transformations' },
        { label: 'Digital Smile Design (DSD)', path: '/digital-smile-design/', desc: '3D simulated smile architecture' },
        { label: 'Laser Teeth Whitening', path: '/teeth-whitening-in-hyderabad/', desc: 'Instant 6-8 shade brightening' },
        { label: 'Orthodontics & Braces', path: '/orthodontics/', desc: 'Ceramic, self-ligating & metal braces' },
        { label: 'Pediatric Dentistry', path: '/pedodontics/', desc: 'Gentle, fear-free care for children' },
        { label: 'Periodontics & Gum Care', path: '/periodontics/', desc: 'Laser treatment for bleeding & receding gums' },
        { label: 'Crowns & Bridges (Zirconia)', path: '/prosthodontic/', desc: 'CAD/CAM metal-free ceramic restorations' },
        { label: 'Oral & Maxillofacial Surgery', path: '/oral-and-maxillofacial-surgeon/', desc: 'Wisdom teeth removal & jaw surgery' },
        { label: 'View All Treatments', path: '/treatments/', desc: 'Complete spectrum of dental hospital care' }
      ]
    },
    {
      label: 'International Patients',
      path: '/international-patients/',
      children: [
        { label: 'International Patient Care', path: '/international-patients/', desc: 'Global standards at 70% lower costs' },
        { label: 'Dental Tourism in Hyderabad', path: '/dental-tourism/', desc: 'Combine world-class dentistry with travel' },
        { label: 'Airport & Patient Services', path: '/international-patient-services/', desc: 'Airport transfers, lounge & hotel help' }
      ]
    },
    { label: 'Gallery', path: '/gallery/' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Contact', path: '/contact-us/' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. SLIM TOP INFORMATION BAR */}
      <div className="bg-navy-deep text-white/90 text-xs py-2 px-4 sm:px-6 border-b border-navy-light/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Branches Navigation */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="text-orange font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Our Branches:</span>
            </span>
            <Link to="/jubilee-hills/" className="hover:text-orange transition-colors">Jubilee Hills</Link>
            <span className="text-white/30">•</span>
            <Link to="/madhapur-location/" className="hover:text-orange transition-colors">Madhapur</Link>
            <span className="text-white/30">•</span>
            <Link to="/punjagutta-location/" className="hover:text-orange transition-colors">Punjagutta</Link>
            <span className="hidden lg:inline text-white/30">•</span>
            <Link to="/international-patients/" className="hidden lg:flex items-center gap-1 text-orange/90 hover:text-orange font-semibold">
              <Globe className="w-3 h-3" />
              <span>International Patients</span>
            </Link>
          </div>

          {/* Timings and Emergency */}
          <div className="hidden sm:flex items-center gap-4 text-[11px] sm:text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange" />
              <span>Mon-Sat: 9:00 AM – 10:00 PM | Sun: 10:00 AM – 2:00 PM</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-orange font-medium">ISO 9001:2008 Certified</span>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY NAVIGATION BAR */}
      <nav className={`bg-navy transition-all duration-300 ${isScrolled ? 'shadow-premium py-2.5' : 'py-3.5 sm:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img 
              src="/logo.png" 
              alt="Hyderabad Smiles Advanced Dental Hospitals" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-white text-base sm:text-lg tracking-tight leading-none">
                Hyderabad Smiles
              </span>
              <span className="text-[10px] sm:text-[11px] text-orange tracking-wider uppercase font-semibold mt-0.5">
                Advanced Dental Hospitals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, idx) => {
              const hasDropdown = Boolean(item.children);
              const isActive = location.pathname === item.path || 
                (item.children && item.children.some(c => c.path === location.pathname));

              return (
                <div 
                  key={idx} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(hasDropdown ? item.label : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                      isActive 
                        ? 'text-orange' 
                        : 'text-white/90 hover:text-orange hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>

                  {/* Mega Menu / Dropdown */}
                  {hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-72 lg:w-80 animate-fadeIn">
                      <div className="bg-white rounded-2xl shadow-2xl border border-warm-beige/80 p-3 overflow-hidden">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-navy/40 px-3 py-1 mb-1">
                          {item.label} Overview
                        </div>
                        <div className="space-y-1 max-h-[70vh] overflow-y-auto">
                          {item.children.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              className="block px-3 py-2 rounded-xl hover:bg-warm-ivory text-left transition-colors group/sub"
                            >
                              <div className="text-xs font-bold text-navy group-hover/sub:text-orange flex items-center justify-between">
                                <span>{sub.label}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-orange" />
                              </div>
                              {sub.desc && (
                                <p className="text-[11px] text-navy/60 mt-0.5 line-clamp-1">
                                  {sub.desc}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Phone Call Button */}
            <a
              href={`tel:${siteData.phoneClean}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 text-white text-xs font-semibold hover:border-orange hover:text-orange transition-colors"
              title="Call hospital directly"
            >
              <Phone className="w-3.5 h-3.5 text-orange" />
              <span>{siteData.phone}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 btn-orange-gradient rounded-full text-xs font-bold tracking-wide shadow-premium hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Quick Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-3 py-1.5 btn-orange-gradient rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. DEDICATED MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-deep border-t border-navy-light/30 px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto animate-fadeIn">
            {/* Direct Call & WhatsApp Bar */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <a
                href={`tel:${siteData.phoneClean}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/10 text-white rounded-xl text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span>Call Us</span>
              </a>
              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white rounded-xl text-xs font-semibold"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Nav Links & Accordions */}
            <div className="space-y-1">
              {navItems.map((item, idx) => {
                const hasChildren = Boolean(item.children);
                const isExpanded = mobileSubmenu === item.label;

                return (
                  <div key={idx} className="border-b border-white/5 py-1">
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileSubmenu(isExpanded ? null : item.label)}
                          className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white/90 text-left"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isExpanded ? 'rotate-180 text-orange' : ''}`} />
                        </button>
                        {isExpanded && (
                          <div className="pl-4 py-2 space-y-2 bg-black/20 rounded-xl my-1">
                            {item.children.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                className="block text-xs py-1.5 text-white/80 hover:text-orange"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-2 text-sm font-semibold text-white/90 hover:text-orange"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Branches Quick Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange mb-2">
                Our Hospital Branches
              </div>
              <div className="space-y-2 text-xs text-white/70">
                <Link to="/jubilee-hills/" className="block hover:text-white">📍 Jubilee Hills / Kavuri Hills</Link>
                <Link to="/madhapur-location/" className="block hover:text-white">📍 Madhapur (Ayyappa Society)</Link>
                <Link to="/punjagutta-location/" className="block hover:text-white">📍 Punjagutta (Beside Dr. Agarwal Eye)</Link>
              </div>
            </div>

            {/* Full-width Book Appointment in mobile menu */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 btn-orange-gradient rounded-xl font-bold text-sm shadow-premium flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
