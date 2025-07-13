import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, CheckCircle, Snowflake, Radio, Waves, ArrowLeft, Phone, Calendar, Star } from 'lucide-react';
import specialtyImage from '@/assets/specialty-wellness.jpg';

const ServicesAmincissement = () => {
  const techniques = [
    {
      icon: Snowflake,
      title: "Cryothérapie/Cryolipolyse",
      description: "Destruction des cellules graisseuses par le froid contrôlé",
      benefits: ["Réduction ciblée des graisses", "Pas de chirurgie", "Résultats durables", "Aucune éviction sociale"],
      duration: "60 minutes",
      sessions: "3-6 séances"
    },
    {
      icon: Radio,
      title: "Radiofréquence",
      description: "Raffermissement cutané et réduction de la cellulite par ondes radio",
      benefits: ["Raffermit la peau", "Stimule le collagène", "Améliore la texture", "Effet anti-âge"],
      duration: "45 minutes", 
      sessions: "8-12 séances"
    },
    {
      icon: Waves,
      title: "Lipocavitation 40K",
      description: "Destruction des cellules graisseuses par ultrasons basse fréquence",
      benefits: ["Réduit la cellulite", "Draine les toxines", "Améliore la circulation", "Résultats visibles"],
      duration: "60 minutes",
      sessions: "6-10 séances"
    }
  ];

  const additionalServices = [
    {
      title: "Palper Rouler",
      description: "Technique manuelle pour améliorer la circulation et réduire l'aspect peau d'orange"
    },
    {
      title: "Lipolyse Laser",
      description: "Technologie laser pour cibler et détruire les cellules graisseuses"
    },
    {
      title: "Pressothérapie", 
      description: "Drainage lymphatique mécanique pour éliminer les toxines et réduire la rétention d'eau"
    }
  ];

  const results = [
    "Réduction visible dès la première séance",
    "Amélioration de la silhouette",
    "Raffermissement cutané",
    "Réduction de la cellulite",
    "Meilleure circulation sanguine",
    "Drainage des toxines",
    "Résultats durables",
    "Bien-être et confiance en soi"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={specialtyImage} 
            alt="Services d'Amincissement et d'Esthétique" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/75 to-purple-600/85"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white mb-8 p-0"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux services
            </Button>
            
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
              Bien-être & Esthétique
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Services d'<span className="text-gradient-accent">Amincissement</span><br />
              & d'<span className="text-secondary">Esthétique</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-neutral-lightest/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Techniques modernes d'amincissement pour sculpter votre silhouette avec des 
              technologies de pointe et des résultats visibles dès la première séance.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-secondary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver une séance
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-white">
                <Phone className="w-5 h-5 mr-3" />
                Consultation gratuite
              </Button>
            </div>
          </ScrollAnimation>

          {/* Treatment Icons */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto mt-16">
              {[Snowflake, Radio, Waves, Zap, Star, CheckCircle].map((Icon, index) => (
                <div key={index} className="glass-card p-4 text-center hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white mx-auto" />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Techniques Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Technologies Avancées</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Des équipements de dernière génération pour des résultats optimaux et durables
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">
                        {technique.title}
                      </h3>
                      
                      <p className="text-neutral-light mb-6 text-center text-sm">
                        {technique.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {technique.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-neutral text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-neutral-light" />
                            <span className="text-neutral-light">{technique.duration}</span>
                          </div>
                          <div className="text-secondary font-semibold">
                            {technique.sessions}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Services <span className="text-gradient-accent">Complémentaires</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Une gamme complète de soins pour une approche globale de votre bien-être
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {additionalServices.map((service, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    
                    <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Results Section */}
          <ScrollAnimation animation="scale-up">
            <div className="bg-gradient-to-br from-secondary/10 to-purple-500/10 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
                  Résultats <span className="text-secondary">Garantis</span>
                </h3>
                <p className="text-xl text-neutral-light">
                  60-90 minutes de pure détente pour des résultats spectaculaires
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-neutral text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Sculptez la <span className="text-white/80">Silhouette</span> de Vos Rêves
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Profitez de nos technologies révolutionnaires pour transformer votre corps 
              en toute sécurité et avec des résultats visibles dès la première séance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-secondary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver votre transformation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-white">
                <Star className="w-5 h-5 mr-3" />
                Consultation gratuite
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesAmincissement;