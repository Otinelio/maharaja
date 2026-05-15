import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { CartFab } from '../cart/CartFab';
import { CartDrawer } from '../cart/CartDrawer';

export function AppLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '72px' }}>
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      
      <CartFab onClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
