import React from 'react';
import { Sprout, ShieldCheck, Heart, Truck, MessageCircle, MapPin } from 'lucide-react';

const PILLARS = [
  {
    icon: Sprout,
    title: "100% Natural Focus",
    desc: "Carefully aged cow manure and earthworm vermicompost crafted without harsh synthetic additives."
  },
  {
    icon: ShieldCheck,
    title: "Soil-Conscious Approach",
    desc: "Designed to improve soil carbon and microbial activity for long-term potted plant health."
  },
  {
    icon: Heart,
    title: "Made for Home Gardeners",
    desc: "Clean, odourless, convenient 2KG pouches easy to handle on home balconies and terrace gardens."
  },
  {
    icon: Truck,
    title: "Convenient Local Delivery",
    desc: "Fast doorstep delivery directly to your home in Varanasi and Mirzapur within 24-48 hours."
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Support",
    desc: "No complicated signups needed! Place orders or ask questions directly with 1-click WhatsApp."
  },
  {
    icon: MapPin,
    title: "Varanasi & Mirzapur Local",
    desc: "Proud local business rooted in Eastern Uttar Pradesh, committed to community plant care."
  }
];

const WhyParivara = () => {
  return (
    <section className="py-16 bg-parivara-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-parivara-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-800 text-amberGold-400 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Why Home Gardeners Trust Parivara
          </h2>
          <p className="text-parivara-200 mt-2 text-sm sm:text-base">
            We bring transparent pricing, natural quality, and dedicated local customer care to your doorstep.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-parivara-900/80 backdrop-blur-md p-6 rounded-2xl border border-parivara-800 hover:border-parivara-600 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-parivara-800 border border-parivara-700 flex items-center justify-center text-amberGold-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {p.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyParivara;
