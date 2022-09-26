/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import {ToastAndroid, StatusBar, Alert} from 'react-native';
import MeuButton from '../../components/MeuButton';
import {Container, TextInput} from './styles';
import Loading from '../../components/Loading';
import {UsuarioContext} from '../../context/Api/UsuariosProvider';
import DeleteButton from '../../components/DeleteButton';

const User = ({route, navigation}) => {
  const [nome, setNome] = useState('');
  const [cel, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const {salvar, excluir, atualizar} = useContext(UsuarioContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNome('');
    setCelular('');
    setId('');
    setEmail('');
    if (route.params.user) {
      setNome(route.params.user.nome);
      setCelular(route.params.user.cel);
      setId(route.params.user.uid);
      setEmail(route.params.user.email);
    }
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const inserir = async () => {
    if (nome && email && cel) {
      let newUser = {};
      newUser.nome = nome;
      newUser.email = email;
      newUser.cel = cel;
      newUser.uid = id;
      setLoading(true);
      if (id) {
        await atualizar(newUser);
      } else {
        await salvar(newUser);
      }
      setLoading(false);
      navigation.goBack();
    } else {
      Alert.alert('Atenção', 'Preencha todos os campos.');
    }
  };

  const deletar = () => {
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

  // const salvar = () => {
  //   setLoading(true);
  //   firestore()
  //     .collection('users')
  //     .doc(id)
  //     .set(
  //       {
  //         nome: nome,
  //         cel: cel,
  //       },
  //       {merge: true},
  //     )
  //     .then(() => {
  //       setNome('');
  //       setCelular('');
  //       setEmail('');
  //       showToast('Dados salvos.');
  //       setLoading(false);
  //       navigation.goBack();
  //     })
  //     .catch(e => {
  //       console.log('User, salvar: ' + e);
  //     });
  // };

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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <MeuButton texto="Salvar" onClick={inserir} />
      {id ? <DeleteButton texto="Excluir" onClick={deletar} /> : null}

      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default User;
