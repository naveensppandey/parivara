import React from 'react';
import { BUSINESS_CONFIG } from '../../config/business';
import { MapPin, Truck, CheckCircle2, ShieldAlert } from 'lucide-react';

const LocalServiceBanner = () => {
  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-parivara-600" />
                <span>Local Service Footprint</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
                Serving Varanasi & Mirzapur
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We are proud to serve home gardeners, terrace plant enthusiasts, and local nurseries across <strong>Varanasi</strong> and <strong>Mirzapur</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Varanasi Hub
                  </span>
                  <p className="text-xs text-stone-500">
                    Same-day / 24-hour delivery across Lanka, Godowlia, Sigra, Bhelupur, Shivpur & nearby areas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Mirzapur Hub
                  </span>
                  <p className="text-xs text-stone-500">
                    24 to 48-hour doorstep delivery across Mirzapur town & surrounding garden belts.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-parivara-50 p-6 sm:p-8 rounded-2xl border border-parivara-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-parivara-700 text-white flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-parivara-900 text-base">Delivery Policy</h4>
                  <span className="text-xs text-parivara-700 font-semibold">Transparent Local Delivery</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center justify-between py-1 border-b border-parivara-100">
                  <span>Free Local Delivery</span>
                  <strong className="text-parivara-900">Orders above ₹{BUSINESS_CONFIG.freeDeliveryThreshold}</strong>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-parivara-100">
                  <span>Standard Delivery Fee</span>
                  <strong className="text-parivara-900">₹{BUSINESS_CONFIG.standardDeliveryFee}</strong>
                </li>
                <li className="flex items-center justify-between py-1">
                  <span>Payment Options</span>
                  <strong className="text-emerald-700">Cash on Delivery / UPI</strong>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalServiceBanner;
