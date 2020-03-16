/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ResponsiveLayout from 'containers/ResponsiveLayout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/layout" component={ResponsiveLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
