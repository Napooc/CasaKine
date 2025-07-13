import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, CheckCircle, Baby, Users, Stethoscope, ArrowLeft, Phone, Calendar, Home } from 'lucide-react';
import specialtyImage from '@/assets/specialty-medical-gymnastics.jpg';
const KinesitherapieRespiratoire = () => {
  const services = [{
    icon: Baby,
    title: "Kinésithérapie Respiratoire Nourrisson",
    description: "Soins spécialisés pour les tout-petits avec des techniques douces et adaptées",
    techniques: ["Drainage bronchique adapté", "Désencombrement en douceur", "Techniques de clapping modéré", "Surveillance continue"]
  }, {
    icon: Users,
    title: "Kinésithérapie Respiratoire Adulte",
    description: "Traitement complet des affections respiratoires chez l'adulte",
    techniques: ["Drainage postural", "Techniques de toux assistée", "Rééducation ventilatoire", "Exercices de renforcement"]
  }, {
    icon: Home,
    title: "Soins à Domicile",
    description: "Possibilité de traitement dans le confort de votre domicile",
    techniques: ["Déplacement sur rendez-vous", "Matériel portatif", "Suivi personnalisé", "Urgences respiratoires"]
  }];
  const conditions = ["Bronchiolite du nourrisson", "Bronchite chronique", "Asthme et allergies respiratoires", "Mucoviscidose", "Post-opératoire thoracique", "Insuffisance respiratoire", "Pneumonie et infections", "Œdème pulmonaire"];
  const benefits = ["Amélioration de la fonction respiratoire", "Réduction des sécrétions bronchiques", "Prévention des complications", "Diminution de la toux", "Meilleure oxygénation", "Confort respiratoire accru"];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialtyImage} alt="Kinésithérapie Respiratoire" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-red/90 via-medical-red/75 to-red-600/85"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button variant="ghost" className="text-white/80 hover:text-white mb-8 p-0" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux services
            </Button>
            
            <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
              Spécialité Respiratoire
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Kinésithérapie <span className="text-gradient-accent">Respiratoire</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-neutral-lightest/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Amélioration de la respiration chez l'adulte et l'enfant avec des techniques 
              spécialisées et un accompagnement personnalisé, y compris à domicile.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-medical-red hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver maintenant
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950">
                <Phone className="w-5 h-5 mr-3" />
                Urgence respiratoire
              </Button>
            </div>
          </ScrollAnimation>

          {/* Quick Stats */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-playfair font-bold text-white mb-2">30-45</div>
                <div className="text-white/80 text-sm">Minutes</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-playfair font-bold text-white mb-2">0-99</div>
                <div className="text-white/80 text-sm">Ans</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-playfair font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Urgences</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-playfair font-bold text-white mb-2">✓</div>
                <div className="text-white/80 text-sm">Domicile</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Services Respiratoires</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Une expertise adaptée à chaque âge et chaque pathologie respiratoire
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-medical-red/20 to-red-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Icon className="w-8 h-8 text-medical-red" />
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">
                        {service.title}
                      </h3>
                      
                      <p className="text-neutral-light mb-6 text-center text-sm">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
                        {service.techniques.map((technique, techIndex) => <div key={techIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-neutral text-sm">{technique}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-24 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
                  Pathologies <span className="text-gradient-accent">Traitées</span>
                </h2>
                
                <p className="text-xl text-neutral-light mb-8 leading-relaxed">
                  Notre expertise couvre un large éventail d'affections respiratoires, 
                  du nourrisson à l'adulte, avec des protocoles adaptés.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conditions.map((condition, index) => <div key={index} className="flex items-center space-x-3">
                      <Stethoscope className="w-5 h-5 text-medical-red flex-shrink-0" />
                      <span className="text-neutral">{condition}</span>
                    </div>)}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="bg-gradient-to-br from-medical-red/10 to-red-500/10 rounded-3xl p-8">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
                  Bénéfices du Traitement
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-medical-red flex-shrink-0" />
                      <span className="text-neutral">{benefit}</span>
                    </div>)}
                </div>

                <div className="mt-8 p-6 bg-white/50 rounded-2xl">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-medical-red mx-auto mb-4" />
                    <div className="text-lg font-playfair font-semibold text-primary mb-2">
                      Durée des séances
                    </div>
                    <div className="text-2xl font-bold text-medical-red">30-45 minutes</div>
                    <div className="text-sm text-neutral-light mt-2">
                      Adaptée selon l'âge et la pathologie
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-medical-red via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Respirez <span className="text-white/80">Mieux</span> Dès Aujourd'hui
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              N'attendez pas pour améliorer votre fonction respiratoire. 
              Contactez-nous pour une consultation ou en cas d'urgence respiratoire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="morph-button bg-white text-medical-red hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver une consultation
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-white">
                <Home className="w-5 h-5 mr-3" />
                Demander un soin à domicile
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default KinesitherapieRespiratoire;