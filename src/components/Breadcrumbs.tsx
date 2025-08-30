import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SEO } from './SEO';
import { getBreadcrumbSchema } from '@/lib/structuredData';
const routeLabels: Record<string, string> = {
  'about': 'À Propos',
  'services': 'Services',
  'gallery': 'Galerie',
  'contact': 'Contact',
  'blog': 'Blog',
  'reeducation-specialisee': 'Rééducation Spécialisée',
  'amincissement': 'Amincissement',
  'kinesitherapie-respiratoire': 'Kinésithérapie Respiratoire',
  'femme-enceinte': 'Femme Enceinte',
  'traumatologie': 'Traumatologie'
};
export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  if (pathSegments.length === 0) return null;
  const breadcrumbItems = [{
    name: 'Accueil',
    url: 'https://casakine.com'
  }];
  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      name: label,
      url: `https://casakine.com${currentPath}`
    });
  });
  const structuredData = [getBreadcrumbSchema(breadcrumbItems)];
  return <>
      <SEO structuredData={structuredData} />
      
    </>;
};