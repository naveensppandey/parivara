import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { createOrder } from '../services/orderService';
import { BUSINESS_CONFIG } from '../config/business';
import { ShoppingBag, Truck, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { cart, subtotal, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const freeDeliveryThreshold = BUSINESS_CONFIG.freeDeliveryThreshold;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = subtotal === 0 ? 0 : isFreeDelivery ? 0 : BUSINESS_CONFIG.standardDeliveryFee;
  const totalAmount = subtotal + deliveryFee;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Varanasi',
    pincode: '',
    deliveryPreference: 'Standard Doorstep Delivery',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      addToast('Please fill in required fields (Name, Phone, Address)', 'error');
      return;
    }

    if (cart.length === 0) {
      addToast('Your cart is empty!', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const orderPayload = {
        customerName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        deliveryPreference: formData.deliveryPreference,
        notes: formData.notes,
        items: cart.map(item => ({
          productId: item.id,
          productName: item.name,
          weight: item.weight,
          price: item.price,
          quantity: item.quantity,
          itemTotal: item.price * item.quantity
        })),
        subtotal,
        deliveryFee,
        totalAmount,
        status: 'NEW',
        paymentMethod: 'Cash / UPI on Delivery'
      };

      const result = await createOrder(orderPayload);
      clearCart();
      addToast('Order placed successfully!', 'success');
      navigate(`/order-confirmation/${result.id}`, { state: { order: result } });
    } catch (err) {
      console.error(err);
      addToast('Failed to submit order. Please try WhatsApp ordering.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight mb-8">
            Complete Your Order
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-stone-200 space-y-4">
              <ShoppingBag className="w-12 h-12 text-stone-400 mx-auto" />
              <h3 className="text-xl font-bold text-stone-800">Your cart is empty</h3>
              <Link to="/shop" className="inline-block bg-parivara-800 text-white font-bold text-xs px-6 py-2.5 rounded-full">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Order Form Column */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-soft">
                <h2 className="text-xl font-bold text-stone-900 font-sans border-b border-stone-100 pb-4 mb-6">
                  Customer & Delivery Information
                </h2>

                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                      Full Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows="3"
                      placeholder="House/Flat No., Colony, Landmark, Area"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        City / Service Area *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-parivara-600"
                      >
                        <option value="Varanasi">Varanasi</option>
                        <option value="Mirzapur">Mirzapur</option>
                        <option value="Other">Other Area</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="e.g. 221005"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                      Delivery Notes / Instructions
                    </label>
                    <input
                      type="text"
                      name="notes"
                      placeholder="e.g. Call before delivery, drop at gate"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                    />
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-parivara-700 hover:bg-parivara-800 text-white font-extrabold py-4 px-6 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-base active:scale-95 disabled:opacity-50"
                    >
                      <span>{submitting ? 'Submitting Order...' : 'Submit Order / Request Delivery'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-[11px] text-stone-500 text-center mt-2">
                      🔒 No payment required now. Our team will contact you to confirm delivery & availability.
                    </p>
                  </div>
                </form>
              </div>

              {/* Order Summary Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-4">
                  <h3 className="font-bold text-stone-900 text-lg font-sans border-b border-stone-100 pb-3">
                    Order Summary ({cart.length} Items)
                  </h3>

                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs py-2 border-b border-stone-100">
                        <div>
                          <span className="font-extrabold text-stone-900 block">{item.name}</span>
                          <span className="text-stone-500">{item.weight} x {item.quantity}</span>
                        </div>
                        <span className="font-bold text-stone-900 text-sm">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs pt-3 border-t border-stone-200">
                    <div className="flex justify-between text-stone-600">
                      <span>Subtotal</span>
                      <span className="font-bold text-stone-900">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Delivery Fee</span>
                      <span className="font-bold text-stone-900">
                        {deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                      <span>Total</span>
                      <span className="text-parivara-900">₹{totalAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900 text-white p-6 rounded-3xl space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-amberGold-400 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5" />
                    <span>How Local Orders Work</span>
                  </div>
                  <ol className="list-decimal pl-5 text-xs text-stone-200 space-y-1.5 leading-relaxed">
                    <li>Submit your order details above</li>
                    <li>Parivara team receives your order notification</li>
                    <li>We call/WhatsApp you to confirm address & timing</li>
                    <li>Doorstep delivery in Varanasi/Mirzapur (Cash/UPI)</li>
                  </ol>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default CheckoutPage;
