import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, Sprout } from 'lucide-react';

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5 text-parivara-600" />
            <span>Gardening Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
            Nourishment For Every Plant Type
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Select your garden category to find tailored natural manure and organic soil conditioners.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-4 text-white text-xl font-bold font-sans drop-shadow-sm">
                  {cat.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {cat.shortDescription}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-500">
                    {cat.itemCount} Products Available
                  </span>
                  <Link
                    to={`/shop?category=${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-parivara-700 hover:text-parivara-900 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;
