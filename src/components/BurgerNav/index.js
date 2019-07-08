import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './burger.scss';
import './burgernav.scss';

const BurgerNav = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
}) => {
  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    openProfile();
  };

  return (
    <div id="burgernav">
      <button onClick={handleMenuClick} className={isMenuOpen ? 'hamburger hamburger--elastic is-active' : 'hamburger hamburger--elastic'} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <nav className={isMenuOpen ? 'content-menu open' : 'content-menu'}>
        <ul>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/carte">Carte</NavLink>
          <NavLink to="/about">A propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};
BurgerNav.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  openProfile: PropTypes.func.isRequired,
};

export default BurgerNav;
