import React from 'react';
import { SAMPLE_REVIEWS } from '../../data/reviews';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';

const CustomerReviewsSection = () => {
  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-parivara-600" />
            <span>Sample Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
            What Gardeners Say About Parivara
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Feedback from home garden enthusiasts in Varanasi & Mirzapur.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_REVIEWS.map((r) => (
            <div
              key={r.id}
              className="bg-stone-50 p-6 rounded-2xl border border-stone-200 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < r.rating ? 'fill-amber-400' : 'text-stone-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-stone-400">{r.date}</span>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-extrabold text-stone-900 block">{r.name}</span>
                  <span className="text-earth-600 font-semibold text-[11px]">{r.city}</span>
                </div>
                <span className="text-[10px] font-bold bg-parivara-100 text-parivara-800 px-2 py-0.5 rounded">
                  {r.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-stone-400">
          * Note: Reviews displayed above are structured sample feedback for preview mode. Real customer reviews are synchronized via backend database.
        </div>

      </div>
    </section>
  );
};

export default CustomerReviewsSection;
