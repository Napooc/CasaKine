import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroIndexImage from '@/assets/hero-index.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Stethoscope, 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Phone,
  Star,
  ChevronRight,
  Activity,
  Shield,
  Zap,
  Calendar
} from 'lucide-react';

const Index = () => {
  const handleBookAppointment = () => {
    // Navigate to contact page or open booking modal
    console.log('Book appointment clicked');
  };

  const services = [
    {
      icon: Activity,
      title: 'Rééducation Fonctionnelle',
      description: 'Récupération post-traumatique et rééducation neurologique personnalisée',
      color: 'text-primary'
    },
    {
      icon: Heart,
      title: 'Thérapies Manuelles',
      description: 'Massage thérapeutique, ostéopathie et techniques myofasciales',
      color: 'text-medical-red'
    },
    {
      icon: Zap,
      title: 'Amincissement & Bien-être',
      description: 'Programmes minceur, drainage lymphatique et électrothérapie',
      color: 'text-secondary'
    },
    {
      icon: Shield,
      title: 'Gymnastique Médicale',
      description: 'Renforcement musculaire, Pilates thérapeutique et yoga adapté',
      color: 'text-accent'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Un centre exceptionnel où professionnalisme rime avec bienveillance. Dr. Nawal est extraordinaire !',
      rating: 5,
      location: 'Casablanca'
    },
    {
      name: 'Ahmed K.',
      text: 'Des résultats visibles dès les premières séances. L\'équipe est à l\'écoute et utilise des techniques innovantes.',
      rating: 5,
      location: 'Rabat'
    },
    {
      name: 'Fatima Z.',
      text: 'Après mon accident, Dr. Nawal m\'a aidée à retrouver ma mobilité. Je recommande vivement !',
      rating: 5,
      location: 'Casablanca'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroIndexImage} 
            alt="Modern medical clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float-delay"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-primary rounded-full opacity-25 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-accent rounded-full opacity-20 animate-float-delay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
              Votre <span className="text-gradient-accent">Bien-être</span>,<br />
              Notre <span className="text-white">Expertise</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
              Centre de Kinésithérapie Premium à Casablanca
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Découvrez des soins de kinésithérapie exceptionnels avec Dr. Nawal El Ghorfi, alliant expertise médicale et technologies de pointe pour votre rétablissement optimal.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button onClick={handleBookAppointment} className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110 hover:shadow-accent-glow">
                <Calendar className="w-5 h-5 mr-3" />
                Réservez Votre Consultation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-white">
                En savoir plus
              </Button>
            </div>
          </ScrollAnimation>

          {/* Stats Section */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Star, value: '15+', label: 'Années d\'expérience' },
                { icon: Users, value: '2000+', label: 'Patients satisfaits' },
                { icon: Award, value: '98%', label: 'Taux de réussite' },
                { icon: Calendar, value: '24/7', label: 'Disponibilité' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-card p-6 text-center transition-all duration-500 hover:scale-110 hover-glow">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-playfair font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-montserrat text-neutral-lightest/80">
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

      {/* Services Section */}
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 medical-pattern opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Spécialités</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
                Des soins personnalisés pour chaque besoin, avec des techniques modernes 
                et une approche humaine exceptionnelle.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollAnimation 
                  key={index}
                  animation="scale-up"
                  delay={index * 200}
                >
                  <Card className="group glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent/10 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                        <Icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-neutral-light leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        className="mt-6 text-accent hover:text-accent-dark hover:bg-accent/10 group-hover:translate-x-2 transition-all duration-300"
                      >
                        En savoir plus
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="text-white">
                <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8">
                  L'Excellence au Service de 
                  <span className="text-gradient-accent block">Votre Santé</span>
                </h2>
                <p className="text-xl text-neutral-lightest/90 mb-8 leading-relaxed">
                  Avec plus de 15 années d'expérience, Dr. Nawal El Ghorfi vous accompagne 
                  vers un rétablissement optimal grâce à des techniques innovantes et 
                  une approche personnalisée.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Diplômée d'État en Kinésithérapie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Spécialisée en rééducation fonctionnelle</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Formation continue en techniques innovantes</span>
                  </div>
                </div>

                <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-8 py-4 rounded-full shadow-strong transition-all duration-300 hover:scale-105">
                  Découvrir notre histoire
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="glass-card p-2 rounded-3xl">
                  <img 
                    src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png"
                    alt="Dr. Nawal El Ghorfi"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl">
                  <div className="text-accent text-2xl font-playfair font-bold">2000+</div>
                  <div className="text-white text-sm">Patients</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl">
                  <div className="text-secondary text-2xl font-playfair font-bold">98%</div>
                  <div className="text-white text-sm">Satisfaction</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Témoignages <span className="text-gradient-accent">Clients</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Découvrez les expériences exceptionnelles de nos patients
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation 
                key={index}
                animation="rotate-in"
                delay={index * 200}
              >
                <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-neutral mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-playfair font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-montserrat font-semibold text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-neutral-light flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
              Prêt à Commencer Votre 
              <span className="text-white/80 block">Rétablissement ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Prenez rendez-vous dès aujourd'hui et découvrez comment nos soins personnalisés 
              peuvent transformer votre bien-être.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={handleBookAppointment}
                className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5 mr-3" />
                Prendre Rendez-vous
              </Button>
              
              <div className="flex items-center space-x-4 text-white/90">
                <Clock className="w-5 h-5" />
                <span className="font-montserrat">Ouvert 7j/7 • Urgences acceptées</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
