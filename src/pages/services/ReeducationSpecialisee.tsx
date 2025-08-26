import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, CheckCircle, Heart, Brain, Home, ArrowLeft, Phone, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import specialtyImage from '@/assets/specialty-manual-therapy.jpg';
import facilityImage from '@/assets/reeducation-facility.jpg';
import drainageImage from '@/assets/reeducation-drainage.jpg';
import homeCareImage from '@/assets/reeducation-home-care.jpg';
const ReeducationSpecialisee = () => {
  const navigate = useNavigate();
  const specializations = [{
    icon: Heart,
    title: "Rééducation Périnéale",
    description: "Restauration de la fonction périnéale après accouchement ou chirurgie",
    details: ["Incontinence urinaire et fécale", "Post-partum et post-chirurgie", "Prolapsus et douleurs pelviennes", "Rééducation préventive"],
    target: "Femmes et hommes",
    duration: "30-45 min"
  }, {
    icon: Brain,
    title: "Rééducation après AVC",
    description: "Récupération fonctionnelle après accident vasculaire cérébral",
    details: ["Récupération motrice", "Rééducation de la marche", "Travail de l'équilibre", "Réapprentissage gestuel"],
    target: "Patients post-AVC",
    duration: "60 min"
  }, {
    icon: Users,
    title: "Drainage Lymphatique Manuel",
    description: "Technique douce pour stimuler la circulation lymphatique",
    details: ["Œdèmes et gonflements", "Post-chirurgie esthétique", "Jambes lourdes", "Récupération sportive"],
    target: "Tous âges",
    duration: "60 min"
  }];
  const additionalServices = [{
    title: "Réadaptation à l'Effort",
    description: "Programme personnalisé pour retrouver une condition physique optimale",
    icon: Shield
  }, {
    title: "Soins à Domicile",
    description: "Possibilité de traitement dans le confort et la sécurité de votre domicile",
    icon: Home
  }];
  const conditions = ["Incontinence urinaire post-partum", "Séquelles d'AVC et d'hémiplégie", "Lymphœdème et œdèmes", "Troubles de l'équilibre", "Rééducation post-chirurgicale", "Pathologies neurologiques", "Déconditionnement physique", "Douleurs pelviennes chroniques"];
  const benefits = ["Récupération fonctionnelle optimale", "Amélioration de la qualité de vie", "Prévention des complications", "Accompagnement personnalisé", "Techniques innovantes", "Suivi rigoureux", "Résultats durables", "Prise en charge globale"];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialtyImage} alt="Rééducation Spécialisée" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent/75 to-teal-600/85"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button variant="ghost" className="text-white/80 hover:text-white mb-8 p-0" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux services
            </Button>
            
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
              Rééducation Avancée
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Rééducation <span className="text-gradient-accent">Spécialisée</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-neutral-lightest/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Programmes de rééducation personnalisés selon vos besoins spécifiques, 
              avec possibilité de soins à domicile et un suivi adapté à votre rythme.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-accent hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-3" />
                Réserver un bilan
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950" onClick={() => window.open('tel:+212522398874')}>
                <Home className="w-5 h-5 mr-3" />
                Soins à domicile
              </Button>
            </div>
          </ScrollAnimation>

          {/* Key Features */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              <div className="glass-card p-6 text-center">
                <div className="text-xl font-playfair font-bold text-white mb-2">45-60</div>
                <div className="text-white/80 text-sm">Minutes</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-xl font-playfair font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Personnalisé</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-xl font-playfair font-bold text-white mb-2">✓</div>
                <div className="text-white/80 text-sm">Domicile</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-xl font-playfair font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">Ans expérience</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Spécialisations</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Des expertises pointues pour une prise en charge optimale de votre rééducation
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => {
            const Icon = specialization.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">
                        {specialization.title}
                      </h3>
                      
                      <p className="text-neutral-light mb-6 text-center text-sm">
                        {specialization.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {specialization.details.map((detail, detailIndex) => <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-neutral text-sm">{detail}</span>
                          </div>)}
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-center text-sm">
                          <div className="text-neutral-light">
                            {specialization.target}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="text-accent font-semibold">{specialization.duration}</span>
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

      {/* Facility Showcase */}
      <section className="py-24 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Installations</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Un environnement moderne et adapté pour votre rééducation spécialisée
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <img 
                  src={facilityImage} 
                  alt="Centre de rééducation spécialisée moderne" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Centre <span className="text-accent">Spécialisé</span>
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Notre centre dispose d'équipements spécialisés pour la rééducation 
                  neurologique, périnéale et le drainage lymphatique.
                </p>
                <div className="space-y-6">
                  {additionalServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-gradient-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-xl font-playfair font-bold text-primary mb-3">
                            {service.title}
                          </h4>
                          <p className="text-neutral-light leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Drainage Therapy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slide-left">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Drainage <span className="text-gradient-accent">Lymphatique</span>
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Technique douce et efficace pour stimuler la circulation et réduire 
                  les œdèmes post-chirurgicaux ou pathologiques.
                </p>
                <div className="bg-gradient-to-br from-accent/10 to-teal-500/10 rounded-3xl p-8">
                  <h4 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
                    Pathologies Traitées
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {conditions.slice(0, 6).map((condition, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-neutral text-sm">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <img 
                  src={drainageImage} 
                  alt="Séance de drainage lymphatique" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Home Care */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="scale-up">
              <div className="relative">
                <img 
                  src={homeCareImage} 
                  alt="Soins à domicile personnalisés" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Soins à <span className="text-gradient-accent">Domicile</span>
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Pour votre confort et votre sécurité, nous proposons des soins 
                  à domicile avec le même niveau de qualité qu'au cabinet.
                </p>
                <div className="p-6 bg-white/50 rounded-2xl">
                  <h4 className="text-lg font-playfair font-semibold text-primary mb-4 text-center">
                    Bénéfices du Traitement
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-neutral text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent via-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Retrouvez Votre <span className="text-white/80">Autonomie</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Chaque parcours de rééducation est unique. Nos experts vous accompagnent 
              étape par étape vers la récupération de vos capacités fonctionnelles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-accent hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-3" />
                Commencer ma rééducation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950" onClick={() => window.open('tel:+212522398874')}>
                <Phone className="w-5 h-5 mr-3" />
                05 37 78 48 94
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default ReeducationSpecialisee;