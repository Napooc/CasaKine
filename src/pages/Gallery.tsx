import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroGalleryImage from '@/assets/hero-gallery.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Play, Camera, Award, Users, Stethoscope, Heart, Activity, Shield, Eye, ZoomIn } from 'lucide-react';
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filters = [{
    id: 'tous',
    label: 'Tous',
    count: 8
  }, {
    id: 'cabinet',
    label: 'Notre Cabinet',
    count: 3
  }, {
    id: 'equipements',
    label: 'Équipements',
    count: 3
  }, {
    id: 'soins',
    label: 'Soins',
    count: 2
  }];
  const galleryItems = [{
    id: 1,
    type: 'image',
    category: 'cabinet',
    title: 'Espace d\'Accueil Principal',
    description: 'Hall d\'accueil moderne avec comptoir et espace d\'attente confortable',
    image: '/lovable-uploads/3ae0f8ed-520f-468e-be41-1c8dcdd1d219.png',
    featured: true
  }, {
    id: 2,
    type: 'image',
    category: 'cabinet',
    title: 'Salon d\'Attente',
    description: 'Espace de détente avec canapés confortables et décoration chaleureuse',
    image: '/lovable-uploads/195a7b36-d0f2-43a9-b774-7a8e779437c1.png',
    featured: false
  }, {
    id: 3,
    type: 'image',
    category: 'cabinet',
    title: 'Jardin Thérapeutique',
    description: 'Espace extérieur zen pour la relaxation et les exercices en plein air',
    image: '/lovable-uploads/b367d013-4996-45f6-98e2-13fa6eace33e.png',
    featured: true
  }, {
    id: 4,
    type: 'image',
    category: 'soins',
    title: 'Salle de Soins 1',
    description: 'Cabine de soins équipée avec matériel moderne et ambiance apaisante',
    image: '/lovable-uploads/f559226e-a464-493c-8706-07d5601d8079.png',
    featured: false
  }, {
    id: 5,
    type: 'image',
    category: 'soins',
    title: 'Salle de Soins 2',
    description: 'Espace de traitement avec équipements spécialisés et éclairage optimal',
    image: '/lovable-uploads/563b754e-ff99-42ea-814d-2f3fb736e8fe.png',
    featured: true
  }, {
    id: 6,
    type: 'image',
    category: 'equipements',
    title: 'Thérapie par Suspension',
    description: 'Salle équipée pour la rééducation fonctionnelle et la suspension thérapeutique',
    image: '/lovable-uploads/bb6cf940-913e-421b-96af-981316b1c5be.png',
    featured: false
  }, {
    id: 7,
    type: 'image',
    category: 'equipements',
    title: 'Salle de Gymnastique Médicale',
    description: 'Espace dédié aux exercices avec équipements de rééducation moderne',
    image: '/lovable-uploads/3d24691e-f263-4f9d-bd31-9ae828ec1a44.png',
    featured: true
  }, {
    id: 8,
    type: 'image',
    category: 'equipements',
    title: 'Centre de Rééducation',
    description: 'Zone de rééducation avec barres parallèles et matériel thérapeutique',
    image: '/lovable-uploads/c88c2518-08d1-474e-bfd8-2e9c98df5bfd.png',
    featured: false
  }];
  const filteredItems = activeFilter === 'tous' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
  const achievements = [{
    icon: Award,
    title: 'Centre Certifié',
    description: 'Certification qualité ISO 9001'
  }, {
    icon: Users,
    title: '2000+ Patients',
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
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
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-5xl mx-auto">
              {galleryItems.slice(0, 8).map((item, i) => <div key={i} className="relative group cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                  <div className="aspect-square rounded-2xl overflow-hidden glass-card border border-white/20 shadow-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent group-hover:from-primary/80 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Modern floating label */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                      {item.title}
                    </div>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow text-center group">
                    <CardContent className="p-8">
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
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-accent/5 rounded-full blur-2xl animate-float-delay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Modern Grid Layout - Organized by rows */}
          <div className="space-y-8">
            {/* First Row: Featured Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredItems.filter(item => item.featured).slice(0, 2).map((item, index) => (
                <ScrollAnimation key={item.id} animation="fade-up" delay={index * 150}>
                  <Card className="group relative border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] h-96">
                    {/* Large Featured Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          Coup de cœur
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg px-3 py-1.5 font-medium">
                          {filters.find(f => f.id === item.category)?.label}
                        </Badge>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button 
                          onClick={() => setSelectedImage(item.image)} 
                          className="bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl backdrop-blur-sm border-0 rounded-full px-6 py-3"
                        >
                          <ZoomIn className="w-5 h-5 mr-2" />
                          Agrandir
                        </Button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-montserrat font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-neutral-light leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Second Row: Regular Items in 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.filter(item => !item.featured).map((item, index) => (
                <ScrollAnimation key={item.id} animation="fade-up" delay={index * 100}>
                  <Card className="group relative border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                    {/* Standard Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`text-white border-0 shadow-lg px-3 py-1 text-xs font-medium ${
                          item.category === 'cabinet' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          item.category === 'equipements' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}>
                          {filters.find(f => f.id === item.category)?.label}
                        </Badge>
                      </div>

                      {/* Camera Icon */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Camera className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button 
                          onClick={() => setSelectedImage(item.image)} 
                          className="bg-white/80 text-primary hover:bg-white hover:scale-110 transition-all duration-300 rounded-full px-4 py-2 text-sm"
                        >
                          <ZoomIn className="w-4 h-4 mr-1" />
                          Voir
                        </Button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-5">
                      <h3 className="text-lg font-montserrat font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-neutral-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Action Hint */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-xs text-primary/60 flex items-center">
                          <div className="w-1 h-1 bg-primary/40 rounded-full mr-2"></div>
                          Cliquez pour agrandir
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Third Row: Add more items if available */}
            {filteredItems.length > 6 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredItems.slice(6).map((item, index) => (
                  <ScrollAnimation key={item.id} animation="scale-up" delay={index * 80}>
                    <Card className="group relative border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-400 hover:scale-105">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                        />
                        
                        {/* Mini Category Badge */}
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-black/60 text-white border-0 px-2 py-1 text-xs">
                            {filters.find(f => f.id === item.category)?.label}
                          </Badge>
                        </div>

                        {/* Hover Action */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button 
                            onClick={() => setSelectedImage(item.image)}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                          >
                            <ZoomIn className="w-5 h-5 text-primary" />
                          </button>
                        </div>
                      </div>
                      
                      <CardContent className="p-3">
                        <h4 className="text-sm font-montserrat font-semibold text-primary mb-1 line-clamp-2">
                          {item.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh]">
            <img src={selectedImage} alt="Image agrandie" className="w-full h-full object-contain rounded-2xl shadow-strong" />
            <Button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full p-0">
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