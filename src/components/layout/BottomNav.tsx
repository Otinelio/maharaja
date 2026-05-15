import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, Info, MapPin } from 'lucide-react';
import clsx from 'clsx';
import './BottomNav.css';

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => clsx("bn-link font-inter", { active: isActive })}>
        <Home size={20} className="bn-icon" />
        <span>Home</span>
        <div className="bn-indicator" />
      </NavLink>
      <NavLink to="/menu" className={({ isActive }) => clsx("bn-link font-inter", { active: isActive })}>
        <UtensilsCrossed size={20} className="bn-icon" />
        <span>Menu</span>
        <div className="bn-indicator" />
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => clsx("bn-link font-inter", { active: isActive })}>
        <Info size={20} className="bn-icon" />
        <span>À propos</span>
        <div className="bn-indicator" />
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => clsx("bn-link font-inter", { active: isActive })}>
        <MapPin size={20} className="bn-icon" />
        <span>Contact</span>
        <div className="bn-indicator" />
      </NavLink>
    </nav>
  );
}
