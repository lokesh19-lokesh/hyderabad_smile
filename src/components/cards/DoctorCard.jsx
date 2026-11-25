import React from 'react';
import { Award, CheckCircle, GraduationCap } from 'lucide-react';

export default function DoctorCard({ doctor, onConsult }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-warm-beige/70 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Doctor Photo */}
        <div className="relative h-72 bg-gradient-to-b from-warm-cream to-white overflow-hidden flex items-end justify-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-full w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // fallback if remote image fails
              e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80';
            }}
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy flex items-center gap-1.5 shadow-sm">
            <Award className="w-3.5 h-3.5 text-orange" />
            <span>{doctor.experience}</span>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-6">
          <h3 className="font-serif font-bold text-xl text-navy group-hover:text-orange transition-colors">
            {doctor.name}
          </h3>
          <p className="text-orange font-semibold text-xs mt-1">
            {doctor.title}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-navy/60 mt-1">
            <GraduationCap className="w-3.5 h-3.5 text-navy/40 shrink-0" />
            <span>{doctor.qualifications}</span>
          </div>

          <p className="text-navy/70 text-xs leading-relaxed mt-3 line-clamp-3">
            {doctor.bio}
          </p>

          {/* Specialties Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {doctor.specialties && doctor.specialties.slice(0, 3).map((spec, i) => (
              <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-warm-ivory border border-warm-beige/60 text-navy/80 font-medium">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onConsult && onConsult(doctor.name)}
          className="w-full py-2.5 px-4 bg-navy hover:bg-orange text-white rounded-xl font-semibold text-xs tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
        >
          <span>Consult {doctor.name.split(' ')[1] || 'Doctor'}</span>
        </button>
      </div>
    </div>
  );
}
