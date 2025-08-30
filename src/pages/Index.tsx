import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { GoogleVerification } from '@/components/GoogleVerification';
import ScrollAnimation from '@/components/ScrollAnimation';
import SpecialtyModal from '@/components/SpecialtyModal';
import { getLocalBusinessSchema, getWebsiteSchema, getOrganizationSchema, getFAQSchema } from '@/lib/structuredData';
import heroIndexImage from '@/assets/hero-index.jpg';
import specialtyRehabilitationImage from '@/assets/specialty-rehabilitation.jpg';
import specialtyManualTherapyImage from '@/assets/specialty-manual-therapy.jpg';
import specialtyWellnessImage from '@/assets/specialty-wellness.jpg';
import specialtyMedicalGymnasticsImage from '@/assets/specialty-medical-gymnastics.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Stethoscope, Users, Award, Clock, MapPin, Phone, Star, ChevronRight, Activity, Shield, Zap, Calendar, Baby } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookAppointment = () => {
    navigate('/contact');
  };
  const handleSpecialtyClick = specialty => {
    setSelectedSpecialty(specialty);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialty(null);
  };
  const services = [{
    icon: Activity,
    title: 'Kinésithérapie',
    description: 'Récupération post-traumatique et physiologie neurologique personnalisée',
    color: 'text-primary',
    detailedInfo: {
      overview: 'Une approche thérapeutique complète visant à restaurer les capacités physiques et fonctionnelles après un traumatisme, une chirurgie ou une pathologie neurologique. Notre centre utilise des techniques avancées et des équipements de pointe pour optimiser votre récupération.',
      benefits: ['Récupération optimisée des fonctions motrices', 'Réduction significative de la douleur', 'Amélioration de la qualité de vie au quotidien', 'Prévention des récidives et complications', 'Renforcement musculaire ciblé et progressif'],
      techniques: ['Rééducation proprioceptive', 'Thérapie par ondes de choc', 'Électrostimulation thérapeutique', 'Mobilisation articulaire', 'Renforcement isokinétique'],
      duration: '45-60 min',
      sessions: '8-15 séances',
      image: specialtyRehabilitationImage,
      conditions: ['Traumatismes sportifs et accidents', 'Post-chirurgie orthopédique', 'Pathologies neurologiques (AVC, sclérose)', 'Troubles de l\'équilibre et de la coordination', 'Rééducation post-fracture']
    }
  }, {
    icon: Zap,
    title: 'Amincissement & Bien-être',
    description: 'Programmes minceur, drainage lymphatique et électrothérapie',
    color: 'text-secondary',
    detailedInfo: {
      overview: 'Nos programmes d\'amincissement et bien-être associent techniques manuelles et technologies avancées pour sculpter votre silhouette tout en améliorant votre bien-être général. Une approche holistique pour des résultats durables et visibles.',
      benefits: ['Réduction visible de la cellulite', 'Amélioration du tonus et de l\'élasticité', 'Stimulation du métabolisme', 'Élimination des toxines et rétention d\'eau', 'Relaxation profonde et revitalisation'],
      techniques: ['Drainage lymphatique Vodder', 'Électrolipolyse ciblée', 'Pressothérapie pneumatique', 'Radiofréquence esthétique', 'Massage palper-rouler'],
      duration: '75-90 min',
      sessions: '10-20 séances',
      image: specialtyWellnessImage,
      conditions: ['Cellulite et rétention d\'eau', 'Surpoids localisé', 'Troubles circulatoires', 'Post-grossesse et vergetures', 'Jambes lourdes et œdèmes']
    }
  }, {
    icon: Baby,
    title: 'Femme Enceinte',
    description: 'Préparation à l\'accouchement et rééducation périnéale post-partum',
    color: 'text-red-500',
    detailedInfo: {
      overview: 'Un accompagnement complet pour vivre sereinement votre grossesse et retrouver votre bien-être après l\'accouchement. Préparation personnalisée et rééducation spécialisée pour chaque étape de la maternité.',
      benefits: ['Préparation physique et mentale à l\'accouchement', 'Techniques de respiration et positions optimales', 'Rééducation périnéale post-partum', 'Récupération du tonus abdominal', 'Accompagnement et soutien personnalisé'],
      techniques: ['Techniques de respiration adaptées', 'Positions d\'accouchement favorables', 'Renforcement périnéal', 'Biofeedback et électrostimulation', 'Communication prénatale'],
      duration: '45-60 min',
      sessions: '8-15 séances',
      image: '/lovable-uploads/ae898483-0049-4459-bd35-4ca9c46d6852.png',
      conditions: ['Préparation à l\'accouchement', 'Rééducation périnéale', 'Incontinence post-partum', 'Récupération post-accouchement', 'Douleurs pelviennes']
    }
  }];
  const testimonials = [{
    name: 'Brahim S.',
    text: 'Un centre d une grande magnificence et beauté. je le recommande',
    rating: 5,
    location: 'Casablanca'
  }, {
    name: 'Jihane A.',
    text: 'Tres compétente, professionnelle cabinet tres agreable rdv respecté, je recommande vivement',
    rating: 5,
    location: 'Casablanca'
  }, {
    name: 'Fatima Z.',
    text: 'Après mon accident, Nawal m\'a aidée à retrouver ma mobilité. Je recommande vivement !',
    rating: 5,
    location: 'Casablanca'
  }];
  const faqs = [{
    question: "Quels sont les tarifs des consultations de kinésithérapie ?",
    answer: "Nos tarifs varient selon le type de soin. Contactez-nous au +212 661 67 70 96 pour un devis personnalisé."
  }, {
    question: "Prenez-vous en charge les urgences ?",
    answer: "Oui, nous acceptons les urgences le dimanche. Appelez-nous pour confirmer la disponibilité."
  }, {
    question: "Faut-il une ordonnance pour consulter ?",
    answer: "Une ordonnance médicale est recommandée mais pas obligatoire pour tous nos services. Consultez-nous pour plus d'informations."
  }];
  const structuredData = [getLocalBusinessSchema(), getWebsiteSchema(), getOrganizationSchema(), getFAQSchema(faqs)];
  return <Layout>
      <SEO title=" Nawal El Ghorfi - Kinésithérapeute D.E. Casablanca" description="🏥 Centre de kinésithérapie premium à Casablanca. Dr. Nawal El Ghorfi, 15+ ans d'expérience. Rééducation, amincissement, bien-être. ☎️ +212 661 67 70 96. Rendez-vous en ligne." keywords="kinésithérapeute casablanca, physiothérapie maroc, rééducation casablanca, dr nawal el ghorfi, amincissement casablanca, massage thérapeutique, traumatologie sport" canonical="https://casakine.com/" structuredData={structuredData} />
      <GoogleVerification />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Background with clinic interior */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/54b9c91c-1c3e-4a0e-a202-1a3b5ac89a6b.png" alt="Centre de kinésithérapie moderne - Intérieur professionnel" className="w-full h-full object-cover scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/60 to-secondary/70"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50"></div>
        </div>

        {/* Creative floating clinic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Medical cross icons */}
          <div className="absolute top-20 left-20 w-8 h-8 text-accent/40 animate-pulse">
            <Stethoscope className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-32 w-6 h-6 text-secondary/50 animate-ping">
            <Heart className="w-full h-full" />
          </div>
          <div className="absolute bottom-32 left-40 w-10 h-10 text-white/30 animate-bounce">
            <Shield className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 right-20 w-7 h-7 text-accent/40 animate-pulse">
            <Activity className="w-full h-full" />
          </div>
          
          {/* Gradient circles for depth */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-accent rounded-full opacity-10 animate-float blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 animate-float-delay blur-xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
              Centre de <span className="text-gradient-accent">Kinésithérapie</span><br />
              et d'<span className="text-white">Amincissement</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat text-neutral-lightest mb-8 opacity-90 font-bold">
              Nawal EL GHORFI - Kinésithérapeute Diplômée d'État
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-white">
               Bienvenue au Centre Nawal EL GHORFI
              <br />Kinésithérapie & Amincissement à Casablanca
              <br />Depuis 2001, notre centre vous accueille dans un cadre chaleureux et
              moderne, au cœur de Casablanca, pour des soins de kinésithérapie,
              d'amincissement personnalisé.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button onClick={handleBookAppointment} className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110 hover:shadow-accent-glow">
                <Calendar className="w-5 h-5 mr-3" />
                Réservez Votre Consultation
              </Button>
              
              <Button variant="outline" onClick={() => navigate('/services')} className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-gray-950">
                En savoir plus
              </Button>
            </div>
          </ScrollAnimation>

          {/* Stats Section */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[{
              icon: Star,
              value: '+25',
              label: 'Années d\'expérience'
            }, {
              icon: Users,
              value: '+6000',
              label: 'Patients satisfaits'
            }].map((stat, index) => {
              const Icon = stat.icon;
              return <div key={index} className="glass-card p-6 text-center transition-all duration-500 hover:scale-110 hover-glow">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-playfair font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-montserrat text-neutral-lightest/80">
                      {stat.label}
                    </div>
                  </div>;
            })}
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

      {/* Services Section */}
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 medical-pattern opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Spécialités</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
                Des soins personnalisés pour chaque besoin, avec des techniques modernes 
                et une approche humaine exceptionnelle.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 200}>
                  <Card className="group glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent/10 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                        <Icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-neutral-light leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <Button variant="ghost" className="mt-6 text-accent hover:text-accent-dark hover:bg-accent/10 group-hover:translate-x-2 transition-all duration-300" onClick={() => handleSpecialtyClick(service)}>
                        En savoir plus
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="text-white">
                <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8">
                  L'Excellence au Service de 
                  <span className="text-gradient-accent block">Votre Santé</span>
                </h2>
                <p className="text-xl text-neutral-lightest/90 mb-8 leading-relaxed">
                  Avec plus de 25 années d'expertise au service des patients, Nawal EL GHORFI vous accompagne 
                  vers un rétablissement optimal grâce à des techniques innovantes et 
                  une approche personnalisée. Centre opérationnel depuis 2001.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Diplômée d'État en Kinésithérapie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Spécialisée en Kinésithérapie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral-lightest">Formation continue en techniques innovantes</span>
                  </div>
                </div>

                <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-8 py-4 rounded-full shadow-strong transition-all duration-300 hover:scale-105" onClick={() => {
                navigate('/about#nawal-profile');
              }}>
                  Découvrir notre histoire
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="glass-card p-2 rounded-3xl">
                  <img src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png" alt=" Nawal El Ghorfi" className="w-full h-auto rounded-2xl" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl">
                  <div className="text-accent text-2xl font-playfair font-bold">+6000</div>
                  <div className="text-black text-sm">Patients</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl">
                  <div className="text-secondary text-2xl font-playfair font-bold">98%</div>
                  <div className="text-black text-sm">Satisfaction</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Our Center Section */}
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                ✅ Pourquoi choisir <span className="text-gradient-accent">notre centre ?</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'Accessibilité optimale',
            description: 'Situé en rez-de-chaussée, sans marche, avec accès adapté aux personnes à mobilité réduite',
            icon: '♿'
          }, {
            title: 'Facilité de stationnement',
            description: 'Plus de 15 places disponibles',
            icon: '🚗'
          }, {
            title: 'Confort thermique garanti',
            description: 'Centre chauffé et climatisé, box individuels avec climatisation anti-allergènes',
            icon: '🌡️'
          }, {
            title: 'À 100 m du tramway',
            description: 'Station Sidi Abderrahmane',
            icon: '🚊'
          }, {
            title: 'Technologie de pointe',
            description: 'Matériel de rééducation régulièrement mis à jour',
            icon: '⚡'
          }, {
            title: 'Cadre apaisant',
            description: 'Centre entouré d\'un jardin verdoyant',
            icon: '🌳'
          }, {
            title: 'Soins à domicile possibles',
            description: 'Pour les patients ne pouvant pas se déplacer',
            icon: '🏠'
          }].map((feature, index) => <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-playfair font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-light leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* About Nawal Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <div className="glass-card p-2 rounded-3xl">
                  <img src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png" alt=" Nawal El Ghorfi" className="w-full h-auto rounded-2xl" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl">
                  <div className="text-accent text-lg font-playfair font-bold">+25 ans</div>
                  <div className="text-primary text-sm">D'expérience</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-8">
                  👩‍⚕️ <span className="text-gradient-accent">À propos</span>
                </h2>
                <div className="space-y-6 text-lg text-neutral leading-relaxed">
                  <p>
                    Le centre est dirigé par <strong className="text-primary">Mme Nawal EL GHORFI    </strong>, 
                    Diplômée d'État en Kinésithérapie et Physiothérapie, avec plus de 25 ans d'expérience.
                  </p>
                  <p>
                    Tous les soins sont personnellement assurés par Mme EL GHORFI, 
                    garantissant un suivi rigoureux et individualisé ,
                    aucune délégation à des assistantes.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral">Diplômée d'État en Kinésithérapie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral">Spécialiste en Physiothérapie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <span className="text-neutral">Suivi personnalisé garanti</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-neutral-lightest relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Témoignages <span className="text-gradient-accent">Clients</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Découvrez les expériences exceptionnelles de nos patients
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <ScrollAnimation key={index} animation="rotate-in" delay={index * 200}>
                <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
                    </div>
                    <p className="text-neutral mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-playfair font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-montserrat font-semibold text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-neutral-light flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
              Prêt à Commencer Votre 
              <span className="text-white/80 block">Rétablissement ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Prenez rendez-vous dès aujourd'hui et découvrez comment nos soins personnalisés 
              peuvent transformer votre bien-être.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button onClick={handleBookAppointment} className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <Phone className="w-5 h-5 mr-3" />
                Prendre Rendez-vous
              </Button>
              
              
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Specialty Modal */}
      <SpecialtyModal specialty={selectedSpecialty} isOpen={isModalOpen} onClose={closeModal} />
    </Layout>;
};
export default Index;