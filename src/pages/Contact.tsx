import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import HeroSection from '@/components/HeroSection';
import Map from '@/components/Map';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useParallax } from '@/hooks/useScrollAnimation';

import { Phone, Mail, MapPin, Clock, MessageCircle, Star, Navigation } from 'lucide-react';
const Contact = () => {
  const scrollY = useParallax();
  const structuredData = [getLocalBusinessSchema(), getBreadcrumbSchema([{
    name: "Accueil",
    url: "https://casakine.com"
  }, {
    name: "Contact",
    url: "https://casakine.com/contact"
  }])];
  const contactInfo = [{
    icon: Phone,
    title: 'Téléphone',
    value: '+212 522 39 88 74 / +212 661 67 70 96',
    description: 'Lun-Ven 8h-18h, Sam 8h-14h',
    color: 'text-primary',
    action: null,
    hasMultipleOptions: true,
    phoneNumbers: [{
      number: '+212 522 39 88 74',
      label: 'Ligne fixe'
    }, {
      number: '+212 661 67 70 96',
      label: 'Mobile'
    }]
  }, {
    icon: Mail,
    title: 'Email',
    value: 'info@casakine.com',
    description: 'Réponse sous 24h',
    color: 'text-secondary',
    action: 'mailto:info@casakine.com?subject=Demande de renseignements'
  }, {
    icon: MapPin,
    title: 'Adresse',
    value: '19 Rue De Masmouda',
    description: 'Casablanca 20210',
    color: 'text-accent',
    action: 'https://maps.google.com/?q=Kinésithérapie+Nawal+EL+GHORFI,Casablanca,Morocco'
  }, {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+212 661 67 70 96',
    description: 'Messages et rendez-vous express',
    color: 'text-green-600',
    action: 'https://wa.me/212661677096?text=Bonjour, je souhaiterais prendre rendez-vous'
  }];
  const horaires = [{
    jour: 'Lundi - Mercredi - Vendredi',
    heures: '09h00 - 12h30 / 15h00 - 19h00 '
  }, {
    jour: 'Mardi - Jeudi (horaires continus)',
    heures: '09h30 - 16h00'
  }, {
    jour: 'Samedi',
    heures: '09h00 - 12h30'
  }];
  return <Layout>
      <SEO title="Contact et Rendez-vous - Centre Casakine Casablanca" description="📍 Prenez rendez-vous au centre de kinésithérapie Casakine Casablanca. 📞 +212 661 67 70 96 ✉️ info@casakine.com 📍 19 Rue De Masmouda, Casablanca. Horaires et plan d'accès." keywords="rendez vous kinésithérapeute casablanca, contact casakine, adresse kinésithérapie casablanca, horaires dr nawal el ghorfi, consultation physiothérapie" canonical="https://casakine.com/contact" structuredData={structuredData} />
      {/* Modern Text-Focused Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="space-y-12">
              {/* Main Title with Modern Typography */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">Votre</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-black tracking-tight">
                    Rendez-vous
                  </span>
                  <span className="block text-white drop-shadow-lg">Nous Attend</span>
                </h1>
                
                {/* Decorative line */}
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
                </div>
              </div>

              {/* Subtitle with Better Hierarchy */}
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-4xl text-white font-playfair font-semibold tracking-wide">
                    Centre de Kinésithérapie et d'Amincissement
                  </h2>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-px bg-yellow-400" />
                    <p className="text-xl md:text-2xl text-yellow-300 font-montserrat font-bold tracking-wide">
                      Nawal EL GHORFI
                    </p>
                    <div className="w-12 h-px bg-yellow-400" />
                  </div>
                  <p className="text-lg md:text-xl text-white/90 font-montserrat font-medium">
                    Kinésithérapeute Diplômée d'État
                  </p>
                </div>
                
                <div className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-montserrat">
                  <p className="mb-4">
                    Plus de <span className="font-bold text-yellow-300 text-2xl">25 ans</span> d'expertise dédiée à votre bien-être
                  </p>
                  <p>
                    Centre opérationnel depuis <span className="font-bold text-yellow-300">2001</span> • Casablanca
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-primary font-bold px-10 py-7 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300/20"
                  onClick={() => window.open('tel:+212522398874')}
                >
                  <Phone className="w-7 h-7 mr-4" />
                  Appeler Maintenant
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-3 border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-10 py-7 text-xl rounded-full font-semibold transition-all duration-300 hover:border-white/60"
                  onClick={() => window.open('https://wa.me/212661677096', '_blank')}
                >
                  <MessageCircle className="w-7 h-7 mr-4" />
                  WhatsApp
                </Button>
              </div>

              {/* Enhanced Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto">
                <div className="group glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">+212 522 39 88 74</p>
                  <p className="text-white/70 text-sm font-medium">Ligne fixe cabinet</p>
                </div>
                
                <div className="group glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">+212 661 67 70 96</p>
                  <p className="text-white/70 text-sm font-medium">WhatsApp & Mobile</p>
                </div>
                
                <div className="group glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg mb-1">19 Rue De Masmouda</p>
                  <p className="text-white/70 text-sm font-medium">Casablanca 20210</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Modern Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <p className="text-white/60 text-sm font-medium">Découvrir</p>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <section className="py-20 bg-background/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
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
                      
                      
                      {info.hasMultipleOptions ? <div className="space-y-2 w-full">
                          {info.phoneNumbers?.map((phone, phoneIndex) => <Button key={phoneIndex} variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium text-xs" onClick={() => window.open(`tel:${phone.number}`)}>
                              {phone.label}
                            </Button>)}
                        </div> : <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium" onClick={() => window.open(info.action, info.title === 'Adresse' ? '_blank' : '_self')}>
                          Contacter
                        </Button>}
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32 bg-neutral-lightest/90 backdrop-blur-sm relative overflow-hidden z-10">
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
                  return <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-primary/5 transition-colors duration-300">
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
                      </div>;
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
                    {horaires.map((horaire, index) => <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                        <span className="font-montserrat font-medium text-primary">
                          {horaire.jour}
                        </span>
                        <span className="text-neutral-light">
                          {horaire.heures}
                        </span>
                      </div>)}
                  </div>
                  
                  
                </div>

                {/* Urgences */}
                

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
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-montserrat font-semibold py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105" onClick={() => window.open('https://wa.me/212661677096', '_blank')}>
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
      <section id="map" className="py-32 bg-background/90 backdrop-blur-sm relative z-10">
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
              <Map location="Kinésithérapie Nawal EL GHORFI" address="Kinésithérapie Nawal EL GHORFI, Casablanca" />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Contact;