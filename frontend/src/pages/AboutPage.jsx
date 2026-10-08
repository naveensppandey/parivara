import React from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { BUSINESS_CONFIG } from '../config/business';
import { Sprout, MapPin, ShieldCheck, Heart, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />
      <CartDrawer />

      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-soft space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase">
                <Sprout className="w-3.5 h-3.5" />
                <span>Our Story & Mission</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-parivara-950 font-sans tracking-tight">
                About PARIVARA
              </h1>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {BUSINESS_CONFIG.tagline}
              </p>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <img
                src="/images/banners/hero-slide-1.jpg"
                alt="Parivara Natural Gardening"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none text-stone-700 text-sm leading-relaxed space-y-4">
              <h2 className="text-2xl font-extrabold text-stone-900 font-sans">Empowering Local Home Gardeners</h2>
              <p>
                <strong>PARIVARA</strong> is a local natural gardening and farming products business serving <strong>Varanasi</strong> and <strong>Mirzapur</strong>, Uttar Pradesh.
              </p>
              <p>
                We believe that healthy plants begin with healthy, nutrient-rich soil. Modern urban balcony and roof container gardening often struggles due to depleted, compacted pot soil. Our core products—<strong>Parivara Aged Cow Manure</strong> and <strong>Parivara Vermicompost</strong>—are prepared to restore organic carbon and bio-available micro-nutrients to container soil without synthetic chemicals.
              </p>

              <h2 className="text-2xl font-extrabold text-stone-900 font-sans pt-4">Our Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Natural Soil First
                  </h4>
                  <p className="text-xs text-stone-500">We prioritize long-term soil structure and microbial health over short-term synthetic chemical boosts.</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amberGold-600" />
                    Local Commitment
                  </h4>
                  <p className="text-xs text-stone-500">Fast, friendly, doorstep delivery dedicated specifically to plant lovers in Varanasi and Mirzapur.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default AboutPage;
