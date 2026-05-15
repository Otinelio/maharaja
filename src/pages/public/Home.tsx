import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, MapPin, Clock } from 'lucide-react';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Home.css';

export function Home() {
  const navigate = useNavigate();
  const signaturesRef = useScrollReveal();
  const ambianceRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <h1 className="hero-title font-cormorant">MAHARAJA</h1>
          <p className="hero-subtitle font-inter">LOUNGE & FINE DINING</p>
          <p className="hero-tagline font-cormorant">Voyage en Inde au cœur de Lomé</p>
          <button className="hero-cta font-inter" onClick={() => navigate('/menu')}>
            Découvrir le menu
          </button>
        </div>

        <div className="hero-scroll-indicator" />
      </section>

      {/* SIGNATURES SECTION */}
      <section className="signatures" ref={signaturesRef}>
        <div className="container">
          <div className="signatures-grid">
            <div className="sig-item">
              <UtensilsCrossed size={32} className="sig-icon" />
              <h2 className="sig-title font-cormorant">Gastronomie Authentique</h2>
              <p className="sig-text font-inter">Épices sélectionnées, recettes d'origine, cuisine ouverte sur chaque assiette.</p>
            </div>
            <div className="sig-divider" />
            <div className="sig-item">
              <MapPin size={32} className="sig-icon" />
              <h2 className="sig-title font-cormorant">Fine Dining à Lomé</h2>
              <p className="sig-text font-inter">1er étage, Immeuble RAMCO, Avenue du 24 Janvier — un cadre souverain au cœur d'Assivito.</p>
            </div>
            <div className="sig-divider" />
            <div className="sig-item">
              <Clock size={32} className="sig-icon" />
              <h2 className="sig-title font-cormorant">7j/7 · 11h–15h & 18h–23h</h2>
              <p className="sig-text font-inter">Déjeuner, dîner, réservation, livraison — le palais ne ferme jamais trop tôt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMBIANCE SECTION */}
      <section className="ambiance" ref={ambianceRef}>
        <div className="container">
          <div className="ambiance-grid">
            <div className="amb-large">
              <img src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1200&q=80" alt="Indian biryani" className="amb-img" loading="lazy" />
              <div className="amb-text-overlay">
                <p className="font-cormorant">L'Inde n'est pas un pays. C'est un parfum.</p>
              </div>
            </div>
            <div className="amb-small-col">
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80" alt="Indian naan" className="amb-img" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Indian restaurant interior" className="amb-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number font-cormorant">
                <CountUp end={12} duration={1} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="stat-label font-inter">Spécialités</div>
            </div>
            <div className="stat-item">
              <div className="stat-number font-cormorant">
                <CountUp end={7} duration={1} enableScrollSpy scrollSpyOnce />j/7
              </div>
              <div className="stat-label font-inter">Ouvert</div>
            </div>
            <div className="stat-item">
              <div className="stat-number font-cormorant">
                <CountUp end={1} duration={1} enableScrollSpy scrollSpyOnce />er
              </div>
              <div className="stat-label font-inter">Fine Dining Indien à Lomé</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
