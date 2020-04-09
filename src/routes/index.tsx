/* eslint-disable react/jsx-max-depth */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import Main from '../pages/Main';
import SearchResults from '../pages/SearchResults';
import Product from '../pages/Product';

const Routes: React.FC = () => {
  return (
   <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route component={Main} exact path="/" />
        <Route component={Product} path="/items/:id" />
        <Route component={SearchResults} path="/items" />
      </Switch>
    </BrowserRouter>
    </ConnectedRouter>
  );
};

export default Routes;
