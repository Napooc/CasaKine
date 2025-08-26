import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  Info,
  Clock,
  User,
  Database
} from 'lucide-react';
import { cookieCategories, translations } from '@/lib/cookieConfig';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { ConsentPreferences } from '@/lib/cookieUtils';

interface CookieModalProps {
  language?: 'en' | 'fr' | 'ar';
}

const categoryIcons = {
  essential: Shield,
  analytics: BarChart3,
  marketing: Target,
  preferences: Settings
};

export const CookieModal: React.FC<CookieModalProps> = ({ language = 'en' }) => {
  const { isModalOpen, closeModal, savePreferences, acceptAll, rejectAll, preferences } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<Partial<ConsentPreferences>>({
    essential: true,
    analytics: preferences?.analytics ?? false,
    marketing: preferences?.marketing ?? false,
    preferences: preferences?.preferences ?? false
  });
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  
  const t = translations[language].modal;

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const handlePreferenceChange = (categoryId: string, enabled: boolean) => {
    setLocalPreferences(prev => ({
      ...prev,
      [categoryId]: enabled
    }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  const handleAcceptAll = () => {
    setLocalPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    acceptAll();
  };

  const handleRejectAll = () => {
    setLocalPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    rejectAll();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent 
        className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border-0 shadow-2xl z-[60]"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            {t.title}
          </DialogTitle>
          <p className="text-neutral-light leading-relaxed text-lg">
            {t.description}
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {cookieCategories.map((category) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
            const isExpanded = expandedCategories.has(category.id);
            const isEnabled = Boolean(localPreferences[category.id as keyof ConsentPreferences]) ?? false;

            return (
              <Card key={category.id} className="border border-neutral-light/20 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        category.essential 
                          ? 'bg-gradient-primary' 
                          : isEnabled 
                          ? 'bg-gradient-accent' 
                          : 'bg-neutral-light/20'
                      }`}>
                        <Icon className={`w-6 h-6 ${category.essential || isEnabled ? 'text-white' : 'text-neutral'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-xl font-playfair text-primary mb-2 flex items-center gap-3">
                          {category.name[language]}
                          {category.essential && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                              {language === 'ar' ? 'أساسي' : language === 'fr' ? 'Essentiel' : 'Essential'}
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-neutral-light text-sm leading-relaxed">
                          {category.description[language]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => handlePreferenceChange(category.id, checked)}
                        disabled={category.essential}
                        className="data-[state=checked]:bg-accent"
                        aria-label={`${category.essential ? 'Always enabled' : 'Toggle'} ${category.name[language]}`}
                      />
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCategory(category.id)}
                        className="p-2 rounded-full hover:bg-neutral-light/10"
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${category.name[language]} details`}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <Separator className="mb-6" />
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        {language === 'ar' ? 'ملفات تعريف الارتباط المستخدمة' : 
                         language === 'fr' ? 'Cookies utilisés' : 'Cookies Used'}
                      </h4>
                      
                      <div className="grid gap-3">
                        {category.cookies.map((cookie, index) => (
                          <div key={index} className="bg-neutral-lightest/50 rounded-xl p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Info className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">
                                    {language === 'ar' ? 'الاسم' : language === 'fr' ? 'Nom' : 'Name'}
                                  </span>
                                </div>
                                <p className="text-neutral font-mono text-xs bg-white px-2 py-1 rounded">
                                  {cookie.name}
                                </p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <User className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">
                                    {language === 'ar' ? 'المزود' : language === 'fr' ? 'Fournisseur' : 'Provider'}
                                  </span>
                                </div>
                                <p className="text-neutral">{cookie.provider}</p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Target className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">
                                    {language === 'ar' ? 'الغرض' : language === 'fr' ? 'Objectif' : 'Purpose'}
                                  </span>
                                </div>
                                <p className="text-neutral">{cookie.purpose}</p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">
                                    {language === 'ar' ? 'انتهاء الصلاحية' : language === 'fr' ? 'Expiration' : 'Expiry'}
                                  </span>
                                </div>
                                <p className="text-neutral">{cookie.expiry}</p>
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <Badge variant="outline" className="text-xs">
                                {cookie.type}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-light/20">
          <Button
            onClick={handleRejectAll}
            variant="outline"
            className="border-neutral-light text-neutral hover:bg-neutral-light/10 font-montserrat px-6 py-3 rounded-full flex-1"
          >
            <X className="w-4 h-4 mr-2" />
            {t.rejectAll}
          </Button>
          
          <Button
            onClick={handleSave}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-montserrat px-6 py-3 rounded-full flex-1"
          >
            <Settings className="w-4 h-4 mr-2" />
            {t.savePreferences}
          </Button>
          
          <Button
            onClick={handleAcceptAll}
            className="bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-6 py-3 rounded-full flex-1"
          >
            <Check className="w-4 h-4 mr-2" />
            {t.acceptAll}
          </Button>
        </div>

        {/* Footer Info */}
        <div className="text-center pt-4 border-t border-neutral-light/10">
          <p className="text-xs text-neutral-light opacity-75">
            {language === 'ar' 
              ? 'يمكنك تغيير تفضيلاتك في أي وقت باستخدام رابط "إدارة ملفات تعريف الارتباط" في التذييل'
              : language === 'fr'
              ? 'Vous pouvez modifier vos préférences à tout moment en utilisant le lien "Gérer les Cookies" en bas de page'
              : 'You can change your preferences anytime using the "Manage Cookies" link in the footer'
            }
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};