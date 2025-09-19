import React, { useState } from 'react';
import { useCookieConsent, CookiePreferences, CookieCategory } from '@/contexts/CookieConsentContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, Clock, Building, Target } from 'lucide-react';

const translations = {
  en: {
    title: "Cookie Settings",
    description: "Manage your cookie preferences. You can enable or disable categories of cookies below. Note that blocking some types of cookies may impact your experience on our website.",
    required: "Required",
    savePreferences: "Save Preferences",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    cookieDetails: "Cookie Details",
    name: "Name",
    provider: "Provider", 
    purpose: "Purpose",
    expiry: "Expiry",
    type: "Type"
  },
  fr: {
    title: "Paramètres des cookies",
    description: "Gérez vos préférences de cookies. Vous pouvez activer ou désactiver les catégories de cookies ci-dessous. Notez que le blocage de certains types de cookies peut impacter votre expérience sur notre site web.",
    required: "Requis",
    savePreferences: "Enregistrer les préférences",
    acceptAll: "Accepter tout",
    rejectAll: "Tout rejeter",
    cookieDetails: "Détails des cookies",
    name: "Nom",
    provider: "Fournisseur",
    purpose: "Objectif", 
    expiry: "Expiration",
    type: "Type"
  },
  ar: {
    title: "إعدادات ملفات تعريف الارتباط",
    description: "إدارة تفضيلات ملفات تعريف الارتباط. يمكنك تمكين أو تعطيل فئات ملفات تعريف الارتباط أدناه. لاحظ أن حظر بعض أنواع ملفات تعريف الارتباط قد يؤثر على تجربتك على موقعنا.",
    required: "مطلوب",
    savePreferences: "حفظ التفضيلات",
    acceptAll: "قبول الكل", 
    rejectAll: "رفض الكل",
    cookieDetails: "تفاصيل ملفات تعريف الارتباط",
    name: "الاسم",
    provider: "المزود",
    purpose: "الغرض",
    expiry: "انتهاء الصلاحية",
    type: "النوع"
  }
};

export function CookieSettingsModal() {
  const { 
    showModal, 
    closeModal, 
    preferences, 
    updatePreferences, 
    acceptAll, 
    rejectAll,
    language,
    cookieCategories 
  } = useCookieConsent();
  
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  const t = translations[language];
  const isRTL = language === 'ar';

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setTempPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    updatePreferences(tempPreferences);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setTempPreferences(allAccepted);
    acceptAll();
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setTempPreferences(allRejected);
    rejectAll();
  };

  const getCategoryName = (category: CookieCategory) => {
    switch (language) {
      case 'ar': return category.nameAr;
      case 'fr': return category.nameFr;
      default: return category.name;
    }
  };

  const getCategoryDescription = (category: CookieCategory) => {
    switch (language) {
      case 'ar': return category.descriptionAr;
      case 'fr': return category.descriptionFr;
      default: return category.description;
    }
  };

  const getCookiePurpose = (cookie: CookieCategory['cookies'][0]) => {
    switch (language) {
      case 'ar': return cookie.purposeAr;
      case 'fr': return cookie.purposeFr;
      default: return cookie.purpose;
    }
  };

  const getIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'essential': return <Shield className="h-5 w-5" />;
      case 'analytics': return <Target className="h-5 w-5" />;
      case 'marketing': return <Building className="h-5 w-5" />;
      case 'preferences': return <Clock className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <Dialog open={showModal} onOpenChange={closeModal}>
      <DialogContent 
        className="max-w-4xl max-h-[90vh] overflow-hidden"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <DialogHeader>
          <DialogTitle className="text-xl">{t.title}</DialogTitle>
          <DialogDescription className="text-sm">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {cookieCategories.map((category) => {
              const categoryKey = category.id as keyof CookiePreferences;
              const isEnabled = tempPreferences[categoryKey];
              
              return (
                <Card key={category.id} className="relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getIcon(category.id)}
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {getCategoryName(category)}
                            {category.required && (
                              <Badge variant="secondary" className="text-xs">
                                {t.required}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {getCategoryDescription(category)}
                          </CardDescription>
                        </div>
                      </div>
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={() => handleToggle(categoryKey)}
                        disabled={category.required}
                        aria-label={`Toggle ${getCategoryName(category)}`}
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm">{t.cookieDetails}</h4>
                      <div className="space-y-3">
                        {category.cookies.map((cookie, index) => (
                          <div key={index} className="border rounded-lg p-3 bg-muted/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                              <div>
                                <span className="font-medium text-muted-foreground">{t.name}:</span>
                                <p className="break-all">{cookie.name}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">{t.provider}:</span>
                                <p>{cookie.provider}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">{t.expiry}:</span>
                                <p>{cookie.expiry}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">{t.type}:</span>
                                <p>{cookie.type}</p>
                              </div>
                              <div className="md:col-span-2 lg:col-span-4">
                                <span className="font-medium text-muted-foreground">{t.purpose}:</span>
                                <p>{getCookiePurpose(cookie)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="w-full sm:w-auto"
            >
              {t.rejectAll}
            </Button>
            <Button
              variant="outline"
              onClick={handleAcceptAll}
              className="w-full sm:w-auto"
            >
              {t.acceptAll}
            </Button>
            <Button
              onClick={handleSave}
              className="w-full sm:w-auto"
            >
              {t.savePreferences}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}