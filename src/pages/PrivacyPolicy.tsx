import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import HeroSection from '@/components/HeroSection';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  Settings, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

const PrivacyPolicy = () => {
  const { openModal } = useCookieConsent();

  const structuredData = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      {
        name: "Accueil",
        url: "https://casakine.com"
      },
      {
        name: "Politique de Confidentialité",
        url: "https://casakine.com/privacy-policy"
      }
    ])
  ];

  const contactDPO = {
    name: "Dr. Nawal EL GHORFI",
    email: "info@casakine.com",
    phone: "+212 661 67 70 96",
    address: "19 Rue De Masmouda, Casablanca 20210"
  };

  const dataTypes = [
    {
      icon: Users,
      title: "Données d'Identité",
      description: "Nom, prénom, date de naissance, sexe",
      purpose: "Identification du patient et constitution du dossier médical",
      retention: "20 ans après la dernière consultation",
      legal: "Code de déontologie médicale - Art. 45"
    },
    {
      icon: Phone,
      title: "Coordonnées",
      description: "Adresse, téléphone, email",
      purpose: "Communication, rappels de rendez-vous, urgences",
      retention: "Durée de la relation patient + 5 ans",
      legal: "Intérêt légitime du praticien"
    },
    {
      icon: FileText,
      title: "Données de Santé",
      description: "Antécédents, traitements, examens, diagnostics",
      purpose: "Suivi médical, continuité des soins",
      retention: "20 ans minimum (Code de la santé publique)",
      legal: "Consentement explicite + obligation légale"
    },
    {
      icon: Calendar,
      title: "Données de Rendez-vous",
      description: "Dates, heures, motifs de consultation",
      purpose: "Planification, organisation des soins",
      retention: "5 ans après la dernière consultation",
      legal: "Intérêt légitime du cabinet"
    }
  ];

  const rights = [
    {
      icon: Eye,
      title: "Droit d'Accès",
      description: "Vous pouvez demander l'accès à vos données personnelles et obtenir une copie de vos informations."
    },
    {
      icon: Settings,
      title: "Droit de Rectification",
      description: "Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant."
    },
    {
      icon: AlertTriangle,
      title: "Droit d'Effacement",
      description: "Sous certaines conditions, vous pouvez demander la suppression de vos données personnelles."
    },
    {
      icon: Lock,
      title: "Droit à la Portabilité",
      description: "Vous pouvez récupérer vos données dans un format structuré et lisible par machine."
    },
    {
      icon: Shield,
      title: "Droit d'Opposition",
      description: "Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes."
    },
    {
      icon: CheckCircle,
      title: "Droit de Limitation",
      description: "Vous pouvez demander la limitation du traitement de vos données dans certains cas."
    }
  ];

  const securityMeasures = [
    {
      title: "Chiffrement des Données",
      description: "Toutes les données sont chiffrées en transit et au repos",
      icon: Lock
    },
    {
      title: "Accès Contrôlé",
      description: "Seul le personnel autorisé peut accéder aux données patients",
      icon: Shield
    },
    {
      title: "Sauvegarde Sécurisée",
      description: "Sauvegardes régulières dans des environnements sécurisés",
      icon: Database
    },
    {
      title: "Audit de Sécurité",
      description: "Contrôles réguliers de nos systèmes et procédures",
      icon: CheckCircle
    }
  ];

  return (
    <Layout>
      <SEO
        title="Politique de Confidentialité - Dr. Nawal El Ghorfi | Casakine"
        description="Politique de confidentialité complète conforme à la CNDP. Protection des données personnelles pour notre centre de kinésithérapie à Casablanca."
        keywords="politique confidentialité, CNDP Maroc, protection données, kinésithérapie casablanca, dr nawal el ghorfi, RGPD"
        canonical="https://casakine.com/privacy-policy"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <HeroSection
        title="Politique de Confidentialité"
        subtitle="Transparence et Protection de vos Données"
        description="Nous nous engageons à protéger vos données personnelles conformément à la réglementation marocaine (CNDP) et internationale."
        ctaText="Gérer mes Cookies"
        ctaAction={openModal}
        showStats={false}
        backgroundType="gradient"
      />

      {/* Introduction */}
      <section className="py-20 bg-background/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Card className="glass-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Info className="w-6 h-6 mr-3 text-accent" />
                  Qui sommes-nous ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral font-montserrat leading-relaxed">
                  Le Centre de Kinésithérapie et d'Amincissement Dr. Nawal EL GHORFI, situé au 19 Rue De Masmouda, 
                  Casablanca 20210, est responsable du traitement de vos données personnelles.
                </p>
                <p className="text-neutral font-montserrat leading-relaxed">
                  En tant que professionnel de santé, nous collectons et traitons vos données dans le respect 
                  de la réglementation marocaine (CNDP) et des principes de confidentialité médicale.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="text-sm text-primary font-medium">
                    <strong>Dernière mise à jour :</strong> 26 Août 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Types de Données Collectées */}
      <section className="py-20 bg-neutral-lightest/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Données <span className="text-gradient-accent">Collectées</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Nous collectons uniquement les données nécessaires à la qualité de vos soins
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((data, index) => {
              const Icon = data.icon;
              return (
                <ScrollAnimation key={index} animation="scale-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-playfair font-bold text-primary flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium text-primary mb-2">Données concernées :</p>
                        <p className="text-neutral-light text-sm">{data.description}</p>
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-2">Finalité :</p>
                        <p className="text-neutral-light text-sm">{data.purpose}</p>
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-2">Conservation :</p>
                        <p className="text-neutral-light text-sm">{data.retention}</p>
                      </div>
                      <div className="bg-accent/5 p-3 rounded-lg border border-accent/10">
                        <p className="text-xs text-accent font-medium">
                          Base légale : {data.legal}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vos Droits */}
      <section className="py-20 bg-background/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Vos <span className="text-gradient-accent">Droits</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Vous disposez de droits sur vos données personnelles conformément à la CNDP
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => {
              const Icon = right.icon;
              return (
                <ScrollAnimation key={index} animation="scale-up" delay={index * 100}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 h-full text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-4">
                        {right.title}
                      </h3>
                      <p className="text-neutral-light text-sm leading-relaxed">
                        {right.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>

          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mt-12 text-center">
              <Card className="glass-card border-0 shadow-soft inline-block">
                <CardContent className="p-6">
                  <p className="text-neutral font-montserrat mb-4">
                    Pour exercer vos droits, contactez-nous par email ou téléphone
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open(`mailto:${contactDPO.email}?subject=Exercice de mes droits - Données personnelles`)}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyer un Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open(`tel:${contactDPO.phone}`)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sécurité des Données */}
      <section className="py-20 bg-neutral-lightest/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Sécurité des <span className="text-gradient-accent">Données</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                          {measure.title}
                        </h3>
                        <p className="text-neutral-light text-sm">
                          {measure.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookies et Technologies */}
      <section className="py-20 bg-background/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Card className="glass-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-accent" />
                  Cookies et Technologies de Suivi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-neutral font-montserrat leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser 
                  l'utilisation de notre site. Nous respectons vos choix concernant les cookies.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h4 className="font-playfair font-bold text-primary mb-4">Types de cookies utilisés :</h4>
                  <ul className="space-y-2 text-sm text-neutral-light">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cookies analytiques :</strong> Nous aident à comprendre l'utilisation du site</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Cookies de préférences :</strong> Mémorisent vos choix et préférences</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={openModal}
                    className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Gérer mes Préférences de Cookies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-20 bg-neutral-lightest/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Card className="glass-card border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-accent" />
                  Contact - Délégué à la Protection des Données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-primary">Responsable du traitement</p>
                        <p className="text-neutral-light">{contactDPO.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <p className="text-neutral-light">{contactDPO.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-primary">Téléphone</p>
                        <p className="text-neutral-light">{contactDPO.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-primary">Adresse</p>
                        <p className="text-neutral-light">{contactDPO.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
                    <h4 className="font-playfair font-bold text-primary mb-4">Recours</h4>
                    <p className="text-sm text-neutral-light mb-4">
                      Si vous n'êtes pas satisfait de notre réponse, vous pouvez saisir la Commission Nationale 
                      de contrôle de la protection des Données à caractère Personnel (CNDP).
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent/20 text-accent hover:bg-accent hover:text-white"
                      onClick={() => window.open('https://www.cndp.ma', '_blank')}
                    >
                      Site de la CNDP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;