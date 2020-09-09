import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';


import PageLogin from './pages/login';
import PageHome from './pages/home';
import PageEnterprise from './pages/enterprise';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
      render={props => 
        isAuthenticated() ? (
          <Component {...props} />
        ): (
          <Redirect to={{ pathname: "/", state: { from: props.location } } } />
        )
      }
  />
);


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PageLogin} />
             <PrivateRoute exact  path="/home" component={PageHome} />
             <PrivateRoute exact  path="/enterprise/:id" component={PageEnterprise} />
        </Switch>
    </BrowserRouter>
)


export default Routes;