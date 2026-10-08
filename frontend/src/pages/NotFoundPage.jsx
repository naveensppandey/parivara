import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Sprout } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />

      <main className="flex-1 flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-16 h-16 rounded-2xl bg-parivara-100 text-parivara-800 flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-stone-900 mb-2">404 - Page Not Found</h1>
        <p className="text-stone-600 text-sm max-w-sm mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="bg-parivara-800 hover:bg-parivara-900 text-white font-bold text-xs px-6 py-3 rounded-full">
          Return to Parivara Home
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
