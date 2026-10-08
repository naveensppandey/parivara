import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { BLOG_POSTS } from '../data/blogs';
import { getWhatsAppPlantDoctorUrl } from '../config/business';
import { BookOpen, Clock, ArrowRight, MessageCircle, Sprout, Stethoscope } from 'lucide-react';

const PlantCarePage = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      <CartDrawer />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="bg-parivara-950 text-white rounded-3xl p-8 sm:p-12 mb-12 border border-parivara-900 shadow-soft">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parivara-800 text-amberGold-400 text-xs font-extrabold uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Gardening Knowledge Hub</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight">
                Plant Care & Soil Science
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Practical guides, organic soil care tips, and plant maintenance solutions tailored for home balcony and roof gardens in Varanasi & Mirzapur.
              </p>
            </div>
          </div>

          {/* Plant Doctor Quick Card */}
          <div className="bg-gradient-to-r from-emerald-900 to-parivara-900 text-white rounded-3xl p-6 sm:p-8 mb-12 border border-emerald-700/50 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase">
                <Stethoscope className="w-4 h-4" />
                <span>Parivara Plant Doctor</span>
              </div>
              <h3 className="text-2xl font-bold font-sans">Having Trouble With Your Plant?</h3>
              <p className="text-stone-200 text-xs sm:text-sm">
                Take a photo of your leaf or plant stem and message us directly on WhatsApp for guidance.
              </p>
            </div>

            <a
              href={getWhatsAppPlantDoctorUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md whitespace-nowrap transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950" />
              <span>Ask Plant Doctor on WhatsApp</span>
            </a>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-card transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-stone-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-parivara-900 text-amberGold-400 text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-extrabold text-stone-900 text-lg font-sans leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-parivara-700 hover:text-parivara-900 transition"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default PlantCarePage;
