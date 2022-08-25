import React from 'react';

import {AuthUserProvider} from '../context/AuthUserProvider';
//import Routes from './Routes';
import AppStack from './AppStack';
import {GinasioProvider} from '../context/GianasioProvider';

export default function Providers() {
  return (
    <AuthUserProvider>
      {/* <GinasioProvider> */}
      <AppStack />
      {/* </GinasioProvider> */}
    </AuthUserProvider>
  );
}

// <AuthUserProvider>
//   <Routes />
// </AuthUserProvider>
