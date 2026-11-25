import React from 'react';
import { Users, GraduationCap, Award, Calendar } from 'lucide-react';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import DoctorCard from '../../components/cards/DoctorCard';

export default function ExpertDentists({ onOpenBooking }) {
  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'About Us', path: '/about-us/' },
          { label: 'Expert Dentists', path: '/expert-dentists-in-hyderabad/' }
        ]} />
      </div>

      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Users className="w-3.5 h-3.5" />
            <span>Senior MDS Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Meet Our World-Class Dental Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience clinical mastery, gentle bedside manner, and specialized care across all dental disciplines.
          </p>
        </div>
      </section>

      {/* Complete Doctor Roster */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.doctors.map((doc, idx) => (
            <DoctorCard 
              key={idx} 
              doctor={doc} 
              onConsult={(name) => onOpenBooking()} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
