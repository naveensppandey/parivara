import React from 'react';
import { BUSINESS_CONFIG } from '../../config/business';
import { Sparkles, MapPin } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-parivara-900 text-parivara-100 text-xs sm:text-sm py-2 px-4 font-medium flex items-center justify-between border-b border-parivara-800">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-4 h-4 text-amberGold-400 shrink-0 animate-pulse" />
          <span>{BUSINESS_CONFIG.announcementText}</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-parivara-300 text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amberGold-400" />
            Varanasi & Mirzapur, UP
          </span>
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="hover:text-white transition-colors"
          >
            Call Us: {BUSINESS_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
