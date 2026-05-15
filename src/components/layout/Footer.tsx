import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { getRestaurantData } from '../../utils/storage';
import './Footer.css';

export function Footer() {
  const data = getRestaurantData();

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${data.restaurant.whatsapp.replace('+', '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer reveal-scroll">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <h2 className="footer-logo font-cormorant">MAHARAJA</h2>
            <p className="footer-tagline font-inter">{data.restaurant.tagline}</p>
            <div className="footer-social">
              <a href={data.restaurant.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href={data.restaurant.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-title font-inter">Navigation Rapide</h3>
            <div className="footer-links font-inter">
              <Link to="/">Accueil</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">À propos</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-title font-inter">Contact</h3>
            <div className="footer-contact font-inter">
              <div className="fc-item">
                <Clock size={16} className="fc-icon" />
                <span>{data.restaurant.hours}</span>
              </div>
              <div className="fc-item">
                <MapPin size={16} className="fc-icon" />
                <span>{data.restaurant.address}</span>
              </div>
              <div className="fc-item">
                <Phone size={16} className="fc-icon" />
                <span>{data.restaurant.whatsapp}</span>
              </div>
            </div>
            <button className="footer-wa font-inter" onClick={handleWhatsApp}>
              <MessageCircle size={16} />
              WhatsApp
            </button>
          </div>

        </div>
        
        <div className="footer-legal font-inter">
          © 2026 Maharaja Lounge & Fine Dining · Lomé, Togo · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
