import React, {useState, createContext} from 'react';

import firestore from '@react-native-firebase/firestore';

export const EsporteContext = createContext({});

export const EsporteProvider = ({children}) => {
  const [esportes, setEsportes] = useState([]);

  const getEsportes = () => {
    const unsubscribe = firestore()
      .collection('esportes')
      .onSnapshot(
        querySnapshot => {
          let d = [];
          querySnapshot.forEach(doc => {
            console.log(doc.id, ' => ', doc.data());
            const val = {
              uid: doc.id,
              modalidade: doc.data().modalidade,
              descricao: doc.data().descricao,
              nr_jogadores: doc.data().nr_jogadores,
            };
            d.push(val);
          });
          setEsportes(d);
          //setLoading(false);
        },
        e => {
          console.log('Esportes, getEsportes: ' + e);
        },
      );
    return unsubscribe;
  };

  const salvar = async esporte => {
    //setLoading(true);
    //console.error(id);
    firestore()
      .collection('esportes')
      .doc(esporte.id)
      .set(
        {
          modalidade: esporte.modalidade,
          descricao: esporte.descricao,
          nr_jogadores: esporte.nr_jogadores,
        },
        {merge: true},
      )
      .then(() => {})
      .catch(e => {
        console.log('Esporte, salvar: ' + e);
      });
  };

  const excluir = id => {
    firestore()
      .collection('esportes')
      .doc(id)
      .delete()
      .then(() => {})
      .catch(e => {
        console.error('Esporte , deleteEsporte' + e);
      });
  };

  return (
    <EsporteContext.Provider value={{esportes, getEsportes, salvar, excluir}}>
      {children}
    </EsporteContext.Provider>
  );
};
