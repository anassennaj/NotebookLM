import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Compucom Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;