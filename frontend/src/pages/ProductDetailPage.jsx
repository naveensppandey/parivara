import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { getProductBySlug } from '../services/productService';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { getWhatsAppOrderUrl } from '../config/business';
import {
  Star,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  Check,
  ChevronRight,
  HelpCircle,
  Sprout,
  ArrowLeft
} from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
        <div className="flex-1 flex items-center justify-center py-20 text-stone-500 font-bold">
          Loading product details...
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
        <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-4">
          <h2 className="text-2xl font-bold text-stone-800">Product Not Found</h2>
          <Link to="/shop" className="bg-parivara-800 text-white px-6 py-2 rounded-full font-bold text-sm">
            Return to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    addToast(`${quantity} x ${product.name} added to cart!`, 'success');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const whatsappUrl = getWhatsAppOrderUrl(product.name, quantity, product.price);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      <CartDrawer />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-6">
            <Link to="/" className="hover:text-parivara-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <Link to="/shop" className="hover:text-parivara-700">Shop</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
            <span className="text-stone-900 font-bold truncate max-w-xs">{product.name}</span>
          </nav>

          {/* Top Product Hero Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-2xl bg-stone-100 overflow-hidden border border-stone-200">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-parivara-800 text-amberGold-400 font-extrabold text-xs px-3 py-1.5 rounded-lg uppercase shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                        selectedImage === idx ? 'border-parivara-700 shadow-md' : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-stone-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-stone-900">{product.rating}</span>
                  <span className="text-xs text-stone-400 font-semibold">({product.reviewCount} customer reviews)</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight">
                  {product.name}
                </h1>

                {/* Price & Weight */}
                <div className="flex items-baseline gap-4 py-2 border-y border-stone-100">
                  <span className="text-3xl sm:text-4xl font-extrabold text-parivara-900">
                    ₹{product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-lg font-semibold text-stone-400 line-through">
                      ₹{product.compareAtPrice}
                    </span>
                  )}
                  <span className="bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1 rounded-full">
                    Weight: {product.weight}
                  </span>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Local Delivery Note */}
                <div className="p-3 bg-parivara-50 rounded-xl border border-parivara-200 text-xs text-parivara-900 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-parivara-700 shrink-0" />
                  <span>Local delivery available in <strong>Varanasi & Mirzapur</strong> (24-48h).</span>
                </div>
              </div>

              {/* Actions Section */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-stone-600 uppercase">Quantity:</span>
                  <div className="flex items-center border border-stone-300 rounded-xl bg-white text-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 text-stone-600 hover:bg-stone-100 rounded-l-xl"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-extrabold text-stone-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2.5 text-stone-600 hover:bg-stone-100 rounded-r-xl"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Primary Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-parivara-700 hover:bg-parivara-800 text-white font-extrabold py-3.5 px-6 rounded-2xl transition shadow-md flex items-center justify-center gap-2 active:scale-95 text-sm"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-parivara-900 hover:bg-black text-white font-extrabold py-3.5 px-6 rounded-2xl transition shadow-md text-sm"
                  >
                    Buy Now / Order Form
                  </button>
                </div>

                {/* WhatsApp Order Direct */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl transition shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Order Directly on WhatsApp</span>
                </a>

              </div>
            </div>

          </div>

          {/* Comprehensive Product Tabs */}
          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-soft overflow-hidden mb-12">
            
            {/* Tabs Header */}
            <div className="flex border-b border-stone-200 overflow-x-auto bg-stone-50">
              {[
                { key: 'overview', label: 'Overview & Description' },
                { key: 'benefits', label: 'Benefits' },
                { key: 'usage', label: 'How to Use' },
                { key: 'suitable', label: 'Suitable For' },
                { key: 'faq', label: 'Product FAQ' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-4 text-xs sm:text-sm font-extrabold whitespace-nowrap transition border-b-2 ${
                    activeTab === tab.key
                      ? 'border-parivara-700 text-parivara-800 bg-white'
                      : 'border-transparent text-stone-600 hover:text-parivara-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-6 sm:p-10 space-y-6">
              
              {activeTab === 'overview' && (
                <div className="space-y-4 max-w-3xl">
                  <h3 className="text-xl font-bold text-stone-900 font-sans">Product Overview</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <h4 className="font-bold text-stone-800 text-sm">Composition:</h4>
                    <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1">
                      {product.composition && product.composition.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                  {product.storage && (
                    <div className="pt-2 text-xs text-stone-500">
                      <strong>Storage:</strong> {product.storage}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="space-y-4 max-w-3xl">
                  <h3 className="text-xl font-bold text-stone-900 font-sans">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits && product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-6 max-w-3xl">
                  <h3 className="text-xl font-bold text-stone-900 font-sans">How To Use</h3>
                  <div className="space-y-4">
                    {product.howToUseSteps && product.howToUseSteps.map((step) => (
                      <div key={step.step} className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="w-8 h-8 rounded-full bg-parivara-800 text-amberGold-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                          0{step.step}
                        </span>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">{step.title}</h4>
                          <p className="text-xs text-stone-600 mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'suitable' && (
                <div className="space-y-4 max-w-3xl">
                  <h3 className="text-xl font-bold text-stone-900 font-sans">Suitable For</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.suitableFor && product.suitableFor.map((item, i) => (
                      <div key={i} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                        <Sprout className="w-4 h-4 text-parivara-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-4 max-w-3xl">
                  <h3 className="text-xl font-bold text-stone-900 font-sans">Frequently Asked Questions</h3>
                  {product.faqs && product.faqs.length > 0 ? (
                    product.faqs.map((f, i) => (
                      <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                        <h4 className="font-bold text-stone-900 text-sm">{f.q}</h4>
                        <p className="text-xs text-stone-600">{f.a}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-stone-500">Contact us on WhatsApp for any product specific questions.</p>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default ProductDetailPage;
