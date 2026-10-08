import React from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import WhyParivara from '../components/home/WhyParivara';
import BeforeAfterSection from '../components/home/BeforeAfterSection';

const WhyParivaraPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />
      <CartDrawer />

      <main className="flex-1 py-8">
        <WhyParivara />
        <BeforeAfterSection />
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default WhyParivaraPage;
