import React, { useState } from 'react';
import { Search, BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import BlogCard from '../../components/cards/BlogCard';

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    'All',
    'Dental Implants',
    'Aligners & Braces',
    'Root Canal Treatment',
    'Teeth Whitening & Cost',
    'Pediatric & Family'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Dental Implants') return post.title.toLowerCase().includes('implant');
    if (selectedCategory === 'Aligners & Braces') return post.title.toLowerCase().includes('aligner') || post.title.toLowerCase().includes('brace');
    if (selectedCategory === 'Root Canal Treatment') return post.title.toLowerCase().includes('root canal');
    if (selectedCategory === 'Teeth Whitening & Cost') return post.title.toLowerCase().includes('whitening') || post.title.toLowerCase().includes('cost');
    if (selectedCategory === 'Pediatric & Family') return post.title.toLowerCase().includes('pediatric') || post.title.toLowerCase().includes('family');

    return true;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="bg-warm-ivory min-h-screen text-navy">
      <div className="bg-warm-cream/50 border-b border-warm-beige/50">
        <Breadcrumbs items={[{ label: 'Blog & Dental Guides', path: '/blog/' }]} />
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-16 sm:py-20 text-center relative border-b border-navy-light/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-orange text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dental Knowledge & Research</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Hyderabad Smiles Dental Health Blog
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Expert clinical guides, procedure insights, recovery advice, and transparent cost breakdowns from our dental specialists.
          </p>

          {/* Search Input in Hero */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-navy/40 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, e.g. implants cost, aligners, root canal..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-navy text-sm placeholder:text-navy/40 focus:outline-none focus:ring-4 focus:ring-orange/30 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(12);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white border border-warm-beige text-navy hover:border-orange hover:text-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Total Count Info */}
        <div className="mb-6 flex items-center justify-between text-xs text-navy/60 border-b border-warm-beige/40 pb-3">
          <span>Showing {displayedPosts.length} of {filteredPosts.length} articles</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-orange hover:underline font-semibold"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Posts Grid */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, idx) => (
              <BlogCard key={idx} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-warm-beige">
            <h3 className="font-serif font-bold text-xl text-navy">No articles found matching "{searchQuery}"</h3>
            <p className="text-navy/60 text-xs mt-2">Try searching for keywords like "aligners", "implants", or "costs".</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3.5 bg-white border border-warm-beige hover:border-orange hover:text-orange text-navy rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Load More Articles ({filteredPosts.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
