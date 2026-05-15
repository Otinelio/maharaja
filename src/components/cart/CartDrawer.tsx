import { useState } from 'react';
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle, X } from 'lucide-react';
import clsx from 'clsx';
import { useCart } from '../../hooks/useCart';
import { getRestaurantData, type Order, saveOrders, getOrders } from '../../utils/storage';
import './CartDrawer.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isScanMode?: boolean;
}

export function CartDrawer({ isOpen, onClose, isScanMode = false }: CartDrawerProps) {
  const { cart, addToCart, removeFromCart, deleteFromCart, totalPrice, clear } = useCart();
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const data = getRestaurantData();
    let message = '';
    
    const itemsText = cart.map(i => `${i.qty}x ${i.name} (${i.price} FCFA)`).join('\n');
    
    if (isScanMode) {
      const tableNumber = localStorage.getItem('tableNumber') || 'Inconnue';
      message = `Commande Maharaja — Table ${tableNumber} :\n${itemsText}\n\nNote: ${note}\n\nTotal : ${totalPrice} FCFA`;
      
      // Save order to Kitchen Interface
      const newOrder: Order = {
        id: `order_${Date.now()}`,
        tableNumber,
        items: [...cart],
        note,
        total: totalPrice,
        status: 'pending',
        timestamp: Date.now(),
        statusUpdatedAt: Date.now()
      };
      
      const orders = getOrders();
      orders.push(newOrder);
      saveOrders(orders);
      localStorage.setItem('legrm_last_order_id', newOrder.id);
    } else {
      message = `Nouvelle Commande Maharaja :\n${itemsText}\n\nNote: ${note}\n\nTotal : ${totalPrice} FCFA`;
    }

    const whatsappUrl = `https://wa.me/${data.restaurant.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clear();
    onClose();
  };

  return (
    <>
      <div className={clsx("cart-overlay", { open: isOpen })} onClick={onClose} />
      <div className={clsx("cart-drawer", { open: isOpen })}>
        <div className="cart-header">
          <h2 className="font-cormorant cart-title">Votre commande</h2>
          <button className="cart-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} className="cart-empty-icon" />
              <p className="font-inter">Votre panier est vide</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name font-inter">{item.name}</span>
                    <span className="cart-item-price font-inter">{item.price} FCFA</span>
                  </div>
                  <div className="cart-item-actions">
                    <button className="cart-btn" onClick={() => removeFromCart(item.id)}>
                      <Minus size={16} />
                    </button>
                    <span className="cart-item-qty">{item.qty}</span>
                    <button className="cart-btn" onClick={() => addToCart({ id: item.id, name: item.name, price: item.unitPrice })}>
                      <Plus size={16} />
                    </button>
                    <button className="cart-btn delete" onClick={() => deleteFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-note">
                <textarea 
                  className="font-inter"
                  placeholder="Note pour la cuisine (optionnel)..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total font-inter">
              <span>Total</span>
              <span className="total-price">{totalPrice.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <button className="btn-whatsapp font-inter" onClick={handleWhatsApp}>
              <MessageCircle size={20} />
              Commander sur WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
