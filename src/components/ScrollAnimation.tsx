import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up' | 'rotate-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const animationClasses = {
    'fade-up': isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8',
    'slide-left': isVisible ? 'animate-slide-left' : 'opacity-0 -translate-x-12',
    'slide-right': isVisible ? 'animate-slide-right' : 'opacity-0 translate-x-12',
    'scale-up': isVisible ? 'animate-scale-up' : 'opacity-0 scale-90',
    'rotate-in': isVisible ? 'animate-rotate-in' : 'opacity-0 rotate-12 scale-90'
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${animationClasses[animation]} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;