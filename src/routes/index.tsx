import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    // <ConnectedRouter history={history}>
    <BrowserRouter>
      <Switch>
        <Route component={() => <h1>Pagina</h1>} exact path="/" />
      </Switch>
    </BrowserRouter>
    // </ConnectedRouter>
  );
};

export default Routes;
