import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, Share2, Calendar as CalIcon } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { siteData } from '../../data/siteData';
import Breadcrumbs from '../../components/common/Breadcrumbs';

export default function BlogArticle({ customSlug, onOpenBooking }) {
  const params = useParams();
  const slug = customSlug || params.slug;

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[
          { label: 'Blog', path: '/blog/' },
          { label: post.title, path: `/blog/${post.slug}/` }
        ]} />
      </div>

      <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-navy/60 mb-3">
            <span className="px-3 py-1 rounded-full bg-orange/10 text-orange font-bold uppercase tracking-wider text-[11px]">
              {post.category || 'Dental Health'}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed italic border-l-4 border-orange pl-4">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-soft border border-warm-beige/60 aspect-[16/9] mb-10 bg-warm-cream">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </div>

        {/* Table of Contents */}
        {post.headings && post.headings.length > 0 && (
          <div className="p-6 bg-white rounded-2xl border border-warm-beige shadow-sm mb-10">
            <h3 className="font-serif font-bold text-base text-navy mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange" />
              <span>In This Article</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-navy/70">
              {post.headings.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0"></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Preserved Full Article Content */}
        <div 
          className="prose prose-navy max-w-none text-navy/85 text-base sm:text-lg leading-relaxed space-y-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-6 [&_strong]:text-navy [&_a]:text-orange [&_a]:font-semibold [&_a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & Booking Action Footer */}
        <div className="mt-12 pt-8 border-t border-warm-beige flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-warm-beige hover:border-orange text-navy rounded-full text-xs font-semibold transition-colors"
          >
            <Share2 className="w-4 h-4 text-orange" />
            <span>Share This Article</span>
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 btn-orange-gradient text-white rounded-full font-bold text-xs sm:text-sm shadow-premium flex items-center gap-2"
          >
            <CalIcon className="w-4 h-4" />
            <span>Consult Hyderabad Smiles Specialists</span>
          </button>
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 bg-white rounded-3xl border border-warm-beige/80 shadow-soft flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-warm-cream border-2 border-orange shrink-0">
            <img
              src="https://hyderabadsmiles.com/wp-content/uploads/2025/05/dr.-dilip-kumar.webp"
              alt="Dr. Dilip Kumar Kowkonda"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80';
              }}
            />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange">Medical Reviewer</div>
            <h4 className="font-serif font-bold text-base text-navy">Dr. Dilip Kumar Kowkonda & Editorial Team</h4>
            <p className="text-xs text-navy/70 mt-1">
              Reviewed and published by Hyderabad Smiles Advanced Dental Hospitals. First ISO 9001:2008 Certified Dental Hospital in Hyderabad.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-warm-beige">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif font-bold text-2xl text-navy">Related Dental Health Articles</h3>
            <Link to="/blog/" className="text-xs font-bold text-orange flex items-center gap-1 hover:underline">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rp, idx) => (
              <Link 
                key={idx}
                to={`/blog/${rp.slug}/`}
                className="group block bg-white p-4 rounded-2xl border border-warm-beige/70 hover:border-orange transition-all"
              >
                <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-warm-cream">
                  <img src={rp.featuredImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-navy group-hover:text-orange line-clamp-2 leading-snug">
                  {rp.title}
                </h4>
                <div className="text-[11px] text-navy/50 mt-1">{rp.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
