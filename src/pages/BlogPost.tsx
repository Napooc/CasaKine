import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Heart, 
  Share2, 
  Eye, 
  ArrowRight,
  Bookmark,
  MessageCircle
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: number;
  likes: number;
  tags: string[];
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample blog posts data with unique content
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Exercices Essentiels pour Renforcer Votre Dos',
      excerpt: 'Découvrez une série d\'exercices simples et efficaces pour prévenir et soulager les douleurs dorsales, adaptés à tous les niveaux.',
      content: `
        <h2>Introduction</h2>
        <p>Le mal de dos est l'une des principales causes de consultation en kinésithérapie. Dans cet article, nous vous proposons 10 exercices essentiels qui vous aideront à renforcer votre dos et à prévenir les douleurs.</p>
        
        <h2>Pourquoi renforcer son dos ?</h2>
        <p>Un dos fort est la base d'une bonne posture et d'un mouvement efficace. Les muscles du dos travaillent en synergie avec les abdominaux pour stabiliser la colonne vertébrale et protéger les disques intervertébraux.</p>
        
        <h2>Les 10 exercices recommandés</h2>
        
        <h3>1. Le gainage dorsal (Superman)</h3>
        <p>Allongé sur le ventre, soulevez simultanément bras et jambes. Maintenez 5 secondes, répétez 10 fois.</p>
        
        <h3>2. L'extension lombaire</h3>
        <p>Debout, mains sur les hanches, inclinez doucement le buste vers l'arrière. Contrôlez le mouvement.</p>
        
        <h3>3. Le row avec élastique</h3>
        <p>Tirez un élastique vers vous en serrant les omoplates. Excellent pour les muscles entre les omoplates.</p>
        
        <h3>4. Le pont (bridge)</h3>
        <p>Allongé sur le dos, genoux fléchis, soulevez le bassin en contractant les fessiers.</p>
        
        <h3>5. La planche latérale</h3>
        <p>Travaillez les muscles stabilisateurs en maintenant une position de planche sur le côté.</p>
        
        <h2>Conseils pour une pratique sécurisée</h2>
        <p>Commencez progressivement et écoutez votre corps. En cas de douleur, consultez un professionnel de santé.</p>
        
        <h2>Conclusion</h2>
        <p>La régularité est la clé du succès. Intégrez ces exercices dans votre routine quotidienne pour un dos en bonne santé.</p>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '15 Mars 2024',
      readTime: '8 min',
      category: 'Exercices',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 1250,
      likes: 89,
      tags: ['dos', 'exercices', 'prévention', 'renforcement']
    },
    {
      id: 2,
      title: 'L\'Importance de la Rééducation Post-Opératoire',
      excerpt: 'Comprendre pourquoi la kinésithérapie est cruciale après une intervention chirurgicale.',
      content: `
        <h2>La rééducation post-opératoire : un enjeu majeur</h2>
        <p>Après une intervention chirurgicale, la rééducation n'est pas une option mais une nécessité. Elle permet de retrouver rapidement ses capacités fonctionnelles et de prévenir les complications.</p>
        
        <h2>Les objectifs de la rééducation</h2>
        <p>La rééducation post-opératoire vise plusieurs objectifs :</p>
        <ul>
          <li>Récupération de la mobilité articulaire</li>
          <li>Renforcement musculaire progressif</li>
          <li>Amélioration de la coordination</li>
          <li>Gestion de la douleur</li>
          <li>Prévention des complications</li>
        </ul>
        
        <h2>Les différentes phases</h2>
        
        <h3>Phase précoce (0-2 semaines)</h3>
        <p>Mobilisation douce, lutte contre l'inflammation, prévention des adhérences.</p>
        
        <h3>Phase intermédiaire (2-6 semaines)</h3>
        <p>Augmentation progressive de l'amplitude articulaire, début du renforcement.</p>
        
        <h3>Phase tardive (6 semaines et plus)</h3>
        <p>Retour aux activités fonctionnelles, préparation à la reprise sportive.</p>
        
        <h2>L'importance du suivi professionnel</h2>
        <p>Un kinésithérapeute qualifié adapte le programme selon votre évolution et vos besoins spécifiques.</p>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '12 Mars 2024',
      readTime: '6 min',
      category: 'Conseils',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 890,
      likes: 65,
      tags: ['rééducation', 'post-opératoire', 'récupération', 'chirurgie']
    },
    {
      id: 3,
      title: 'Nutrition et Récupération Musculaire',
      excerpt: 'Les aliments clés pour optimiser la récupération après vos séances de kinésithérapie.',
      content: `
        <h2>L'alimentation au service de la récupération</h2>
        <p>Une nutrition adaptée joue un rôle fondamental dans la récupération musculaire et la réparation tissulaire.</p>
        
        <h2>Les macronutriments essentiels</h2>
        
        <h3>Les protéines</h3>
        <p>Essentielles pour la réparation et la construction musculaire. Visez 1,2 à 1,6g par kg de poids corporel par jour.</p>
        <ul>
          <li>Viandes maigres (poulet, dinde)</li>
          <li>Poissons gras (saumon, sardines)</li>
          <li>Œufs</li>
          <li>Légumineuses</li>
          <li>Produits laitiers</li>
        </ul>
        
        <h3>Les glucides</h3>
        <p>Source d'énergie privilégiée pour l'effort et la récupération.</p>
        <ul>
          <li>Céréales complètes</li>
          <li>Fruits</li>
          <li>Légumes</li>
        </ul>
        
        <h3>Les lipides</h3>
        <p>Importants pour la synthèse hormonale et l'inflammation.</p>
        <ul>
          <li>Huiles végétales</li>
          <li>Noix et graines</li>
          <li>Avocat</li>
        </ul>
        
        <h2>L'hydratation</h2>
        <p>Buvez au moins 2,5L d'eau par jour, plus si vous transpirez beaucoup.</p>
        
        <h2>Les micronutriments clés</h2>
        <ul>
          <li>Vitamine C : réparation tissulaire</li>
          <li>Vitamine D : santé osseuse</li>
          <li>Magnésium : fonction musculaire</li>
          <li>Oméga-3 : anti-inflammatoire</li>
        </ul>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '10 Mars 2024',
      readTime: '5 min',
      category: 'Nutrition',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 720,
      likes: 52,
      tags: ['nutrition', 'récupération', 'alimentation', 'performance']
    },
    {
      id: 4,
      title: 'Nouveautés Technologiques en Kinésithérapie',
      excerpt: 'Les dernières innovations qui révolutionnent les soins de rééducation moderne.',
      content: `
        <h2>La révolution technologique en kinésithérapie</h2>
        <p>Les nouvelles technologies transforment la pratique de la kinésithérapie, offrant des solutions innovantes pour améliorer les soins.</p>
        
        <h2>Les technologies émergentes</h2>
        
        <h3>Réalité virtuelle et augmentée</h3>
        <p>Immersion thérapeutique pour la rééducation neurologique et la gestion de la douleur.</p>
        
        <h3>Capteurs de mouvement</h3>
        <p>Analyse précise des gestes et correction en temps réel des mouvements.</p>
        
        <h3>Électrostimulation intelligente</h3>
        <p>Stimulation ciblée et adaptative selon les besoins spécifiques du patient.</p>
        
        <h3>Applications mobiles</h3>
        <p>Suivi personnalisé et exercices guidés à domicile.</p>
        
        <h2>Les ondes de choc focalisées</h2>
        <p>Traitement non invasif pour les tendinopathies et les douleurs chroniques.</p>
        
        <h2>La télérééducation</h2>
        <p>Consultations à distance et supervision des exercices via vidéoconférence.</p>
        
        <h2>L'intelligence artificielle</h2>
        <p>Aide au diagnostic et personnalisation des programmes thérapeutiques.</p>
        
        <h2>Impact sur la pratique</h2>
        <p>Ces innovations permettent une prise en charge plus précise, motivante et efficace.</p>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '8 Mars 2024',
      readTime: '7 min',
      category: 'Actualités',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 950,
      likes: 78,
      tags: ['technologie', 'innovation', 'digital', 'kinésithérapie']
    },
    {
      id: 5,
      title: 'Prévenir les Blessures Sportives',
      excerpt: 'Conseils pratiques pour éviter les blessures et optimiser vos performances sportives.',
      content: `
        <h2>La prévention : meilleure que la guérison</h2>
        <p>80% des blessures sportives peuvent être évitées avec une approche préventive adaptée.</p>
        
        <h2>L'échauffement : étape cruciale</h2>
        <p>Un échauffement progressif prépare le corps à l'effort :</p>
        <ul>
          <li>Activation cardiovasculaire (5-10 min)</li>
          <li>Mobilité articulaire</li>
          <li>Activation musculaire spécifique</li>
          <li>Mouvements balistiques</li>
        </ul>
        
        <h2>Le renforcement préventif</h2>
        
        <h3>Stabilité centrale</h3>
        <p>Un core fort protège le dos et améliore les performances.</p>
        
        <h3>Équilibre proprioceptif</h3>
        <p>Travaillez sur instabilité pour prévenir les entorses.</p>
        
        <h3>Force excentrique</h3>
        <p>Renforcez les muscles en phase d'allongement.</p>
        
        <h2>La récupération active</h2>
        <p>Ne négligez jamais la phase de récupération :</p>
        <ul>
          <li>Retour au calme progressif</li>
          <li>Étirements adaptés</li>
          <li>Hydratation</li>
          <li>Sommeil de qualité</li>
        </ul>
        
        <h2>Signaux d'alarme</h2>
        <p>Soyez attentif aux signaux de votre corps :</p>
        <ul>
          <li>Douleurs persistantes</li>
          <li>Fatigue excessive</li>
          <li>Baisse de performance</li>
          <li>Troubles du sommeil</li>
        </ul>
        
        <h2>Matériel et environnement</h2>
        <p>Utilisez un équipement adapté et vérifiez les conditions de pratique.</p>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '5 Mars 2024',
      readTime: '6 min',
      category: 'Conseils',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 1120,
      likes: 94,
      tags: ['sport', 'prévention', 'blessures', 'performance']
    },
    {
      id: 6,
      title: 'Exercices de Respiration Thérapeutique',
      excerpt: 'Techniques de respiration pour améliorer votre bien-être et accélérer la guérison.',
      content: `
        <h2>Le pouvoir thérapeutique de la respiration</h2>
        <p>La respiration consciente est un outil puissant pour gérer le stress, la douleur et améliorer la récupération.</p>
        
        <h2>Physiologie de la respiration</h2>
        <p>Une respiration optimale implique :</p>
        <ul>
          <li>Le diaphragme comme muscle principal</li>
          <li>L'expansion du thorax</li>
          <li>La coordination avec les muscles posturaux</li>
        </ul>
        
        <h2>Techniques de base</h2>
        
        <h3>Respiration diaphragmatique</h3>
        <p>Posez une main sur le ventre, l'autre sur la poitrine. Respirez pour faire bouger la main du ventre.</p>
        
        <h3>Respiration carrée</h3>
        <p>Inspirez 4 temps, retenez 4 temps, expirez 4 temps, pause 4 temps.</p>
        
        <h3>Respiration 4-7-8</h3>
        <p>Inspirez 4, retenez 7, expirez 8. Excellente pour la relaxation.</p>
        
        <h2>Applications thérapeutiques</h2>
        
        <h3>Gestion de la douleur</h3>
        <p>La respiration profonde active le système parasympathique et réduit la perception douloureuse.</p>
        
        <h3>Amélioration de la posture</h3>
        <p>Un diaphragme fonctionnel stabilise la colonne vertébrale.</p>
        
        <h3>Récupération sportive</h3>
        <p>Optimise l'oxygénation et l'élimination des toxines.</p>
        
        <h2>Intégration au quotidien</h2>
        <p>Pratiquez 5-10 minutes par jour pour des bénéfices durables.</p>
      `,
      author: 'Dr. Nawal El Ghorfi',
      date: '3 Mars 2024',
      readTime: '4 min',
      category: 'Exercices',
      image: '/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png',
      views: 680,
      likes: 41,
      tags: ['respiration', 'bien-être', 'relaxation', 'thérapie']
    }
  ];

  useEffect(() => {
    const postId = parseInt(id || '1');
    const foundPost = blogPosts.find(p => p.id === postId);
    setPost(foundPost || null);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Article non trouvé</h1>
            <Button onClick={() => navigate('/blog')}>
              Retour au blog
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="text-white hover:bg-white/20 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
            
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-white/90 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ScrollAnimation animation="fade-up">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-80 object-cover rounded-2xl mb-8 shadow-strong"
                />
                
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-primary prose-p:text-neutral prose-a:text-accent"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-primary/10">
                  <h4 className="font-montserrat font-semibold text-primary mb-4">Tags :</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Stats */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-neutral-light" />
                          <span className="text-sm text-neutral-light">Vues</span>
                        </div>
                        <span className="font-semibold text-primary">{post.views}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-red-500' : 'text-neutral-light'}`} />
                          <span className="text-sm text-neutral-light">J'aime</span>
                        </div>
                        <span className="font-semibold text-primary">{post.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'text-red-500 fill-red-500' : ''}`} />
                        {isLiked ? 'Aimé' : 'J\'aime'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                      >
                        <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                        {isBookmarked ? 'Sauvegardé' : 'Sauvegarder'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleShare}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Partager
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h4 className="font-playfair font-bold text-primary mb-3">Newsletter</h4>
                    <p className="text-sm text-neutral-light mb-4">
                      Recevez nos derniers articles directement dans votre boîte mail.
                    </p>
                    <Button className="w-full morph-button bg-gradient-primary hover-glow text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      S'abonner
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-neutral-lightest/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl font-playfair font-bold text-primary text-center mb-12">
              Articles <span className="text-gradient-accent">Similaires</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <ScrollAnimation key={relatedPost.id} animation="fade-up" delay={index * 150}>
                  <Card className="glass-card border-0 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover-glow overflow-hidden group h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/10 text-primary border-0">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-lg font-playfair font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-neutral-light text-sm leading-relaxed mb-4 flex-grow">
                        {relatedPost.excerpt}
                      </p>
                      
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="ghost" size="sm" className="text-accent hover:text-accent-dark hover:bg-accent/10 p-0">
                          Lire l'article
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;