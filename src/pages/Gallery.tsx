import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroGalleryImage from '@/assets/hero-gallery.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Play, Camera, Award, Users, Stethoscope, Heart, Activity, Shield, Eye, ZoomIn, ChevronLeft, ChevronRight, Radio, Waves, Zap, Snowflake, Hand, Vibrate, CircuitBoard, Scale, Thermometer, CheckCircle } from 'lucide-react';

// Real uploaded images
const radiofrequencyImage = '/lovable-uploads/c95b1775-2a83-4be7-80ed-31b75042c71d.png';
const cavitationImage = '/lovable-uploads/8b02a3ed-4f1a-4e0c-a2a1-67ff6d231bf5.png';
const laserImage = '/lovable-uploads/a2e6bd2d-491c-4b20-a7f8-7c53cf4e2072.png';
const cryotherapyImage = '/lovable-uploads/bf54c27e-1e0a-489a-8a28-9b086a8bba00.png';
const starvacImage = '/lovable-uploads/af24c7b3-1936-4655-8658-942f6511b3a7.png';
const plateauVibrantImage = '/lovable-uploads/3144c3e6-6759-4f72-bb71-1f6da879aff3.png';
const pressotherapyImage = '/lovable-uploads/f25412e7-57c6-410e-a90d-a3c08f064423.png';
const saunaInfrarougeImage = '/lovable-uploads/752dd68e-27de-46f2-90ed-61aa6eaee927.png';
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Navigation functions for lightbox
  const navigateLightboxImage = (direction: 'prev' | 'next') => {
    const currentImageSrc = selectedImage;
    const currentIndex = galleryItems.findIndex(item => item.image === currentImageSrc);
    if (direction === 'prev') {
      const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
      setSelectedImage(galleryItems[prevIndex].image);
    } else {
      const nextIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryItems[nextIndex].image);
    }
  };
  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };
  const filters = [{
    id: 'tous',
    label: 'Tous',
    count: 6
  }, {
    id: 'cabinet',
    label: 'Notre Cabinet',
    count: 3
  }, {
    id: 'equipements',
    label: 'Équipements',
    count: 3
  }];
  const galleryItems = [
  // Cabinet & Reception
  {
    id: 1,
    type: 'image',
    category: 'cabinet',
    title: 'Accueil & Réception',
    description: 'Espace d\'accueil moderne avec comptoir professionnel',
    image: '/lovable-uploads/05dc901e-539a-4a8c-bf3f-811024a21376.png',
    featured: true
  }, {
    id: 2,
    type: 'image',
    category: 'cabinet',
    title: 'Espace Détente',
    description: 'Salon d\'attente confortable avec décoration chaleureuse',
    image: '/lovable-uploads/96149297-0185-49ae-9299-0d7da455afa8.png',
    featured: false
  }, {
    id: 3,
    type: 'image',
    category: 'cabinet',
    title: 'Jardin Thérapeutique',
    description: 'Espace extérieur zen pour la relaxation',
    image: '/lovable-uploads/706b90bc-891b-4530-8baf-a984ca929e0e.png',
    featured: true
  },
  // Équipements & Technology
  {
    id: 4,
    type: 'image',
    category: 'equipements',
    title: 'Salle de Gym Médicale',
    description: 'Équipements modernes pour la Kinésithérapie',
    image: '/lovable-uploads/e446b0d4-2529-4b49-a68d-d9a89f3dbaa6.png',
    featured: true
  }, {
    id: 5,
    type: 'image',
    category: 'equipements',
    title: 'Barres Parallèles',
    description: 'Équipement spécialisé pour la rééducation de la marche',
    image: '/lovable-uploads/32d8daa1-6c67-4431-a3c8-1a193c6d427b.png',
    featured: false
   }, {
    id: 6,
    type: 'image',
    category: 'equipements',
    title: 'Technologies Avancées',
    description: 'Appareils de dernière génération pour soins spécialisés',
    image: '/lovable-uploads/91f452dd-3b25-47be-93c8-697714ebdb8d.png',
    featured: false
  }
  ];
  const filteredItems = activeFilter === 'tous' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
  
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
    image: '/lovable-uploads/eadba95f-2bcc-4f83-ab65-91596799cdb7.png',
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

  const achievements = [{
    icon: Users,
    title: '+6000 Patients',
    description: 'Accompagnés vers la guérison'
  }, {
    icon: Stethoscope,
    title: 'Équipements Modernes',
    description: 'Technologies de dernière génération'
  }, {
    icon: Heart,
    title: 'Approche Humaine',
    description: 'Soins personnalisés et bienveillants'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Mosaic Effect */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 h-full">
            {[1, 2, 3, 4].map(i => <div key={i} className="relative">
                <img src={heroGalleryImage} alt="Medical facility" className="w-full h-full object-cover" style={{
              filter: `hue-rotate(${i * 45}deg) brightness(${0.7 + i * 0.1})`
            }} />
              </div>)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating Gallery Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-white/30 rounded-lg rotate-12 animate-float opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-accent/50 rounded-full animate-float-delay opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-accent rounded-lg rotate-45 animate-float opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/5 w-14 h-14 border-2 border-secondary/40 rounded-full animate-float-delay opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
                <Camera className="w-4 h-4 mr-2" />
                Notre Galerie
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                Découvrez Notre<br />
                <span className="text-gradient-accent">Univers</span> <span className="text-secondary">Thérapeutique</span>
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat text-neutral-lightest mb-8 opacity-90 font-bold">
              Plongez au cœur de notre centre moderne et de nos techniques innovantes
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Explorez nos installations de pointe, découvrez nos équipements modernes et visualisez 
              l'environnement chaleureux dans lequel nous vous accueillons pour votre bien-être.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button onClick={() => window.location.href = '/contact#map'} className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Eye className="w-5 h-5 mr-3" />
                Visiter le Centre
              </Button>
              
              
            </div>
          </ScrollAnimation>

          {/* Gallery Preview Thumbnails */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
              {galleryItems.slice(0, 6).map((item, i) => <div key={item.id} className="relative group cursor-pointer" onClick={() => openLightbox(item.image)}>
                  <div className="aspect-square rounded-xl overflow-hidden glass-card border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  {/* Mini category badge */}
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="text-xs bg-white/90 text-primary border-0 px-2 py-1">
                      {filters.find(f => f.id === item.category)?.label}
                    </Badge>
                  </div>
                </div>)}
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

      {/* Achievements Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow text-center group h-full">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-neutral-light text-sm">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-neutral-lightest/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Notre <span className="text-gradient-accent">Galerie</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto mb-8">
                Découvrez notre environnement professionnel et nos équipements de pointe
              </p>
              
              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                {filters.map(filter => <Button key={filter.id} onClick={() => setActiveFilter(filter.id)} variant={activeFilter === filter.id ? "default" : "outline"} className={`morph-button font-montserrat font-medium px-6 py-3 rounded-full transition-all duration-300 ${activeFilter === filter.id ? 'bg-gradient-primary text-white shadow-glow hover:scale-105' : 'glass-effect text-primary hover:bg-primary/10 hover:scale-105'}`}>
                    {filter.label}
                    <Badge variant="secondary" className="ml-2 bg-white/20 text-inherit border-0">
                      {filter.count}
                    </Badge>
                  </Button>)}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => <ScrollAnimation key={item.id} animation="fade-up" delay={index * 100}>
                <Card className="group glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button onClick={() => setSelectedImage(item.image)} className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0">
                          <ZoomIn className="w-4 h-4 mr-2" />
                          Voir en grand
                        </Button>
                      </div>
                    </div>

                    {/* Media Type Indicator */}
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-strong">
                          <Play className="w-6 h-6 text-white" />
                        </div> : <div className="w-12 h-12 bg-gradient-primary/80 rounded-full flex items-center justify-center shadow-strong">
                          <Camera className="w-6 h-6 text-white" />
                        </div>}
                    </div>

                    {/* Featured Badge */}
                    {item.featured && <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-secondary text-white border-0 shadow-strong">
                          <Eye className="w-3 h-3 mr-1" />
                          À la une
                        </Badge>
                      </div>}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs font-montserrat bg-primary/10 text-primary border-primary/20">
                        {filters.find(f => f.id === item.category)?.label}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-playfair font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      {selectedImage && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            {/* Navigation Buttons */}
            <Button onClick={() => navigateLightboxImage('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0 shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button onClick={() => navigateLightboxImage('next')} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0 shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            <img src={selectedImage} alt="Image agrandie" className="w-full h-full object-contain rounded-2xl shadow-strong" />
            
            {/* Close Button */}
            <Button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full p-0 z-10">
              ×
            </Button>
          </div>
        </div>}

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
                      <div className="relative group">
                        {/* Modern frame effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80"></div>
                        
                        {/* Main image container */}
                        <div className="relative bg-white p-6 rounded-3xl shadow-elegant group-hover:shadow-glow transition-all duration-500">
                          {/* Decorative corners */}
                          <div className="absolute top-3 left-3 w-8 h-8 border-l-4 border-t-4 border-primary/40 rounded-tl-lg"></div>
                          <div className="absolute top-3 right-3 w-8 h-8 border-r-4 border-t-4 border-secondary/40 rounded-tr-lg"></div>
                          <div className="absolute bottom-3 left-3 w-8 h-8 border-l-4 border-b-4 border-accent/40 rounded-bl-lg"></div>
                          <div className="absolute bottom-3 right-3 w-8 h-8 border-r-4 border-b-4 border-primary/40 rounded-br-lg"></div>
                          
                          {/* Image with overlay effects */}
                          <div className="relative overflow-hidden rounded-2xl">
                            <img src={technique.image} alt={`Technique ${technique.title}`} className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110" />
                            
                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            
                            {/* Technology icon overlay */}
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-500">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          {/* Bottom accent line */}
                          <div className="mt-4 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>;
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Envie de Visiter Notre
              <span className="text-white/80 block">Centre en Personne ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Planifiez une visite personnalisée de nos installations et découvrez 
              pourquoi nos patients nous font confiance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Camera className="w-5 h-5 mr-3" />
                Réserver une Visite
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Gallery;