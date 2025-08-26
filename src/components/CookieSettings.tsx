import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

interface CookieSettingsProps {
  language?: 'en' | 'fr' | 'ar';
  className?: string;
}

export const CookieSettings: React.FC<CookieSettingsProps> = ({ 
  language = 'fr', 
  className = "" 
}) => {
  const { openModal } = useCookieConsent();

  const text = {
    en: 'Manage Cookies',
    fr: 'Gérer les Cookies',
    ar: 'إدارة ملفات تعريف الارتباط'
  };

  return (
    <Button
      onClick={openModal}
      variant="ghost"
      size="sm"
      className={`text-sm hover:text-accent transition-colors ${className}`}
    >
      <Settings className="w-4 h-4 mr-2" />
      {text[language]}
    </Button>
  );
};