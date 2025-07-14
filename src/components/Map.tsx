
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink, Phone, Clock } from 'lucide-react';

interface MapProps {
  location?: string;
  address?: string;
}

const Map: React.FC<MapProps> = ({ 
  location = "H8FJ+HP Casablanca", 
  address = "H8FJ+HP Casablanca"
}) => {
  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;
    window.open(directionsUrl, '_blank');
  };

  const embedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8234567890123!2d-7.589843484502345!3d33.59234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(location)}!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma`;

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Google Maps Embed */}
      <iframe
        src={embedMapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
        title="Localisation Dr. Nawal El Ghorfi"
      />
      
      {/* Modern Glass Overlay Card */}
      <div className="absolute bottom-6 left-6 right-6 lg:left-6 lg:right-auto lg:w-96">
        <div className="glass-card p-6 rounded-2xl shadow-strong bg-white/95 backdrop-blur-md border border-white/20">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold text-primary">
                  Dr. Nawal El Ghorfi
                </h3>
                <p className="text-sm text-neutral-light">
                  Cabinet de Kinésithérapie
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <p className="text-neutral font-montserrat text-sm leading-relaxed">
              {address}
            </p>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              <Clock className="w-3 h-3" />
              <span>Ouvert</span>
            </div>
            <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              <Phone className="w-3 h-3" />
              <span>Accessible</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={getDirections}
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-white font-montserrat font-semibold py-2.5 rounded-xl shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-strong"
              size="sm"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Itinéraire
            </Button>
            <Button
              variant="outline"
              onClick={openInGoogleMaps}
              className="border-primary/20 text-primary hover:bg-primary hover:text-white font-montserrat font-semibold py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Voir Plus
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Top Right */}
      <div className="absolute top-6 right-6">
        <Button
          onClick={openInGoogleMaps}
          size="sm"
          className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-primary shadow-strong border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-strong group"
        >
          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-background/5 rounded-3xl" />
      </div>
    </div>
  );
};

export default Map;
