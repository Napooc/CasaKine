import React from 'react';
import { CookieBanner } from './CookieBanner';
import { CookieModal } from './CookieModal';

interface CookieManagerProps {
  language?: 'en' | 'fr' | 'ar';
}

export const CookieManager: React.FC<CookieManagerProps> = ({ language = 'en' }) => {
  return (
    <>
      <CookieBanner language={language} />
      <CookieModal language={language} />
    </>
  );
};