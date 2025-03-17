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
  return;
};
export default Header;