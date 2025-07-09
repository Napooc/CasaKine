import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { 
  Play, 
  Camera, 
  Award, 
  Users, 
  Stethoscope, 
  Heart,
  Activity,
  Shield,
  Eye,
  ZoomIn
} from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'tous', label: 'Tous', count: 24 },
    { id: 'cabinet', label: 'Notre Cabinet', count: 8 },
    { id: 'equipements', label: 'Équipements', count: 6 },
    { id: 'soins', label: 'Soins', count: 10 }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'cabinet',
      title: 'Salle d\'accueil moderne',
      description: 'Espace d\'accueil confortable et apaisant',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      category: 'equipements',
      title: 'Équipements de pointe',
      description: 'Technologies modernes pour des soins optimaux',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: false
    },
    {
      id: 3,
      type: 'video',
      category: 'soins',
      title: 'Séance de rééducation',
      description: 'Démonstration d\'exercices thérapeutiques',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: true
    },
    {
      id: 4,
      type: 'image',
      category: 'cabinet',
      title: 'Salle de consultation',
      description: 'Environnement professionnel et chaleureux',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: false
    },
    {
      id: 5,
      type: 'image',
      category: 'equipements',
      title: 'Matériel de rééducation',
      description: 'Équipements spécialisés pour tous types de soins',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: false
    },
    {
      id: 6,
      type: 'image',
      category: 'soins',
      title: 'Thérapie manuelle',
      description: 'Techniques de massage thérapeutique',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      featured: true
    }
  ];

  const filteredItems = activeFilter === 'tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const achievements = [
    {
      icon: Award,
      title: 'Centre Certifié',
      description: 'Certification qualité ISO 9001'
    },
    {
      icon: Users,
      title: '2000+ Patients',
      description: 'Accompagnés vers la guérison'
    },
    {
      icon: Stethoscope,
      title: 'Équipements Modernes',
      description: 'Technologies de dernière génération'
    },
    {
      icon: Heart,
      title: 'Approche Humaine',
      description: 'Soins personnalisés et bienveillants'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Découvrez Notre Univers Thérapeutique"
        subtitle="Plongez au cœur de notre centre moderne et de nos techniques innovantes"
        description="Explorez nos installations de pointe, découvrez nos équipements modernes et visualisez l'environnement chaleureux dans lequel nous vous accueillons."
        ctaText="Visiter le Centre"
        showStats={false}
        backgroundType="gradient"
      />

      {/* Achievements Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <ScrollAnimation 
                  key={index}
                  animation="scale-up"
                  delay={index * 150}
                >
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
                </ScrollAnimation>
              );
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
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    className={`morph-button font-montserrat font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-primary text-white shadow-glow hover:scale-105'
                        : 'glass-effect text-primary hover:bg-primary/10 hover:scale-105'
                    }`}
                  >
                    {filter.label}
                    <Badge 
                      variant="secondary" 
                      className="ml-2 bg-white/20 text-inherit border-0"
                    >
                      {filter.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollAnimation 
                key={item.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="group glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button 
                          onClick={() => setSelectedImage(item.image)}
                          className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-0"
                        >
                          <ZoomIn className="w-4 h-4 mr-2" />
                          Voir en grand
                        </Button>
                      </div>
                    </div>

                    {/* Media Type Indicator */}
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-strong">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-gradient-primary/80 rounded-full flex items-center justify-center shadow-strong">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-secondary text-white border-0 shadow-strong">
                          <Eye className="w-3 h-3 mr-1" />
                          À la une
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge 
                        variant="outline" 
                        className="text-xs font-montserrat bg-primary/10 text-primary border-primary/20"
                      >
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={selectedImage}
              alt="Image agrandie"
              className="w-full h-full object-contain rounded-2xl shadow-strong"
            />
            <Button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-12 h-12 rounded-full p-0"
            >
              ×
            </Button>
          </div>
        </div>
      )}

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
              
              <Button 
                variant="outline"
                className="glass-effect text-white border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Visite Virtuelle 360°
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;