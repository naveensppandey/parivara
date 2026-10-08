import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

const FAQS = [
  {
    q: "What is Parivara Cow Manure?",
    a: "Parivara Cow Manure is a carefully aged, decomposed organic manure that enriches soil with natural organic carbon, improving soil aeration, water retention, and microbial health."
  },
  {
    q: "What is Parivara Vermicompost?",
    a: "Parivara Vermicompost is fine earthworm-processed organic manure rich in humus and micro-nutrients. It is odourless and ideal for indoor potted plants, flowering saplings, and container vegetable pots."
  },
  {
    q: "Which plants can use Parivara products?",
    a: "All home plants! Including flowering plants (rose, marigold, hibiscus), kitchen garden vegetables (tomatoes, chillies, herbs), indoor leafy plants (pothos, snake plants), and garden fruit trees."
  },
  {
    q: "How do I apply cow manure or vermicompost in pots?",
    a: "Loosen the top 2-3 inches of pot soil gently. Add 100g to 200g of manure, mix thoroughly with loosened soil, and water adequately. Reapply every 15 to 20 days."
  },
  {
    q: "Where do you deliver?",
    a: "We provide local doorstep delivery across Varanasi and Mirzapur, Uttar Pradesh."
  },
  {
    q: "How can I place an order?",
    a: "You can place an order directly through our website order form or tap the WhatsApp button for instant 1-click ordering."
  },
  {
    q: "Can I order through WhatsApp?",
    a: "Yes! Simply click 'Order on WhatsApp' on any product or cart page. A prefilled message with your items will open in WhatsApp so you can send it directly to our team."
  },
  {
    q: "What payment methods are supported?",
    a: "We currently support Cash on Delivery (COD) and direct UPI payment upon doorstep delivery."
  },
  {
    q: "How can I contact Parivara?",
    a: `You can reach our team via WhatsApp (+91 ${BUSINESS_CONFIG.whatsappNumber}), call us at ${BUSINESS_CONFIG.phone}, or email ${BUSINESS_CONFIG.email}.`
  }
];

const FaqAccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-100 text-parivara-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-parivara-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Everything you need to know about Parivara products and local delivery.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-extrabold text-stone-900 text-base sm:text-lg hover:text-parivara-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-parivara-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-stone-600 text-sm leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqAccordionSection;
