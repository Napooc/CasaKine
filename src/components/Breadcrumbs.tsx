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
  'massage-bien-etre': 'Massage Bien-être',
  'femme-enceinte': 'Femme Enceinte',
  'gymnastique-medicale': 'Gymnastique Médicale',
  'traumatologie': 'Traumatologie'
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) return null;

  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://casakine.com' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      name: label,
      url: `https://casakine.com${currentPath}`
    });
  });

  const structuredData = [getBreadcrumbSchema(breadcrumbItems)];

  return (
    <>
      <SEO structuredData={structuredData} />
      <nav aria-label="Fil d'Ariane" className="py-4 px-4 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link 
              to="/" 
              className="flex items-center hover:text-primary transition-colors"
              aria-label="Retour à l'accueil"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
            
            return (
              <li key={segment} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2" />
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link 
                    to={path} 
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};