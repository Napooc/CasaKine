import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroAboutImage from '@/assets/hero-about.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, GraduationCap, Heart, Users, Clock, Star, Stethoscope, Shield } from 'lucide-react';
const About = () => {
  const qualifications = [{
    icon: GraduationCap,
    title: 'Diplôme d\'État',
    description: 'Kinésithérapeute diplômée d\'État avec mention Très Bien',
    year: '2008'
  }, {
    icon: Award,
    title: 'Spécialisation',
    description: 'Rééducation fonctionnelle et neurologique avancée',
    year: '2012'
  }, {
    icon: Heart,
    title: 'Formation Continue',
    description: 'Thérapies manuelles et ostéopathie moderne',
    year: '2018'
  }, {
    icon: Stethoscope,
    title: 'Certification',
    description: 'Techniques de drainage lymphatique et amincissement',
    year: '2020'
  }];
  const values = [{
    icon: Heart,
    title: 'Bienveillance',
    description: 'Une approche humaine et empathique pour chaque patient'
  }, {
    icon: Star,
    title: 'Excellence',
    description: 'Des soins de la plus haute qualité avec des résultats prouvés'
  }, {
    icon: Shield,
    title: 'Confiance',
    description: 'Un environnement sécurisé et professionnel pour votre rétablissement'
  }, {
    icon: Users,
    title: 'Personnalisation',
    description: 'Des traitements adaptés à vos besoins spécifiques'
  }];
  const timeline = [{
    year: '2008',
    title: 'Diplôme de Kinésithérapie',
    description: 'Obtention du diplôme d\'État en kinésithérapie à l\'Institut de Formation en Masso-Kinésithérapie de Casablanca'
  }, {
    year: '2010',
    title: 'Première Expérience',
    description: 'Début de carrière au Centre Hospitalier Universitaire Ibn Rochd de Casablanca'
  }, {
    year: '2015',
    title: 'Cabinet Privé',
    description: 'Ouverture de son premier cabinet privé spécialisé en rééducation fonctionnelle'
  }, {
    year: '2020',
    title: 'Centre Moderne',
    description: 'Création du centre actuel avec équipements de dernière génération'
  }, {
    year: '2023',
    title: 'Innovation Continue',
    description: 'Intégration de nouvelles technologies et techniques thérapeutiques avancées'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <img src={heroAboutImage} alt="Professional physiotherapist" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-secondary rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white rounded-full opacity-80 animate-bounce"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
                  L'<span className="text-gradient-accent">Excellence</span><br />
                  au Service de<br />
                  <span className="text-secondary">Votre Santé</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
                  Découvrez l'histoire et l'expertise de Dr. Nawal El Ghorfi
                </h2>
                
                <p className="text-lg md:text-xl text-neutral-lightest/80 mb-12 leading-relaxed">
                  Plus de 15 années d'expérience dédiées à votre bien-être et votre rétablissement, 
                  avec une approche moderne et personnalisée qui transforme des vies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-10 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                    <Users className="w-5 h-5 mr-3" />
                    Prendre Rendez-vous
                  </Button>
                  
                  <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950">
                    Notre parcours
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="relative">
                {/* Main image with floating stats */}
                <div className="glass-card p-3 rounded-3xl shadow-strong">
                  <img src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png" alt="Dr. Nawal El Ghorfi" className="w-full h-auto rounded-2xl" />
                </div>
                
                {/* Floating achievement cards */}
                <div className="absolute -top-8 -left-8 glass-card p-6 rounded-2xl shadow-glow animate-float">
                  <div className="text-center">
                    <div className="text-3xl font-playfair font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-white/90">Années</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl shadow-glow animate-float-delay">
                  <div className="text-center">
                    <div className="text-3xl font-playfair font-bold text-secondary mb-1">2000+</div>
                    <div className="text-sm text-white/90">Patients</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-12 glass-card p-4 rounded-2xl shadow-glow animate-pulse-glow">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-white mb-1">98%</div>
                    <div className="text-xs text-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="relative">
                <div className="glass-card p-4 rounded-3xl shadow-strong">
                  <img src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png" alt="Dr. Nawal El Ghorfi - Kinésithérapeute" className="w-full h-auto rounded-2xl" />
                </div>
                
                {/* Floating Achievement */}
                <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl shadow-glow">
                  <div className="text-center">
                    <div className="text-3xl font-playfair font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-neutral">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
                  Dr. Nawal El Ghorfi
                  <span className="block text-gradient-accent text-2xl md:text-3xl mt-2">
                    Kinésithérapeute D.E.
                  </span>
                </h2>
                
                <p className="text-lg text-neutral-light mb-8 leading-relaxed">
                  Passionnée par l'art de soigner et le bien-être de ses patients, 
                  Dr. Nawal El Ghorfi met son expertise au service de votre santé depuis plus de 15 ans. 
                  Diplômée d'État en kinésithérapie, elle combine techniques traditionnelles 
                  et innovations technologiques pour vous offrir des soins d'exception.
                </p>

                <p className="text-lg text-neutral-light mb-10 leading-relaxed">
                  Son approche personnalisée et bienveillante, alliée à une formation continue 
                  dans les dernières techniques thérapeutiques, garantit à chaque patient 
                  un accompagnement optimal vers la guérison et le bien-être.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center glass-card p-4 rounded-2xl">
                    <div className="text-2xl font-playfair font-bold text-primary mb-1">2000+</div>
                    <div className="text-sm text-neutral-light">Patients traités</div>
                  </div>
                  <div className="text-center glass-card p-4 rounded-2xl">
                    <div className="text-2xl font-playfair font-bold text-secondary mb-1">98%</div>
                    <div className="text-sm text-neutral-light">Taux de satisfaction</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-32 bg-neutral-lightest relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Formations et <span className="text-gradient-accent">Certifications</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Une expertise reconnue et constamment enrichie par la formation continue
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full group">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-accent font-montserrat font-bold text-sm mb-2">{qual.year}</div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                        {qual.title}
                      </h3>
                      <p className="text-neutral-light text-sm leading-relaxed flex-grow">
                        {qual.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Notre <span className="text-gradient-accent">Parcours</span>
              </h2>
              <p className="text-xl text-neutral-lightest/90 max-w-3xl mx-auto">
                Une évolution constante au service de l'excellence thérapeutique
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-accent opacity-30"></div>

            {timeline.map((item, index) => <ScrollAnimation key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 200}>
                <div className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8 order-2'}`}>
                    <div className="glass-card p-8 rounded-2xl shadow-strong hover:scale-105 transition-all duration-300">
                      <div className="text-accent font-montserrat font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-neutral-lightest/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-accent rounded-full border-4 border-white shadow-glow"></div>
                </div>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Nos <span className="text-gradient-accent">Valeurs</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Les principes fondamentaux qui guident notre pratique quotidienne
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <ScrollAnimation key={index} animation="rotate-in" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow h-full group text-center">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-secondary/10 flex items-center justify-center group-hover:animate-pulse-glow">
                        <Icon className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                        {value.title}
                      </h3>
                      <p className="text-neutral-light leading-relaxed flex-grow">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>;
          })}
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;