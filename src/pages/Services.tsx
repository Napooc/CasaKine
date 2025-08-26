import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroServicesImage from '@/assets/hero-services.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Heart, Zap, Shield, Clock, CheckCircle, Star, ArrowRight, Stethoscope, Target, Users, Award, Baby, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate();
  const mainServices = [{
    icon: Heart,
    title: 'Kinésithérapie',
    description: 'Amélioration de la respiration chez l\'adulte et l\'enfant',
    features: ['Kinésithérapie respiratoire nourrisson', 'Kinésithérapie respiratoire adulte', 'Désencombrement bronchique', 'Possibilité à domicile'],
    duration: '30-45 minutes',
    color: 'text-medical-red',
    bgGradient: 'from-red-500/10 to-red-500/5',
    route: '/services/kinesitherapie-respiratoire'
  }, {
    icon: Zap,
    title: 'Services d\'Amincissement et d\'Esthétique',
    description: 'Techniques modernes d\'amincissement pour sculpter votre silhouette',
    features: ['Cryothérapie/Cryolipolyse', 'Palper Rouler', 'Radiofréquence', 'Lipocavitation 40K', 'Lipolyse laser', 'Pressothérapie'],
    duration: '60-90 minutes',
    color: 'text-pink-600',
    bgGradient: 'from-pink-500/20 to-pink-400/15',
    route: '/services/amincissement'
  }, {
    icon: Activity,
    title: 'Gymnastique médicale',
    description: 'Cours encadrés par des kinésithérapeutes pour améliorer mobilité et prévenir les douleurs',
    features: ['Gymnastique vertébrale', 'Gymnastique senior', 'Renforcement musculaire', 'Amélioration de l\'équilibre', 'Prévention des chutes', 'Ambiance conviviale'],
    duration: '45-60 minutes',
    color: 'text-green-500',
    bgGradient: 'from-green-400/15 to-green-300/10',
    route: '/services/gymnastique-medicale'
  }, {
    icon: Baby,
    title: 'Femme enceinte',
    description: 'Accompagnement spécialisé pour la grossesse et l\'après-accouchement',
    features: ['Préparation à l\'accouchement', 'Techniques de respiration', 'Rééducation périnéale post-partum', 'Biofeedback et électrostimulation', 'Communication in utero', 'Renforcement abdominal'],
    duration: '45-60 minutes',
    color: 'text-rose-700',
    bgGradient: 'from-rose-600/25 to-rose-500/20',
    route: '/services/femme-enceinte'
  }, {
    icon: Sparkles,
    title: 'Massage et Bien-être',
    description: 'Massages thérapeutiques pour relaxation et récupération',
    features: ['Massage relaxant anti-stress', 'Massage décontracturant', 'Massage tonifiant énergisant', 'Détente musculaire profonde', 'Amélioration circulation', 'Élimination des toxines'],
    duration: '20-60 minutes',
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-500/20 to-emerald-400/15',
    route: '/services/massage-bien-etre'
  }];
  const specialties = [{
    icon: Stethoscope,
    title: 'Sauna Infrarouge',
    description: 'Sudation intense pour une meilleure irrigation sanguine et élimination des toxines'
  }, {
    icon: Target,
    title: 'Ondes de Choc',
    description: 'Action antalgique prescrite par médecin avec libération d\'endorphines'
  }, {
    icon: Users,
    title: 'Cavitation',
    description: 'Excellents résultats en un mois avec remodelage visible dès la première séance'
  }, {
    icon: Award,
    title: 'Cryolipolyse',
    description: 'Traitement d\'amincissement pour éliminer les bourrelets et améliorer la silhouette'
  }];
  const processSteps = [{
    step: '01',
    title: 'Consultation Initiale',
    description: 'Évaluation complète de votre condition et définition d\'objectifs personnalisés'
  }, {
    step: '02',
    title: 'Plan de Traitement',
    description: 'Élaboration d\'un programme thérapeutique adapté à vos besoins spécifiques'
  }, {
    step: '03',
    title: 'Suivi Personnalisé',
    description: 'Accompagnement régulier avec ajustements selon votre progression'
  }, {
    step: '04',
    title: 'Rétablissement',
    description: 'Atteinte de vos objectifs et conseils pour maintenir les résultats'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/ff593693-5ff7-4abc-a290-5896e5cada6e.png" alt="Centre de kinésithérapie - Équipements modernes" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
        </div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-float flex items-center justify-center">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-primary rounded-full opacity-30 animate-float-delay flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-secondary rounded-full opacity-25 animate-float flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-gradient-accent rounded-full opacity-40 animate-float-delay flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
                Nos Services Spécialisés
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Des Soins <span className="text-gradient-accent drop-shadow-lg">Personnalisés</span><br />
                pour Chaque <span className="text-sky-400 drop-shadow-lg">Besoin</span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-white mb-8 opacity-90 drop-shadow-lg">
              Découvrez notre gamme complète de services thérapeutiques
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-white/90 drop-shadow-lg">
              Du traitement de la douleur à l'optimisation des performances, nos services s'adaptent 
              à tous vos besoins de santé et de bien-être avec une approche scientifique et humaine.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button onClick={() => window.location.href = '/contact'} className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Activity className="w-5 h-5 mr-3" />
                Réserver une Consultation
              </Button>
              
              
            </div>
          </ScrollAnimation>

          {/* Quick Service Stats */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[{
              icon: Heart,
              label: 'Kinésithérapie',
              route: '/services/kinesitherapie-respiratoire'
            }, {
              icon: Zap,
              label: 'Amincissement',
              route: '/services/amincissement'
            }, {
              icon: Baby,
              label: 'Femme Enceinte',
              route: '/services/femme-enceinte'
            }, {
              icon: Activity,
              label: 'Gymnastique médicale',
              route: '/services/gymnastique-medicale'
            }, {
              icon: Sparkles,
              label: 'Massage & Bien-être',
              route: '/services/massage-bien-etre'
            }].map((service, index) => {
              const Icon = service.icon;
              return <div key={index} className="glass-card p-6 text-center transition-all duration-500 hover:scale-110 hover-glow cursor-pointer" onClick={() => navigate(service.route)}>
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-white font-montserrat text-sm opacity-90">
                      {service.label}
                    </div>
                  </div>;
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

      {/* Main Services Section */}
      <section id="main-services" className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Spécialités Principales</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Une expertise reconnue dans quatre domaines essentiels de la kinésithérapie moderne
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => {
            const Icon = service.icon;
            return <ScrollAnimation key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 200}>
                  <Card className={`glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full group bg-gradient-to-br ${service.bgGradient} cursor-pointer`} onClick={() => navigate(service.route)}>
                    <CardContent className="p-10">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center group-hover:animate-pulse-glow shadow-medium">
                            <Icon className={`w-10 h-10 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                            {service.title}
                          </h3>
                          <p className="text-neutral-light mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-neutral text-sm">{feature}</span>
                              </div>)}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-neutral-light">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{service.duration}</span>
                            </div>
                            <Button variant="ghost" className={`${service.color} hover:bg-white/20 hover:text-black group-hover:translate-x-2 transition-all duration-300`}>
                              En savoir plus
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Notre <span className="text-gradient-accent">Processus de Soins</span>
              </h2>
              <p className="text-xl text-neutral-lightest/90 max-w-3xl mx-auto">
                Une approche méthodique et personnalisée pour garantir votre rétablissement optimal
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-playfair font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>}
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-lightest/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      

      {/* CTA Section */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Commencez Votre Parcours de 
              <span className="text-white/80 block">Rétablissement Aujourd'hui</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Nos experts sont prêts à vous accompagner vers un bien-être optimal. 
              Réservez votre consultation personnalisée dès maintenant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => window.location.href = '/contact'}>
                <Star className="w-5 h-5 mr-3" />
                Consultation Gratuite
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Services;