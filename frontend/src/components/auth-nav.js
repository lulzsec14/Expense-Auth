// src/components/auth-nav.js

import React from 'react';
import AuthenticationButton from './authentication-button';
import { useAuth0 } from '@auth0/auth0-react';

const AuthNav = () => {
  const { isAuthenticated, user } = useAuth0();
  let uemail;
  if (isAuthenticated) {
    uemail = user.email;
  }
  return (
    <div className="navbar-nav ml-auto">
      <span style={{ paddingTop: '20px', marginRight: '15px' }}>
        {isAuthenticated ? 'Welcome,' + uemail : ''}
      </span>
      <AuthenticationButton />
    </div>
  );
};

export default AuthNav;
