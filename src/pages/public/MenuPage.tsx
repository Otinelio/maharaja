import { useState, useEffect } from 'react';
import { Clock, Flame, BellRing, CheckCircle } from 'lucide-react';
import { getRestaurantData, getOrders, type OrderStatus } from '../../utils/storage';
import { CategoryNav } from '../../components/ui/CategoryNav';
import { MenuItemCard } from '../../components/ui/MenuItemCard';
import { TableModal } from '../../components/shared/TableModal';
import './MenuPage.css';

interface MenuPageProps {
  scanMode?: boolean;
}

export function MenuPage({ scanMode = false }: MenuPageProps) {
  const [data, setData] = useState(getRestaurantData());
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.id || '');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [tableConfirmed, setTableConfirmed] = useState(false);

  useEffect(() => {
    const handleStorage = () => setData(getRestaurantData());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (!scanMode) return;
    
    const poll = () => {
      const orderId = localStorage.getItem("legrm_last_order_id");
      if (!orderId) {
        setOrderStatus(null);
        return;
      }
      const order = getOrders().find(o => o.id === orderId);
      if (order) setOrderStatus(order.status);
    };
    
    poll();
    const interval = setInterval(poll, 3000);
    window.addEventListener("storage", poll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", poll);
    };
  }, [scanMode]);

  const handleNewOrder = () => {
    localStorage.removeItem("legrm_last_order_id");
    setOrderStatus(null);
  };

  const renderOrderStatus = () => {
    if (!orderStatus) return null;

    const statusConfig = {
      pending: { icon: Clock, text: "Commande reçue — en attente cuisine", className: "status-pending" },
      preparing: { icon: Flame, text: "En préparation...", className: "status-preparing" },
      ready: { icon: BellRing, text: "Votre commande est prête !", className: "status-ready pulse-shadow" },
      served: { icon: CheckCircle, text: "Commande servie · Bon appétit !", className: "status-served" }
    };

    const config = statusConfig[orderStatus];
    const Icon = config.icon;

    return (
      <div className={`order-status-banner ${config.className}`}>
        <Icon size={24} />
        <span className="font-inter">{config.text}</span>
        {orderStatus === 'served' && (
          <button className="new-order-btn font-inter" onClick={handleNewOrder}>
            Nouvelle commande
          </button>
        )}
      </div>
    );
  };

  // If scan mode and table not confirmed, we don't render the menu until confirmed
  if (scanMode && !tableConfirmed && !localStorage.getItem('tableNumber')) {
    return <TableModal onConfirm={() => setTableConfirmed(true)} />;
  }

  return (
    <div className="menu-page">
      <CategoryNav 
        categories={data.categories} 
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {scanMode && renderOrderStatus()}

      <div className="container menu-container">
        {data.categories.sort((a,b) => a.order - b.order).map(category => {
          const categoryItems = data.items.filter(item => item.categoryId === category.id && item.available);
          
          if (categoryItems.length === 0) return null;

          return (
            <div key={category.id} id={`category-${category.id}`} className="menu-section">
              <h2 className="menu-section-title font-cormorant">{category.name}</h2>
              <div className="menu-grid">
                {categoryItems.sort((a,b) => a.order - b.order).map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* If scanMode, render TableModal to handle its own logic, but it's already caught above or hidden */}
      {scanMode && tableConfirmed && <TableModal onConfirm={() => {}} />}
    </div>
  );
}
