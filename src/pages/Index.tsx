
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
              <CircularLink to="/gallery" imageUrl="/lovable-uploads/5a7a874f-8dcb-4ee2-9152-00633a53a764.png" alt="Eleven Labs" label="Eleven Labs" size="lg" />
            </div>
            
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
              <CircularLink to="/about" imageUrl="/lovable-uploads/afdb659f-1bed-4149-a6bd-d8ec85e040c8.png" alt="Immersive Translate" label="Immersive Translate" size="lg" />
            </div>
            
            <div className="animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <CircularLink to="/contact" imageUrl="/lovable-uploads/f0e2e10c-14bd-44e7-99ba-cdafc25eff64.png" alt="Gamma" label="Gamma" size="lg" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-sm font-medium bg-background px-3 py-1 rounded-full">
                Design Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Minimalist Design, Maximum Impact</h2>
              <p className="text-muted-foreground">
                Our circular navigation concept embodies the principles of simplicity, functionality, and aesthetic beauty. Each image serves as both content and interface, creating an intuitive user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">Intuitive Navigation</h3>
                  <p className="text-sm text-muted-foreground">Simple circular design guides users naturally.</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">Visual Hierarchy</h3>
                  <p className="text-sm text-muted-foreground">Important elements stand out through careful design.</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">Fluid Animations</h3>
                  <p className="text-sm text-muted-foreground">Smooth transitions enhance the experience.</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">Responsive Layout</h3>
                  <p className="text-sm text-muted-foreground">Perfect experience on any device.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="animate-fade-in-up" style={{
              animationDelay: '0.1s'
            }}>
                <CircularLink to="#" imageUrl="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Design" label="Design" size="md" />
              </div>
              
              <div className="animate-fade-in-up" style={{
              animationDelay: '0.2s',
              marginTop: '2rem'
            }}>
                <CircularLink to="#" imageUrl="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Innovation" label="Innovation" size="md" />
              </div>
              
              <div className="animate-fade-in-up" style={{
              animationDelay: '0.3s',
              marginTop: '-2rem'
            }}>
                <CircularLink to="#" imageUrl="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Technology" label="Technology" size="md" />
              </div>
              
              <div className="animate-fade-in-up" style={{
              animationDelay: '0.4s'
            }}>
                <CircularLink to="#" imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Quality" label="Quality" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Index;
