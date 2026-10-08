import React from 'react';
import { getWhatsAppPlantDoctorUrl } from '../../config/business';
import { MessageCircle, Stethoscope, Sparkles, Camera } from 'lucide-react';

const PlantDoctorBanner = () => {
  const doctorUrl = getWhatsAppPlantDoctorUrl();

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900 via-parivara-900 to-parivara-950 text-white relative overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30">
              <Stethoscope className="w-4 h-4 text-emerald-400" />
              <span>Free Local Plant Advice</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight leading-tight">
              Need Help With Your Plant?
            </h2>

            <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-xl">
              Are leaves turning yellow, roots wilting, or flowers failing to bloom? Send us a photo of your plant on WhatsApp, and our local team will help you diagnose the issue!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={doctorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-base px-6 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 transition transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>Ask Parivara on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                <Camera className="w-4 h-4 text-amberGold-400" />
                <span>Snap photo & click to chat</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 italic">
              ✨ Note: Photo assistance is free for all Varanasi & Mirzapur plant lovers. Future AI Plant Doctor integration in development!
            </p>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <img
                src="/images/banners/plant-doctor.jpg"
                alt="Parivara Plant Care Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/80 backdrop-blur-md p-3 rounded-xl text-xs font-medium text-white flex items-center justify-between border border-white/10">
                <span>Direct Expert Guidance</span>
                <span className="text-emerald-400 font-bold">1-on-1 WhatsApp</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlantDoctorBanner;
