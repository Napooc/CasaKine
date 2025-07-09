import { ReactNode } from 'react';
import Navbar from './Navbar';
import { useCursorTrail } from '@/hooks/useScrollAnimation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useCursorTrail();

  return (
    <div className="min-h-screen bg-background stethoscope-cursor overflow-x-hidden">
      <Navbar />
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;