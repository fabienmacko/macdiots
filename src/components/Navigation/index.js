/**
 * Import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */
import Logo from '../../styles/images/logo.png';
import Phone from '../../styles/images/phone.svg';

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
        <img src={Logo} alt="Logo MacDiot" id='logo'/>
        <NavLink to="/about">A propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
    <a href="tel:+33788363945" id='phonecall'><img src={Phone} alt="Phone Call"/></a>
  </div>
);

/**
 * Export
 */
export default Navigation;
