import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from '../../config/business';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  Truck
} from 'lucide-react';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItemsCount
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = BUSINESS_CONFIG.freeDeliveryThreshold;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = subtotal === 0 ? 0 : isFreeDelivery ? 0 : BUSINESS_CONFIG.standardDeliveryFee;
  const totalAmount = subtotal + deliveryFee;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsText = cart.map((item) => `${item.name} (${item.weight}) x ${item.quantity}`).join('\n');
    const text = `Hello Parivara,\n\nI would like to place an order from my cart:\n\n${itemsText}\n\n*Estimated Total*: ₹${totalAmount}\n\nPlease confirm availability and delivery in Varanasi/Mirzapur.`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        
        {/* Header */}
        <div className="p-4 bg-parivara-950 text-white flex items-center justify-between border-b border-parivara-900">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amberGold-400" />
            <span className="font-extrabold text-base tracking-wide">
              Your Cart ({totalItemsCount})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-parivara-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar Progress */}
        <div className="bg-parivara-50 p-3 border-b border-parivara-200 text-xs text-parivara-900">
          {isFreeDelivery ? (
            <div className="flex items-center gap-1.5 font-bold text-emerald-700">
              <Truck className="w-4 h-4" />
              <span>🎉 You qualify for FREE Delivery in Varanasi & Mirzapur!</span>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span>Add ₹{freeDeliveryThreshold - subtotal} more for FREE Delivery</span>
                <span>₹{subtotal} / ₹{freeDeliveryThreshold}</span>
              </div>
              <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-parivara-600 h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-stone-800 text-lg">Your cart is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our natural cow manure and enriched vermicompost for your garden!
                </p>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/shop');
                }}
                className="bg-parivara-700 hover:bg-parivara-800 text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 rounded-2xl bg-stone-50 border border-stone-200"
              >
                {/* Item Thumbnail */}
                <img
                  src={item.images ? item.images[0] : '/images/products/parivara-cow-manure-2kg.jpg'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl bg-white border border-stone-200 shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-900 text-sm truncate">{item.name}</h4>
                  <span className="text-xs font-semibold text-stone-500 block">{item.weight}</span>
                  <span className="text-sm font-extrabold text-parivara-900 block mt-0.5">
                    ₹{item.price}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone-400 hover:text-red-600 transition p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden text-xs">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-stone-100 text-stone-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2.5 font-bold text-stone-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-stone-100 text-stone-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-stone-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="font-bold text-stone-900">
                  {deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                <span>Total Amount</span>
                <span className="text-parivara-900 text-base">₹{totalAmount}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-parivara-700 hover:bg-parivara-800 text-white font-extrabold py-3 rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Proceed to Order Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm shadow-sm transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>1-Click Order on WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
