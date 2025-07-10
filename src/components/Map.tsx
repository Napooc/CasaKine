import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface MapProps {
  location?: string;
  address?: string;
}

const Map: React.FC<MapProps> = ({ 
  location = "H8FJ+HP Casablanca", 
  address = "123 Boulevard Hassan II, Quartier Maarif, Casablanca, Maroc" 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInputVisible, setTokenInputVisible] = useState(true);

  // Coordinates for H8FJ+HP Casablanca (approximate location)
  const coordinates: [number, number] = [-7.586, 33.577];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: coordinates,
      zoom: 15,
    });

    // Add marker for the clinic location
    new mapboxgl.Marker({
      color: '#0066cc',
      scale: 1.2
    })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-primary">Dr. Nawal El Ghorfi</h3>
              <p class="text-sm text-neutral-light">${address}</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    setTokenInputVisible(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (tokenInputVisible) {
    return (
      <Card className="glass-card p-8 rounded-3xl shadow-strong">
        <CardContent className="text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
            Configuration de la Carte
          </h3>
          <p className="text-neutral-light mb-6">
            Pour afficher la carte interactive, veuillez entrer votre token Mapbox public.
            <br />
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Obtenez votre token gratuit sur mapbox.com
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Votre token Mapbox public"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleTokenSubmit}
              disabled={!mapboxToken.trim()}
              className="morph-button bg-gradient-primary hover-glow text-white"
            >
              Charger la Carte
            </Button>
          </div>
          <div className="mt-6">
            <Button 
              variant="outline"
              onClick={openInGoogleMaps}
              className="w-full"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Ouvrir dans Google Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-strong">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 right-4 z-10">
        <Button 
          variant="outline"
          onClick={openInGoogleMaps}
          className="glass-effect bg-white/90 hover:bg-white text-primary"
          size="sm"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Google Maps
        </Button>
      </div>
    </div>
  );
};

export default Map;