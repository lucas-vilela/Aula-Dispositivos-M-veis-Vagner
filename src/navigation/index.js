import React from 'react';

import {AuthUserProvider} from '../context/AuthUserProvider';
//import Routes from './Routes';
import AppStack from './AppStack';
import {GinasioProvider} from '../context/GinasioProvider';
import {EsporteProvider} from '../context/EsporteProvider';
import {AgendamentoProvider} from '../context/AgendamentosProvider';
import {ApiProvider} from '../context/Api/ApiProvider';
import {UsuarioProvider} from '../context/Api/UsuariosProvider';

export default function Providers() {
  return (
    <AuthUserProvider>
      <ApiProvider>
        <GinasioProvider>
          <AgendamentoProvider>
            <EsporteProvider>
              <UsuarioProvider>
                <AppStack />
              </UsuarioProvider>
            </EsporteProvider>
          </AgendamentoProvider>
        </GinasioProvider>
      </ApiProvider>
    </AuthUserProvider>
  );
}

// <AuthUserProvider>
//   <Routes />
// </AuthUserProvider>
