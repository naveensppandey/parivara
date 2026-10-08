import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { getProducts } from '../services/productService';
import { CATEGORIES } from '../data/categories';
import { Search, Filter, SlidersHorizontal, RefreshCw, X, Sprout } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('popular');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProductsData();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(
        (p) =>
          p.categorySlug === categoryFilter ||
          p.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
  }, [products, searchQuery, categoryFilter, sortBy]);

  const handleCategoryChange = (slug) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (!val) {
      params.delete('search');
    } else {
      params.set('search', val);
    }
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      <CartDrawer />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Shop Banner Header */}
          <div className="bg-parivara-950 text-white rounded-3xl p-8 sm:p-12 mb-10 border border-parivara-900 shadow-soft">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-800 text-amberGold-400 text-xs font-extrabold uppercase">
                <Sprout className="w-3.5 h-3.5" />
                <span>Parivara Product Catalogue</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
                Natural Farming Products
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Explore our complete range of aged cow manure, rich vermicompost, and organic plant care kits for your home garden.
              </p>
            </div>
          </div>

          {/* Controls Bar: Search, Category Pills, Sort */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-soft mb-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Field */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                />
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange({ target: { value: '' } })}
                    className="absolute right-3 top-3 text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Desktop Category Tabs */}
              <div className="hidden lg:flex items-center gap-2 overflow-x-auto max-w-2xl py-1">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    categoryFilter === 'all'
                      ? 'bg-parivara-800 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  All Products
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                      categoryFilter === cat.slug
                        ? 'bg-parivara-800 text-white font-bold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown & Mobile Filter Button */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="lg:hidden flex items-center gap-2 bg-stone-100 text-stone-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-300"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <span className="hidden sm:inline">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-parivara-600"
                  >
                    <option value="popular">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Mobile Category Bottom Drawer */}
            {isMobileFilterOpen && (
              <div className="lg:hidden pt-4 border-t border-stone-200 space-y-3">
                <span className="text-xs font-bold text-stone-500 uppercase">Categories</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                      categoryFilter === 'all' ? 'bg-parivara-800 text-white' : 'bg-stone-100'
                    }`}
                  >
                    All
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        categoryFilter === cat.slug ? 'bg-parivara-800 text-white' : 'bg-stone-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Active Filter Badges */}
          {(searchQuery || categoryFilter !== 'all') && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-xs font-bold text-stone-500">Active Filters:</span>
              {searchQuery && (
                <span className="bg-amberGold-100 text-stone-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  Search: "{searchQuery}"
                  <button onClick={() => handleSearchChange({ target: { value: '' } })}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="bg-parivara-100 text-parivara-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  Category: {categoryFilter}
                  <button onClick={() => handleCategoryChange('all')}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-xs text-stone-500 hover:text-red-600 underline font-semibold ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Products Grid */}
          {loading ? (
            <div className="py-20 text-center text-stone-500">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-parivara-600 mb-2" />
              <p className="text-sm font-semibold">Loading Parivara products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto border border-stone-200 space-y-4 my-8">
              <div className="w-16 h-16 rounded-full bg-parivara-100 flex items-center justify-center mx-auto text-parivara-700">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800">No products found</h3>
              <p className="text-xs text-stone-500">
                We couldn't find any products matching your search criteria. Try searching for "cow manure", "vermicompost", or "garden".
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-parivara-800 hover:bg-parivara-900 text-white font-bold text-xs px-6 py-2.5 rounded-full"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default ShopPage;
