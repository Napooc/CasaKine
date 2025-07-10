import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroServicesImage from '@/assets/hero-services.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Heart, Zap, Shield, Clock, CheckCircle, Star, ArrowRight, Stethoscope, Target, Users, Award } from 'lucide-react';
const Services = () => {
  const mainServices = [{
    icon: Activity,
    title: 'Rééducation Fonctionnelle',
    description: 'Récupération post-traumatique et rééducation neurologique avec des techniques de pointe',
    features: ['Rééducation post-opératoire', 'Récupération après accident', 'Rééducation neurologique', 'Reprise d\'activité sportive'],
    duration: '45-60 minutes',
    color: 'text-primary',
    bgGradient: 'from-primary/10 to-primary/5'
  }, {
    icon: Heart,
    title: 'Thérapies Manuelles',
    description: 'Techniques manuelles spécialisées pour soulager douleurs et tensions',
    features: ['Massage thérapeutique', 'Ostéopathie moderne', 'Techniques myofasciales', 'Mobilisations articulaires'],
    duration: '30-45 minutes',
    color: 'text-medical-red',
    bgGradient: 'from-red-500/10 to-red-500/5'
  }, {
    icon: Zap,
    title: 'Amincissement & Bien-être',
    description: 'Programmes personnalisés pour retrouver forme et bien-être',
    features: ['Drainage lymphatique', 'Électrothérapie', 'Programmes minceur', 'Remodelage corporel'],
    duration: '60-90 minutes',
    color: 'text-secondary',
    bgGradient: 'from-secondary/10 to-secondary/5'
  }, {
    icon: Shield,
    title: 'Gymnastique Médicale',
    description: 'Renforcement musculaire et exercices thérapeutiques adaptés',
    features: ['Renforcement musculaire', 'Pilates thérapeutique', 'Yoga adapté', 'Prévention des blessures'],
    duration: '45-60 minutes',
    color: 'text-accent',
    bgGradient: 'from-accent/10 to-accent/5'
  }];
  const specialties = [{
    icon: Stethoscope,
    title: 'Rééducation Respiratoire',
    description: 'Amélioration de la fonction respiratoire et de l\'endurance'
  }, {
    icon: Target,
    title: 'Rééducation Périnéale',
    description: 'Prise en charge spécialisée pré et post-natale'
  }, {
    icon: Users,
    title: 'Pédiatrie',
    description: 'Soins adaptés aux nourrissons et enfants'
  }, {
    icon: Award,
    title: 'Gériatrie',
    description: 'Maintien de l\'autonomie et prévention des chutes'
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
          <img src={heroServicesImage} alt="Modern physiotherapy equipment" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/80 to-primary/90"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                Des Soins <span className="text-gradient-accent">Personnalisés</span><br />
                pour Chaque <span className="text-secondary">Besoin</span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
              Découvrez notre gamme complète de services thérapeutiques
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Du traitement de la douleur à l'optimisation des performances, nos services s'adaptent 
              à tous vos besoins de santé et de bien-être avec une approche scientifique et humaine.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Activity className="w-5 h-5 mr-3" />
                Réserver une Consultation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950">
                Voir tous nos services
              </Button>
            </div>
          </ScrollAnimation>

          {/* Quick Service Stats */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[{
              icon: Activity,
              label: 'Rééducation'
            }, {
              icon: Heart,
              label: 'Thérapies'
            }, {
              icon: Zap,
              label: 'Bien-être'
            }, {
              icon: Shield,
              label: 'Prévention'
            }].map((service, index) => {
              const Icon = service.icon;
              return <div key={index} className="glass-card p-6 text-center transition-all duration-500 hover:scale-110 hover-glow">
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
      <section className="py-32 bg-background relative">
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
                  <Card className={`glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full group bg-gradient-to-br ${service.bgGradient}`}>
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
                              Réserver
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
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Spécialités <span className="text-gradient-accent">Complémentaires</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Des expertises spécialisées pour répondre à tous vos besoins thérapeutiques
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return <ScrollAnimation key={index} animation="rotate-in" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full group text-center">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-secondary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                        {specialty.title}
                      </h3>
                      <p className="text-neutral-light text-sm leading-relaxed flex-grow">
                        {specialty.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

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
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Star className="w-5 h-5 mr-3" />
                Consultation Gratuite
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950">
                Voir nos tarifs
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Services;