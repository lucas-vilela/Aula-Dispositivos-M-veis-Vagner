import React, {useEffect, useState, useContext} from 'react';
import {Container, TextInput} from './styles';
import {StatusBar} from 'react-native';
import {ToastAndroid} from 'react-native';
import {Alert} from 'react-native';

import Loading from '../../components/Loading';
import {EsporteContext} from '../../context/EsporteProvider';
import DeleteButton from '../../components/DeleteButton';
import MeuButton from '../../components/MeuButton';

const Esporte = ({route, navigation}) => {
  const [modalidade, setModalidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nr_jogadores, setNr_jogadores] = useState('');
  const [id, setId] = useState('');

  const [loading, setLoading] = useState(false);

  const {salvar, excluir} = useContext(EsporteContext);

  useEffect(() => {
    //console.error(route.params);
    setModalidade('');
    setDescricao('');
    setId('');
    setNr_jogadores('');
    if (route.params.esporte) {
      setModalidade(route.params.esporte.modalidade);
      setDescricao(route.params.esporte.descricao);
      setId(route.params.esporte.uid);
      setNr_jogadores(route.params.esporte.nr_jogadores);
    }
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const insert = async () => {
    let dados = [];
    dados.id = id;
    dados.descricao = descricao;
    dados.modalidade = modalidade;
    dados.nr_jogadores = nr_jogadores;

    setLoading(true);
    await salvar(dados);

    setModalidade('');
    setDescricao('');
    setNr_jogadores('');
    showToast('Dados salvos.');
    //setLoading(false);
    setLoading(false);
    navigation.goBack();
  };

  const del = async () => {
    Alert.alert('Atenção', 'Você tem certeza que deseja excluir o Ginásio?', [
      {
        text: 'Não',
        onPress: () => {},
        styles: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          setLoading(true);
          await excluir(id);
          setLoading(false);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <Container>
      <TextInput
        placeholder="Modalidade"
        onChangeText={t => setModalidade(t)}
        value={modalidade}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={t => setDescricao(t)}
      />
      <TextInput
        placeholder="Número de Joagadores"
        value={nr_jogadores}
        onChangeText={t => setNr_jogadores(t)}
      />
      <MeuButton texto="Salvar" onClick={insert} />
      {id ? <DeleteButton texto="Excluir" onClick={del} /> : null}
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Esporte;
