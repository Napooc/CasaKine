import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroBlogImage from '@/assets/hero-blog.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Heart, Stethoscope, Activity, Shield, Eye, MessageCircle, Share2, BookOpen } from 'lucide-react';
const Blog = () => {
  const categories = [{
    name: 'Tous',
    count: 24,
    active: true
  }, {
    name: 'Conseils',
    count: 8,
    active: false
  }, {
    name: 'Exercices',
    count: 6,
    active: false
  }, {
    name: 'Nutrition',
    count: 5,
    active: false
  }, {
    name: 'Actualités',
    count: 5,
    active: false
  }];
  const featuredPost = {
    id: 1,
    title: '10 Exercices Essentiels pour Renforcer Votre Dos',
    excerpt: 'Découvrez une série d\'exercices simples et efficaces pour prévenir et soulager les douleurs dorsales, adaptés à tous les niveaux.',
    author: 'Dr. Nawal El Ghorfi',
    date: '15 Mars 2024',
    readTime: '8 min',
    category: 'Exercices',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 1250,
    likes: 89
  };
  const posts = [{
    id: 2,
    title: 'L\'Importance de la Rééducation Post-Opératoire',
    excerpt: 'Découvrez pourquoi un suivi kinésithérapeutique rigoureux après chirurgie optimise votre récupération et prévient les complications à long terme.',
    author: 'Dr. Nawal El Ghorfi',
    date: '12 Mars 2024',
    readTime: '6 min',
    category: 'Conseils',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 890,
    likes: 65
  }, {
    id: 3,
    title: 'Nutrition et Récupération Musculaire',
    excerpt: 'Explorez les secrets d\'une alimentation ciblée qui booste vos performances et accélère la reconstruction tissulaire après l\'effort.',
    author: 'Dr. Nawal El Ghorfi',
    date: '10 Mars 2024',
    readTime: '5 min',
    category: 'Nutrition',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 720,
    likes: 52
  }, {
    id: 4,
    title: 'Nouveautés Technologiques en Kinésithérapie',
    excerpt: 'Plongez dans l\'univers des innovations révolutionnaires : réalité virtuelle, IA et capteurs intelligents transforment la rééducation moderne.',
    author: 'Dr. Nawal El Ghorfi',
    date: '8 Mars 2024',
    readTime: '7 min',
    category: 'Actualités',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 950,
    likes: 78
  }, {
    id: 5,
    title: 'Prévenir les Blessures Sportives',
    excerpt: 'Maîtrisez les techniques d\'échauffement avancées et de renforcement préventif pour maintenir votre corps au top de sa forme.',
    author: 'Dr. Nawal El Ghorfi',
    date: '5 Mars 2024',
    readTime: '6 min',
    category: 'Conseils',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 1120,
    likes: 94
  }, {
    id: 6,
    title: 'Exercices de Respiration Thérapeutique',
    excerpt: 'Apprenez les protocoles respiratoires scientifiquement prouvés pour gérer le stress, optimiser l\'oxygénation et faciliter la guérison.',
    author: 'Dr. Nawal El Ghorfi',
    date: '3 Mars 2024',
    readTime: '4 min',
    category: 'Exercices',
    image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
    views: 680,
    likes: 41
  }];
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Exercices':
        return Activity;
      case 'Conseils':
        return Heart;
      case 'Nutrition':
        return Shield;
      case 'Actualités':
        return Stethoscope;
      default:
        return BookOpen;
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Exercices':
        return 'text-primary bg-primary/10';
      case 'Conseils':
        return 'text-medical-red bg-red-500/10';
      case 'Nutrition':
        return 'text-secondary bg-secondary/10';
      case 'Actualités':
        return 'text-accent bg-accent/10';
      default:
        return 'text-neutral bg-neutral/10';
    }
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Article Elements */}
        <div className="absolute inset-0">
          <img src={heroBlogImage} alt="Medical workspace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating Article Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-24 h-32 bg-white/10 rounded-lg rotate-12 animate-float opacity-30 backdrop-blur-sm border border-white/20"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-28 bg-white/15 rounded-lg -rotate-6 animate-float-delay opacity-40 backdrop-blur-sm border border-white/20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-24 bg-white/20 rounded-lg rotate-45 animate-float opacity-35 backdrop-blur-sm border border-white/20"></div>
          <div className="absolute bottom-1/4 right-1/5 w-18 h-26 bg-white/12 rounded-lg -rotate-12 animate-float-delay opacity-45 backdrop-blur-sm border border-white/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-8">
              <Badge className="bg-white/20 text-white border-white/30 font-montserrat px-6 py-2 text-sm mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog & Actualités
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                <span className="text-gradient-accent">Actualités</span> &<br />
                <span className="text-secondary">Conseils</span> Santé
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={400}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
              Restez informé avec nos derniers articles et conseils d'experts
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Découvrez nos publications spécialisées en kinésithérapie, nutrition et bien-être pour 
              optimiser votre santé au quotidien avec des conseils professionnels et scientifiques.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-5 h-5 mr-3" />
                S'abonner à la Newsletter
              </Button>
              
              <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-zinc-950">
                Tous les articles
              </Button>
            </div>
          </ScrollAnimation>

          {/* Blog Categories Preview */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[{
              icon: Heart,
              label: 'Conseils',
              count: '8'
            }, {
              icon: Activity,
              label: 'Exercices',
              count: '6'
            }, {
              icon: Shield,
              label: 'Nutrition',
              count: '5'
            }, {
              icon: Stethoscope,
              label: 'Actualités',
              count: '5'
            }].map((category, index) => {
              const Icon = category.icon;
              return <div key={index} className="glass-card p-4 text-center transition-all duration-500 hover:scale-110 hover-glow">
                    <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-white font-montserrat text-sm mb-1">
                      {category.label}
                    </div>
                    <div className="text-white/70 font-montserrat text-xs">
                      {category.count} articles
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

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => <Button key={index} variant={category.active ? "default" : "outline"} className={`morph-button font-montserrat font-medium px-6 py-3 rounded-full transition-all duration-300 ${category.active ? 'bg-gradient-primary text-white shadow-glow hover:scale-105' : 'glass-effect text-primary hover:bg-primary/10 hover:scale-105'}`}>
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-inherit border-0">
                    {category.count}
                  </Badge>
                </Button>)}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-neutral-lightest/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Article <span className="text-gradient-accent">À la Une</span>
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-up">
            <Card className="glass-card border-0 shadow-strong hover:shadow-accent-glow transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <Badge className={`${getCategoryColor(featuredPost.category)} border-0 font-montserrat`}>
                      À la une
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-10 flex flex-col justify-center">
                  <Badge className={`${getCategoryColor(featuredPost.category)} border-0 font-montserrat w-fit mb-4`}>
                    {featuredPost.category}
                  </Badge>
                  
                  <h3 className="text-3xl font-playfair font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-neutral-light text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4 text-sm text-neutral-light">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    
                    
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="morph-button bg-gradient-primary hover-glow text-white font-montserrat font-semibold px-8 py-3 rounded-full shadow-medium transition-all duration-300 hover:scale-105">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Derniers <span className="text-gradient-accent">Articles</span>
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto">
                Explorez nos conseils d'experts et restez informé des dernières tendances en kinésithérapie
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return <ScrollAnimation key={post.id} animation="fade-up" delay={index * 150}>
                <Link to={`/blog/${post.id}`} className="block">
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden group h-full cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(post.category)} border-0 font-montserrat flex items-center space-x-1`}>
                          <CategoryIcon className="w-3 h-3" />
                          <span>{post.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 w-8 h-8 p-0 rounded-full">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-playfair font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-neutral-light text-sm leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-neutral-light">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-neutral-light">
                            <div className="flex items-center space-x-1">
                              
                              
                            </div>
                            
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-accent hover:text-accent-dark hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300">
                            Lire
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>;
          })}
          </div>

          <ScrollAnimation animation="fade-up" delay={600}>
            <div className="text-center mt-16">
              <Button className="morph-button bg-gradient-secondary hover-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-105">
                <BookOpen className="w-5 h-5 mr-3" />
                Voir tous les articles
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float absolute top-10 left-10"></div>
          <div className="w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-delay absolute bottom-10 right-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <ScrollAnimation animation="scale-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Restez Informé de Nos
              <span className="text-white/80 block">Dernières Publications</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Recevez nos conseils d'experts, exercices et actualités directement dans votre boîte mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
              <input type="email" placeholder="Votre adresse email" className="flex-1 px-6 py-4 rounded-full glass-effect border-white/20 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/20" />
              <Button className="morph-button bg-white text-primary hover:bg-neutral-lightest font-montserrat font-semibold px-8 py-4 rounded-full shadow-strong transition-all duration-300 hover:scale-105 whitespace-nowrap">
                <MessageCircle className="w-5 h-5 mr-2" />
                S'abonner
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>;
};
export default Blog;