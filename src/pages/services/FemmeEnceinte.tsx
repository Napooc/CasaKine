import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
const femmeEnceinteHero = '/lovable-uploads/ae898483-0049-4459-bd35-4ca9c46d6852.png';
import femmeEnceintePreparation from '@/assets/femme-enceinte-preparation.jpg';
import femmeEnceinteRehabilitation from '@/assets/femme-enceinte-rehabilitation.jpg';
import femmeEnceinteBonding from '@/assets/femme-enceinte-bonding.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Sparkles, Shield, Users, Clock, CheckCircle, Star, Calendar, User, Target, Activity, Brain, Zap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const FemmeEnceinte = () => {
  const navigate = useNavigate();
  const preparationServices = [{
    icon: Heart,
    title: 'Techniques de Respiration',
    description: 'Apprenez les techniques essentielles pour mieux gérer les contractions et soulager la douleur naturellement.',
    benefits: ['Gestion de la douleur', 'Relaxation profonde', 'Oxygénation optimale', 'Contrôle du stress']
  }, {
    icon: Users,
    title: 'Positions d\'Accouchement',
    description: 'Découvrez les positions favorables qui facilitent le travail et l\'expulsion lors de l\'accouchement.',
    benefits: ['Facilite le travail', 'Réduit les douleurs', 'Accélère la descente', 'Positions confortables']
  }, {
    icon: Baby,
    title: 'Communication In Utero',
    description: 'Créez un lien précoce avec votre bébé grâce à des techniques de communication prénatale impliquant le futur papa.',
    benefits: ['Lien parent-enfant', 'Implication du papa', 'Développement émotionnel', 'Préparation à la parentalité']
  }];
  const reeducationServices = [{
    icon: Target,
    title: 'Renforcement Périnéal',
    description: 'Retrouvez tonicité et contrôle pour prévenir les fuites urinaires et le relâchement musculaire.',
    methods: ['Exercices ciblés', 'Contractions progressives', 'Respiration coordonnée', 'Conscience corporelle']
  }, {
    icon: Brain,
    title: 'Biofeedback',
    description: 'Technique avec sonde vaginale et retour visuel/sonore pour visualiser et contrôler vos contractions musculaires.',
    methods: ['Visualisation temps réel', 'Contrôle précis', 'Apprentissage accéléré', 'Feedback instantané']
  }, {
    icon: Zap,
    title: 'Électrostimulation',
    description: 'En cas de faiblesse musculaire importante, réactivation des contractions périnéales par stimulation électrique.',
    methods: ['Réactivation musculaire', 'Intensité progressive', 'Récupération accélérée', 'Tonification ciblée']
  }];
  const processSteps = [{
    step: '01',
    title: 'Évaluation Initiale',
    description: 'Bilan complet de votre état physique et de vos besoins spécifiques selon le stade de grossesse.',
    icon: User
  }, {
    step: '02',
    title: 'Programme Personnalisé',
    description: 'Élaboration d\'un plan adapté à votre profil et à vos objectifs de préparation.',
    icon: Target
  }, {
    step: '03',
    title: 'Séances Régulières',
    description: 'Accompagnement hebdomadaire avec exercices pratiques et techniques spécialisées.',
    icon: Calendar
  }, {
    step: '04',
    title: 'Suivi Post-Partum',
    description: 'Rééducation périnéale et abdominale pour retrouver tonicité et bien-être après l\'accouchement.',
    icon: Activity
  }];
  return <div className="page-femme-enceinte">
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={femmeEnceinteHero} alt="Femme enceinte en consultation" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-red-500/30 to-red-700/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-300/20 rounded-full blur-lg animate-float-delay"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-red-300/15 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/20 rounded-full blur-md animate-float-delay"></div>
        </div>

        <div className="fixed top-4 left-4 z-50">
          
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
                🤰 Accompagnement Spécialisé
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                Femme <span className="text-red-200">Enceinte</span><br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light opacity-90">
                  Préparation & Rééducation
                </span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Un accompagnement complet pour vivre sereinement votre grossesse et retrouver 
              votre bien-être après l'accouchement.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-red-600 hover:bg-red-50 font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-3" />
                Réserver une Séance
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 text-gray-950" onClick={() => document.getElementById('preparation')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                En savoir plus
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Preparation Section */}
      <section id="preparation" className="py-32 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-red-200/30 rounded-full blur-3xl absolute top-0 right-0"></div>
          <div className="w-64 h-64 bg-red-300/20 rounded-full blur-2xl absolute bottom-0 left-0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
                Préparation à l'<span className="text-red-600">Accouchement</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des séances complètes et personnalisées pour vous préparer à accueillir votre bébé en toute sérénité
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Featured Image */}
            <ScrollAnimation animation="slide-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl scale-105"></div>
                <img src={femmeEnceintePreparation} alt="Préparation à l'accouchement" className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            {/* Text Content */}
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                    Une Préparation <span className="text-red-600">Personnalisée</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chaque future maman est unique. Notre approche personnalisée vous prépare 
                    physiquement et mentalement à l'accouchement, en tenant compte de vos besoins 
                    spécifiques et de votre stade de grossesse.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{
                    icon: Heart,
                    text: "Techniques de respiration adaptées"
                  }, {
                    icon: Users,
                    text: "Positions d'accouchement optimales"
                  }].map((item, idx) => <div key={idx} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {preparationServices.map((service, index) => {
              const Icon = service.icon;
              return <ScrollAnimation key={index} animation="fade-up" delay={index * 200}>
                  <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-playfair text-gray-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Notre <span className="text-red-200">Processus</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Un accompagnement structuré et personnalisé tout au long de votre parcours
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
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-300/30 rounded-full flex items-center justify-center">
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

      {/* Reeducation Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-red-100/50 rounded-full blur-3xl absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-red-200/30 rounded-full blur-2xl absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
                Rééducation <span className="text-red-600">Périnéale</span> Post-Accouchement
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Un suivi spécialisé pour retrouver tonicité, confort et sécurité dans votre quotidien après l'accouchement
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <ScrollAnimation animation="slide-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                    Récupération <span className="text-red-600">Post-Partum</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Après l'accouchement, il est essentiel de retrouver tonicité et confiance. 
                    Notre programme de rééducation périnéale vous accompagne étape par étape 
                    vers une récupération complète et durable.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[{
                    icon: Target,
                    text: "Renforcement ciblé du périnée"
                  }, {
                    icon: Brain,
                    text: "Techniques de biofeedback avancées"
                  }, {
                    icon: Zap,
                    text: "Électrostimulation si nécessaire"
                  }, {
                    icon: Activity,
                    text: "Suivi personnalisé long terme"
                  }].map((item, idx) => <div key={idx} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </ScrollAnimation>

            {/* Featured Image */}
            <ScrollAnimation animation="slide-right">
              <div className="relative group">
                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl scale-105"></div>
                <img src={femmeEnceinteRehabilitation} alt="Rééducation périnéale post-partum" className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {reeducationServices.map((service, index) => {
              const Icon = service.icon;
              return <ScrollAnimation key={index} animation="fade-up" delay={index * 200}>
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-white to-red-50/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-playfair text-gray-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.methods.map((method, methodIndex) => <div key={methodIndex} className="flex items-center space-x-3">
                            <Sparkles className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{method}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
            })}
          </div>

          <ScrollAnimation animation="fade-up" delay={600}>
            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl scale-105"></div>
                  <img src={femmeEnceinteBonding} alt="Moments de complicité parent-bébé" className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-2xl p-8">
                  <Shield className="w-16 h-16 text-red-600 mb-6" />
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
                    Renforcement Abdominal Ciblé
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Une fois la tonicité périnéale retrouvée, nous poursuivons par un travail abdominal ciblé, 
                    essentiel pour refermer la sangle abdominale en douceur et retrouver votre silhouette d'avant grossesse.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-red-300/20 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <Baby className="w-20 h-20 text-white/80 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Prête à Commencer Votre 
              <span className="text-red-200 block">Parcours de Bien-être ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Nos spécialistes vous accompagnent à chaque étape, de la préparation à l'accouchement 
              jusqu'à votre récupération complète.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-red-600 hover:bg-red-50 font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110">
                <Star className="w-5 h-5 mr-3" />
                Consultation 
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  </div>;
};
export default FemmeEnceinte;