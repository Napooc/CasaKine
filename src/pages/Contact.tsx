import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import HeroSection from '@/components/HeroSection';
import Map from '@/components/Map';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useParallax } from '@/hooks/useScrollAnimation';
const contactSignageBg = '/lovable-uploads/4d328ddb-b62f-40af-b284-cff2ebacc9f3.png';
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
      {/* Modern Hero Section with Signage Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Modern Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${contactSignageBg})`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="space-y-8">
              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight">
                <span className="block">Votre</span>
                <span className="block text-gradient bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  Rendez-vous
                </span>
                <span className="block">Nous Attend</span>
              </h1>

              {/* Subtitle */}
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl md:text-2xl text-white/90 font-montserrat font-medium">
                  Centre de Kinésithérapie et d'Amincissement
                </p>
                <p className="text-lg md:text-xl text-white/80 font-montserrat">
                  <span className="font-semibold text-yellow-300">Nawal EL GHORFI</span> - Kinésithérapeute Diplômée d'État
                </p>
                <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Plus de <span className="font-bold text-yellow-300">25 ans d'expertise</span> au service des patients. 
                  Centre opérationnel depuis <span className="font-bold text-yellow-300">2001</span>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-primary font-bold px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('tel:+212522398874')}
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Appeler Maintenant
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-full"
                  onClick={() => window.open('https://wa.me/212661677096', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp
                </Button>
              </div>

              {/* Contact Info Quick Access */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                  <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white font-semibold">+212 522 39 88 74</p>
                  <p className="text-white/70 text-sm">Ligne fixe</p>
                </div>
                <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                  <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">+212 661 67 70 96</p>
                  <p className="text-white/70 text-sm">WhatsApp & Mobile</p>
                </div>
                <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                  <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <p className="text-white font-semibold">19 Rue De Masmouda</p>
                  <p className="text-white/70 text-sm">Casablanca 20210</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
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