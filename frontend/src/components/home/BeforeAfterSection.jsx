import React, { useState } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            <span>Plant Transformation Example</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
            See Soil Enrichment In Action
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Natural organic manure enriches pale depleted soil so roots absorb nutrients effectively.
          </p>
        </div>

        {/* Before / After Graphic Box */}
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-3xl overflow-hidden shadow-card border border-stone-800 grid grid-cols-1 md:grid-cols-2">
          
          {/* Side 1: Before */}
          <div className="p-8 bg-amber-950/30 border-b md:border-b-0 md:border-r border-stone-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-red-500/20 text-red-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-red-500/30">
                BEFORE (Depleted Soil)
              </span>
              <h3 className="text-2xl font-bold text-white font-sans">
                Weak Growth & Pale Leaves
              </h3>
              <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                Soil lacking organic carbon turns hard, compact, and dry. Roots suffocate and plants show yellowing leaves and low flowering.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-2 text-red-300">
                <span>❌ Compacted, cracked pot soil</span>
              </li>
              <li className="flex items-center gap-2 text-red-300">
                <span>❌ Stunted stem & leaf yellowing</span>
              </li>
              <li className="flex items-center gap-2 text-red-300">
                <span>❌ Poor water drainage & retention</span>
              </li>
            </ul>
          </div>

          {/* Side 2: After */}
          <div className="p-8 bg-parivara-950/40 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block bg-emerald-500/20 text-emerald-400 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-emerald-500/30">
                AFTER (Enriched Soil Care)
              </span>
              <h3 className="text-2xl font-bold text-white font-sans">
                Greener Leaves & Healthy Plants
              </h3>
              <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                With regular top-dressing of Parivara organic manure, soil retains moisture, aerates root zone, and promotes steady growth.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✅ Dark, porous, organic-rich soil</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✅ Deep green vibrant foliage</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>✅ Active microbial soil ecosystem</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Disclaimer Box */}
        <div className="mt-6 max-w-4xl mx-auto flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> Results illustrated above represent potential soil and foliage improvements when combining organic manure with proper sunlight, watering, and plant care. Individual plant results vary depending on species, season, and environment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
