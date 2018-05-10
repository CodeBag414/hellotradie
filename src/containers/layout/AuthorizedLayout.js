import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import Join from '../join';

import { NavBar, Footer } from '../../components/navigation';

const AuthorizedLayout = ({ match }) => (
  <div className="root">
    <NavBar />
    <Switch>
      <Route path={`${match.path}`} exact component={Home} />
      <Route path="/join" component={Join} />
      <Redirect to={`${match.url}`} />
    </Switch>
    <Footer />
  </div>
);

export default AuthorizedLayout;
