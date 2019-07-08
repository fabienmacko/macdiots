/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
import Roulotte from '../../styles/images/roulotte.jpg';
import AOS from 'aos';
// Composants

// Styles et assets
import './about.scss';

/**
 * Code
 */

class About extends React.Component {
  componentDidMount(){
    AOS.init();
  }
render() {
  return (
    <div id="about">
      <div className='row'>
        <div className='square' data-aos="fade-in">
          Je suis le square
        </div>
        <div className='square'>
        Je suis le square 2
        </div>
      </div>
    </div>
  );
}
}


/**
 * Export
 */
export default About;
