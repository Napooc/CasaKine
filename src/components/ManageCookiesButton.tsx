import React from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const translations = {
  en: {
    manageCookies: "Manage Cookies",
  },
  fr: {
    manageCookies: "Gérer les cookies",
  },
  ar: {
    manageCookies: "إدارة ملفات تعريف الارتباط",
  }
};

export function ManageCookiesButton({ className = "" }: { className?: string }) {
  const { openModal, language } = useCookieConsent();
  
  const t = translations[language];

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openModal}
      className={`text-xs ${className}`}
      aria-label={t.manageCookies}
    >
      <Settings className="h-3 w-3 mr-1" aria-hidden="true" />
      {t.manageCookies}
    </Button>
  );
}