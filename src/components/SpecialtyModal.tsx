import React from 'react';
import { X, Clock, Users, Award, Check, Zap, Heart, Activity, Shield, Target, Brain, Waves, Dumbbell, Eye, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
interface SpecialtyData {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    techniques: string[];
    duration: string;
    sessions: string;
    image: string;
    conditions: string[];
  };
}
interface SpecialtyModalProps {
  specialty: SpecialtyData | null;
  isOpen: boolean;
  onClose: () => void;
}
const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  isOpen,
  onClose
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (!isOpen || !specialty) return null;

  const Icon = specialty.icon;

  // Map technique names to appropriate icons
  const getTechniqueIcon = (technique: string) => {
    const techMap: { [key: string]: React.ComponentType<any> } = {
      'Rééducation proprioceptive': Brain,
      'Thérapie par ondes de choc': Waves,
      'Électrostimulation thérapeutique': Zap,
      'Mobilisation articulaire': RefreshCw,
      'Renforcement isokinétique': Dumbbell,
      'Cryolipolyse': Shield,
      'Lipo-laser thérapie': Target,
      'Lipo-cavitation 40k': Activity,
      'Radiofréquence': Waves,
      'Électrolipolyse': Zap,
      'Palper-rouler': Heart,
      'Pressothérapie': Activity,
      'Techniques de respiration adaptées': Activity,
      'Positions d\'accouchement favorables': Users,
      'Renforcement périnéal': Dumbbell,
      'Biofeedback et électrostimulation': Brain,
      'Communication prénatale': Heart
    };
    return techMap[technique] || Activity;
  };
  return <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
        style={{ touchAction: 'manipulation' }}
      />
      
      {/* Modal Container */}
      <div className="relative h-full flex items-center justify-center p-2 sm:p-4">
        <div className="relative w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
          <Card className="glass-card border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-0">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary p-4 sm:p-6 lg:p-8 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 sm:w-32 sm:h-32 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 sm:left-8 w-12 h-12 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
                </div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-6 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-16 lg:w-20 sm:h-16 lg:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <Icon className="w-6 h-6 sm:w-8 lg:w-10 sm:h-8 lg:h-10 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl sm:text-2xl lg:text-4xl font-playfair font-bold mb-1 sm:mb-2 truncate">
                        {specialty.title}
                      </h2>
                      <p className="text-white/80 text-sm sm:text-base lg:text-lg font-montserrat leading-tight">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onClose} 
                    className="text-white hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 ml-2 transition-all duration-200 hover:scale-110"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                  {/* Left Column - Image and Stats */}
                  <div className="space-y-4 lg:space-y-6">
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg">
                      <img 
                        src={specialty.detailedInfo.image} 
                        alt={specialty.title} 
                        className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 text-center border border-primary/20">
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-lg font-playfair font-bold text-primary">
                          {specialty.detailedInfo.duration}
                        </div>
                        <div className="text-xs text-neutral">Par séance</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-4 text-center border border-secondary/20">
                        <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                        <div className="text-lg font-playfair font-bold text-secondary">
                          {specialty.detailedInfo.sessions}
                        </div>
                        <div className="text-xs text-neutral">Recommandées</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Overview */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-playfair font-bold text-primary mb-3 lg:mb-4">
                        Vue d'ensemble
                      </h3>
                      <p className="text-neutral leading-relaxed text-sm lg:text-base">
                        {specialty.detailedInfo.overview}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-playfair font-bold text-primary mb-3 lg:mb-4">
                        Bénéfices
                      </h3>
                      <div className="space-y-2 lg:space-y-3">
                        {specialty.detailedInfo.benefits.map((benefit, index) => 
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-accent rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-neutral leading-relaxed text-sm lg:text-base">{benefit}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Techniques */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-playfair font-bold text-primary mb-3 lg:mb-4">
                        Techniques utilisées
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specialty.detailedInfo.techniques.map((technique, index) => {
                          const TechIcon = getTechniqueIcon(technique);
                          return (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-accent/5 rounded-xl border border-accent/10 hover:bg-gradient-accent/10 transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <TechIcon className="w-4 h-4 text-accent" />
                              </div>
                              <span className="text-sm lg:text-base font-medium text-neutral-dark">{technique}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Conditions */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-playfair font-bold text-primary mb-3 lg:mb-4">
                        Pathologies traitées
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {specialty.detailedInfo.conditions.map((condition, index) => 
                          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-neutral-lightest/50 transition-colors duration-200">
                            <Award className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-neutral-dark text-sm lg:text-base">{condition}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 lg:mt-10 text-center border-t border-neutral-light/20 pt-6 lg:pt-8">
                  <Button 
                    className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-strong transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
                    onClick={() => {
                      navigate('/contact');
                      onClose();
                    }}
                    style={{ touchAction: 'manipulation' }}
                  >
                    {isMobile ? 'Prendre Rendez-vous' : 'Prendre Rendez-vous pour cette spécialité'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default SpecialtyModal;