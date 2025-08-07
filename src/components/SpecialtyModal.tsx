import React from 'react';
import { X, Clock, Users, Award, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const SpecialtyModal: React.FC<SpecialtyModalProps> = ({ specialty, isOpen, onClose }) => {
  if (!isOpen || !specialty) return null;

  const Icon = specialty.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden">
          <Card className="glass-card border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-0">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary p-8 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-8 w-24 h-24 border border-white/20 rounded-full"></div>
                </div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-playfair font-bold mb-2">
                        {specialty.title}
                      </h2>
                      <p className="text-white/80 text-lg font-montserrat">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-white hover:bg-white/20 w-12 h-12 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left Column - Image and Stats */}
                  <div className="space-y-6">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img 
                        src={specialty.detailedInfo.image} 
                        alt={specialty.title}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="glass-card border-0 shadow-soft">
                        <CardContent className="p-4 text-center">
                          <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                          <div className="text-sm text-neutral-light">Durée</div>
                          <div className="font-semibold text-primary">{specialty.detailedInfo.duration}</div>
                        </CardContent>
                      </Card>
                      <Card className="glass-card border-0 shadow-soft">
                        <CardContent className="p-4 text-center">
                          <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                          <div className="text-sm text-neutral-light">Séances</div>
                          <div className="font-semibold text-primary">{specialty.detailedInfo.sessions}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-8">
                    {/* Overview */}
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                        Vue d'ensemble
                      </h3>
                      <p className="text-neutral leading-relaxed">
                        {specialty.detailedInfo.overview}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                        Bénéfices
                      </h3>
                      <div className="space-y-3">
                        {specialty.detailedInfo.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-neutral leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Techniques */}
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                        Techniques utilisées
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {specialty.detailedInfo.techniques.map((technique, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gradient-accent/10 text-accent rounded-full text-sm font-medium"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Conditions */}
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                        Pathologies traitées
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {specialty.detailedInfo.conditions.map((condition, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-neutral-dark text-sm">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-10 text-center">
                  <Button 
                    className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-8 py-4 rounded-full shadow-strong transition-all duration-300 hover:scale-105"
                    onClick={() => { window.location.href = '/contact'; onClose(); }}
                  >
                    Prendre Rendez-vous pour cette spécialité
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyModal;