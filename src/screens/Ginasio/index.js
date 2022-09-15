import React, {useState, useEffect} from 'react';
import {ToastAndroid, StatusBar, Alert} from 'react-native';
import MeuButton from '../../components/MeuButton';
import {Container, TextInput} from './styles';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/Loading';
import DeleteButton from '../../components/DeleteButton';

const Ginasio = ({route, navigation}) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [distancia, setDistancia] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [id, setId] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //console.error(route.params);
    setNome('');
    setCep('');
    setId('');
    setEndereco('');
    setDistancia('');
    setTelefone('');
    setLatitude('');
    setLongitude('');
    if (route.params.ginasio) {
      setNome(route.params.ginasio.nome);
      setCep(route.params.ginasio.cep);
      setId(route.params.ginasio.uid);
      setTelefone(route.params.ginasio.telefone);
      setDistancia(route.params.ginasio.distancia);
      setEndereco(route.params.ginasio.endereco);
      setLatitude(route.params.ginasio.latitude);
      setLongitude(route.params.ginasio.longitude);
    }
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const deleteGinasio = async () => {
    firestore()
      .collection('ginasios')
      .doc(id)
      .delete()
      .then(() => {
        showToast('Ginásio deletado');
      })
      .catch(e => {
        console.error('Ginasio , deleteGinasio' + e);
      });
  };

  const salvar = () => {
    setLoading(true);
    //console.error(id);
    firestore()
      .collection('ginasios')
      .doc(id)
      .set(
        {
          latitude,
          longitude,
          nome,
          cep,
          telefone,
          endereco,
          distancia,
        },
        {merge: true},
      )
      .then(() => {
        setNome('');
        setCep('');
        setTelefone('');
        showToast('Dados salvos.');
        setLoading(false);
        navigation.goBack();
      })
      .catch(e => {
        console.log('ginasio, salvar: ' + e);
      });
  };

  const excluir = () => {
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
          await deleteGinasio(id);
          setLoading(false);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <Container>
      <TextInput
        placeholder="Nome"
        onChangeText={t => setNome(t)}
        value={nome}
      />
      <TextInput
        placeholder="Endereco"
        onChangeText={t => setEndereco(t)}
        value={endereco}
      />
      <TextInput
        placeholder="Distancia"
        onChangeText={t => setDistancia(t)}
        value={distancia}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={t => setTelefone(t)}
      />
      <TextInput placeholder="Cep" value={cep} onChangeText={t => setCep(t)} />
      <TextInput
        placeholder="Latitude"
        value={latitude}
        onChangeText={t => setLatitude(t)}
      />
      <TextInput
        placeholder="Longitude"
        value={longitude}
        onChangeText={t => setLongitude(t)}
      />
      <MeuButton texto="Salvar" onClick={salvar} />
      {id ? <DeleteButton texto="Excluir" onClick={excluir} /> : null}
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Ginasio;
