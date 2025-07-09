import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Users, Award } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useParallax } from '@/hooks/useScrollAnimation';
interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaAction?: () => void;
  showStats?: boolean;
  backgroundType?: 'gradient' | 'image' | 'video';
  backgroundSrc?: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText = "Prendre Rendez-vous",
  ctaAction,
  showStats = true,
  backgroundType = 'gradient',
  backgroundSrc
}) => {
  const [currentStat, setCurrentStat] = useState(0);
  const scrollY = useParallax();
  const stats = [{
    icon: Star,
    value: '15+',
    label: 'Années d\'expérience'
  }, {
    icon: Users,
    value: '2000+',
    label: 'Patients satisfaits'
  }, {
    icon: Award,
    value: '98%',
    label: 'Taux de réussite'
  }, {
    icon: Calendar,
    value: '24/7',
    label: 'Disponibilité'
  }];
  useEffect(() => {
    if (showStats) {
      const interval = setInterval(() => {
        setCurrentStat(prev => (prev + 1) % stats.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showStats]);
  const renderBackground = () => {
    switch (backgroundType) {
      case 'gradient':
        return <div className="absolute inset-0 bg-gradient-hero">
            <div className="absolute inset-0 medical-pattern opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
          </div>;
      case 'image':
        return <div className="absolute inset-0">
            <img src={backgroundSrc} alt="Hero Background" className="w-full h-full object-cover" style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-secondary/70"></div>
          </div>;
      case 'video':
        return <div className="absolute inset-0">
            <video autoPlay muted loop className="w-full h-full object-cover" style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}>
              <source src={backgroundSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-secondary/60"></div>
          </div>;
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      {renderBackground()}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float-delay"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-primary rounded-full opacity-25 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-accent rounded-full opacity-20 animate-float-delay"></div>
      </div>

      {/* Morphing Shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-premium opacity-10 animate-morphing pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
            {title.split(' ').map((word, index) => <span key={index} className={`inline-block ${index % 2 === 0 ? 'text-gradient-accent' : 'text-white'}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                {word}{' '}
              </span>)}
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-left" delay={400}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-neutral-lightest mb-8 opacity-90">
            {subtitle}
          </h2>
        </ScrollAnimation>

        {description && <ScrollAnimation animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-neutral-lightest/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          </ScrollAnimation>}

        <ScrollAnimation animation="scale-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button onClick={ctaAction} className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-12 py-4 text-lg rounded-full shadow-strong transition-all duration-300 hover:scale-110 hover:shadow-accent-glow">
              <Calendar className="w-5 h-5 mr-3" />
              {ctaText}
            </Button>
            
            <Button variant="outline" className="glass-effect border-white/30 hover:bg-white/20 font-montserrat font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 text-gray-950">
              En savoir plus
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats Section */}
        {showStats && <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className={`glass-card p-6 text-center transition-all duration-500 hover:scale-110 hover-glow ${currentStat === index ? 'animate-pulse-glow' : ''}`}>
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
          </ScrollAnimation>}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;