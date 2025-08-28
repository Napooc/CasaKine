import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  let pathname = '/';
  
  try {
    const location = useLocation();
    pathname = location.pathname;
  } catch (error) {
    // Router context not available yet, use default
    console.log('Router context not available, using default pathname');
  }

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};