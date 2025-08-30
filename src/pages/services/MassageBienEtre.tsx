import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import massageHero from '@/assets/massage-hero.jpg';
import massageRelaxation from '@/assets/massage-relaxation.jpg';
import massageTherapy from '@/assets/massage-therapy-session.jpg';
import massageRoom from '@/assets/massage-room.jpg';
import massageNewTherapy from '@/assets/massage-therapy-modern.jpg';
import massageRoomModern from '@/assets/massage-room-modern.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, Zap, Waves, Moon, Sun, Clock, CheckCircle, Star, Calendar, Shield, Target, Activity, Leaf, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MassageBienEtre = () => {
  const navigate = useNavigate();
  const massageTypes = [{
    icon: Moon,
    title: 'Massage Relaxant',
    subtitle: 'Le massage anti-stress par excellence',
    description: 'Assouplissement des articulations, détente des muscles et relance de la circulation pour une sensation de légèreté et de calme profond.',
    benefits: ['Réduction du stress', 'Amélioration du sommeil', 'Détente musculaire', 'Sensation de légèreté', 'Calme mental profond'],
    color: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  }, {
    icon: Target,
    title: 'Massage Décontracturant',
    subtitle: 'Soulagement ciblé des contractures',
    description: 'Massage manuel spécialement conçu pour soulager les contractures musculaires, diminuer les tensions nerveuses et procurer un effet antalgique immédiat.',
    benefits: ['Soulagement des contractures', 'Diminution tensions nerveuses', 'Effet antalgique', 'Activation circulation locale', 'Récupération accélérée'],
    color: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    duration: '20 à 40 minutes selon la zone'
  }, {
    icon: Zap,
    title: 'Massage Tonifiant',
    subtitle: 'Énergisant et revitalisant',
    description: 'Massage énergique avec mouvements enveloppants et profonds pour dénouer les tensions, stimuler les tissus et éliminer les toxines.',
    benefits: ['Dénoue les tensions', 'Stimulation des tissus', 'Élimination des toxines', 'Tonification corporelle', 'Recharge énergétique'],
    color: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  }];
  const expertisePoints = [{
    icon: Heart,
    title: 'Expertise Anatomique',
    description: 'Nos masseurs-kinésithérapeutes maîtrisent parfaitement l\'anatomie et les techniques de soins manuels.'
  }, {
    icon: Target,
    title: 'Détection Précise',
    description: 'Identification et traitement ciblé de vos tensions en profondeur pour un soulagement durable.'
  }, {
    icon: Waves,
    title: 'Techniques Avancées',
    description: 'Utilisation de méthodes professionnelles adaptées à chaque type de tension et objectif.'
  }, {
    icon: Shield,
    title: 'Soins Personnalisés',
    description: 'Chaque séance est adaptée à vos besoins spécifiques et à votre condition physique.'
  }];
  const processSteps = [{
    step: '01',
    title: 'Consultation',
    description: 'Évaluation de vos tensions, stress et objectifs de bien-être',
    icon: Heart
  }, {
    step: '02',
    title: 'Choix du Massage',
    description: 'Sélection du type de massage le plus adapté à vos besoins',
    icon: Target
  }, {
    step: '03',
    title: 'Séance Personnalisée',
    description: 'Massage professionnel dans un environnement relaxant',
    icon: Sparkles
  }, {
    step: '04',
    title: 'Suivi & Conseils',
    description: 'Recommandations pour prolonger les bienfaits du massage',
    icon: Star
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/e9466446-be50-4fdf-9b3f-4bfeb28a7576.png" 
            alt="Équipements de massage et bien-être modernes" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 via-emerald-500/75 to-teal-600/80"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-400/20 to-black/35"></div>
          <div className="absolute inset-0 bg-mesh-pattern opacity-15"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-300/30 rounded-full blur-lg animate-float-delay"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-teal-300/25 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/30 rounded-full blur-md animate-float-delay"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="fixed top-4 left-4 z-50">
              
            </div>
            
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
                🌿 Massages Thérapeutiques
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                Massage & <span className="text-emerald-200">Bien-être</span><br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light opacity-90">
                  Relaxation Profonde
                </span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Offrez-vous un véritable moment de relaxation physique et mentale, 
              loin du stress quotidien avec nos massages thérapeutiques spécialisés.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110" onClick={() => window.location.href = '/contact'}>
                <Calendar className="w-5 h-5 mr-3" />
                Réserver un Massage
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 text-zinc-950" onClick={() => document.getElementById('massage-types')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Découvrir nos soins
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl absolute top-0 right-0"></div>
          <div className="w-64 h-64 bg-teal-200/20 rounded-full blur-2xl absolute bottom-0 left-0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
                Notre <span className="text-emerald-600">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Nos masseurs-kinésithérapeutes, experts en anatomie et en soins manuels, 
                sauront détecter et relâcher vos tensions en profondeur pour vous apporter un apaisement durable.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertisePoints.map((point, index) => {
            const Icon = point.icon;
            return <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                  <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-105 group text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-gray-800 mb-4">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Massage Types Section */}
      <section id="massage-types" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-green-100/50 rounded-full blur-3xl absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-emerald-100/30 rounded-full blur-2xl absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
                Nos Types de <span className="text-green-600">Massages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trois approches spécialisées pour répondre à tous vos besoins de relaxation et de récupération
              </p>
            </div>
          </ScrollAnimation>

          {/* Featured Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ScrollAnimation animation="slide-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl scale-105"></div>
                <img src={massageRelaxation} alt="Massage relaxation" className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                    L'Art du <span className="text-emerald-600">Massage Thérapeutique</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nos masseurs-kinésithérapeutes combinent expertise anatomique et techniques 
                    avancées pour vous offrir une expérience de relaxation profonde et durable. 
                    Chaque massage est adapté à vos besoins spécifiques.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{
                  icon: Heart,
                  text: "Techniques personnalisées"
                }, {
                  icon: Target,
                  text: "Ciblage précis des tensions"
                }, {
                  icon: Waves,
                  text: "Relaxation profonde"
                }, {
                  icon: Shield,
                  text: "Environnement apaisant"
                }].map((item, idx) => <div key={idx} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="space-y-16">
            {massageTypes.map((massage, index) => {
            const Icon = massage.icon;
            const isEven = index % 2 === 0;
            const massageImages = [massageTherapy, massageRoom, massageRelaxation];
            return <ScrollAnimation key={index} animation={isEven ? "slide-left" : "slide-right"} delay={index * 200}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${massage.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-playfair font-bold text-gray-800">
                            {massage.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {massage.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {massage.description}
                      </p>
                      
                      {massage.duration && <div className="flex items-center space-x-2 text-gray-700">
                          <Clock className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Durée : {massage.duration}</span>
                        </div>}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {massage.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>)}
                      </div>
                    </div>
                    
                    {/* Enhanced Visual Element with Real Image */}
                    <div className="flex-1 max-w-md">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl scale-105"></div>
                        <div className={`relative z-10 bg-gradient-to-br ${massage.bgGradient} rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                         <img src={index === 0 ? massageNewTherapy : index === 1 ? massageRoomModern : massageRelaxation} alt={massage.title} className="w-full h-48 object-cover" />
                          <div className="p-8 text-center">
                            <Icon className={`w-16 h-16 mx-auto mb-4 text-gray-600`} />
                            <h4 className="text-xl font-playfair font-bold text-gray-800 mb-4">
                              Bienfaits Principaux
                            </h4>
                            <div className="space-y-2">
                              {massage.benefits.slice(0, 3).map((benefit, idx) => <div key={idx} className="text-gray-700 text-sm font-medium">
                                  • {benefit}
                                </div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Votre Parcours <span className="text-emerald-200">Bien-être</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Une approche professionnelle pour maximiser les bienfaits de votre massage
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
            const Icon = step.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <div className="text-center group">
                    <div className="relative mb-8">
                      <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/30">
                        <span className="text-2xl font-playfair font-bold text-white">
                          {step.step}
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-400/30 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/50 to-transparent"></div>}
                    </div>
                    
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-br from-teal-50 to-green-50 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <Leaf className="w-20 h-20 text-green-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-8">
              Les Bienfaits de nos <span className="text-green-600">Massages</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[{
              icon: Moon,
              title: 'Relaxation Profonde',
              desc: 'Détente musculaire et mentale complète'
            }, {
              icon: Activity,
              title: 'Circulation Améliorée',
              desc: 'Activation de la circulation sanguine et lymphatique'
            }, {
              icon: Zap,
              title: 'Énergie Renouvelée',
              desc: 'Élimination des toxines et recharge énergétique'
            }, {
              icon: Heart,
              title: 'Stress Réduit',
              desc: 'Diminution du stress et amélioration du bien-être'
            }, {
              icon: Sun,
              title: 'Sommeil Amélioré',
              desc: 'Qualité de sommeil significativement améliorée'
            }, {
              icon: Shield,
              title: 'Récupération Optimisée',
              desc: 'Accélération de la récupération musculaire'
            }].map((benefit, index) => {
              const Icon = benefit.icon;
              return <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-playfair font-bold text-gray-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.desc}
                      </p>
                    </div>
                  </ScrollAnimation>;
            })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-emerald-300/20 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <Sparkles className="w-20 h-20 text-white/80 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Offrez-vous un Moment de 
              <span className="text-emerald-200 block">Pure Détente</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Réservez dès maintenant votre massage bien-être et laissez nos experts 
              vous accompagner vers une relaxation profonde et durable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110">
                <Star className="w-5 h-5 mr-3" />
                Réserver Maintenant
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default MassageBienEtre;