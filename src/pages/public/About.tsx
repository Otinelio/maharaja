import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const SPECIALTIES = [
  { name: 'Butter Chicken', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80' },
  { name: 'Biryani Royal', img: 'https://images.unsplash.com/photo-1563379091339-03246963d20d?w=200&q=80' },
  { name: 'Thali Maharaja', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=200&q=80' },
  { name: 'Naan Tandoor', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80' },
  { name: 'Gambas Masala', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80' }
];

export function About() {
  const storyRef = useScrollReveal();
  const quoteRef = useScrollReveal();
  const specRef = useScrollReveal();

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="ah-bg" />
        <div className="ah-overlay" />
        <div className="container ah-content">
          <h1 className="ah-title font-cormorant">L'histoire<br/>d'un Royaume</h1>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story" ref={storyRef}>
        <div className="container">
          <div className="as-content font-inter">
            <p className="as-para">
              Situé au cœur vibrant d'Assivito, au 1er étage de l'Immeuble RAMCO sur l'Avenue du 24 Janvier, Maharaja n'est pas simplement un restaurant indien. C'est le premier établissement Fine Dining Indo-Moghol de Lomé, pensé comme une enclave souveraine où le temps suspend son vol. Ici, la chaleur des fours tandoor rencontre l'élégance stricte d'un lounge contemporain.
            </p>
            <p className="as-para">
              Notre brigade de cuisiniers, formée aux traditions pluri-séculaires, orchestre chaque jour une symphonie d'épices soigneusement importées. Du safran du Cachemire au beurre clarifié fondant, la promesse culinaire de Maharaja est celle d'un voyage sensoriel absolu, servi dans une atmosphère "Nuit Moghole" où chaque détail a été pensé pour honorer l'héritage d'un véritable palais.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="about-quote" ref={quoteRef}>
        <div className="container">
          <h2 className="aq-text font-cormorant">
            "Chaque assiette est un voyage. Chaque épice est une mémoire."
          </h2>
        </div>
      </section>

      {/* SPECIALTIES SECTION */}
      <section className="about-specialties" ref={specRef}>
        <div className="container">
          <h3 className="aspec-title font-cormorant">Nos Signatures</h3>
          <div className="aspec-grid">
            {SPECIALTIES.map((spec, i) => (
              <div key={i} className="aspec-item">
                <img src={spec.img} alt={spec.name} className="aspec-img" loading="lazy" />
                <span className="aspec-name font-inter">{spec.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
