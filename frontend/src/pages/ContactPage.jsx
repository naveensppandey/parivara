import React, { useState } from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { BUSINESS_CONFIG } from '../config/business';
import { submitContactEnquiry } from '../services/contactService';
import { useToast } from '../context/ToastContext';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      addToast('Please fill in your Name, Phone and Message', 'error');
      return;
    }

    setLoading(true);
    try {
      await submitContactEnquiry(formData);
      setSubmitted(true);
      addToast('Message sent successfully!', 'success');
      setFormData({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
    } catch (err) {
      addToast('Failed to send message. Please try WhatsApp.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />
      <CartDrawer />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="bg-parivara-100 text-parivara-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-parivara-950 font-sans tracking-tight">
              Contact PARIVARA
            </h1>
            <p className="text-stone-600 text-sm sm:text-base">
              We are here to help you with product enquiries, plant advice, and local delivery in Varanasi & Mirzapur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Quick Contact Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-3xl shadow-soft transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg font-sans">WhatsApp Direct Chat</h3>
                  <span className="text-xs text-emerald-100 block">Instant response & order placement</span>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="bg-white hover:border-parivara-600 p-6 rounded-3xl border border-stone-200 shadow-soft transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-parivara-100 text-parivara-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-stone-900 font-sans">Call Our Business</h3>
                  <span className="text-xs text-stone-500 block">{BUSINESS_CONFIG.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="bg-white hover:border-parivara-600 p-6 rounded-3xl border border-stone-200 shadow-soft transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amberGold-100 text-amberGold-800 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-stone-900 font-sans">Email Us</h3>
                  <span className="text-xs text-stone-500 block">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>

              <div className="bg-parivara-950 text-white p-6 rounded-3xl space-y-2 border border-parivara-900">
                <div className="flex items-center gap-2 text-amberGold-400 font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Business Location</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {BUSINESS_CONFIG.address}
                </p>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-parivara-900">
                  Serving Varanasi & Mirzapur local area.
                </p>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-soft">
              <h2 className="text-2xl font-bold text-stone-900 font-sans border-b border-stone-100 pb-4 mb-6">
                Send Us A Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-stone-900">Thank You!</h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you. Your message has been received. We will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-parivara-800 text-white text-xs font-bold px-6 py-2.5 rounded-full"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-parivara-600"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Product Order">Product Order</option>
                        <option value="Plant Advice">Plant Care Help</option>
                        <option value="Delivery Check">Delivery Availability</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-stone-700 uppercase mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="How can Parivara help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-parivara-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-parivara-700 hover:bg-parivara-800 text-white font-extrabold py-4 px-6 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default ContactPage;
