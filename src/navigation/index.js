import React from 'react';

import {AuthUserProvider} from '../context/AuthUserProvider';
//import Routes from './Routes';
import AppStack from './AppStack';
import {GinasioProvider} from '../context/GinasioProvider';
import {EsporteProvider} from '../context/EsporteProvider';
import {AgendamentoProvider} from '../context/AgendamentosProvider';

export default function Providers() {
  return (
    <AuthUserProvider>
      <GinasioProvider>
        <AgendamentoProvider>
          <EsporteProvider>
            <AppStack />
          </EsporteProvider>
        </AgendamentoProvider>
      </GinasioProvider>
    </AuthUserProvider>
  );
}

// <AuthUserProvider>
//   <Routes />
// </AuthUserProvider>
