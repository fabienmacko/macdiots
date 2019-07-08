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
import BurgerNav from '../../containers/BurgerNav';

// Composants

// Styles et assets
import './navigation.scss';

/**
 * Code
 */

const Navigation = () => (
  <div id="navigation">
    <img src={Logo} alt="Logo MacDiot" id='logo'/>
    <BurgerNav />
    <a href="tel:+33788363945" id='phonecall'><img src={Phone} alt="Phone Call"/></a>
  </div>
);

/**
 * Export
 */
export default Navigation;
