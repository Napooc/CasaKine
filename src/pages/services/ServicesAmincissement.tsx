import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, CheckCircle, Snowflake, Radio, Waves, ArrowLeft, Phone, Calendar, Target, TrendingUp, Sparkles, Users, MapPin, Activity, Heart, Zap as Lightning, Eye, Shield, Vibrate, Scale, CircuitBoard, Thermometer, Hand } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/amincissement-hero-modern.jpg';
import radiofrequencyImage from '@/assets/radiofrequency-modern.jpg';
import cavitationImage from '@/assets/cavitation-modern.jpg';
import laserImage from '@/assets/laser-modern.jpg';
import cryotherapyImage from '@/assets/cryotherapy-modern.jpg';
import consultationImage from '@/assets/consultation-modern.jpg';
import starvacImage from '@/assets/starvac-modern.jpg';
import plateauVibrantImage from '@/assets/plateau-vibrant-modern.jpg';
import pressotherapyImage from '@/assets/pressotherapy-modern.jpg';
import impedancemetreImage from '@/assets/impedancemetre-modern.jpg';
import saunaInfrarougeImage from '@/assets/sauna-infrarouge-modern.jpg';
const ServicesAmincissement = () => {
  const navigate = useNavigate();

  const structuredData = [
    getServiceSchema({
      name: "Services d'Amincissement et Remodelage Corporel",
      description: "Techniques modernes d'amincissement : radiofréquence, cavitation 40k, laser minceur et cryothérapie. Résultats visibles et durables à Casablanca.",
      url: "https://casakine.com/services/amincissement"
    }),
    getBreadcrumbSchema([
      { name: "Accueil", url: "https://casakine.com" },
      { name: "Services", url: "https://casakine.com/services" },
      { name: "Amincissement", url: "https://casakine.com/services/amincissement" }
    ])
  ];
  const techniques = [{
    icon: Radio,
    title: "Radiofréquence",
    image: radiofrequencyImage,
    duration: "30 minutes",
    description: "La radiofréquence est une technique non invasive utilisée en kinésithérapie et esthétique pour favoriser la perte de cellulite et le remodelage corporel.",
    benefits: ["Stimule la production de collagène", "Améliore la fermeté et l'élasticité de la peau", "Active la circulation sanguine et lymphatique", "Favorise la réduction des amas graisseux localisés", "Aide à lisser la peau d'orange"],
    details: "Grâce à la chaleur produite par des ondes électromagnétiques, ce traitement est une solution sûre, indolore et sans temps de récupération. Chaque séance se réalise en cabinet, sous la supervision d'un kinésithérapeute spécialisé."
  }, {
    icon: Waves,
    title: "Cavitation 40K",
    image: cavitationImage,
    duration: "30-45 minutes",
    description: "La cavitation 40k est une technique non invasive utilisée pour éliminer les graisses localisées et remodeler la silhouette sans chirurgie.",
    benefits: ["Réduit les amas graisseux localisés", "Améliore la texture de la peau", "Affine la silhouette", "Favorise un effet minceur durable"],
    details: "Grâce à des ultrasons à haute fréquence, elle provoque la destruction des cellules graisseuses, qui sont ensuite naturellement éliminées par l'organisme. Indolore et sans effets secondaires, idéale pour cibler les zones rebelles."
  }, {
    icon: Zap,
    title: "Laser Minceur",
    image: laserImage,
    duration: "20-30 minutes",
    description: "Le laser minceur est une technique non invasive qui utilise des faisceaux lumineux pour cibler les cellules graisseuses et favoriser leur élimination naturelle.",
    benefits: ["Diminue les graisses localisées", "Raffermit la peau", "Améliore la silhouette", "Réduit la cellulite"],
    details: "Indolore et rapide, le laser est une solution efficace pour remodeler le corps sans chirurgie ni douleur. Chaque séance est réalisée en cabinet par un kinésithérapeute spécialisé."
  }, {
    icon: Snowflake,
    title: "Cryothérapie",
    image: cryotherapyImage,
    duration: "20-30 minutes",
    description: "La cryothérapie est une méthode non invasive qui utilise le froid intense pour stimuler la combustion des graisses et le remodelage corporel.",
    benefits: ["Active le métabolisme et brûle les graisses localisées", "Améliore la fermeté de la peau", "Réduit la cellulite", "Favorise la récupération musculaire"],
    details: "Indolore et rapide, la cryothérapie est une solution naturelle pour affiner la silhouette sans intervention chirurgicale. Séances pratiquées sous supervision d'un professionnel qualifié."
  }, {
    icon: Hand,
    title: "STARVAC",
    image: starvacImage,
    duration: "30-45 minutes",
    description: "L'équilibre entre la production et l'élimination des graisses est un processus contrôlé par les adipocytes. Avec les années, ce mécanisme naturel se fragilise provoquant une augmentation du stockage graisseux.",
    benefits: ["Décongestionne les tissus", "Déstocke les cellules graisseuses", "Résorbe les capitons", "Diminue l'effet peau d'orange", "Raffermit la peau et affine la silhouette"],
    details: "Le massage consiste à mobiliser le tissu cutané afin de se libérer du superflu d'eau et de graisse qui s'y accumulent. Le Starvac permet d'imiter mécaniquement cette action manuelle, stimule la circulation superficielle lymphatique, soulage les jambes lourdes."
  }, {
    icon: Vibrate,
    title: "Le Plateau Vibrant",
    image: plateauVibrantImage,
    duration: "15-20 minutes",
    description: "Le Plateau Vibrant est efficace pour perdre du poids et réduire les graisses abdominales. Les plateformes vibrantes ou oscillantes ont des aspects bénéfiques sur la santé.",
    benefits: ["Raffermit la peau et le tissu conjonctif", "Diminue la cellulite", "Améliore la posture et l'allure", "Temps d'entraînement réduit", "Exercices faciles à pratiquer"],
    details: "Le plus grand avantage de la plateforme vibrante est clair : Le temps nécessaire pour obtenir des résultats satisfaisants est beaucoup plus court que pour un entraînement physique conventionnel, avec des effets pratiquement pareils, voir meilleurs."
  }, {
    icon: CircuitBoard,
    title: "Pressothérapie",
    image: pressotherapyImage,
    duration: "30-40 minutes",
    description: "C'est une technique de drainage mécanique et pneumatique, qui opère un véritable massage par compression et décompression d'un appareillage composé de bottes et de ceinture en vinyle.",
    benefits: ["Active la circulation sanguine et lymphatique", "Élimine mieux les toxines", "Améliore le retour veineux", "Réduit la rétention d'eau", "Affine la silhouette"],
    details: "Les alvéoles des bottes se remplissent d'air à rythme défini et exercent des pressions multiples et douces sur le corps. Immédiatement, la sensation de jambes lourdes disparaît. La technique est particulièrement efficace dès la première séance."
  }, {
    icon: Scale,
    title: "Impédancemètre",
    image: impedancemetreImage,
    duration: "5-10 minutes",
    description: "Mesurez votre masse grasse : Se peser, c'est bien. Mesurer sa masse grasse, c'est mieux ! Il existe des balances à impédance-mètre, qui permettent de connaître précisément le pourcentage exact de graisse dans votre corps.",
    benefits: ["Mesure précise de la masse grasse", "Suivi des progrès objectif", "Analyse de la composition corporelle", "Évaluation de la masse musculaire", "Indispensable pour un régime efficace"],
    details: "Indispensable lorsque vous suivez un régime ou essayez de gagner en masse musculaire. Cette technologie permet un suivi précis et objectif de votre évolution corporelle."
  }, {
    icon: Thermometer,
    title: "Sauna Infrarouge",
    image: saunaInfrarougeImage,
    duration: "30 minutes",
    description: "Le sauna infrarouge est une méthode qui propose plusieurs avantages. Le principe est le même que celui du sauna traditionnel mais vous évitez le choc thermique. La température monte entre 40 et 60 degrés.",
    benefits: ["Augmente la circulation sanguine", "Améliore le système cardiovasculaire", "Renforce le système immunitaire", "Réduit le stress et la fatigue", "Améliore l'oxygénation"],
    details: "Les rayons infrarouges accélèrent les fonctions cellulaires et contribuent à la purification de la peau. Le sauna infrarouge a des effets d'amincissement : pour une séance de 30 min, la perte totale est estimée entre 800 et 1000 Kcal."
  }];
  const targetAreas = [
    {
      zone: "Cuisses (intérieur/extérieur)",
      icon: "legs",
      description: "Raffermissement et remodelage des cuisses"
    },
    {
      zone: "Fesses et ventre", 
      icon: "body",
      description: "Tonification ciblée du tronc"
    },
    {
      zone: "Genoux, mollets, chevilles",
      icon: "leg",
      description: "Affinement des membres inférieurs"
    },
    {
      zone: "Dos et hanches",
      icon: "back", 
      description: "Remodelage de la silhouette dorsale"
    },
    {
      zone: "Bras et décolleté",
      icon: "arms",
      description: "Raffermissement du haut du corps"
    },
    {
      zone: "Contour des yeux et visage",
      icon: "face",
      description: "Traitement anti-âge du visage"
    }
  ];
  return <div className="page-amincissement">
    <Layout>
      <SEO 
        title="Amincissement et Remodelage Corporel - Casakine Casablanca"
        description="🔥 Techniques modernes d'amincissement à Casablanca : Radiofréquence, Cavitation 40k, Laser minceur, Cryothérapie. ✨ Résultats visibles dès les premières séances. ☎️ +212 661 67 70 96"
        keywords="amincissement casablanca, radiofréquence casablanca, cavitation 40k, laser minceur maroc, cryothérapie amincissement, remodelage corporel, cellulite traitement, dr nawal el ghorfi"
        canonical="https://casakine.com/services/amincissement"
        structuredData={structuredData}
      />
      {/* Fixed Return Button */}
      <div className="fixed top-6 left-6 z-50">
        
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/e9466446-be50-4fdf-9b3f-4bfeb28a7576.png" 
            alt="Équipements d'amincissement modernes" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 via-blue-500/75 to-primary/80"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-400/20 to-black/30"></div>
          <div className="absolute inset-0 bg-dots-pattern opacity-15"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-8 py-3 text-base mb-8 backdrop-blur-sm">
              💆‍♀️ Amincissement Personnalisé
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
              <span className="text-white">Cure d'</span>
              <span className="text-gradient-accent">Amincissement</span><br />
              <span className="text-white/90">Personnalisée</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Vous souhaitez affiner votre silhouette et perdre quelques centimètres de manière ciblée ? 
              Découvrez nos cures d'amincissement sur mesure, avec un taux de satisfaction de 100 % 
              constaté chez nos patients.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => window.location.href = '/contact'}>
                <Calendar className="w-5 h-5 mr-3" />
                Bilan personnalisé gratuit
              </Button>
              
              <Button variant="outline" onClick={() => window.open('tel:+212522398874')} className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-gray-950">
                <Phone className="w-5 h-5 mr-3" />
                Consultation immédiate
              </Button>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">9</div>
                <div className="text-white/80 text-sm">Technologies</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-white/80 text-sm">Chirurgie</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">20-45</div>
                <div className="text-white/80 text-sm">Minutes</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Personalized Analysis Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slide-left">
              <div>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 mb-6">
                  🔍 Bilan personnalisé
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                  Analyse <span className="text-gradient-accent">Morphologique</span><br />
                  Complète
                </h2>
                
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Chaque cure débute par une analyse complète de votre morphologie et de votre 
                  Indice de Masse Corporelle (IMC), afin d'établir un programme adapté à vos 
                  besoins et à vos objectifs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Objectifs Personnalisés</h4>
                      <p className="text-neutral-light">Définition précise de vos zones à traiter</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Suivi des Progrès</h4>
                      <p className="text-neutral-light">Mesures et évaluation régulière des résultats</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <img src={consultationImage} alt="Consultation personnalisée" className="w-full h-96 object-cover rounded-3xl shadow-strong" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Technologies Avancées</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Découvrez nos 9 techniques révolutionnaires pour un amincissement ciblé et durable
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-24">
            {techniques.map((technique, index) => {
            const Icon = technique.icon;
            const isEven = index % 2 === 0;
            return <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <ScrollAnimation animation={isEven ? "slide-left" : "slide-right"}>
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 mb-6">
                        {technique.duration}
                      </Badge>
                      
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-playfair font-bold text-primary">
                          {technique.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-neutral-light mb-6 leading-relaxed">
                        {technique.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {technique.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-neutral">{benefit}</span>
                          </div>)}
                      </div>
                      
                      <p className="text-neutral-light italic">
                        {technique.details}
                      </p>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation={isEven ? "slide-right" : "slide-left"}>
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="relative">
                        <img src={technique.image} alt={`Technique ${technique.title}`} className="w-full h-96 object-cover rounded-3xl shadow-strong" />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Target Areas Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-lightest via-background to-secondary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-secondary/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <Badge className="bg-accent/15 text-accent border-accent/30 px-8 py-4 text-lg mb-8 backdrop-blur-sm shadow-soft">
                ✨ Zones de Traitement Ciblées
              </Badge>
              
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-8 leading-tight">
                Transformation <span className="text-gradient-accent">Complète</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-4xl mx-auto leading-relaxed">
                Découvrez nos traitements spécialisés pour chaque zone de votre corps. 
                Des solutions personnalisées pour des résultats visibles et durables.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAreas.map((area, index) => {
              const getIcon = (iconType: string) => {
                switch(iconType) {
                  case 'legs': return Activity;
                  case 'body': return Shield;
                  case 'leg': return MapPin;
                  case 'back': return Target;
                  case 'arms': return Heart;
                  case 'face': return Eye;
                  default: return Sparkles;
                }
              };
              
              const IconComponent = getIcon(area.icon);
              
              return (
                <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="group relative overflow-hidden bg-gradient-to-br from-white via-neutral-lightest to-secondary/5 border-0 shadow-soft hover:shadow-strong transition-all duration-700 hover:scale-105 h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-10 relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-soft group-hover:shadow-strong transition-all duration-500 group-hover:scale-110">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Decorative ring */}
                        <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-accent/20 rounded-2xl group-hover:border-accent/40 transition-colors duration-500 group-hover:rotate-12"></div>
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                        {area.zone}
                      </h3>
                      
                      <p className="text-neutral-light text-center leading-relaxed group-hover:text-neutral transition-colors duration-300">
                        {area.description}
                      </p>
                      
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <ScrollAnimation animation="fade-up" delay={600}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Traitement sur mesure pour chaque zone</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Advanced Care Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 via-purple-500/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base mb-6">
                🛠️ Soins et technologies avancés
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Approche <span className="text-gradient-accent">Complète</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-4xl mx-auto">
                Nous combinons plusieurs techniques (appareils de dernière génération, soins manuels, 
                protocoles spécifiques) pour des résultats visibles et durables, adaptés à chaque type 
                de silhouette.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scale-up" delay={0}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    Technologies de Pointe
                  </h3>
                  <p className="text-neutral-light">
                    Équipements dernière génération pour des résultats optimaux et mesurables
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={200}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    Suivi Personnalisé
                  </h3>
                  <p className="text-neutral-light">
                    Accompagnement individualisé par nos kinésithérapeutes spécialisés
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={400}>
              <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    Résultats Durables
                  </h3>
                  <p className="text-neutral-light">
                    Protocoles adaptés pour des transformations visibles et maintenues
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Commencez Votre <span className="text-white/80">Transformation</span> Aujourd'hui
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Réservez votre bilan personnalisé gratuit et découvrez le programme 
              d'amincissement parfaitement adapté à vos objectifs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => window.location.href = '/contact'}>
                <Calendar className="w-5 h-5 mr-3" />
                Bilan gratuit maintenant
              </Button>
              
              <Button variant="outline" onClick={() => window.open('tel:+212522398874')} className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-gray-950">
                <Phone className="w-5 h-5 mr-3" />
                Appelez-nous
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  </div>;
};
export default ServicesAmincissement;