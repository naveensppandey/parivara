import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { BUSINESS_CONFIG } from '../config/business';
import { CheckCircle2, MessageCircle, ShoppingBag, PhoneCall, MapPin } from 'lucide-react';

const OrderConfirmationPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const order = location.state?.order || {
    id: id || 'PAR-DEMO',
    customerName: 'Valued Customer',
    status: 'NEW',
    totalAmount: 348,
    items: [
      { productName: 'Parivara Cow Manure (2 KG)', quantity: 1, itemTotal: 149 },
      { productName: 'Parivara Vermicompost (2 KG)', quantity: 1, itemTotal: 199 }
    ]
  };

  const whatsappMessage = `Hello Parivara,\n\nI just placed an order on your website!\n\n*Order ID*: ${order.id}\n*Customer Name*: ${order.customerName}\n*Total Amount*: ₹${order.totalAmount}\n\nPlease confirm availability and delivery time.`;
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-soft text-center space-y-6">
            
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="bg-parivara-100 text-parivara-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Order Received
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
                Thank You For Your Order!
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto">
                Your order has been received by Parivara. Our local team will contact you shortly to confirm availability and delivery timing in Varanasi / Mirzapur.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 text-left space-y-4 max-w-lg mx-auto text-xs">
              <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                <span className="text-stone-500 font-semibold">Order ID:</span>
                <span className="font-extrabold text-stone-900 text-sm">{order.id}</span>
              </div>

              {order.customerName && (
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-semibold">Customer:</span>
                  <span className="font-bold text-stone-800">{order.customerName}</span>
                </div>
              )}

              {order.phone && (
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-semibold">Phone:</span>
                  <span className="font-bold text-stone-800">{order.phone}</span>
                </div>
              )}

              {order.city && (
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-semibold">City:</span>
                  <span className="font-bold text-stone-800">{order.city}</span>
                </div>
              )}

              <div className="pt-2 border-t border-stone-200 space-y-2">
                <span className="font-bold text-stone-700 block">Items Ordered:</span>
                {order.items && order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-stone-600">
                    <span>{item.productName || item.name} x {item.quantity}</span>
                    <span className="font-bold text-stone-900">₹{item.itemTotal || (item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-stone-200 pt-3 text-sm font-extrabold text-stone-900">
                <span>Total Amount:</span>
                <span className="text-parivara-900 text-base">₹{order.totalAmount}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm via WhatsApp</span>
              </a>

              <Link
                to="/shop"
                className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm px-6 py-3.5 rounded-full transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default OrderConfirmationPage;
