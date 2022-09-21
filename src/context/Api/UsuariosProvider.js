import React, {useState, createContext, useContext} from 'react';

import firestore from '@react-native-firebase/firestore';
import {ApiContext} from '../Api/ApiProvider';
import { Alert } from 'react-native';

export const UsuarioContext = createContext({});

export const UsuarioProvider = ({children}) => {
  const [usuarios, setUsuarios] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const {api} = useContext(ApiContext);

  const getUsuarios = async () => {
    try {
      const response = await api.get('users');
      // console.log('Dados da API: ');
      // console.log(response.data.documents);

      let data = [];

      response.data.documents.map(dados => {
        let key = dados.name.split(
          'projects/projetoteste-3a8bf/databases/(default)/documents/users/',
        );
        data.push({
          nome: dados.fields.nome.stringValue,
          cel: dados.fields.cel.stringValue,
          email: dados.fields.email.stringValue,
          uid: key[1],
        });
      });
      data.sort((a, b) => a.nome.localeCompare(b.nome));
      setUsuarios(data);
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao buscar via API: ');
      console.log(response);
    }
  };

  const salvar = async val => {
    try {
      await api.post('users/', {
        fields: {
          nome: {stringValue: val.nome},
          cel: {stringValue: val.cel},
          email: {stringValue: val.email},
        },
      });
      getUsuarios();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao salvar via API: ');
      console.log(response);
    }
  };

  const excluir = async id => {
    try {
      await api.delete('users/' + id);
      getUsuarios();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao atualizar via API: ');
      console.log(response);
    }
  };

  const atualizar = async val => {
    try {
      await api.patch('users/' + val.uid, {
        fields: {
          nome: {stringValue: val.nome},
          cel: {stringValue: val.cel},
          email: {stringValue: val.email},
        },
      });
      getUsuarios();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao atualizar via API: ');
      console.log(response);
    }
  };

  return (
    <UsuarioContext.Provider
      value={{usuarios, getUsuarios, salvar, excluir, atualizar}}>
      {children}
    </UsuarioContext.Provider>
  );
};
