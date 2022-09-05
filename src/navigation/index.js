import React from 'react';

import {AuthUserProvider} from '../context/AuthUserProvider';
//import Routes from './Routes';
import AppStack from './AppStack';
//import {GinasioProvider} from '../context/GianasioProvider';
import {EsporteProvider} from '../context/EsporteProvider';

export default function Providers() {
  return (
    <AuthUserProvider>
      {/* <GinasioProvider> */}
      <EsporteProvider>
        <AppStack />
      </EsporteProvider>
      {/* </GinasioProvider> */}
    </AuthUserProvider>
  );
}

// <AuthUserProvider>
//   <Routes />
// </AuthUserProvider>
