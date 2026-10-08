import React, { useState } from 'react';
import { Sprout, Droplets, Sun, CheckCircle, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    title: "Prepare Soil",
    subtitle: "Loosen Topsoil",
    desc: "Gently loosen the top 2-3 inches of soil around the root zone without damaging roots.",
    icon: Sprout,
    color: "bg-earth-100 text-earth-800 border-earth-300"
  },
  {
    step: 2,
    title: "Mix Manure",
    subtitle: "Measure & Add",
    desc: "Add 100g - 200g of Parivara Cow Manure or Vermicompost per medium pot.",
    icon: Sprout,
    color: "bg-parivara-100 text-parivara-800 border-parivara-300"
  },
  {
    step: 3,
    title: "Apply & Cover",
    subtitle: "Incorporate Softly",
    desc: "Mix manure thoroughly with loosened topsoil and smooth the soil surface gently.",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    step: 4,
    title: "Water Gently",
    subtitle: "Activate Nutrients",
    desc: "Water the plant thoroughly until soil is moist to kickstart organic nutrient absorption.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-800 border-blue-300"
  },
  {
    step: 5,
    title: "Normal Care",
    subtitle: "Sunlight & Regular Care",
    desc: "Place in adequate sunlight. Re-apply organic manure every 15-20 days for continuous health.",
    icon: Sun,
    color: "bg-emerald-100 text-emerald-800 border-emerald-300"
  }
];

const HowToUseSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-200 text-parivara-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Simple 5-Step Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
            How To Use Parivara Products
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Easy step-by-step application instructions for potted balcony plants, flowers, and vegetables.
          </p>
        </div>

        {/* Desktop Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {STEPS.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.step;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`cursor-pointer bg-white rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-parivara-700 shadow-card scale-105 bg-parivara-50/50'
                    : 'border-stone-200 hover:border-parivara-300 shadow-soft'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-parivara-900 text-amberGold-400 font-extrabold text-xs flex items-center justify-center">
                      0{s.step}
                    </span>
                    <div className={`p-2 rounded-xl border ${s.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-stone-900 text-base font-sans">
                    {s.title}
                  </h3>
                  <span className="block text-xs font-semibold text-earth-600 mt-0.5">
                    {s.subtitle}
                  </span>

                  <p className="text-stone-600 text-xs mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-parivara-700 flex items-center justify-between">
                  <span>Step {s.step} of 5</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Wording Note */}
        <div className="mt-10 p-4 bg-white rounded-xl border border-stone-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-stone-500 font-medium">
            💡 <strong className="text-stone-700">Gardener's Note:</strong> Dosage guidelines are editable estimates. Adjust quantity depending on pot size (6-inch, 12-inch, grow bag) and plant maturity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowToUseSection;
