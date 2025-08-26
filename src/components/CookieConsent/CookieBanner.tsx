import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Settings, Shield, Check } from 'lucide-react';
import { translations } from '@/lib/cookieConfig';
import { useCookieConsent } from '@/hooks/useCookieConsent';

interface CookieBannerProps {
  language?: 'en' | 'fr' | 'ar';
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ language = 'en' }) => {
  const { hasConsent, acceptAll, rejectAll, openModal } = useCookieConsent();
  const t = translations[language].banner;

  if (hasConsent) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <Card className="mx-auto max-w-6xl bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
        <div className="relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
          
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Icon and Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 
                      id="cookie-banner-title"
                      className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3"
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {t.title}
                    </h3>
                    
                    <p 
                      id="cookie-banner-description"
                      className="text-neutral-light leading-relaxed mb-4"
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {t.description}
                    </p>
                    
                    <button
                      onClick={() => window.open('/privacy-policy', '_blank')}
                      className="text-primary hover:text-accent transition-colors text-sm font-medium underline underline-offset-4"
                      aria-label={`${t.privacyPolicy} - ${language === 'ar' ? 'يفتح في نافذة جديدة' : language === 'fr' ? 'Ouvre dans une nouvelle fenêtre' : 'Opens in new window'}`}
                    >
                      {t.privacyPolicy}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="border-neutral-light text-neutral hover:bg-neutral-light/10 font-montserrat px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  aria-label={t.rejectAll}
                >
                  <X className="w-4 h-4 mr-2" />
                  {t.rejectAll}
                </Button>
                
                <Button
                  onClick={openModal}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-montserrat px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  aria-label={t.customize}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {t.customize}
                </Button>
                
                <Button
                  onClick={acceptAll}
                  className="bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-8 py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105"
                  aria-label={t.acceptAll}
                >
                  <Check className="w-4 h-4 mr-2" />
                  {t.acceptAll}
                </Button>
              </div>
            </div>

            {/* CNDP Compliance Notice */}
            <div className="mt-6 pt-4 border-t border-neutral-light/20">
              <p className="text-xs text-neutral-light opacity-75 text-center">
                {language === 'ar' 
                  ? 'متوافق مع اللجنة الوطنية لمراقبة حماية المعطيات الشخصية (CNDP) - المغرب'
                  : language === 'fr'
                  ? 'Conforme à la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) - Maroc'
                  : 'Compliant with National Commission for Personal Data Protection (CNDP) - Morocco'
                }
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};