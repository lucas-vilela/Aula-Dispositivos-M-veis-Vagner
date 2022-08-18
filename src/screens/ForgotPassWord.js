import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import {COLORS} from '../assets/colors';
import MeuButton from '../components/MeuButton';
import auth from '@react-native-firebase/auth';

// import { Container } from './styles';

const ForgotPassWord = ({navigation}) => {
  const [email, setEmail] = useState('');

  const recover = () => {
    if (email !== '') {
      console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then(r => {
          Alert.alert(
            'Atenção',
            'Enviamos um email de recuperação de senha para ' + email,
            [{text: 'OK', onPress: () => navigation.goBack()}],
          );
        })
        .catch(e => {
          console.log('ForgotPassWord: erro em recover:' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Usuário não cadastrado');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'E-mail inválido');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro', 'Usuário desabilitado');
              break;
          }
        });
    } else {
      Alert.alert('Erro', 'Por favor digite o E-mail cadastrado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labels}>E-mail</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        returnKeyType="go"
        onChangeText={t => setEmail(t)}
        autoFocus={true}
      />
      <MeuButton texto="Recuperar" onClick={recover} />
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </View>
  );
};

export default ForgotPassWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingTop: 0,
    paddingRight: 40,
    paddingBottom: 0,
    backgroundColor: COLORS.primaryDark,
  },

  divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    //backgroundColor: '#ff5a5a',
  },
  G_logo: {
    width: 30,
    height: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 10,
    color: COLORS.white,
  },
  colorWhite: {
    fontFamily: 'Ubuntu-Regular',
    color: COLORS.white,
  },
  esqueceu: {
    fontFamily: 'Ubuntu-Regular',
    marginTop: 10,
    alignSelf: 'flex-end',
    color: COLORS.white,
  },
  labels: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 20,
    alignSelf: 'flex-start',
    color: COLORS.white,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  naoPossuo: {
    fontFamily: 'Ubuntu-Bold',
    marginTop: 20,
    color: COLORS.white,
    textDecorationLine: 'underline',
  },
  imgQuadras: {
    marginTop: 30,
    marginBottom: 30,
    width: 218,
    height: 172,
  },
  logo: {
    marginTop: 10,
    width: 128,
    height: 42,
  },
});
