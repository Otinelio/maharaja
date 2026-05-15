import { useEffect, useState } from 'react';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { getRestaurantData } from '../../utils/storage';
import './Contact.css';

function checkIsOpen() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // 11h00–15h00 (11.0 to 15.0) & 18h00–23h00 (18.0 to 23.0)
  if ((time >= 11 && time < 15) || (time >= 18 && time < 23)) {
    return true;
  }
  return false;
}

export function Contact() {
  const data = getRestaurantData();
  const [isOpen, setIsOpen] = useState(checkIsOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${data.restaurant.whatsapp.replace('+', '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="container contact-container reveal-scroll">
        <h1 className="contact-title font-cormorant">Nous Trouver</h1>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="ci-block">
              <MapPin size={24} className="ci-icon" />
              <span className="font-inter">{data.restaurant.address}</span>
            </div>

            <div className="ci-block">
              <Clock size={24} className="ci-icon" />
              <div className="ci-hours font-inter">
                <span>{data.restaurant.hours}</span>
                <div className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
                  {isOpen ? 'Ouvert' : 'Fermé'}
                </div>
              </div>
            </div>

            <div className="ci-block">
              <Phone size={24} className="ci-icon" />
              <span className="font-inter">{data.restaurant.whatsapp}</span>
            </div>

            <button className="contact-wa font-inter" onClick={handleWhatsApp}>
              <MessageCircle size={20} />
              Commander sur WhatsApp
            </button>

            <div className="contact-social">
              <a href={data.restaurant.instagram} target="_blank" rel="noreferrer" className="cs-link font-inter">
                <FaInstagram size={20} />
                <span>@maharajalome</span>
              </a>
              <a href={data.restaurant.facebook} target="_blank" rel="noreferrer" className="cs-link font-inter">
                <FaFacebook size={20} />
                <span>Maharaja Lounge & Fine Dining</span>
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15875.986877028974!2d1.2185675!3d6.1345995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1e63a81232b%3A0xc6d38e3f94e22131!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1715725000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
