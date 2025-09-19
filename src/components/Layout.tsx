import { ReactNode } from 'react';
import Navbar from './Navbar';
import { Breadcrumbs } from './Breadcrumbs';
import WhatsAppContact from './WhatsAppContact';
import { ManageCookiesButton } from './ManageCookiesButton';
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
      
      {/* Simple Footer with Cookie Management */}
      <footer className="border-t bg-background/95 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span>© 2024 Nawal El Ghorfi - Casakine</span>
              <span className="hidden sm:inline">|</span>
              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Politique de Confidentialité
              </a>
            </div>
            <ManageCookiesButton />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;