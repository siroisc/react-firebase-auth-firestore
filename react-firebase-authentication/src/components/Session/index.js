import React from 'react';


import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export { AuthUserContext, withAuthentication, withAuthorization };