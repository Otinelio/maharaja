import { Leaf, Flame, Plus, Minus } from 'lucide-react';
import { type MenuItem } from '../../utils/storage';
import { useCart } from '../../hooks/useCart';
import './MenuItemCard.css';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  
  const cartItem = cart.find((i) => i.id === item.id);
  const count = cartItem ? cartItem.qty : 0;

  const handleAdd = () => addToCart(item);
  const handleRemove = () => removeFromCart(item.id);

  return (
    <div className="menu-item-card reveal-scroll">
      <div className="mic-image-container">
        <img src={item.imageUrl} alt={item.name} className="mic-image" loading="lazy" />
        <div className="mic-badges">
          {item.vegetarian && (
            <div className="mic-badge veg" title="Végétarien">
              <Leaf size={16} />
            </div>
          )}
          {item.spicy && (
            <div className="mic-badge spicy" title="Épicé">
              <Flame size={16} />
            </div>
          )}
        </div>
      </div>
      <div className="mic-content">
        <h3 className="mic-title font-cormorant">{item.name}</h3>
        <p className="mic-description font-inter">{item.description}</p>
        <div className="mic-footer">
          <div className="mic-price font-inter">{item.price.toLocaleString('fr-FR')} FCFA</div>
          <div className="mic-actions">
            {count > 0 ? (
              <div className="mic-counter">
                <button className="mic-btn-round" onClick={handleRemove}>
                  <Minus size={16} />
                </button>
                <span className="mic-count font-inter">{count}</span>
                <button className="mic-btn-round" onClick={handleAdd}>
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <button className="mic-btn-round" onClick={handleAdd}>
                <Plus size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
