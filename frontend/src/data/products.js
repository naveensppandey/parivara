import { BUSINESS_CONFIG } from '../config/business';

export const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Parivara Cow Manure",
    slug: "parivara-cow-manure-2kg",
    category: "Organic Fertilizers",
    categorySlug: "home-garden",
    weight: "2 KG",
    price: BUSINESS_CONFIG.prices.cowManure2kg.price,
    compareAtPrice: BUSINESS_CONFIG.prices.cowManure2kg.compareAtPrice,
    availability: "IN_STOCK",
    featured: true,
    rating: 4.9,
    reviewCount: 48,
    badge: "Bestseller",
    shortDescription: "Aged, natural organic manure for home gardens, potted plants, kitchen gardens, and trees.",
    description: `Parivara Cow Manure is a carefully aged and processed natural organic manure designed to restore soil vitality for home gardens in Varanasi and Mirzapur. It enriches the soil with vital organic matter, improves water retention, and promotes healthy microbial activity around root zones without synthetic chemicals.`,
    images: [
      "/images/products/parivara-cow-manure-2kg.jpg",
      "/images/banners/hero-slide-2.jpg",
      "/images/banners/hero-slide-1.jpg"
    ],
    benefits: [
      "Adds rich organic matter to improve depleted soil structure",
      "Enhances soil water holding capacity and aeration",
      "Supports natural soil microbial activity for nutrient uptake",
      "Slow-release natural nourishment suitable for long-term plant health",
      "Ideal for potting mixes, flower beds, and fruit trees"
    ],
    suitableFor: [
      "Home Balcony & Terrace Gardens",
      "Potted Flowering & Leafy Plants",
      "Kitchen Garden Vegetables (Tomatoes, Chillies, Herbs)",
      "Lawn & Garden Trees"
    ],
    composition: [
      "100% Aged Cow Manure",
      "Decomposed Organic Soil Carbon",
      "Essential Plant Micronutrients"
    ],
    storage: "Store in a cool, dry, shaded area away from direct sunlight. Keep the pouch sealed when not in use.",
    howToUseSteps: [
      { step: 1, title: "Loosen Soil", desc: "Gentle rake or loosen the top 2-3 inches of soil around the plant stem." },
      { step: 2, title: "Measure Amount", desc: "Take 100g - 200g of Parivara Cow Manure per medium pot." },
      { step: 3, title: "Mix & Cover", desc: "Mix thoroughly into the loosened soil and smooth the surface." },
      { step: 4, title: "Water Well", desc: "Water the plant adequately to initiate organic nutrient absorption." },
      { step: 5, title: "Repeat Regularly", desc: "Reapply once every 15-20 days for optimum plant vigor." }
    ],
    faqs: [
      { q: "Can I use cow manure for indoor potted plants?", a: "Yes, Parivara Cow Manure is aged and fully composted, making it safe and pleasant to use for indoor container plants." },
      { q: "How often should I apply it?", a: "For general home plants, applying once every 2-3 weeks yields great results." },
      { q: "Is this chemical free?", a: "Parivara Cow Manure is pure, natural manure without added synthetic chemical fertilizers." }
    ]
  },
  {
    id: 2,
    name: "Parivara Vermicompost",
    slug: "parivara-vermicompost-2kg",
    category: "Soil Conditioners",
    categorySlug: "potted-plants",
    weight: "2 KG",
    price: BUSINESS_CONFIG.prices.vermicompost2kg.price,
    compareAtPrice: BUSINESS_CONFIG.prices.vermicompost2kg.compareAtPrice,
    availability: "IN_STOCK",
    featured: true,
    rating: 4.95,
    reviewCount: 62,
    badge: "Top Rated",
    shortDescription: "Premium earthworm castings enriched organic plant manure for home gardens & saplings.",
    description: `Parivara Vermicompost is high-grade earthworm-processed organic plant nutrient manure. Rich in humus and bio-available micro-nutrients, it conditions soil structure, prevents compaction in pots, and gives young saplings and flowering plants the gentle organic nourishment they need.`,
    images: [
      "/images/products/parivara-vermicompost-2kg.jpg",
      "/images/banners/hero-slide-3.jpg",
      "/images/banners/before-after.jpg"
    ],
    benefits: [
      "Rich in natural earthworm castings & organic humus",
      "Improves root development and moisture retention",
      "Odourless, fine texture easy to mix into potting soil",
      "Helps plants resist environmental stress and transplant shock",
      "Boosts leaf color and flowering frequency"
    ],
    suitableFor: [
      "Indoor & Outdoor Potted Plants",
      "Flowering Plants (Roses, Marigold, Hibiscus)",
      "Kitchen Garden Vegetables & Seedlings",
      "Terrace & Container Gardening"
    ],
    composition: [
      "100% Pure Earthworm Bio-castings",
      "Organic Plant Matter Humus",
      "Naturally Occurring Beneficial Micro-organisms"
    ],
    storage: "Keep in a cool place away from extreme rain or harsh sunlight. Maintain slight moisture in bag.",
    howToUseSteps: [
      { step: 1, title: "Prepare Base", desc: "Clear debris and loosen pot topsoil." },
      { step: 2, title: "Apply Vermicompost", desc: "Add 150g - 250g per pot directly over soil." },
      { step: 3, title: "Incorporate", desc: "Gently mix into top layer around roots." },
      { step: 4, title: "Moisten", desc: "Sprinkle water lightly till moist." },
      { step: 5, title: "Maintain", desc: "Repeat every 15 days during growing season." }
    ],
    faqs: [
      { q: "What makes Vermicompost different from Cow Manure?", a: "Vermicompost is worm-processed organic material, resulting in a finer texture and high humic content ideal for seed starter mixes and delicate potted flowers." },
      { q: "Can I combine both Cow Manure and Vermicompost?", a: "Yes! A 50:50 blend of Parivara Cow Manure and Vermicompost creates an exceptional all-round organic feeding routine." }
    ]
  },
  {
    id: 3,
    name: "Parivara Neem Cake Powder",
    slug: "parivara-neem-cake-1kg",
    category: "Plant Care & Protection",
    categorySlug: "indoor-plants",
    weight: "1 KG",
    price: BUSINESS_CONFIG.prices.neemCake1kg.price,
    compareAtPrice: BUSINESS_CONFIG.prices.neemCake1kg.compareAtPrice,
    availability: "UPCOMING",
    featured: false,
    rating: 4.8,
    reviewCount: 19,
    badge: "Coming Soon",
    shortDescription: "Natural organic soil conditioner & neem meal for root protection and soil care.",
    description: `Parivara Neem Cake Powder is derived from cold-pressed neem seeds. It acts as a natural soil conditioner while protecting roots from harmful soil pests and nematodes in home gardens.`,
    images: [
      "/images/banners/plant-doctor.jpg",
      "/images/products/parivara-vermicompost-2kg.jpg"
    ],
    benefits: [
      "Natural bio-fertilizer and soil protectant",
      "Helps safeguard plant roots against soil nematodes",
      "Slowly releases organic nitrogen into soil",
      "Enhances efficiency of cow manure & compost"
    ],
    suitableFor: ["All garden crops", "Potted plants", "Kitchen garden soil preparation"],
    composition: ["100% De-oiled Neem Cake Organic Granules"],
    storage: "Store dry.",
    howToUseSteps: [
      { step: 1, title: "Mix in Soil", desc: "Add 20-30g per pot during soil preparation." }
    ],
    faqs: []
  },
  {
    id: 4,
    name: "Parivara Enriched Potting Mix",
    slug: "parivara-potting-mix-5kg",
    category: "Soil Conditioners",
    categorySlug: "kitchen-garden",
    weight: "5 KG",
    price: BUSINESS_CONFIG.prices.pottingMix5kg.price,
    compareAtPrice: BUSINESS_CONFIG.prices.pottingMix5kg.compareAtPrice,
    availability: "UPCOMING",
    featured: false,
    rating: 4.85,
    reviewCount: 24,
    badge: "Coming Soon",
    shortDescription: "Ready-to-use potting mix enriched with Parivara Vermicompost & Coco peat.",
    description: `Lightweight, ready-to-use premium potting soil ideal for urban balcony pots and indoor planters.`,
    images: [
      "/images/banners/hero-slide-3.jpg"
    ],
    benefits: ["Ready to plant", "Optimized aeration and drainage", "Nutrient rich"],
    suitableFor: ["Potted herbs", "Indoor ornamentals", "Balcony containers"],
    composition: ["Cocopeat", "Vermicompost", "Cow Manure", "Perlite"],
    storage: "Store dry.",
    howToUseSteps: [],
    faqs: []
  },
  {
    id: 5,
    name: "Parivara Organic Garden Starter Kit",
    slug: "parivara-garden-starter-kit",
    category: "Kits & Bundles",
    categorySlug: "flowering-plants",
    weight: "4.5 KG",
    price: BUSINESS_CONFIG.prices.gardenStarterKit.price,
    compareAtPrice: BUSINESS_CONFIG.prices.gardenStarterKit.compareAtPrice,
    availability: "IN_STOCK",
    featured: true,
    rating: 5.0,
    reviewCount: 31,
    badge: "Value Pack",
    shortDescription: "Complete organic plant care bundle: 2KG Cow Manure + 2KG Vermicompost + Spray Bottle.",
    description: `The perfect starter pack for home gardening beginners in Varanasi & Mirzapur! Includes 2KG Parivara Cow Manure, 2KG Parivara Vermicompost, and an easy gardening guide.`,
    images: [
      "/images/products/parivara-cow-manure-2kg.jpg",
      "/images/products/parivara-vermicompost-2kg.jpg"
    ],
    benefits: [
      "Save 28% compared to buying individual products",
      "Complete balanced diet for your garden pots",
      "Includes step-by-step home plant care guide"
    ],
    suitableFor: ["New plant lovers", "Balcony gardeners", "Gifting"],
    composition: ["2KG Cow Manure", "2KG Vermicompost", "Gardening Guide"],
    storage: "Store dry.",
    howToUseSteps: [],
    faqs: []
  }
];
