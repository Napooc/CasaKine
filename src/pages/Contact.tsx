import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroContactImage from '@/assets/hero-contact.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageCircle,
  Star,
  Navigation,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      primary: '+212 5 22 XX XX XX',
      secondary: '+212 6 XX XX XX XX',
      description: 'Appelez-nous pour prendre rendez-vous',
      action: 'Appeler maintenant',
      gradient: 'from-primary to-primary-dark'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      primary: '123 Rue de la Santé',
      secondary: 'Casablanca, Maroc',
      description: 'Visitez notre centre moderne',
      action: 'Voir l\'itinéraire',
      gradient: 'from-secondary to-secondary-dark'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'contact@cabinet-nawal.ma',
      secondary: 'rendez-vous@cabinet-nawal.ma',
      description: 'Écrivez-nous à tout moment',
      action: 'Envoyer un email',
      gradient: 'from-accent to-accent-dark'
      color: 'text-secondary',
      action: 'mailto:contact@nawal-kine.ma'
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
      icon: Smartphone,
      title: 'WhatsApp',
      value: '+212 6 12 34 56 78',
      description: 'Messages et rendez-vous express',
      color: 'text-green-600',
      action: 'https://wa.me/212612345678'
    }
  ];

  const services = [
    'Rééducation Fonctionnelle',
    'Thérapies Manuelles',
    'Amincissement & Bien-être',
    'Gymnastique Médicale',
    'Rééducation Respiratoire',
    'Rééducation Périnéale',
    'Autre (préciser dans le message)'
  ];

  const horaires = [
    { jour: 'Lundi - Vendredi', heures: '8h00 - 18h00' },
    { jour: 'Samedi', heures: '8h00 - 14h00' },
    { jour: 'Dimanche', heures: 'Urgences uniquement' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow text-center group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className={`w-8 h-8 ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                        {info.title}
                      </h3>
                      <p className="text-neutral font-montserrat font-semibold mb-2">
                        {info.value}
                      </p>
                      <p className="text-neutral-light text-sm">
                        {info.description}
                      </p>
                      
                      <Button
                        variant="ghost"
                        className={`mt-4 ${info.color} hover:bg-current/10 w-full group-hover:translate-y-1 transition-all duration-300`}
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
            
            {/* Contact Form */}
            <ScrollAnimation animation="slide-left">
              <div className="glass-card p-10 rounded-3xl shadow-strong">
                <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                  Réservez Votre <span className="text-gradient-accent">Consultation</span>
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center animate-scale-up">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-secondary mb-4">
                      Message Envoyé !
                    </h3>
                    <p className="text-neutral-light">
                      Nous vous contacterons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="prenom" className="text-primary font-montserrat font-medium">
                          Prénom *
                        </Label>
                        <Input
                          id="prenom"
                          value={formData.prenom}
                          onChange={(e) => handleInputChange('prenom', e.target.value)}
                          className="mt-2 glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="nom" className="text-primary font-montserrat font-medium">
                          Nom *
                        </Label>
                        <Input
                          id="nom"
                          value={formData.nom}
                          onChange={(e) => handleInputChange('nom', e.target.value)}
                          className="mt-2 glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-primary font-montserrat font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2 glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telephone" className="text-primary font-montserrat font-medium">
                          Téléphone *
                        </Label>
                        <Input
                          id="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => handleInputChange('telephone', e.target.value)}
                          className="mt-2 glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-primary font-montserrat font-medium">
                        Service souhaité
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="mt-2 w-full px-4 py-3 glass-effect border border-primary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary font-montserrat font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 glass-effect border-primary/20 focus:border-primary focus:ring-primary/20 min-h-[120px]"
                        placeholder="Décrivez votre besoin ou posez votre question..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full morph-button bg-gradient-primary hover-glow text-white font-montserrat font-semibold py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>
                  </form>
                )}
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
                <div className="glass-card p-8 rounded-3xl shadow-strong bg-gradient-to-br from-medical-red/5 to-medical-red/10">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-medical-red" />
                    Urgences
                  </h3>
                  <p className="text-neutral-light mb-6">
                    Pour toute urgence en dehors des horaires d'ouverture, 
                    contactez-nous directement.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-medical-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-montserrat font-semibold py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105">
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
              <div className="bg-gradient-primary/10 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                    Carte Interactive
                  </h3>
                  <p className="text-neutral-light mb-6">
                    123 Boulevard Hassan II, Quartier Maarif<br />
                    Casablanca, Maroc
                  </p>
                  <Button className="morph-button bg-gradient-primary hover-glow text-white font-montserrat font-semibold px-8 py-3 rounded-full shadow-medium transition-all duration-300 hover:scale-105">
                    <MapPin className="w-5 h-5 mr-3" />
                    Ouvrir dans Maps
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;