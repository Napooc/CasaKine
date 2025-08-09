import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Heart, Target, Users, CheckCircle, Clock, ArrowRight, Sparkles, Shield, Star } from 'lucide-react';
import gymnasticsHeroImage from '@/assets/gymnastics-medical-hero.jpg';
import gymnasticsSeniorImage from '@/assets/gymnastics-senior.jpg';
import gymnasticsVertebralImage from '@/assets/gymnastics-vertebral.jpg';
const GymnastiqueMedicale = () => {
  const benefits = ['Amélioration de la mobilité articulaire', 'Renforcement musculaire progressif', 'Prévention des douleurs chroniques', 'Maintien de l\'autonomie', 'Amélioration de l\'équilibre', 'Stimulation cognitive', 'Lien social et convivialité'];
  const vertebralProgram = ['Assouplissement de la colonne vertébrale', 'Renforcement de la ceinture abdominale', 'Stabilisation du bassin', 'Mobilisation des membres supérieurs', 'Travail des membres inférieurs', 'Protection articulaire', 'Amélioration de la posture'];
  const seniorProgram = ['Maintien de l\'autonomie corporelle', 'Prévention des chutes', 'Amélioration de l\'équilibre', 'Renforcement musculaire adapté', 'Souplesse articulaire', 'Coordination motrice', 'Stimulation cognitive et sociale'];
  const equipment = ['Ballons de gymnastique', 'Élastiques de résistance', 'Plateaux d\'équilibre (Freeman)', 'Tapis de sol professionnels', 'Accessoires de proprioception', 'Matériel de coordination'];
  return <Layout>
      {/* Hero Section */}
      {/* Custom Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={gymnasticsHeroImage} alt="Gymnastique médicale moderne" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/90"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
              🧘‍♀️ Gymnastique Médicale
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
              Retrouver <span className="text-gradient-accent">équilibre</span><br />
              et <span className="text-sky-400">vitalité</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Notre centre vous propose des cours de gymnastique médicale encadrés par des kinésithérapeutes, 
              pour améliorer votre mobilité, renforcer votre musculature et prévenir les douleurs.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <Button onClick={() => window.location.href = '/contact'} className="bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
              <Activity className="w-5 h-5 mr-3" />
              Réserver une séance
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <Badge className="bg-gradient-accent text-white mb-6">
                  Approche Personnalisée
                </Badge>
                <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                  Une gymnastique <span className="text-gradient-accent">adaptée à chaque âge</span>
                </h2>
                <p className="text-lg text-neutral-light mb-8 leading-relaxed">
                  Les séances sont adaptées à chaque âge et condition physique, dans une ambiance 
                  conviviale et bienveillante. Nos programmes permettent de retrouver mobilité, 
                  force et confiance en soi.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-neutral text-sm">{benefit}</span>
                    </div>)}
                </div>

                <Button onClick={() => window.location.href = '/contact'} className="bg-gradient-accent hover-accent-glow text-white px-8 py-3">
                  <Activity className="w-5 h-5 mr-2" />
                  Commencer maintenant
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <img src={gymnasticsHeroImage} alt="Gymnastique médicale moderne" className="w-full h-[500px] object-cover rounded-2xl shadow-strong" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Gymnastique Vertébrale Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="bg-primary text-white mb-4">
                🔹 Spécialité Vertébrale
              </Badge>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Gymnastique <span className="text-gradient-accent">Vertébrale</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Un excellent moyen de prévenir ou soulager les douleurs lombaires, 
                cervicales ou articulaires grâce à une musculature équilibrée.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <Card className="glass-card shadow-strong h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary">
                      Objectifs Ciblés
                    </h3>
                  </div>
                  
                  <p className="text-neutral-light mb-6 leading-relaxed">
                    Ces exercices ciblent principalement la colonne vertébrale, le bassin et 
                    la ceinture abdominale, ainsi que les membres supérieurs et inférieurs 
                    pour une approche globale.
                  </p>

                  <div className="space-y-3">
                    {vertebralProgram.map((item, index) => <div key={index} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-neutral text-sm">{item}</span>
                      </div>)}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl">
                    <h4 className="font-playfair font-bold text-primary mb-3">
                      Résultats attendus :
                    </h4>
                    <p className="text-neutral text-sm leading-relaxed">
                      Assouplir, renforcer et stabiliser la posture, en protégeant les 
                      articulations grâce à une musculature équilibrée et fonctionnelle.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <img src={gymnasticsVertebralImage} alt="Gymnastique vertébrale" className="w-full h-[600px] object-cover rounded-2xl shadow-strong" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Gymnastique Senior Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="bg-secondary text-white mb-4">
                🔹 Programme Senior
              </Badge>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Gymnastique <span className="text-gradient-secondary">Senior</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Spécialement conçue pour les personnes âgées, cette pratique douce 
                favorise le maintien de l'autonomie et le lien social.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <img src={gymnasticsSeniorImage} alt="Gymnastique senior" className="w-full h-[600px] object-cover rounded-2xl shadow-strong" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent rounded-2xl"></div>
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="text-secondary font-medium">Ambiance conviviale et bienveillante</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <Card className="glass-card shadow-strong h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary">
                      Bienfaits Multiples
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    {seniorProgram.map((item, index) => <div key={index} className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-neutral text-sm">{item}</span>
                      </div>)}
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 mb-6">
                    <h4 className="font-playfair font-bold text-primary mb-3">
                      Matériel utilisé :
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {equipment.map((item, index) => <div key={index} className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-neutral text-xs">{item}</span>
                        </div>)}
                    </div>
                  </div>

                  <p className="text-neutral-light text-sm leading-relaxed italic">
                    "Les exercices sont variés, ludiques et réalisés avec du matériel adapté 
                    pour garantir sécurité et plaisir dans la pratique."
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Prêt à retrouver votre <span className="text-gradient-accent">vitalité</span> ?
            </h2>
            <p className="text-xl text-neutral-lightest/90 mb-8 leading-relaxed">
              Rejoignez nos séances de gymnastique médicale et redécouvrez le plaisir du mouvement 
              dans un cadre professionnel et bienveillant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button onClick={() => window.location.href = '/contact'} className="bg-gradient-accent hover-accent-glow text-white font-semibold px-8 py-4 text-lg">
                <Activity className="w-5 h-5 mr-3" />
                Réserver une séance d'essai
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default GymnastiqueMedicale;