import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from '../../config/business';
import { useCart } from '../../context/CartContext';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  Sprout,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

const Navbar = ({ onOpenMobileMenu }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItemsCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Plant Care', path: '/plant-care' },
    { name: 'Why Parivara', path: '/why-parivara' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-parivara-700 hover:bg-stone-100 transition"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-parivara-700 to-parivara-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-amberGold-400" />
            </div>
            <div>
              <span className="block text-2xl font-extrabold tracking-wider text-parivara-900 font-sans leading-none">
                PARIVARA
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-earth-600 uppercase mt-0.5">
                {BUSINESS_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 py-1 border-b-2 ${
                  isActive(link.path)
                    ? 'text-parivara-700 border-parivara-700'
                    : 'text-stone-700 border-transparent hover:text-parivara-700 hover:border-parivara-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Search, Cart, WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Input (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative max-w-xs">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 lg:w-56 pl-9 pr-4 py-2 text-sm bg-stone-100 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            </form>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-stone-700 hover:text-parivara-700 hover:bg-parivara-50 rounded-full transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amberGold-500 text-stone-950 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Admin Quick Link */}
            <Link
              to="/admin"
              className="p-2 text-stone-500 hover:text-parivara-800 rounded-full hover:bg-stone-100 text-xs font-medium"
              title="Admin Portal"
            >
              <UserCheck className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
