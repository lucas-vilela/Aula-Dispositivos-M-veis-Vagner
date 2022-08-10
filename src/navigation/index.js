import React from 'react';

import {AuthUserProvider} from '../context/AuthUserProvider';
import Routes from './Routes';
import AppStack from './AppStack';

export default function Providers() {
  return (
    <AuthUserProvider>
      <AppStack />
    </AuthUserProvider>
  );
}

// <AuthUserProvider>
//   <Routes />
// </AuthUserProvider>