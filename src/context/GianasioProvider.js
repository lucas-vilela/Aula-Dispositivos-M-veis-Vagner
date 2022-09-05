import React, {useState} from 'react';
import {createContext} from 'react';
import firestore from '@react-native-firebase/firestore';

export const GinasioContext = createContext({});

export const GinasioProvider = ({children}) => {
  const [ginasios, setGinasios] = useState([]);

  const getGinasios = async () => {
    const unsubscribe = firestore()
      .collection('ginasios')
      .onSnapshot(
        querySnapshot => {
          let d = [];
          querySnapshot.forEach(doc => {
            //console.log(doc.id, ' => ', doc.data());
            const val = {
              uid: doc.id,
              nome: doc.data().nome,
              cep: doc.data().cep,
              telefone: doc.data().telefone,
              endereco: doc.data().endereco,
              distancia: doc.data().distancia,
            };
            d.push(val);
          });
          setGinasios(d);
          //setLoading(false);
        },
        e => {
          console.log('Ginasios, getGinasios: ' + e);
        },
      );
    return unsubscribe;
  };

  return (
    <GinasioContext.Provider
      value={{
        ginasios,
        getGinasios,
      }}>
      {children}
    </GinasioContext.Provider>
  );
};
