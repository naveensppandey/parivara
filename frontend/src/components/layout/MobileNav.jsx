import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/business';
import { CATEGORIES } from '../../data/categories';
import {
  X,
  Search,
  MessageCircle,
  Phone,
  Sprout,
  ChevronRight,
  MapPin,
  ShieldCheck
} from 'lucide-react';

const MobileNav = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="p-4 bg-parivara-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-amberGold-400" />
            <span className="font-extrabold text-lg tracking-wide">PARIVARA</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-parivara-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4 border-b border-stone-200 bg-stone-50">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search manure, compost..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parivara-600"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          </form>
        </div>

        {/* Navigation Links */}
        <div className="p-4 space-y-4 flex-1">
          <div className="space-y-1">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider px-2">Navigation</span>
            {[
              { label: 'Home', path: '/' },
              { label: 'Shop All Products', path: '/shop' },
              { label: 'Plant Care Guide', path: '/plant-care' },
              { label: 'Why Parivara', path: '/why-parivara' },
              { label: 'About Our Business', path: '/about' },
              { label: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-stone-800 hover:bg-parivara-50 hover:text-parivara-800 font-semibold text-sm transition"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            ))}
          </div>

          {/* Categories Quick Links */}
          <div className="pt-4 border-t border-stone-200 space-y-1">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider px-2">Categories</span>
            {CATEGORIES.slice(0, 4).map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 text-sm text-stone-600 hover:text-parivara-700"
              >
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <MapPin className="w-4 h-4 text-parivara-600 shrink-0" />
            <span>Local delivery in Varanasi & Mirzapur</span>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-bold py-2.5 rounded-lg text-sm shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="flex items-center justify-center gap-2 w-full bg-stone-200 text-stone-800 font-bold py-2.5 rounded-lg text-sm hover:bg-stone-300"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default MobileNav;
