import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Users, Award, ArrowDown, Sparkles, Zap, Heart } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

// Import multiple hero images
import heroIndex from '@/assets/hero-index.jpg';
import heroServices from '@/assets/hero-services.jpg';
import heroAbout from '@/assets/hero-about.jpg';
import massageHero from '@/assets/massage-hero.jpg';
import amincissementHero from '@/assets/amincissement-hero-modern.jpg';

interface ModernHeroProps {
  onBookAppointment?: () => void;
}

const ModernHero: React.FC<ModernHeroProps> = ({ onBookAppointment }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Multiple background images that rotate
  const heroImages = [
    { src: heroIndex, overlay: 'from-primary/90 via-primary/70 to-secondary/85' },
    { src: massageHero, overlay: 'from-secondary/90 via-accent/70 to-primary/85' },
    { src: amincissementHero, overlay: 'from-accent/90 via-secondary/70 to-primary/85' },
    { src: heroServices, overlay: 'from-primary/95 via-secondary/75 to-accent/85' },
    { src: heroAbout, overlay: 'from-secondary/90 via-primary/75 to-accent/85' }
  ];

  // Typing text animations
  const typingTexts = [
    "Centre de Kinésithérapie Premium",
    "Rééducation & Amincissement",
    "Soins Personnalisés & Modernes",
    "Expertise depuis 2001",
    "Votre Bien-être Notre Priorité"
  ];

  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  // Advanced typing animation
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    
    if (isTyping && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80 + Math.random() * 40); // Variable typing speed for natural effect
      
      return () => clearTimeout(timeout);
    } else if (isTyping && charIndex >= currentText.length) {
      // Pause at end of text
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      
      return () => clearTimeout(timeout);
    } else if (!isTyping) {
      // Start erasing
      const timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next text
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
          setCharIndex(0);
          setIsTyping(true);
        }
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTextIndex, isTyping, displayText, typingTexts]);

  const stats = [
    { icon: Star, value: '25+', label: 'Années d\'expérience', color: 'text-accent' },
    { icon: Users, value: '2000+', label: 'Patients satisfaits', color: 'text-secondary' },
    { icon: Award, value: '2001', label: 'Centre opérationnel', color: 'text-primary' },
    { icon: Calendar, value: '24/7', label: 'Disponibilité', color: 'text-accent' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images with Smooth Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover transform scale-110 transition-transform duration-8000"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${image.overlay}`}></div>
          </div>
        ))}
      </div>

      {/* Animated Mesh Background Overlay */}
      <div className="absolute inset-0 mesh-background opacity-20"></div>

      {/* Creative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-accent rounded-full opacity-15 animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-24 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-float-delay blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-primary rounded-full opacity-18 animate-float blur-md"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-creative rounded-full opacity-12 animate-float-delay blur-xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/20 rotate-45 animate-spin opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 border border-accent/30 rotate-12 animate-pulse"></div>
        
        {/* Sparkle elements */}
        <div className="absolute top-16 right-20">
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <div className="absolute bottom-24 left-16">
          <Zap className="w-6 h-6 text-secondary animate-bounce" />
        </div>
        <div className="absolute top-1/2 left-12">
          <Heart className="w-7 h-7 text-primary animate-float" />
        </div>
      </div>

      {/* Central morphing shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-premium opacity-8 animate-morphing pointer-events-none blur-2xl"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Title with Enhanced Animation */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-white mb-8 leading-tight">
            <span className="inline-block text-gradient-accent animate-float">Nawal</span>{' '}
            <span className="inline-block text-white animate-float-delay">EL GHORFI</span>
          </h1>
        </ScrollAnimation>

        {/* Typing Animation */}
        <ScrollAnimation animation="slide-left" delay={400}>
          <div className="h-20 md:h-24 flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-light text-secondary-light">
              {displayText}
              <span className="animate-pulse text-accent">|</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Description with Creative Styling */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="modern-card max-w-4xl mx-auto p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-creative opacity-5"></div>
            <p className="text-xl md:text-2xl text-primary-dark leading-relaxed relative z-10">
              <span className="text-accent font-semibold">✨ Bienvenue</span> dans votre centre de kinésithérapie premium à Casablanca
              <br />
              <span className="text-secondary font-medium">🏥 Expertise</span> • 
              <span className="text-primary font-medium"> Innovation</span> • 
              <span className="text-accent font-medium"> Bien-être</span>
            </p>
          </div>
        </ScrollAnimation>

        {/* Modern CTA Buttons */}
        <ScrollAnimation animation="scale-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={onBookAppointment} 
              className="creative-button text-white font-montserrat font-bold px-12 py-5 text-xl rounded-full shadow-strong transition-all duration-500 hover:scale-110 group"
            >
              <Calendar className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Réservez Maintenant
            </Button>
            
            <Button 
              variant="modern" 
              className="font-montserrat font-semibold px-10 py-5 text-xl rounded-full transition-all duration-500 hover:scale-105 text-primary"
              onClick={() => window.location.href = '/services'}
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Découvrir nos Services
            </Button>
          </div>
        </ScrollAnimation>

        {/* Enhanced Stats with Creative Design */}
        <ScrollAnimation animation="fade-up" delay={1000}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="modern-card p-6 text-center transition-all duration-700 hover:scale-110 hover-yellow-glow group relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-creative opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <Icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 group-hover:animate-bounce relative z-10`} />
                  <div className="text-4xl font-playfair font-bold text-primary mb-2 relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm font-montserrat text-neutral-light relative z-10">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>

        {/* Modern Scroll Indicator */}
        <ScrollAnimation animation="fade-up" delay={1200}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="text-white/70 font-montserrat text-sm mb-2">Découvrez plus</div>
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-2 h-4 bg-gradient-accent rounded-full mt-2 animate-bounce"></div>
              <ArrowDown className="w-4 h-4 text-white/50 absolute bottom-1 animate-pulse" />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ModernHero;