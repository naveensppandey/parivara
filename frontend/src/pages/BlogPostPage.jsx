import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import BottomActionBar from '../components/layout/BottomActionBar';
import { BLOG_POSTS } from '../data/blogs';
import { ArrowLeft, Clock, Calendar, User, Sprout, MessageCircle } from 'lucide-react';
import { getWhatsAppPlantDoctorUrl } from '../config/business';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <AnnouncementBar />
      <Navbar onOpenMobileMenu={() => {}} />

      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <Link
            to="/plant-care"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-stone-500 hover:text-parivara-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Plant Care Guides</span>
          </Link>

          <article className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/80 shadow-soft space-y-6">
            <span className="bg-parivara-100 text-parivara-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-parivara-950 font-sans tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-semibold border-y border-stone-100 py-3">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-parivara-600" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-parivara-600" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-parivara-600" />
                {post.readTime}
              </span>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div
              className="prose max-w-none text-stone-700 text-sm leading-relaxed space-y-4 pt-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="pt-8 border-t border-stone-200 bg-parivara-50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-parivara-900 text-sm">Have questions about this topic?</h4>
                <p className="text-xs text-stone-600">Send your plant photo or question directly to Parivara on WhatsApp.</p>
              </div>
              <a
                href={getWhatsAppPlantDoctorUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl whitespace-nowrap flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </article>

        </div>
      </main>

      <Footer />
      <BottomActionBar />
    </div>
  );
};

export default BlogPostPage;
