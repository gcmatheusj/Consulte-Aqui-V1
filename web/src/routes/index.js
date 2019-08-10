import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/cadastrar" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
    </Switch>
  );
}
