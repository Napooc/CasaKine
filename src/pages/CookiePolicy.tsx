import React from 'react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  User,
  Database,
  Info
} from 'lucide-react';
import { cookieCategories } from '@/lib/cookieConfig';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const CookiePolicy = () => {
  const { openModal } = useCookieConsent();

  const categoryIcons = {
    essential: Shield,
    analytics: BarChart3,
    marketing: Target,
    preferences: Settings
  };

  return (
    <Layout>
      <SEO 
        title="Politique des Cookies - Dr. Nawal El Ghorfi | Casakine"
        description="Politique complète des cookies conforme à la CNDP. Découvrez comment nous utilisons les cookies sur notre site de kinésithérapie à Casablanca."
        keywords="politique cookies, CNDP Maroc, protection données personnelles, kinésithérapie casablanca, dr nawal el ghorfi"
        canonical="https://casakine.com/cookie-policy"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white mb-8 p-0" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </Button>
            
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Politique des <span className="text-gradient-accent">Cookies</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl text-neutral-lightest/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Information complète sur l'utilisation des cookies conformément aux règles de la CNDP (Maroc)
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <Button 
              onClick={openModal}
              className="bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-8 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110"
            >
              <Settings className="w-5 h-5 mr-3" />
              Gérer mes Préférences
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center gap-3">
                  <Info className="w-6 h-6" />
                  Qu'est-ce qu'un Cookie ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-neutral-light leading-relaxed">
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
                  lors de la visite d'un site web. Il permet de reconnaître votre navigateur et de mémoriser certaines 
                  informations vous concernant.
                </p>
                <p>
                  Conformément à la réglementation marocaine sur la protection des données personnelles (CNDP), 
                  nous vous informons de manière transparente sur l'utilisation des cookies sur notre site.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Conformité CNDP - Maroc
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-neutral-light leading-relaxed">
                <p>
                  Notre site respecte les dispositions de la loi n° 09-08 relative à la protection des personnes 
                  physiques à l'égard du traitement des données à caractère personnel, sous l'autorité de la 
                  Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-semibold text-primary mb-3">Vos droits :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Droit d'information transparent</li>
                    <li>• Consentement libre et éclairé</li>
                    <li>• Droit de retrait du consentement</li>
                    <li>• Droit d'accès et de rectification</li>
                    <li>• Droit à l'effacement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-16 bg-neutral-lightest">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Types de <span className="text-gradient-accent">Cookies Utilisés</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Découvrez en détail les différents types de cookies que nous utilisons
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8">
            {cookieCategories.map((category, index) => {
              const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
              
              return (
                <ScrollAnimation key={category.id} animation="fade-up" delay={index * 200}>
                  <Card className="border-0 shadow-soft hover:shadow-strong transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          category.essential ? 'bg-gradient-primary' : 'bg-gradient-accent'
                        }`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-playfair text-primary mb-2 flex items-center gap-3">
                            {category.name.fr}
                            {category.essential && (
                              <Badge className="bg-primary/10 text-primary">
                                Essentiel
                              </Badge>
                            )}
                          </CardTitle>
                          <p className="text-neutral-light">
                            {category.description.fr}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Cookies de cette catégorie :
                      </h4>
                      
                      <div className="grid gap-4">
                        {category.cookies.map((cookie, cookieIndex) => (
                          <div key={cookieIndex} className="bg-white rounded-xl p-4 border border-neutral-light/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Info className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">Nom</span>
                                </div>
                                <p className="font-mono text-xs bg-neutral-lightest px-2 py-1 rounded">
                                  {cookie.name}
                                </p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <User className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">Fournisseur</span>
                                </div>
                                <p className="text-neutral">{cookie.provider}</p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Target className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">Objectif</span>
                                </div>
                                <p className="text-neutral">{cookie.purpose}</p>
                              </div>
                              
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="w-3 h-3 text-accent" />
                                  <span className="font-semibold text-primary">Durée</span>
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
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary text-center mb-6">
                  Délégué à la Protection des Données (DPO)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-light text-center mb-8">
                  Pour toute question concernant vos données personnelles ou l'exercice de vos droits, 
                  vous pouvez contacter notre délégué à la protection des données :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Email</h4>
                    <p className="text-neutral-light text-sm">dpo@casakine.com</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Téléphone</h4>
                    <p className="text-neutral-light text-sm">+212 661 67 70 96</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Adresse</h4>
                    <p className="text-neutral-light text-sm">Casablanca, Maroc</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    onClick={openModal}
                    className="bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-8 py-3 rounded-full"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Modifier mes Préférences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;