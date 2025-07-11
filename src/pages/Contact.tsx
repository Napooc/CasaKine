import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import HeroSection from '@/components/HeroSection';
import Map from '@/components/Map';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Star,
  Navigation
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+212 5 22 XX XX XX',
      description: 'Lun-Ven 8h-18h, Sam 8h-14h',
      color: 'text-primary',
      action: 'tel:+212522XXXXXX'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@cabinet-nawal.ma',
      description: 'Réponse sous 24h',
      color: 'text-secondary',
      action: 'mailto:contact@cabinet-nawal.ma'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '123 Bd Hassan II, Casablanca',
      description: 'Quartier Maarif, proche métro',
      color: 'text-accent',
      action: 'https://maps.google.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+212 6 12 34 56 78',
      description: 'Messages et rendez-vous express',
      color: 'text-green-600',
      action: 'https://wa.me/212612345678'
    }
  ];

  const horaires = [
    { jour: 'Lundi - Vendredi', heures: '8h00 - 18h00' },
    { jour: 'Samedi', heures: '8h00 - 14h00' },
    { jour: 'Dimanche', heures: 'Urgences uniquement' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Prenez Rendez-vous en Un Clic"
        subtitle="Contactez-nous pour commencer votre parcours vers le bien-être"
        description="Notre équipe est à votre disposition pour répondre à vos questions et planifier votre consultation personnalisée."
        ctaText="Appeler Maintenant"
        showStats={false}
        backgroundType="gradient"
      />

      {/* Contact Cards Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollAnimation 
                  key={index}
                  animation="scale-up"
                  delay={index * 150}
                >
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow text-center group cursor-pointer h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className={`w-8 h-8 ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                        {info.title}
                      </h3>
                      <p className="text-neutral font-montserrat font-semibold mb-2">
                        {info.value}
                      </p>
                      <p className="text-neutral-light text-sm mb-4 flex-grow">
                        {info.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                        onClick={() => window.open(info.action, '_blank')}
                      >
                        Contacter
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <ScrollAnimation animation="slide-left">
              <div className="glass-card p-10 rounded-3xl shadow-strong">
                <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                  Informations <span className="text-gradient-accent">Contact</span>
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-primary/5 transition-colors duration-300">
                        <div className={`w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair font-bold text-primary mb-1">
                            {info.title}
                          </h3>
                          <p className="text-neutral font-montserrat font-semibold mb-1">
                            {info.value}
                          </p>
                          <p className="text-neutral-light text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>

            {/* Info Panel */}
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                
                {/* Horaires */}
                <div className="glass-card p-8 rounded-3xl shadow-strong">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-accent" />
                    Horaires d'Ouverture
                  </h3>
                  <div className="space-y-4">
                    {horaires.map((horaire, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                        <span className="font-montserrat font-medium text-primary">
                          {horaire.jour}
                        </span>
                        <span className="text-neutral-light">
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-accent/10 rounded-2xl">
                    <p className="text-sm text-neutral flex items-center">
                      <Star className="w-4 h-4 mr-2 text-accent" />
                      Urgences acceptées en dehors des horaires
                    </p>
                  </div>
                </div>

                {/* Urgences */}
                <div className="glass-card p-8 rounded-3xl shadow-strong bg-gradient-to-br from-red-500/5 to-red-500/10">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-red-600" />
                    Urgences
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Pour toute urgence en dehors des horaires d'ouverture, 
                    contactez-nous directement.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-montserrat font-semibold py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105">
                    <Phone className="w-5 h-5 mr-3" />
                    Appel d'Urgence
                  </Button>
                </div>

                {/* WhatsApp */}
                <div className="glass-card p-8 rounded-3xl shadow-strong bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                    WhatsApp
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Échangez rapidement avec notre équipe via WhatsApp 
                    pour des questions ou prises de rendez-vous express.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-montserrat font-semibold py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Ouvrir WhatsApp
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Comment <span className="text-gradient-accent">Nous Trouver</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Situé au cœur de Casablanca, notre centre est facilement accessible
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={200}>
            <div className="glass-card p-4 rounded-3xl shadow-strong overflow-hidden">
              <Map 
                location="H8FJ+HP Casablanca"
                address="123 Boulevard Hassan II, Quartier Maarif, Casablanca, Maroc"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;