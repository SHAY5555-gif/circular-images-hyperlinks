
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CircularLink from '@/components/CircularLink';

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 px-6">
        <section className="container mx-auto py-12">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block text-sm font-medium bg-secondary px-3 py-1 rounded-full">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">Products</h1>
            <p className="text-muted-foreground mt-4">
              Explore our carefully curated selection of premium products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="animate-fade-in-up" style={{animationDelay: `${item * 0.1}s`}}>
                <CircularLink 
                  to="#" 
                  imageUrl={`https://images.unsplash.com/photo-${1520000000000 + item * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80`}
                  alt={`Product ${item}`} 
                  label={`Product ${item}`}
                  size="md"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
