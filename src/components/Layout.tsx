import { ReactNode } from 'react';
import { CookieManager } from '@/components/CookieConsent/CookieManager';
import Navbar from './Navbar';
import { Breadcrumbs } from './Breadcrumbs';
import WhatsAppContact from './WhatsAppContact';
import { useCursorTrail } from '@/hooks/useScrollAnimation';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useCursorTrail();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background stethoscope-cursor overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <main className="relative">
        {children}
      </main>
      <WhatsAppContact />
      <CookieManager language="fr" />
    </div>
  );
};

export default Layout;