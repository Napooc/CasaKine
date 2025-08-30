import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroGalleryImage from '@/assets/hero-gallery.jpg';
import impedancemetreImage from '@/assets/impedancemetre-modern.jpg';
import saunaInfrarougeImage from '@/assets/sauna-infrarouge-modern.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Play, Camera, Award, Users, Stethoscope, Heart, Activity, Shield, Eye, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Navigation functions for lightbox
  const navigateLightboxImage = (direction: 'prev' | 'next') => {
    const currentImageSrc = selectedImage;
    const allItems = activeFilter === 'equipements' ? equipmentItems : galleryItems;
    const currentIndex = allItems.findIndex(item => item.image === currentImageSrc);
    if (direction === 'prev') {
      const prevIndex = currentIndex === 0 ? allItems.length - 1 : currentIndex - 1;
      setSelectedImage(allItems[prevIndex].image);
    } else {
      const nextIndex = currentIndex === allItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(allItems[nextIndex].image);
    }
  };
  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };
  const filters = [{
    id: 'tous',
    label: 'Tous',
    count: 3
  }, {
    id: 'cabinet',
    label: 'Notre Cabinet',
    count: 3
  }, {
    id: 'equipements',
    label: 'Équipements',
    count: 9
  }];
  const galleryItems = [
  // Cabinet & Reception (shown in 'tous')
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
  }];

  // Equipment items (only shown in 'equipements' filter, NOT in 'tous')
  const equipmentItems = [
  {
    id: 10,
    type: 'image',
    category: 'equipements',
    title: 'Radiofréquence',
    description: 'Technologie de radiofréquence pour le raffermissement et la stimulation du collagène',
    image: '/lovable-uploads/dd7a452b-4de9-4e92-a7f2-90ccef1f273c.png',
    featured: true
  }, {
    id: 11,
    type: 'image',
    category: 'equipements',
    title: 'Cavitation 40K',
    description: 'Ultrasons de cavitation pour la réduction des amas graisseux localisés',
    image: '/lovable-uploads/d35e6646-fc16-4038-b7e5-4a4dd3f4c775.png',
    featured: false
  }, {
    id: 12,
    type: 'image',
    category: 'equipements',
    title: 'Laser Minceur',
    description: 'Technologie laser de dernière génération pour la sculpte corporelle',
    image: '/lovable-uploads/b6db2820-78b2-4a9c-b470-e63bd5cf2d3f.png',
    featured: true
  }, {
    id: 13,
    type: 'image',
    category: 'equipements',
    title: 'Cryothérapie',
    description: 'Traitement par le froid pour la réduction des graisses et la tonification',
    image: '/lovable-uploads/78f00049-3df6-4d73-9481-738cf6c96b27.png',
    featured: false
  }, {
    id: 14,
    type: 'image',
    category: 'equipements',
    title: 'STARVAC',
    description: 'Aspiration pulsée pour le drainage lymphatique et la cellulite',
    image: '/lovable-uploads/7fb51010-78ed-4df1-8896-1869ba86b002.png',
    featured: true
  }, {
    id: 15,
    type: 'image',
    category: 'equipements',
    title: 'Le Plateau Vibrant',
    description: 'Vibrations pour le renforcement musculaire et la stimulation circulatoire',
    image: '/lovable-uploads/050d816d-91d8-42bb-8be4-195e60941d91.png',
    featured: false
  }, {
    id: 16,
    type: 'image',
    category: 'equipements',
    title: 'Pressothérapie',
    description: 'Massage pneumatique pour l\'amélioration de la circulation et le drainage',
    image: '/lovable-uploads/efac2d5e-ff0b-40f5-97f4-0365ced52d3d.png',
    featured: true
  }, {
    id: 17,
    type: 'image',
    category: 'equipements',
    title: 'Impédancemètre',
    description: 'Analyse précise de la composition corporelle pour un suivi personnalisé',
    image: impedancemetreImage,
    featured: false
  }, {
    id: 18,
    type: 'image',
    category: 'equipements',
    title: 'Sauna Infrarouge',
    description: 'Détoxification et relaxation par infrarouge pour le bien-être global',
    image: saunaInfrarougeImage,
    featured: true
  }];
  const filteredItems = activeFilter === 'tous' 
    ? galleryItems 
    : activeFilter === 'equipements' 
      ? equipmentItems 
      : galleryItems.filter(item => item.category === activeFilter);
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