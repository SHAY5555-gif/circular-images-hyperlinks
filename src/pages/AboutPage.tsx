
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CircularLink from '@/components/CircularLink';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 px-6">
        <section className="container mx-auto py-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block text-sm font-medium bg-secondary px-3 py-1 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">About Us</h1>
            <p className="text-muted-foreground mt-4">
              Learn about our philosophy and the people behind our designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl font-bold">Our Design Philosophy</h2>
              <p className="text-muted-foreground">
                We believe in the power of simplicity. Our designs embrace minimalism, focusing on essential elements while eliminating the unnecessary. Through careful attention to detail, we create experiences that are both functional and beautiful.
              </p>
              <p className="text-muted-foreground">
                Our approach combines innovative technology with timeless design principles. We strive to create products that solve real problems while delighting users with their elegance and intuitiveness.
              </p>
            </div>
            
            <div className="flex justify-center order-1 md:order-2">
              <div className="animate-fade-in-up">
                <CircularLink 
                  to="#" 
                  imageUrl="https://images.unsplash.com/photo-1589793463609-4f37b2a16d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Our Team" 
                  label="Our Team"
                  size="lg"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <CircularLink 
                to="#" 
                imageUrl="https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Simplicity" 
                label="Simplicity"
                size="md"
              />
              <h3 className="text-xl font-medium mt-6 mb-3">Simplicity</h3>
              <p className="text-muted-foreground">We remove the unnecessary to focus on what truly matters.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <CircularLink 
                to="#" 
                imageUrl="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Innovation" 
                label="Innovation"
                size="md"
              />
              <h3 className="text-xl font-medium mt-6 mb-3">Innovation</h3>
              <p className="text-muted-foreground">We push boundaries to create new possibilities.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <CircularLink 
                to="#" 
                imageUrl="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Quality" 
                label="Quality"
                size="md"
              />
              <h3 className="text-xl font-medium mt-6 mb-3">Quality</h3>
              <p className="text-muted-foreground">We craft experiences with meticulous attention to detail.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
