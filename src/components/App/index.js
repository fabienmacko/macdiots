/**
 * Import
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**
 * Local import
 */
import Navigation from '../Navigation';
import Accueil from '../Accueil';
import Carte from '../Carte';
import About from '../About';
// Composants

// Styles et assets
import './app.scss';

/**
 * Code
 */

const App = () => (
  <div id="app">
    <Navigation />
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/carte" component={Carte} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
