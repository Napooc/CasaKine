import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Stethoscope, Camera, Phone, PenTool, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'ACCUEIL',
    path: '/',
    icon: Home,
    color: 'hover:text-primary'
  }, {
    name: 'À PROPOS',
    path: '/about',
    icon: Heart,
    color: 'hover:text-medical-red'
  }, {
    name: 'SERVICES',
    path: '/services',
    icon: Stethoscope,
    color: 'hover:text-secondary'
  }, {
    name: 'GALERIE',
    path: '/gallery',
    icon: Camera,
    color: 'hover:text-accent'
  }, {
    name: 'CONTACT',
    path: '/contact',
    icon: Phone,
    color: 'hover:text-primary-light'
  }, {
    name: 'BLOG',
    path: '/blog',
    icon: PenTool,
    color: 'hover:text-secondary-light'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-strong' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Premium */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img src="/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png" alt="Dr. Nawal El Ghorfi" className="h-20 w-auto transition-transform duration-300 group-hover:scale-110 shadow-lg rounded-lg" />
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-primary text-xl">Kinésithérapie Nawal El GHORFI</span>
                
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.path} className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${isActive(item.path) ? 'bg-gradient-primary text-white shadow-glow' : 'text-neutral hover:bg-white/10'} ${item.color}`}>
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${isActive(item.path) ? 'animate-pulse-glow' : 'group-hover:animate-bounce'}`} />
                      <span className="font-montserrat font-medium text-sm tracking-wide">
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-accent transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>;
            })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold px-8 py-3 rounded-full shadow-medium transition-all duration-300 hover:scale-105">
                  Rendez-vous
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-primary/10 transition-all duration-500 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className="px-4 py-6 space-y-2">
            {navItems.map(item => {
            const Icon = item.icon;
            return <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 text-lg font-medium ${isActive(item.path) ? 'bg-gradient-primary text-white shadow-lg scale-105' : 'text-primary hover:bg-primary/10 hover:text-primary'}`}>
                  <Icon className={`w-6 h-6 ${isActive(item.path) ? 'animate-pulse-glow' : ''}`} />
                  <span className="font-montserrat font-semibold">{item.name}</span>
                </Link>;
          })}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full morph-button bg-gradient-accent hover-accent-glow text-white font-montserrat font-semibold py-4 text-lg rounded-xl shadow-lg">
                  Prendre Rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Spacer */}
      <div className="h-20"></div>
    </>;
};
export default Navbar;