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
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
