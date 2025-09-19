import React from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, Settings, X, Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const translations = {
  en: {
    title: "We use cookies",
    description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies in accordance with Moroccan CNDP regulations.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    customize: "Customize",
    privacyPolicy: "Privacy Policy",
    closeAriaLabel: "Close cookie banner"
  },
  fr: {
    title: "Nous utilisons des cookies",
    description: "Nous utilisons des cookies pour améliorer votre expérience de navigation, servir du contenu personnalisé et analyser notre trafic. En cliquant sur 'Accepter tout', vous consentez à notre utilisation des cookies conformément aux réglementations CNDP marocaines.",
    acceptAll: "Accepter tout",
    rejectAll: "Tout rejeter",
    customize: "Personnaliser",
    privacyPolicy: "Politique de confidentialité",
    closeAriaLabel: "Fermer la bannière de cookies"
  },
  ar: {
    title: "نحن نستخدم ملفات تعريف الارتباط",
    description: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتقديم محتوى مخصص، وتحليل حركة المرور. بالنقر على 'قبول الكل'، فإنك توافق على استخدامنا لملفات تعريف الارتباط وفقًا للوائح CNDP المغربية.",
    acceptAll: "قبول الكل",
    rejectAll: "رفض الكل",
    customize: "تخصيص",
    privacyPolicy: "سياسة الخصوصية",
    closeAriaLabel: "إغلاق شريط ملفات تعريف الارتباط"
  }
};
export function CookieConsentBanner() {
  const {
    showBanner,
    language,
    setLanguage,
    acceptAll,
    rejectAll,
    openModal
  } = useCookieConsent();
  if (!showBanner) return null;
  const t = translations[language];
  const isRTL = language === 'ar';
  return <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg" role="dialog" aria-live="polite" aria-label={t.title} dir={isRTL ? 'rtl' : 'ltr'}>
      <Card className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          {/* Icon and Content */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{t.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.description}{' '}
                <a href="/privacy-policy" className="text-primary hover:underline font-medium" aria-label={`${t.privacyPolicy} (opens in new tab)`}>
                  {t.privacyPolicy}
                </a>
              </p>
            </div>
          </div>

          {/* Language Selector */}
          

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <Button variant="outline" onClick={rejectAll} className="w-full sm:w-auto" aria-label={t.rejectAll}>
              {t.rejectAll}
            </Button>
            
            <Button variant="outline" onClick={openModal} className="w-full sm:w-auto" aria-label={t.customize}>
              <Settings className="h-4 w-4 mr-2" aria-hidden="true" />
              {t.customize}
            </Button>
            
            <Button onClick={acceptAll} className="w-full sm:w-auto" aria-label={t.acceptAll}>
              {t.acceptAll}
            </Button>
          </div>
        </div>
      </Card>
    </div>;
}