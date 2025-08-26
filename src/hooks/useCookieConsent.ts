import { useState, useEffect } from 'react';
import { cookieManager, ConsentPreferences } from '@/lib/cookieUtils';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(cookieManager.hasConsent());
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(
    cookieManager.getPreferences()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = cookieManager.onConsentChanged((newPreferences) => {
      setHasConsent(true);
      setPreferences(newPreferences);
    });

    return unsubscribe;
  }, []);

  const acceptAll = () => {
    cookieManager.acceptAll();
    cookieManager.logConsentAction('accept_all');
    setIsModalOpen(false);
  };

  const rejectAll = () => {
    cookieManager.rejectAll();
    cookieManager.logConsentAction('reject_all');
    setIsModalOpen(false);
  };

  const savePreferences = (newPreferences: Partial<ConsentPreferences>) => {
    cookieManager.setPreferences(newPreferences);
    cookieManager.logConsentAction('save_preferences', cookieManager.getPreferences()!);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    cookieManager.logConsentAction('open_modal');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    hasConsent,
    preferences,
    isModalOpen,
    acceptAll,
    rejectAll,
    savePreferences,
    openModal,
    closeModal,
    setIsModalOpen
  };
};