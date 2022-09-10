import React, {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Container, Image} from './styles';

//import {GinasioContext} from '../../context/GianasioProvider';
import {EsporteContext} from '../../context/EsporteProvider';
import {AgendamentoContext} from '../../context/AgendamentosProvider';

const Preload = ({navigation}) => {
  //const {getGinasios} = useContext(GinasioContext);
  const {getEsportes} = useContext(EsporteContext);
  const {getAgendamentos} = useContext(AgendamentoContext);

  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Home: erro em getUserCache:' + e);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    if (user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
      // auth()
      //   .signInWithEmailAndPassword(user.email, user.pass)
      //   .then(() => {})
      //   .catch(e => {
      //     console.log('SignIn: erro em entrar:' + e);

      //     switch (e.code) {
      //       case 'auth/user-not-found':
      //         Alert.alert('Erro', 'Usuário não cadastrado');
      //         break;
      //       case 'auth/wrong-password':
      //         Alert.alert('Erro', 'Senha inválida');
      //         break;
      //       case 'auth/invalid-email':
      //         Alert.alert('Erro', 'E-mail inválido');
      //         break;
      //       case 'auth/user-disabled':
      //         Alert.alert('Erro', 'Usuário disabilitado');
      //         break;
      //     }
      //   });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    }
  };

  useEffect(() => {
    loginUser();

    // const unsubscribeGinasios = getGinasios();
    const unsubscribeEsportes = getEsportes();
    const unsubscribeAgendamentos = getAgendamentos();

    return () => {
      unsubscribeEsportes;
      unsubscribeAgendamentos;
      //   unsubscribeGinasios;
    };
  }, []);
  return (
    <Container>
      <Image
        source={require('../../assets/images/LogoV.png')}
        accecibilityLabel="Logo do app"
      />
    </Container>
  );
};
export default Preload;
