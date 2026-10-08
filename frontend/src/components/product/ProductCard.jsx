import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { getWhatsAppOrderUrl } from '../../config/business';
import { ShoppingBag, Star, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`${product.name} added to cart!`, 'success');
  };

  const whatsappUrl = getWhatsAppOrderUrl(product.name, 1, product.price);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Product Image & Badges */}
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="bg-parivara-800 text-amberGold-400 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          <span className="bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
            {product.weight}
          </span>
        </div>

        {/* Stock Status Badge */}
        {product.availability === 'UPCOMING' && (
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] flex items-center justify-center p-4">
            <span className="bg-amberGold-500 text-stone-950 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Product Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-stone-700 font-extrabold">{product.rating}</span>
            <span className="text-stone-400">({product.reviewCount})</span>
          </div>

          {/* Product Title */}
          <Link
            to={`/product/${product.slug}`}
            className="block text-lg font-extrabold text-stone-900 hover:text-parivara-700 transition-colors line-clamp-1 font-sans"
          >
            {product.name}
          </Link>

          {/* Short Description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing */}
        <div className="pt-2 border-t border-stone-100 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-parivara-900">
            ₹{product.price}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm font-semibold text-stone-400 line-through">
              ₹{product.compareAtPrice}
            </span>
          )}
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            Inclusive of taxes
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          {product.availability !== 'UPCOMING' ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleAddToCart}
                className="w-full bg-parivara-700 hover:bg-parivara-800 text-white text-xs font-extrabold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          ) : (
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello Parivara, please notify me when ${product.name} is back in stock.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
            >
              <span>Notify Me on WhatsApp</span>
            </a>
          )}

          <Link
            to={`/product/${product.slug}`}
            className="w-full text-center block text-xs font-bold text-stone-500 hover:text-parivara-800 py-1 transition"
          >
            View Details & Instructions →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
