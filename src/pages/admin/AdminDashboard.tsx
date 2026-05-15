import { useState, useEffect } from 'react';
import { LogOut, Pencil, Trash2, Copy, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import { getRestaurantData, saveRestaurantData, type RestaurantData } from '../../utils/storage';
import './AdminDashboard.css';

const ADMIN_PASSWORD = "maharaja2025";

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("adminAuth") === "true"
  );
  const [password, setPassword] = useState('');
  const [data, setData] = useState<RestaurantData>(getRestaurantData());
  const [activeTab, setActiveTab] = useState<'MENU' | 'CATEGORIES' | 'PARAMS' | 'EXPORT'>('MENU');

  useEffect(() => {
    if (isAuthenticated) {
      saveRestaurantData(data);
    }
  }, [data, isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-login font-inter">
        <form className="admin-login-form" onSubmit={handleLogin}>
          <div className="admin-logo">MAHARAJA ADMIN</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-input"
            autoFocus
          />
          <button type="submit" className="admin-btn">Se connecter</button>
        </form>
      </div>
    );
  }

  // Helper functions to update data state
  const updateRestaurant = (fields: Partial<RestaurantData['restaurant']>) => {
    setData({ ...data, restaurant: { ...data.restaurant, ...fields } });
  };

  const toggleItemAvailability = (id: string) => {
    setData({
      ...data,
      items: data.items.map(i => i.id === id ? { ...i, available: !i.available } : i)
    });
  };

  const deleteItem = (id: string) => {
    if (window.confirm("Supprimer ce plat ?")) {
      setData({ ...data, items: data.items.filter(i => i.id !== id) });
    }
  };

  return (
    <div className="admin-dashboard font-inter">
      <header className="admin-header">
        <div className="admin-logo">MAHARAJA ADMIN</div>
        <button className="admin-btn-outline" onClick={handleLogout}>
          <LogOut size={16} /> Déconnexion
        </button>
      </header>

      <nav className="admin-tabs">
        {(['MENU', 'CATEGORIES', 'PARAMS', 'EXPORT'] as const).map(tab => (
          <button 
            key={tab} 
            className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="admin-content">
        {activeTab === 'MENU' && (
          <div className="admin-section">
            <div className="admin-section-header">
              <h2>Gestion du Menu</h2>
              <button className="admin-btn" onClick={() => alert("Formulaire d'ajout à implémenter")}>
                <Plus size={16} /> Ajouter un plat
              </button>
            </div>
            
            {data.categories.sort((a,b) => a.order - b.order).map(cat => {
              const catItems = data.items.filter(i => i.categoryId === cat.id);
              if (catItems.length === 0) return null;
              
              return (
                <div key={cat.id} className="admin-category-group">
                  <h3>{cat.name}</h3>
                  <div className="admin-items-list">
                    {catItems.sort((a,b) => a.order - b.order).map(item => (
                      <div key={item.id} className="admin-item-row">
                        <img src={item.imageUrl} alt="" className="admin-item-img" />
                        <div className="admin-item-info">
                          <div className="admin-item-name">{item.name}</div>
                          <div className="admin-item-price">{item.price} FCFA</div>
                        </div>
                        <div className="admin-item-actions">
                          <label className="admin-toggle">
                            <input 
                              type="checkbox" 
                              checked={item.available} 
                              onChange={() => toggleItemAvailability(item.id)} 
                            />
                            <span>Disponible</span>
                          </label>
                          <button className="admin-icon-btn"><Pencil size={18} /></button>
                          <button className="admin-icon-btn danger" onClick={() => deleteItem(item.id)}><Trash2 size={18} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'CATEGORIES' && (
          <div className="admin-section">
            <div className="admin-section-header">
              <h2>Catégories</h2>
              <button className="admin-btn"><Plus size={16} /> Ajouter</button>
            </div>
            <div className="admin-items-list">
              {data.categories.sort((a,b) => a.order - b.order).map(cat => (
                <div key={cat.id} className="admin-item-row">
                  <div className="admin-item-name">{cat.name}</div>
                  <div className="admin-item-actions">
                    <button className="admin-icon-btn"><ChevronUp size={18} /></button>
                    <button className="admin-icon-btn"><ChevronDown size={18} /></button>
                    <button className="admin-icon-btn"><Pencil size={18} /></button>
                    <button className="admin-icon-btn danger"><Trash2 size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'PARAMS' && (
          <div className="admin-section">
            <h2>Paramètres du Restaurant</h2>
            <div className="admin-form">
              <div className="admin-form-group">
                <label>Nom</label>
                <input type="text" value={data.restaurant.name} onChange={e => updateRestaurant({ name: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>Slogan (Tagline)</label>
                <input type="text" value={data.restaurant.tagline} onChange={e => updateRestaurant({ tagline: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>WhatsApp</label>
                <input type="text" value={data.restaurant.whatsapp} onChange={e => updateRestaurant({ whatsapp: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>Adresse</label>
                <input type="text" value={data.restaurant.address} onChange={e => updateRestaurant({ address: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>Horaires</label>
                <input type="text" value={data.restaurant.hours} onChange={e => updateRestaurant({ hours: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>Instagram URL</label>
                <input type="text" value={data.restaurant.instagram} onChange={e => updateRestaurant({ instagram: e.target.value })} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label>Facebook URL</label>
                <input type="text" value={data.restaurant.facebook} onChange={e => updateRestaurant({ facebook: e.target.value })} className="admin-input" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'EXPORT' && (
          <div className="admin-section">
            <h2>Export & Configuration</h2>
            <p className="admin-note">
              Les modifications admin ne sont visibles que sur ce navigateur. Pour déployer : exporter le JSON et transmettre au développeur.
            </p>
            <div className="admin-export-actions">
              <button 
                className="admin-btn"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(data, null, 2));
                  alert("Config copiée dans le presse-papier !");
                }}
              >
                <Copy size={16} /> Copier la config JSON
              </button>
              <button 
                className="admin-btn-outline danger"
                onClick={() => {
                  if (window.confirm("Êtes-vous sûr de vouloir tout réinitialiser aux valeurs par défaut ?")) {
                    localStorage.removeItem("restaurantData");
                    setData(getRestaurantData());
                    window.location.reload();
                  }
                }}
              >
                Réinitialiser aux données par défaut
              </button>
            </div>
            <textarea 
              className="admin-input admin-json-preview" 
              readOnly 
              value={JSON.stringify(data, null, 2)} 
            />
          </div>
        )}
      </main>
    </div>
  );
}
