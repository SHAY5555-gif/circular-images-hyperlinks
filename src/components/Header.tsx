
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/products',
    label: 'Products'
  }, {
    path: '/gallery',
    label: 'Gallery'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/contact',
    label: 'Contact'
  }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return <header className={cn('fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300', isScrolled ? 'glass-morphism' : 'bg-transparent')}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-sm font-medium transition-colors hover:text-primary', 'link-hover bg-gradient-to-r from-primary to-primary', location.pathname === link.path ? 'text-primary' : 'text-muted-foreground')}>
                {link.label}
              </Link>)}
          </nav>
          
          <button className="md:hidden flex items-center justify-center rounded-full w-10 h-10 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 top-16 z-40 glass-morphism animate-fade-in-up pt-4">
          <nav className="flex flex-col items-center justify-center space-y-6 h-full">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-lg font-medium transition-colors', location.pathname === link.path ? 'text-primary' : 'text-muted-foreground')}>
                {link.label}
              </Link>)}
          </nav>
        </div>}
    </header>;
};

export default Header;
