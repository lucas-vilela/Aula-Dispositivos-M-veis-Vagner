import React, {useState, useEffect} from 'react';
import {ToastAndroid, StatusBar} from 'react-native';
import MeuButton from '../../components/MeuButton';
import {Container, TextInput} from './styles';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../components/Loading';

const User = ({route, navigation}) => {
  const [nome, setNome] = useState('');
  const [cel, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNome(route.params.user.nome);
    setCelular(route.params.user.cel);
    setId(route.params.user.id);
    setEmail(route.params.user.email)
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const salvar = () => {
    setLoading(true);
    firestore()
      .collection('users')
      .doc(id)
      .set(
        {
          nome: nome,
          cel: cel,
        },
        {merge: true},
      )
      .then(() => {
        setNome('');
        setCelular('');
        setEmail('');
        showToast('Dados salvos.');
        setLoading(false);
        navigation.goBack();
      })
      .catch(e => {
        console.log('User, salvar: ' + e);
      });
  };

  return (
    <Container>
      <TextInput
        placeholder="Nome"
        onChangeText={t => setNome(t)}
        value={nome}
      />
      <TextInput
        placeholder="Celular"
        value={cel}
        onChangeText={t => setCelular(t)}
      />
      <TextInput placeholder="Email" editable={false} value={email} />

      <MeuButton texto="Salvar" onClick={salvar} />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default User;
