import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookieCategory {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  required: boolean;
  enabled: boolean;
  cookies: Array<{
    name: string;
    provider: string;
    purpose: string;
    purposeAr: string;
    purposeFr: string;
    expiry: string;
    type: string;
  }>;
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface ConsentLog {
  timestamp: string;
  preferences: CookiePreferences;
  userAgent: string;
  language: string;
}

interface CookieConsentContextType {
  hasConsented: boolean;
  showBanner: boolean;
  showModal: boolean;
  preferences: CookiePreferences;
  language: 'ar' | 'fr' | 'en';
  setLanguage: (lang: 'ar' | 'fr' | 'en') => void;
  acceptAll: () => void;
  rejectAll: () => void;
  updatePreferences: (prefs: CookiePreferences) => void;
  openModal: () => void;
  closeModal: () => void;
  withdrawConsent: () => void;
  cookieCategories: CookieCategory[];
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'casakine_cookie_consent';
const LOG_KEY = 'casakine_consent_log';

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const cookieCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    nameAr: 'ملفات تعريف الارتباط الأساسية',
    nameFr: 'Cookies Essentiels',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    descriptionAr: 'هذه الملفات ضرورية لعمل الموقع ولا يمكن إيقافها.',
    descriptionFr: 'Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.',
    required: true,
    enabled: true,
    cookies: [
      {
        name: 'casakine_cookie_consent',
        provider: 'Casakine',
        purpose: 'Stores user cookie preferences',
        purposeAr: 'يحفظ تفضيلات ملفات تعريف الارتباط للمستخدم',
        purposeFr: 'Stocke les préférences de cookies de l\'utilisateur',
        expiry: '1 year',
        type: 'localStorage'
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    nameAr: 'ملفات تعريف الارتباط التحليلية',
    nameFr: 'Cookies d\'Analyse',
    description: 'These cookies help us understand how visitors interact with our website.',
    descriptionAr: 'تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا.',
    descriptionFr: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.',
    required: false,
    enabled: false,
    cookies: [
      {
        name: '_ga',
        provider: 'Google Analytics',
        purpose: 'Distinguishes unique users',
        purposeAr: 'يميز المستخدمين الفريدين',
        purposeFr: 'Distingue les utilisateurs uniques',
        expiry: '2 years',
        type: 'HTTP'
      },
      {
        name: '_ga_*',
        provider: 'Google Analytics',
        purpose: 'Used to persist session state',
        purposeAr: 'يستخدم للحفاظ على حالة الجلسة',
        purposeFr: 'Utilisé pour persister l\'état de session',
        expiry: '2 years',
        type: 'HTTP'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    nameAr: 'ملفات تعريف الارتباط التسويقية',
    nameFr: 'Cookies Marketing',
    description: 'These cookies are used to track visitors across websites for advertising purposes.',
    descriptionAr: 'تستخدم هذه الملفات لتتبع الزوار عبر المواقع لأغراض إعلانية.',
    descriptionFr: 'Ces cookies sont utilisés pour suivre les visiteurs sur les sites à des fins publicitaires.',
    required: false,
    enabled: false,
    cookies: [
      {
        name: '_fbp',
        provider: 'Facebook',
        purpose: 'Facebook advertising tracking',
        purposeAr: 'تتبع الإعلانات على فيسبوك',
        purposeFr: 'Suivi publicitaire Facebook',
        expiry: '3 months',
        type: 'HTTP'
      }
    ]
  },
  {
    id: 'preferences',
    name: 'Preference Cookies',
    nameAr: 'ملفات تعريف الارتباط للتفضيلات',
    nameFr: 'Cookies de Préférences',
    description: 'These cookies enable the website to remember choices you make and provide enhanced features.',
    descriptionAr: 'تمكن هذه الملفات الموقع من تذكر اختياراتك وتوفير ميزات محسنة.',
    descriptionFr: 'Ces cookies permettent au site de se souvenir de vos choix et de fournir des fonctionnalités améliorées.',
    required: false,
    enabled: false,
    cookies: [
      {
        name: 'language_preference',
        provider: 'Casakine',
        purpose: 'Stores user language preference',
        purposeAr: 'يحفظ تفضيل اللغة للمستخدم',
        purposeFr: 'Stocke la préférence de langue de l\'utilisateur',
        expiry: '1 year',
        type: 'localStorage'
      }
    ]
  }
];

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [language, setLanguage] = useState<'ar' | 'fr' | 'en'>('fr');

  useEffect(() => {
    // Check if user has previously consented
    const savedPreferences = localStorage.getItem(STORAGE_KEY);
    const savedLanguage = localStorage.getItem('casakine_language') as 'ar' | 'fr' | 'en';
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      setPreferences(parsed);
      setHasConsented(true);
      setShowBanner(false);
      applyConsent(parsed);
    } else {
      setShowBanner(true);
      // Block all non-essential cookies by default
      blockNonEssentialCookies();
    }
  }, []);

  const logConsent = (prefs: CookiePreferences) => {
    const log: ConsentLog = {
      timestamp: new Date().toISOString(),
      preferences: prefs,
      userAgent: navigator.userAgent,
      language: language
    };
    
    const existingLogs = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    existingLogs.push(log);
    localStorage.setItem(LOG_KEY, JSON.stringify(existingLogs));
  };

  const applyConsent = (prefs: CookiePreferences) => {
    // Enable Google Analytics if analytics is allowed
    if (prefs.analytics && typeof window !== 'undefined') {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }

    // Handle other cookie categories similarly
    if (prefs.marketing) {
      enableMarketingCookies();
    } else {
      disableMarketingCookies();
    }

    if (prefs.preferences) {
      enablePreferenceCookies();
    } else {
      disablePreferenceCookies();
    }
  };

  const blockNonEssentialCookies = () => {
    // Disable all tracking scripts
    disableGoogleAnalytics();
    disableMarketingCookies();
    disablePreferenceCookies();
  };

  const enableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const disableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const enableMarketingCookies = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted'
      });
    }
  };

  const disableMarketingCookies = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied'
      });
    }
  };

  const enablePreferenceCookies = () => {
    // Handle preference cookies
  };

  const disablePreferenceCookies = () => {
    // Remove preference cookies
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allAccepted));
    setHasConsented(true);
    setShowBanner(false);
    logConsent(allAccepted);
    applyConsent(allAccepted);
  };

  const rejectAll = () => {
    setPreferences(defaultPreferences);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPreferences));
    setHasConsented(true);
    setShowBanner(false);
    logConsent(defaultPreferences);
    applyConsent(defaultPreferences);
  };

  const updatePreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setHasConsented(true);
    setShowBanner(false);
    setShowModal(false);
    logConsent(prefs);
    applyConsent(prefs);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const withdrawConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasConsented(false);
    setShowBanner(true);
    setPreferences(defaultPreferences);
    blockNonEssentialCookies();
  };

  const handleLanguageChange = (lang: 'ar' | 'fr' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('casakine_language', lang);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsented,
        showBanner,
        showModal,
        preferences,
        language,
        setLanguage: handleLanguageChange,
        acceptAll,
        rejectAll,
        updatePreferences,
        openModal,
        closeModal,
        withdrawConsent,
        cookieCategories,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}