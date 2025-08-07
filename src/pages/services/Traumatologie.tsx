import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Clock, CheckCircle, Users, Award, Target, ArrowLeft, Phone, Calendar } from 'lucide-react';
import specialtyImage from '@/assets/specialty-rehabilitation.jpg';
import equipmentImage from '@/assets/traumatologie-equipment.jpg';
import therapyImage from '@/assets/traumatologie-therapy.jpg';
import recoveryImage from '@/assets/traumatologie-recovery.jpg';
const Traumatologie = () => {
  const treatments = [{
    title: "Traumatologie",
    items: ["Fractures et entorses", "Raideurs post-traumatiques", "Rééducation post-chirurgicale", "Prothèses PTH et PTG"]
  }, {
    title: "Neurologie",
    items: ["Hémiplégie et paralysies", "Maladie de Parkinson", "Sclérose en plaques", "AVC et traumatismes crâniens"]
  }, {
    title: "Rhumatologie",
    items: ["Arthrose et arthrite", "Tendinites chroniques", "Douleurs articulaires", "Pathologies inflammatoires"]
  }];
  const benefits = ["Réduction significative de la douleur", "Amélioration de la mobilité articulaire", "Renforcement musculaire progressif", "Prévention des récidives", "Accompagnement personnalisé", "Techniques de pointe"];
  const process = [{
    step: "1",
    title: "Évaluation initiale",
    description: "Bilan complet de votre condition avec tests spécifiques"
  }, {
    step: "2",
    title: "Plan de traitement",
    description: "Programme personnalisé adapté à vos objectifs"
  }, {
    step: "3",
    title: "Séances thérapeutiques",
    description: "Traitement avec techniques manuelles et exercices"
  }, {
    step: "4",
    title: "Suivi et prévention",
    description: "Évaluation des progrès et conseils préventifs"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialtyImage} alt="Traumatologie, Neurologie, Rhumatologie" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/85"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button variant="ghost" className="text-white/80 hover:text-white mb-8 p-0" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux services
            </Button>
            
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
              Spécialité Principale
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Traumatologie, <span className="text-gradient-accent">Neurologie</span><br />
              & <span className="text-secondary">Rhumatologie</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-neutral-lightest/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Traitement spécialisé des pathologies mécaniques et inflammatoires de l'appareil locomoteur 
              avec une approche moderne et personnalisée.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => (window.location.href = '/contact')}>
                <Calendar className="w-5 h-5 mr-3" />
                Réserver maintenant
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950" onClick={() => window.open('tel:+212522398874')}>
                <Phone className="w-5 h-5 mr-3" />
                Nous contacter
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Domaines d'Expertise</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Une prise en charge complète pour chaque spécialité médicale
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
                      {treatment.title}
                    </h3>
                    
                    <div className="space-y-3">
                      {treatment.items.map((item, itemIndex) => <div key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-neutral text-sm">{item}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Équipements <span className="text-gradient-accent">Modernes</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Technologies de pointe pour des traitements efficaces et personnalisés
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <img 
                  src={equipmentImage} 
                  alt="Équipements modernes de traumatologie" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Technologie de Pointe
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Notre centre est équipé des dernières innovations en matière de rééducation 
                  et de physiothérapie pour garantir les meilleurs résultats.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-neutral">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Therapy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Thérapie <span className="text-gradient-accent">Personnalisée</span>
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Chaque patient bénéficie d'un plan de traitement adapté à ses besoins 
                  spécifiques et à ses objectifs de récupération.
                </p>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-playfair font-bold text-primary mb-2">45-60</div>
                      <div className="text-neutral-light">Minutes par séance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-playfair font-bold text-primary mb-2">15+</div>
                      <div className="text-neutral-light">Années d'expérience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-playfair font-bold text-primary mb-2">95%</div>
                      <div className="text-neutral-light">Patients satisfaits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-playfair font-bold text-primary mb-2">24/7</div>
                      <div className="text-neutral-light">Urgences possibles</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <img 
                  src={therapyImage} 
                  alt="Séance de thérapie personnalisée" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="scale-up">
              <div className="relative">
                <img 
                  src={recoveryImage} 
                  alt="Patient en cours de récupération" 
                  className="w-full h-96 object-cover rounded-3xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-3xl"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up">
              <div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Récupération <span className="text-gradient-accent">Optimale</span>
                </h3>
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Nos patients retrouvent leur mobilité et leur qualité de vie grâce 
                  à nos protocoles de rééducation éprouvés et notre suivi personnalisé.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Résultats Durables</h4>
                      <p className="text-neutral-light">Récupération complète et prévention des récidives</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Accompagnement Expert</h4>
                      <p className="text-neutral-light">Équipe qualifiée et expérimentée à votre service</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Notre <span className="text-gradient-accent">Processus de Soins</span>
              </h2>
              <p className="text-xl text-neutral-lightest/90 max-w-3xl mx-auto">
                Une méthode éprouvée pour votre rétablissement optimal
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-accent-glow mb-6">
                    <span className="text-xl font-playfair font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-lightest/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
              Prêt à Commencer Votre <span className="text-gradient-accent">Rétablissement</span> ?
            </h2>
            <p className="text-xl text-neutral-light mb-12 leading-relaxed">
              Contactez-nous dès aujourd'hui pour une consultation personnalisée et commencez 
              votre parcours vers un bien-être optimal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110" onClick={() => (window.location.href = '/contact')}>
                <Calendar className="w-5 h-5 mr-3" />
                Réserver une consultation
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 mr-3" />
                05 37 78 48 94
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Traumatologie;