/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
import Burger1 from '../../styles/images/burger1.jpg';
import Burger2 from '../../styles/images/burger2.jpg';
import Burger3 from '../../styles/images/burger3.jpg';
// Composants

// Styles et assets
import './accueil.scss';

/**
 * Code
 */

class Accueil extends React.Component {
  componentDidMount() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      items: 1,
      stagePadding: 0,
    });
  }

  render() {
    return (
      <div id="accueil">
        <div id="wrapper">
          <div className="owl-carousel">
            <div
              className="owl-item-content"
              style={{
                backgroundImage: `url(${Burger1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'brightness(0.8)',
              }}
            >
              <p className="slogan">Un bon burger, ça n'attend pas.</p>
            </div>
            <div
              className="owl-item-content"
              style={{
                backgroundImage: `url(${Burger2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <p className="slogan">Des produits frais et locaux.</p>
            </div>
            <div
              className="owl-item-content"
              style={{
                backgroundImage: `url(${Burger3})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <p className="slogan">A emporter ou en terasse.</p>
            </div>
          </div>
          <div className="link-container">
            <Link to="/contact">Commander maintenant</Link>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Accueil;
