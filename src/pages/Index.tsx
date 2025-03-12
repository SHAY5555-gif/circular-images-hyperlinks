
import React, { useEffect } from 'react';
import CircularLink from '@/components/CircularLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-0 bg-slate-200">
        <div className="container mx-auto text-center space-y-6 max-w-3xl animate-fade-in rounded-none">
          <span className="inline-block text-sm font-medium bg-secondary px-3 py-1 rounded-full">
            Modern Design Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">קבל קישורי הפניה עם הנחות
 וקרדיטים בחינם</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each circle leads to a new experience. Discover our products, galleries, and philosophy through an innovative interface.
          </p>
          <a href="#gallery" className="inline-flex items-center justify-center mt-6 hover:opacity-90 transition-opacity" aria-label="Scroll to gallery">
            <ArrowDown className="animate-float w-10 h-10" />
          </a>
        </div>
      </section>
      
      {/* Gallery Section with Circular Links */}
      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block text-sm font-medium bg-secondary px-3 py-1 rounded-full">
              Interactive Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Navigate Through Circles</h2>
            <p className="text-muted-foreground mt-4">
              Click on any circle to explore that section of our offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center">
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>
              <CircularLink to="/products" imageUrl="/lovable-uploads/c4f29b5c-7ce6-42e6-b997-164d169a5d12.png" alt="Suno" label="Suno" size="lg" />
            </div>
            
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <CircularLink to="/gallery" imageUrl="/lovable-uploads/f0e2e10c-14bd-44e7-99ba-cdafc25eff64.png" alt="Eleven Labs" label="Eleven Labs" size="lg" />
            </div>
            
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
              <CircularLink to="/about" imageUrl="/lovable-uploads/afdb659f-1bed-4149-a6bd-d8ec85e040c8.png" alt="Immersive Translate" label="Immersive Translate" size="lg" />
            </div>
            
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <CircularLink to="/contact" imageUrl="/lovable-uploads/5a7a874f-8dcb-4ee2-9152-00633a53a764.png" alt="Gamma" label="Gamma" size="lg" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Index;
