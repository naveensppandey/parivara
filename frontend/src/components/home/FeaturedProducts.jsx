import React from 'react';
import ProductCard from '../product/ProductCard';
import { INITIAL_PRODUCTS } from '../../data/products';
import { Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featured = INITIAL_PRODUCTS.filter((p) => p.featured);

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sprout className="w-3.5 h-3.5 text-parivara-600" />
              <span>Natural Soil Nourishment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
              Featured Products
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-xl">
              Cleanly processed, 100% natural organic manures tested for home gardens and potted plants in Varanasi & Mirzapur.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-parivara-700 hover:text-parivara-900 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
