import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TreatmentCard({ treatment }) {
  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-warm-beige/70 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Header / Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-cream text-navy">
            {treatment.badge || 'Advanced Dental Care'}
          </span>
          <span className="text-xs text-orange font-bold uppercase tracking-wider">
            Hyderabad Smiles
          </span>
        </div>

        {/* Image Preview */}
        <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-warm-ivory">
          <img
            src={treatment.heroImage}
            alt={treatment.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
          <h4 className="absolute bottom-3 left-3 right-3 text-white font-serif font-bold text-lg drop-shadow-sm">
            {treatment.shortTitle || treatment.title}
          </h4>
        </div>

        {/* Summary Description */}
        <p className="text-navy/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {treatment.summary}
        </p>

        {/* Key Benefits (first 2) */}
        {treatment.benefits && (
          <ul className="space-y-1.5 mb-6 text-xs text-navy/80">
            {treatment.benefits.slice(0, 2).map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                <span className="line-clamp-1">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-warm-beige/40 flex items-center justify-between">
        <Link
          to={`/${treatment.slug}/`}
          className="inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-orange transition-colors"
        >
          <span>Explore Treatment</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-navy/50">MDS Supervised</span>
      </div>
    </div>
  );
}
