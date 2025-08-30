import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Phone, CheckCircle, Heart, Brain, Wind, Droplets, Activity, Hand, Baby, Clock, Star, Stethoscope, Target, Shield, Users, Home, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import specialtyImage from '@/assets/specialty-medical-gymnastics.jpg';
import kinesitherapieImage1 from '@/assets/kinesitherapie-respiratoire-1.jpg';
import kinesitherapieImage2 from '@/assets/kinesitherapie-respiratoire-2.jpg';
import kinesitherapieImage3 from '@/assets/kinesitherapie-respiratoire-3.jpg';
const KinesitherapieRespiratoire = () => {
  const navigate = useNavigate();
  const services = [{
    icon: Activity,
    title: "Traumatologie, Rhumatologie & Pathologies de la Colonne Vertébrale",
    description: "Nous traitons les atteintes mécaniques ou inflammatoires de l'appareil locomoteur",
    conditions: ["Arthrose, arthrite, tendinite", "Scoliose, raideurs post-traumatiques", "Polyarthrite rhumatoïde", "Entorses, prothèse totale de hanche (PTH) ou de genou (PTG)"],
    gradient: "from-primary/20 to-primary/5",
    color: "text-primary"
  }, {
    icon: Brain,
    title: "Neurologie",
    description: "Prise en charge des affections du système nerveux, d'origine traumatique ou pathologique",
    conditions: ["Hémiplégie, tétraplégie, paralysies centrales ou périphériques", "Paralysie faciale, infirmité motrice cérébrale (IMC)", "Maladie de Parkinson, d'Alzheimer, sclérose en plaques (SEP)", "Sclérose latérale amyotrophique (SLA)"],
    gradient: "from-secondary/20 to-secondary/5",
    color: "text-secondary"
  }, {
    icon: Wind,
    title: "Rééducation Respiratoire",
    description: "Amélioration de la fonction respiratoire dans les cas suivants",
    conditions: ["Bronchiolite du nourrisson, asthme, bronchite chronique", "Emphysème, dilatation des bronches (DDB), post-infection", "Techniques de drainage bronchique et désencombrement", "Réentraînement respiratoire"],
    gradient: "from-medical-red/20 to-red-500/5",
    color: "text-medical-red"
  }, {
    icon: Droplets,
    title: "Drainage Lymphatique Manuel (DLM)",
    description: "Massage doux favorisant la circulation lymphatique",
    conditions: ["Jambes lourdes, œdèmes, séquelles de phlébite", "Suite à une chirurgie, notamment une ablation mammaire", "Détoxification du corps et renforcement immunitaire", "Réalisé manuellement en respectant les trajets lymphatiques"],
    gradient: "from-accent/20 to-accent/5",
    color: "text-accent"
  }, {
    icon: Activity,
    title: "Réadaptation à l'Effort",
    description: "Accompagnement progressif à la reprise de la marche ou d'une activité physique",
    conditions: ["Pathologie cardiovasculaire, traitement oncologique", "Fatigue chronique ou déconditionnement à l'effort", "Activité physique adaptée", "Favorise la récupération et le bien-être général"],
    gradient: "from-neutral-light/20 to-neutral-light/5",
    color: "text-neutral"
  }, {
    icon: Zap,
    title: "Les ondes de choc en kinésithérapie",
    description: "La thérapie par ondes de choc est une méthode moderne et non invasive utilisée pour traiter les douleurs chroniques, en particulier au niveau des tendons, muscles et articulations.",
    conditions: ["Soulage rapidement la douleur", "Stimule la guérison naturelle des tissus", "Améliore la circulation sanguine", "Réduit les calcifications tendineuses", "Favorise la récupération fonctionnelle"],
    gradient: "from-blue-500/20 to-cyan-400/5",
    color: "text-blue-600",
    highlight: "Indiquée notamment pour les tendinites, fasciite plantaire, épines calcanéennes ou douleurs musculaires persistantes, la thérapie par ondes de choc offre une alternative efficace aux traitements médicamenteux ou chirurgicaux.",
    timing: "Rapide (10-15 minutes), bien toléré et sans effets secondaires majeurs, ce soin est réalisé en cabinet par un kinésithérapeute formé."
  }, {
    icon: Baby,
    title: "Développement Psychomoteur de l'Enfant",
    description: "Soutien à l'acquisition des étapes clés du développement moteur",
    conditions: ["Retards ou troubles de la marche, station assise", "Pathologies neurologiques ou musculaires (IMC, myopathies)", "Accompagnement doux et progressif", "Aide chaque enfant à développer son autonomie motrice"],
    gradient: "from-green-500/20 to-green-400/5",
    color: "text-green-600"
  }];
  const benefits = ["Soulagement de la douleur", "Restauration de la mobilité", "Amélioration de la qualité de vie", "Maintien ou récupération des fonctions motrices", "Développement de l'autonomie", "Approche personnalisée et globale"];
  const processSteps = [{
    step: "01",
    title: "Évaluation Initiale",
    description: "Bilan complet de votre condition et définition d'objectifs personnalisés",
    icon: Target
  }, {
    step: "02",
    title: "Plan Thérapeutique",
    description: "Élaboration d'un programme adapté à vos besoins spécifiques",
    icon: Heart
  }, {
    step: "03",
    title: "Traitement Actif",
    description: "Mise en œuvre des techniques de kinésithérapie appropriées",
    icon: Activity
  }, {
    step: "04",
    title: "Suivi & Autonomie",
    description: "Accompagnement vers l'autonomie et conseils de prévention",
    icon: Star
  }];
  return <div className="page-kine-blue">
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/2544f454-85c1-4bb9-bbf0-21105732eb3d.png" alt="Cabinet de kinésithérapie moderne" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-kine-blue/85 via-kine-blue/75 to-kine-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-kine-blue/20 to-black/30"></div>
          <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-br from-kine-blue/30 to-kine-blue/10 rounded-full opacity-60 animate-float flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-kine-blue/40 to-kine-blue/15 rounded-full opacity-70 animate-float-delay flex items-center justify-center">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-to-br from-kine-blue/35 to-kine-blue/12 rounded-full opacity-65 animate-float flex items-center justify-center">
            <Wind className="w-9 h-9 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/5 w-14 h-14 bg-white/20 rounded-full opacity-40 animate-float-delay flex items-center justify-center">
            <Brain className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="fixed top-4 left-4 z-50">
          
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-8 py-3 text-sm mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Services Complets de Kinésithérapie
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-8 leading-tight">
              Kinésithérapie <br />
              <span className="text-gradient-accent">Globale</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-lightest/90 max-w-5xl mx-auto mb-12 leading-relaxed font-light">
              Nos services de kinésithérapie nous proposons une prise en charge 
              <span className="text-white font-medium"> globale et personnalisée </span>
              dans différents domaines, adaptée à chaque besoin et à chaque patient
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="morph-button bg-gradient-to-r from-kine-blue to-kine-blue/80 hover:shadow-kine-blue/50 hover:shadow-2xl text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110 group">
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Réserver une Consultation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 group text-zinc-950 bg-violet-50">
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Contact Urgent
              </Button>
            </div>
          </ScrollAnimation>

          {/* Quick Stats */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[{
                value: "7",
                label: "Spécialités",
                icon: Target
              }, {
                value: "100%",
                label: "Personnalisé",
                icon: Heart
              }, {
                value: "🏠",
                label: "Domicile",
                icon: Home
              }].map((stat, index) => {
                const Icon = stat.icon;
                return <div key={index} className="glass-card p-6 text-center group hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent mx-auto mb-3 group-hover:animate-pulse" />
                    <div className="text-2xl font-playfair font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>;
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-kine-blue mb-6">
                Nos <span className="bg-gradient-to-r from-kine-blue to-kine-blue/70 bg-clip-text text-transparent">Domaines d'Expertise</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-4xl mx-auto leading-relaxed">
                Une approche complète et spécialisée pour répondre à tous vos besoins thérapeutiques
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <ScrollAnimation key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 150}>
                  <Card className={`glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-[1.02] hover-glow h-full group bg-gradient-to-br ${service.gradient}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-2xl bg-white/50 flex items-center justify-center group-hover:animate-pulse-glow shadow-medium backdrop-blur-sm">
                            <Icon className={`w-10 h-10 ${service.color} group-hover:scale-110 transition-all duration-300`} />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-xl font-playfair font-bold text-primary mb-4 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-neutral-light mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="space-y-3">
                            {service.conditions.map((condition, condIndex) => <div key={condIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-neutral text-sm leading-relaxed">{condition}</span>
                              </div>)}
                          </div>
                          
                          {/* Additional content for shockwave therapy */}
                          {service.highlight && <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50">
                              <p className="text-blue-800 text-sm leading-relaxed font-medium">
                                {service.highlight}
                              </p>
                            </div>}
                          
                          {service.timing && <div className="mt-4 flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              <span className="text-blue-700 text-sm font-medium">
                                {service.timing}
                              </span>
                            </div>}
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
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                Notre <span className="text-gradient-accent">Processus de Soins</span>
              </h2>
              <p className="text-xl text-neutral-lightest/90 max-w-4xl mx-auto leading-relaxed">
                Une approche méthodique et personnalisée pour garantir votre rétablissement optimal
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                  <div className="text-center group">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                        <Icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-playfair font-bold text-primary">
                          {step.step}
                        </span>
                      </div>
                      {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>}
                    </div>
                    
                    <h3 className="text-xl font-playfair font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-lightest/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>;
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-neutral-lightest relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8">
                  Nos <span className="text-gradient-accent">Objectifs Thérapeutiques</span>
                </h2>
                
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Nos protocoles visent à soulager la douleur, restaurer la mobilité et améliorer 
                  significativement votre qualité de vie grâce à une approche globale et personnalisée.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:scale-105 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-neutral font-medium">{benefit}</span>
                    </div>)}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-10 glass-card">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-accent-glow">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                    Prise en Charge Personnalisée
                  </h3>
                  <p className="text-neutral-light leading-relaxed mb-8">
                    Chaque patient bénéficie d'un accompagnement sur mesure, adapté à sa condition, 
                    ses objectifs et son rythme de progression.
                  </p>
                </div>

                
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Images Gallery Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Notre <span className="text-gradient-accent">Environnement de Soins</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-4xl mx-auto leading-relaxed">
                Découvrez nos installations modernes et nos équipements de pointe pour votre rétablissement
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scale-up" delay={200}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={kinesitherapieImage1} alt="Séance de kinésithérapie respiratoire moderne" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    Séances Personnalisées
                  </h3>
                  <p className="text-neutral-light leading-relaxed">
                    Accompagnement individuel avec équipements spécialisés pour optimiser votre rétablissement respiratoire.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={400}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={kinesitherapieImage2} alt="Équipements de rééducation respiratoire" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    Équipements Modernes
                  </h3>
                  <p className="text-neutral-light leading-relaxed">
                    Technologies de pointe pour un diagnostic précis et des traitements efficaces adaptés à chaque patient.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={600}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={kinesitherapieImage3} alt="Environnement thérapeutique professionnel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    Environnement Apaisant
                  </h3>
                  <p className="text-neutral-light leading-relaxed">
                    Cadre professionnel et chaleureux conçu pour votre confort et votre bien-être durant les soins.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
          <div className="w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              Commencez Votre 
              <span className="text-white/80 block">Rétablissement Aujourd'hui</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
             Notre expertise pour vous accompagner dans votre parcours de guérison. 
              Réservez votre consultation personnalisée ou contactez-nous pour plus d'informations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110 group">
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Réserver une Consultation 
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  </div>;
};
export default KinesitherapieRespiratoire;