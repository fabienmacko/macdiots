/**
 * Import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
import Logo from '../../styles/images/macdiotswhite.png';

// Composants

// Styles et assets
import './navigation.scss';

/**
 * Code
 */

const Navigation = () => (
  <div id="navigation">
    <nav>
      <ul>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/carte">Carte</NavLink>
        <img src={Logo} alt="Logo MacDiot" />
        <NavLink to="/about">A propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  </div>
);

/**
 * Export
 */
export default Navigation;
