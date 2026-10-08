import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/business';
import {
  Sprout,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Heart,
  ShieldCheck
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-parivara-950 text-stone-300 pt-16 pb-24 md:pb-12 border-t border-parivara-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-parivara-700 flex items-center justify-center text-white">
                <Sprout className="w-6 h-6 text-amberGold-400" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wider">PARIVARA</span>
            </div>
            <p className="text-sm text-stone-400 font-medium leading-relaxed">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-xs text-stone-400">
              Providing natural cow manure and enriched vermicompost for healthier soil and happier plants across Varanasi and Mirzapur.
            </p>
            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amberGold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amberGold-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amberGold-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Products & Shop */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-parivara-800 pb-2">
              Shop Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/product/parivara-cow-manure-2kg" className="hover:text-amberGold-400 transition">
                  Parivara Cow Manure (2 KG)
                </Link>
              </li>
              <li>
                <Link to="/product/parivara-vermicompost-2kg" className="hover:text-amberGold-400 transition">
                  Parivara Vermicompost (2 KG)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=indoor-plants" className="hover:text-amberGold-400 transition">
                  Neem Cake Powder (Upcoming)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=kitchen-garden" className="hover:text-amberGold-400 transition">
                  Enriched Potting Mix (Upcoming)
                </Link>
              </li>
              <li>
                <Link to="/product/parivara-garden-starter-kit" className="hover:text-amberGold-400 transition">
                  Garden Starter Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-parivara-800 pb-2">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="hover:text-amberGold-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Direct Order</span>
                </a>
              </li>
              <li>
                <Link to="/plant-care" className="hover:text-amberGold-400 transition">
                  Plant Doctor & Care Guides
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-amberGold-400 transition">
                  Delivery Area (Varanasi & Mirzapur)
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amberGold-400 transition">
                  Business Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Local Trust */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-parivara-800 pb-2">
              Our Commitment
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Parivara is dedicated to supporting home gardeners and local urban farmers with reliable natural plant nutrients.
            </p>
            <div className="bg-parivara-900 p-3.5 rounded-xl border border-parivara-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amberGold-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Local Service Guaranteed</span>
              </div>
              <p className="text-[11px] text-stone-400">
                Direct doorstep delivery in Varanasi & Mirzapur. Pay on delivery or via UPI after inspection.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-parivara-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 PARIVARA Natural Products. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for local gardeners in</span>
            <span className="text-amberGold-400 font-semibold">Varanasi & Mirzapur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
