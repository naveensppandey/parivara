import React, { useState } from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import HeroCarousel from '../components/home/HeroCarousel';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowToUseSection from '../components/home/HowToUseSection';
import BeforeAfterSection from '../components/home/BeforeAfterSection';
import WhyParivara from '../components/home/WhyParivara';
import PlantDoctorBanner from '../components/home/PlantDoctorBanner';
import LocalServiceBanner from '../components/home/LocalServiceBanner';
import CustomerReviewsSection from '../components/home/CustomerReviewsSection';
import FaqAccordionSection from '../components/home/FaqAccordionSection';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';

const HomePage = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      <CartDrawer />

      <main className="flex-1">
        <HeroCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <HowToUseSection />
        <BeforeAfterSection />
        <WhyParivara />
        <PlantDoctorBanner />
        <LocalServiceBanner />
        <CustomerReviewsSection />
        <FaqAccordionSection />
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default HomePage;
