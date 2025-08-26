import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import Map from '@/components/Map';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useParallax } from '@/hooks/useScrollAnimation';
import contactParallaxBg from '@/assets/contact-parallax-bg.jpg';
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

  return (
    <Layout>
      <SEO 
        title="Contact et Rendez-vous - Centre Casakine Casablanca" 
        description="📍 Prenez rendez-vous au centre de kinésithérapie Casakine Casablanca. 📞 +212 661 67 70 96 ✉️ info@casakine.com 📍 19 Rue De Masmouda, Casablanca. Horaires et plan d'accès." 
        keywords="rendez vous kinésithérapeute casablanca, contact casakine, adresse kinésithérapie casablanca, horaires dr nawal el ghorfi, consultation physiothérapie" 
        canonical="https://casakine.com/contact" 
        structuredData={structuredData} 
      />
      
      {/* Parallax Background */}
      <div className="fixed inset-0 w-full h-full z-0" style={{
        backgroundImage: `url(${contactParallaxBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: 0.3
      }} />

      {/* Hero Section with Modern Gradient */}
      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-yellow-400 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/20"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Centre de <span className="text-orange-300">Kinésithérapie</span><br />
                et d'<span className="text-yellow-300">Amincissement</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={400}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-white/95 mb-8 drop-shadow-md">
                Nawal EL GHORFI - Kinésithérapeute Diplômée d'État
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-white/90 drop-shadow-sm font-medium">
                Plus de 25 ans d'expertise au service des patients. Centre opérationnel depuis 
                2001. Prenez rendez-vous facilement.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  onClick={() => window.open('tel:+212522398874')} 
                  className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white font-montserrat font-bold px-12 py-6 text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Appeler Maintenant
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://wa.me/212661677096', '_blank')} 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-montserrat font-semibold px-10 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp
                </Button>
              </div>
            </ScrollAnimation>

            {/* Stats Section */}
            <ScrollAnimation animation="fade-up" delay={1000}>
              <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                {[{
                  icon: Star,
                  value: '+25',
                  label: 'Années d\'expérience'
                }, {
                  icon: MapPin,
                  value: '2001',
                  label: 'Centre opérationnel'
                }].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-8 text-center transition-all duration-500 hover:scale-110 rounded-2xl border border-white/20 shadow-xl">
                      <Icon className="w-10 h-10 text-yellow-300 mx-auto mb-4" />
                      <div className="text-4xl font-playfair font-bold text-white mb-2 drop-shadow-md">
                        {stat.value}
                      </div>
                      <div className="text-lg font-montserrat text-white/80 drop-shadow-sm">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Cards Section with Enhanced Visibility */}
      <section className="py-20 bg-white/95 backdrop-blur-sm relative z-10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Nos <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Coordonnées</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                Contactez-nous facilement par le moyen qui vous convient le mieux
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center group cursor-pointer h-full rounded-2xl overflow-hidden">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-montserrat font-bold mb-3 text-lg">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm mb-6 font-medium">
                        {info.description}
                      </p>
                      
                      {info.hasMultipleOptions ? (
                        <div className="space-y-3 w-full mt-auto">
                          {info.phoneNumbers?.map((phone, phoneIndex) => (
                            <Button 
                              key={phoneIndex} 
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                              onClick={() => window.open(`tel:${phone.number}`)}
                            >
                              {phone.label}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <Button 
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-full transition-all duration-300 mt-auto shadow-lg hover:shadow-xl"
                          onClick={() => window.open(info.action, info.title === 'Adresse' ? '_blank' : '_self')}
                        >
                          Contacter
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section with Enhanced Contrast */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information with Better Contrast */}
            <ScrollAnimation animation="slide-left">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
                  Informations <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Détaillées</span>
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border border-gray-200">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair font-bold text-gray-900 mb-2 text-xl">
                            {info.title}
                          </h3>
                          <p className="text-gray-800 font-montserrat font-bold mb-2 text-lg">
                            {info.value}
                          </p>
                          <p className="text-gray-600 font-medium">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>

            {/* Enhanced Info Panel */}
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                
                {/* Horaires with Better Visibility */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    Horaires d'Ouverture
                  </h3>
                  <div className="space-y-6">
                    {horaires.map((horaire, index) => (
                      <div key={index} className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <span className="font-montserrat font-bold text-gray-900 text-lg">
                          {horaire.jour}
                        </span>
                        <span className="text-gray-700 font-semibold text-lg">
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced WhatsApp Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-2xl border-2 border-green-200">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    WhatsApp
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg font-medium leading-relaxed">
                    Échangez rapidement avec notre équipe via WhatsApp 
                    pour des questions ou prises de rendez-vous express.
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-montserrat font-bold py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    onClick={() => window.open('https://wa.me/212661677096', '_blank')}
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Ouvrir WhatsApp
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section id="map" className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                Comment <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Nous Trouver</span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
                Situé au cœur de Casablanca, notre centre est facilement accessible 
                en transport en commun et dispose d'un parking
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={200}>
            <div className="bg-white p-6 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <Map location="Kinésithérapie Nawal EL GHORFI" address="Kinésithérapie Nawal EL GHORFI, Casablanca" />
            </div>
          </ScrollAnimation>

          {/* Enhanced Location Info */}
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-bold text-gray-900 text-xl mb-2">Adresse</h4>
                <p className="text-gray-700 font-semibold text-lg">19 Rue De Masmouda</p>
                <p className="text-gray-600 font-medium">Casablanca 20210</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-bold text-gray-900 text-xl mb-2">Transport</h4>
                <p className="text-gray-700 font-semibold">Métro, Bus, Taxi</p>
                <p className="text-gray-600 font-medium">Parking disponible</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-bold text-gray-900 text-xl mb-2">Urgences</h4>
                <p className="text-gray-700 font-semibold">Dimanche</p>
                <p className="text-gray-600 font-medium">Sur rendez-vous</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;