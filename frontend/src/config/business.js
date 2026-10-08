/**
 * PARIVARA Business Central Configuration
 * All business details, contact information, prices, and banners are centralized here.
 * DO NOT hardcode phone numbers, prices, or emails across components.
 */

export const BUSINESS_CONFIG = {
  name: "PARIVARA",
  tagline: "Natural Farming • Healthy Plants",
  legalName: "Parivara Natural Products",
  
  // Contact details (Updated as requested: 9305762044 and 7007751458)
  phone: "+91 93057 62044",
  secondaryPhone: "+91 70077 51458",
  whatsappNumber: "919305762044", // Raw numbers without + for WhatsApp web links
  secondaryWhatsappNumber: "917007751458",
  email: "care@parivaranatural.com",
  address: "Parivara Hub, Near Lanka Chauraha, Varanasi, UP - 221005",
  
  // Delivery & Service Area
  serviceAreas: ["Varanasi", "Mirzapur"],
  serviceState: "Uttar Pradesh",
  deliveryNote: "Same-day & 24-hour local delivery available in Varanasi & Mirzapur.",
  freeDeliveryThreshold: 499,
  standardDeliveryFee: 40,

  // Social & Web Links
  facebook: "https://facebook.com/parivara.natural",
  instagram: "https://instagram.com/parivara.natural",
  youtube: "https://youtube.com/@parivaranatural",

  // Top Announcement Bar
  announcementText: "🌱 Natural Gardening Products | Local Delivery in Varanasi & Mirzapur | Call/WhatsApp: 9305762044",

  // Configurable Pricing Central Data
  prices: {
    cowManure2kg: {
      price: 149,
      compareAtPrice: 199,
      discountText: "25% OFF",
    },
    vermicompost2kg: {
      price: 199,
      compareAtPrice: 249,
      discountText: "20% OFF",
    },
    neemCake1kg: {
      price: 179,
      compareAtPrice: 220,
      discountText: "18% OFF",
    },
    pottingMix5kg: {
      price: 299,
      compareAtPrice: 399,
      discountText: "25% OFF",
    },
    gardenStarterKit: {
      price: 499,
      compareAtPrice: 699,
      discountText: "28% OFF",
    }
  }
};

/**
 * Generate formatted WhatsApp message URL for direct orders or enquiries
 */
export const getWhatsAppOrderUrl = (productName, quantity, price, customerName = '', city = '') => {
  const number = BUSINESS_CONFIG.whatsappNumber;
  let text = `Hello Parivara,\n\nI would like to order:\n\n*Product*: ${productName}\n*Quantity*: ${quantity}\n*Estimated Total*: ₹${price * quantity}\n`;
  if (customerName) text += `*Name*: ${customerName}\n`;
  if (city) text += `*City*: ${city}\n`;
  text += `\nPlease confirm availability and delivery time.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const getWhatsAppPlantDoctorUrl = () => {
  const number = BUSINESS_CONFIG.whatsappNumber;
  const text = `Hello Parivara Plant Doctor,\n\nI need help with my plant. I would like to share a photo and explain the issue I am seeing.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
