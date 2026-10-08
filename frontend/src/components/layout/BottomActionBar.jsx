import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/business';
import { useCart } from '../../context/CartContext';
import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';

const BottomActionBar = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold transition shadow-sm"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Call button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex flex-col items-center justify-center bg-stone-800 hover:bg-stone-900 text-white py-2 rounded-xl text-xs font-bold transition shadow-sm"
        >
          <Phone className="w-5 h-5" />
          <span>Call Us</span>
        </a>

        {/* Cart button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center bg-parivara-700 hover:bg-parivara-800 text-white py-2 rounded-xl text-xs font-bold transition shadow-sm"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Cart ({totalItemsCount})</span>
        </button>
      </div>
    </div>
  );
};

export default BottomActionBar;
