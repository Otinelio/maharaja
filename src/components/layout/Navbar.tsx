import { NavLink, Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import './Navbar.css';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo font-cormorant">
          MAHARAJA
        </Link>

        <nav className="navbar-links font-inter">
          <NavLink to="/" className={({ isActive }) => clsx("nav-link", { active: isActive })}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => clsx("nav-link", { active: isActive })}>
            À propos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => clsx("nav-link", { active: isActive })}>
            Contact
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => clsx("nav-link", { active: isActive })}>
            Menu
          </NavLink>
        </nav>

        <button className="navbar-cta font-inter" onClick={() => navigate('/menu')}>
          Commander
        </button>
      </div>
    </header>
  );
}
