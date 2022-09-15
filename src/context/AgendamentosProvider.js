import React, {useState, createContext} from 'react';

import firestore from '@react-native-firebase/firestore';

export const AgendamentoContext = createContext({});

export const AgendamentoProvider = ({children}) => {
  const [agendamentos, setAgendamentos] = useState([]);

  const getAgendamentos = () => {
    const unsubscribe = firestore()
      .collection('agendamentos')
      .onSnapshot(
        querySnapshot => {
          let d = [];
          querySnapshot.forEach(doc => {
            //console.log(doc.id, ' => ', doc.data());
            const val = {
              uid: doc.id,
              modalidade: doc.data().modalidade,
              ginasio: doc.data().ginasio,
              endereco: doc.data().endereco,
              horario_fim: doc.data().horario_fim,
              horario_inicio: doc.data().horario_inicio,
              data: doc.data().data,
              status: doc.data().status,
              preco: doc.data().preco,
              quadra: doc.data().quadra,
              latitude: doc.data().latitude,
              longitude: doc.data().longitude,
            };
            d.push(val);
          });
          setAgendamentos(d);
          //setLoading(false);
        },
        e => {
          console.log('Agendamentos, getAgendamentos: ' + e);
        },
      );
    return unsubscribe;
  };

  const salvar = async Agendamento => {
    //setLoading(true);
    //console.error(id);
    firestore()
      .collection('Agendamentos')
      .doc(Agendamento.id)
      .set(
        {
          modalidade: Agendamento.modalidade,
          ginasio: Agendamento.ginasio,
          endereco: Agendamento.endereco,
          horario_fim: Agendamento.horario_fim,
          horario_inicio: Agendamento.horario_inicio,
          data: Agendamento.data,
          status: Agendamento.status,
          preco: Agendamento.preco,
          quadra: Agendamento.quadra,
          latitude: Agendamento.latitude,
          longitude: Agendamento.longitude,
        },
        {merge: true},
      )
      .then(() => {})
      .catch(e => {
        console.log('Agendamento, salvar: ' + e);
      });
  };

  const excluir = id => {
    firestore()
      .collection('Agendamentos')
      .doc(id)
      .delete()
      .then(() => {})
      .catch(e => {
        console.error('Agendamento , deleteAgendamento' + e);
      });
  };

  return (
    <AgendamentoContext.Provider
      value={{agendamentos, getAgendamentos, salvar, excluir}}>
      {children}
    </AgendamentoContext.Provider>
  );
};
