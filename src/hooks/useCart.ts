import { useState, useEffect } from 'react';
import { type OrderItem, getCart, saveCart } from '../utils/storage';

export function useCart() {
  const [cart, setCart] = useState<OrderItem[]>(getCart());

  useEffect(() => {
    const handleCartUpdate = () => {
      setCart(getCart());
    };
    window.addEventListener('cart_updated', handleCartUpdate);
    return () => window.removeEventListener('cart_updated', handleCartUpdate);
  }, []);

  const addToCart = (item: { id: string; name: string; price: number }) => {
    const current = getCart();
    const existing = current.find(i => i.id === item.id);
    if (existing) {
      existing.qty += 1;
      existing.price = existing.qty * existing.unitPrice;
    } else {
      current.push({
        id: item.id,
        name: item.name,
        qty: 1,
        unitPrice: item.price,
        price: item.price
      });
    }
    saveCart(current);
  };

  const removeFromCart = (itemId: string) => {
    const current = getCart();
    const existing = current.find(i => i.id === itemId);
    if (existing) {
      if (existing.qty > 1) {
        existing.qty -= 1;
        existing.price = existing.qty * existing.unitPrice;
        saveCart(current);
      } else {
        saveCart(current.filter(i => i.id !== itemId));
      }
    }
  };

  const deleteFromCart = (itemId: string) => {
    const current = getCart();
    saveCart(current.filter(i => i.id !== itemId));
  };

  const clear = () => {
    saveCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return { cart, addToCart, removeFromCart, deleteFromCart, clear, totalItems, totalPrice };
}
