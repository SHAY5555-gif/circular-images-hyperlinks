
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CircularLinkProps {
  to: string;
  imageUrl: string;
  alt: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isExternal?: boolean;
}

const CircularLink: React.FC<CircularLinkProps> = ({
  to,
  imageUrl,
  alt,
  label,
  size = 'md',
  className,
  isExternal = false,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const sizeClasses = {
    sm: 'w-32 h-32 md:w-36 md:h-36',
    md: 'w-40 h-40 md:w-48 md:h-48',
    lg: 'w-52 h-52 md:w-64 md:h-64',
  };

  const LinkComponent = isExternal ? 
    ({ children }: { children: React.ReactNode }) => (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </a>
    ) : 
    ({ children }: { children: React.ReactNode }) => (
      <Link 
        to={to}
        className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </Link>
    );

  const handleLabelClick = () => {
    if (isExternal) {
      window.open(to, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <LinkComponent>
        <div 
          className={cn(
            'image-wrapper shine-effect smooth-transition', 
            sizeClasses[size],
            isHovering ? 'shadow-lg scale-105' : 'shadow',
            className
          )}
        >
          <img 
            src={imageUrl} 
            alt={alt} 
            className="circular-image"
          />
          <div 
            className={cn(
              'absolute inset-0 bg-black/10 rounded-full opacity-0 transition-opacity duration-300',
              isHovering ? 'opacity-20' : ''
            )}
          />
        </div>
      </LinkComponent>
      <span 
        onClick={handleLabelClick}
        className={cn(
          'font-medium text-center smooth-transition bg-gradient-to-r from-foreground to-foreground',
          'link-hover',
          isHovering ? 'text-primary' : 'text-muted-foreground',
          isExternal && 'cursor-pointer'
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default CircularLink;
