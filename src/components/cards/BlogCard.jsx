import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-warm-beige/70 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Featured Image */}
        <div className="relative h-48 overflow-hidden bg-warm-ivory">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80';
            }}
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold">
            {post.category || 'Dental Health'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-navy/50 mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h3 className="font-serif font-bold text-lg text-navy group-hover:text-orange transition-colors leading-snug line-clamp-2">
            <Link to={`/blog/${post.slug}/`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-navy/70 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          to={`/blog/${post.slug}/`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:text-orange-dark transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
