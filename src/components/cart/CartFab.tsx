import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import clsx from 'clsx';
import './CartFab.css';

interface CartFabProps {
  onClick: () => void;
}

export function CartFab({ onClick }: CartFabProps) {
  const { totalItems } = useCart();
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 350);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  if (totalItems === 0) return null;

  return (
    <button className="cart-fab" onClick={onClick} aria-label="Ouvrir le panier">
      <ShoppingCart size={24} className="cart-icon" />
      <div className={clsx("cart-badge", { bump })}>
        {totalItems}
      </div>
    </button>
  );
}
