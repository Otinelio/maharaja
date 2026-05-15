import { useState, useEffect, useRef } from 'react';
import { LogOut, Archive, Clock, Flame, BellRing, CheckCircle, AlertCircle } from 'lucide-react';
import { type Order, getOrders, updateOrderStatus, archiveServedOrders, type OrderStatus } from '../../utils/storage';
import './CuisineBoard.css';

const CUISINE_PASSWORD = "cuisine2025";

function playOrderBeep() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {
    console.error("Audio API non supportée", e);
  }
}

export function CuisineBoard() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("cuisineAuth") === "true"
  );
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>(getOrders());
  const [time, setTime] = useState(new Date());
  const [toasts, setToasts] = useState<{id: string, message: string}[]>([]);
  
  const knownIdsRef = useRef<string[]>(getOrders().map(o => o.id));

  // Clock
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Polling orders
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const checkNewOrders = () => {
      const current = getOrders();
      setOrders(current);
      
      const newOnes = current.filter(o => !knownIdsRef.current.includes(o.id));
      if (newOnes.length > 0) {
        playOrderBeep();
        setTimeout(playOrderBeep, 250);
        
        const newToasts = newOnes.map(o => ({
          id: `toast_${Date.now()}_${Math.random()}`,
          message: `Nouvelle commande · Table ${o.tableNumber} · ${o.items.length} article(s)`
        }));
        
        setToasts(prev => [...prev, ...newToasts].slice(-3));
        
        newToasts.forEach(t => {
          setTimeout(() => {
            setToasts(prev => prev.filter(x => x.id !== t.id));
          }, 5000);
        });

        knownIdsRef.current = current.map(o => o.id);
      } else {
        // Just update known ids in case of deletions
        knownIdsRef.current = current.map(o => o.id);
      }
    };

    const interval = setInterval(checkNewOrders, 3000);
    window.addEventListener("storage", checkNewOrders);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", checkNewOrders);
    };
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CUISINE_PASSWORD) {
      localStorage.setItem("cuisineAuth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("cuisineAuth");
    setIsAuthenticated(false);
  };

  const handleArchive = () => {
    archiveServedOrders();
    setOrders(getOrders());
    knownIdsRef.current = getOrders().map(o => o.id);
  };

  const changeStatus = (id: string, status: OrderStatus) => {
    updateOrderStatus(id, status);
    setOrders(getOrders());
  };

  if (!isAuthenticated) {
    return (
      <div className="cuisine-login font-inter">
        <form className="cuisine-login-form" onSubmit={handleLogin}>
          <div className="cuisine-logo">CUISINE</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="cuisine-input"
            autoFocus
          />
          <button type="submit" className="cuisine-btn">Accéder</button>
        </form>
      </div>
    );
  }

  const activeCount = orders.filter(o => o.status === 'pending' || o.status === 'preparing').length;

  const renderCol = (
    title: string, 
    Icon: React.ElementType, 
    status: OrderStatus, 
    color: string,
    actionLabel?: string,
    nextStatus?: OrderStatus
  ) => {
    let colOrders = orders.filter(o => o.status === status);
    if (status === 'served') {
      colOrders = colOrders.sort((a,b) => b.statusUpdatedAt - a.statusUpdatedAt).slice(0, 10);
    }

    return (
      <div className="kanban-col">
        <div className="kanban-header font-inter" style={{ color }}>
          <Icon size={18} />
          {title}
          <span className="kanban-count">{colOrders.length}</span>
        </div>
        <div className="kanban-cards">
          {colOrders.map(order => {
            const minutes = Math.floor((Date.now() - order.timestamp) / 60000);
            let timeColor = "#555";
            if (status !== 'served') {
              if (minutes >= 20) timeColor = "#8B1A2F";
              else if (minutes >= 10) timeColor = "#E8883A";
            }

            return (
              <div 
                key={order.id} 
                className={`order-card ${status === 'served' ? 'served' : ''}`}
                style={{ borderLeftColor: color }}
              >
                <div className="oc-header">
                  <span className="oc-table font-cormorant">Table {order.tableNumber}</span>
                  <div className="oc-time-badge font-inter">
                    <span className="oc-dot" style={{ backgroundColor: timeColor }} />
                    {minutes} min
                    {timeColor === "#8B1A2F" && status !== 'served' && <span className="oc-urgent">URGENT</span>}
                  </div>
                </div>
                
                <div className="oc-items font-inter">
                  {order.items.map((item, i) => (
                    <div key={i} className="oc-item">
                      <span className="oc-qty">{item.qty}×</span> {item.name}
                    </div>
                  ))}
                </div>

                {order.note && (
                  <div className="oc-note font-inter">
                    <AlertCircle size={14} className="oc-note-icon" />
                    {order.note}
                  </div>
                )}

                {actionLabel && nextStatus && (
                  <button 
                    className="oc-action-btn font-inter"
                    style={{ 
                      backgroundColor: status === 'pending' ? '#C9A84C' : status === 'preparing' ? '#25D366' : '#2A2118',
                      color: status === 'pending' ? '#120D07' : status === 'preparing' ? '#fff' : '#F5EDD6'
                    }}
                    onClick={() => changeStatus(order.id, nextStatus)}
                  >
                    {actionLabel}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="cuisine-board">
      <header className="cb-topbar">
        <div className="cb-logo font-inter">CUISINE</div>
        <div className="cb-clock font-cormorant">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="cb-actions">
          <div className="cb-badge">{activeCount} ACTIVES</div>
          <button className="cb-icon-btn" onClick={handleArchive} title="Archiver les commandes servies">
            <Archive size={20} />
          </button>
          <button className="cb-icon-btn" onClick={handleLogout} title="Déconnexion">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <main className="cb-kanban">
        {renderCol("EN ATTENTE", Clock, "pending", "#C9A84C", "Prendre en charge", "preparing")}
        {renderCol("EN PRÉPARATION", Flame, "preparing", "#E8883A", "Commande prête", "ready")}
        {renderCol("PRÊT", BellRing, "ready", "#25D366", "Marquer servie", "served")}
        {renderCol("SERVI", CheckCircle, "served", "#555555")}
      </main>

      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast font-inter">
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
