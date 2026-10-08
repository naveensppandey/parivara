import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from '../../config/business';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    headline: "Give Your Plants Better Soil",
    subheading: "Natural gardening products for healthier soil and happier plants across Varanasi & Mirzapur.",
    image: "/images/banners/hero-slide-1.jpg",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Order on WhatsApp",
    isWhatsAppSecondary: true,
    badge: "100% Natural Soil Nourishment"
  },
  {
    id: 2,
    headline: "Parivara Cow Manure",
    subheading: "Aged natural organic manure for home gardens, potted plants, kitchen gardens and fruit trees.",
    image: "/images/products/parivara-cow-manure-2kg.jpg",
    ctaText: "View Cow Manure",
    ctaLink: "/product/parivara-cow-manure-2kg",
    secondaryCtaText: "Explore Shop",
    secondaryCtaLink: "/shop",
    badge: "Rich Organic Carbon"
  },
  {
    id: 3,
    headline: "Parivara Vermicompost",
    subheading: "Premium earthworm castings plant manure for lush green leaves and vibrant flowers.",
    image: "/images/products/parivara-vermicompost-2kg.jpg",
    ctaText: "View Vermicompost",
    ctaLink: "/product/parivara-vermicompost-2kg",
    secondaryCtaText: "Explore Shop",
    secondaryCtaLink: "/shop",
    badge: "Enriched Worm Castings"
  },
  {
    id: 4,
    headline: "Grow Better. Garden Naturally.",
    subheading: "Simple plant care solutions, natural fertilizers, and expert guidance for your balcony & roof garden.",
    image: "/images/banners/hero-slide-3.jpg",
    ctaText: "Explore Products",
    ctaLink: "/shop",
    secondaryCtaText: "Ask Plant Doctor",
    secondaryCtaLink: "/plant-care",
    badge: "Local Gardening Brand"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, currentSlide]);

  return (
    <div
      className="relative bg-stone-900 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-10000" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-parivara-950/95 via-parivara-950/80 to-transparent" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-16">
              <div className="max-w-2xl space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parivara-800/80 border border-parivara-600 text-amberGold-400 text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{slide.badge}</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-tight">
                  {slide.headline}
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-xl text-stone-200 font-medium leading-relaxed max-w-xl">
                  {slide.subheading}
                </p>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center gap-2 bg-parivara-600 hover:bg-parivara-500 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-parivara-600/30 transition transform active:scale-95"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {slide.isWhatsAppSecondary ? (
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition transform active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{slide.secondaryCtaText}</span>
                    </a>
                  ) : (
                    <Link
                      to={slide.secondaryCtaLink}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-md border border-white/20 transition"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-sm transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-sm transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-amberGold-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
