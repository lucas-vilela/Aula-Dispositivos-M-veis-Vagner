/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MeuButton from '../components/MeuButton';
import {COLORS} from '../assets/colors';
//import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import Loading from '../components/Loading';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const storeUserCache = async value => {
    try {
      value.pass = pass;
      value.email = email;
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
      setLoading(false);
    } catch (e) {
      console.log('SignIn: erro em storeUserCache:' + e);
    }
  };

  const getUser = async () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          //console.log('Document data:' + doc.data());
          storeUserCache(doc.data());
        } else {
          console.log('Sem documento.');
        }
      })
      .catch(e => {
        console.log('SignIn: erro em entrar:' + e);
      });
  };

  const entrar = () => {
    //console.log(`Email=${email} Senha=${pass}`);
    setLoading(true);
    if (email !== '' && pass !== '') {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(async() => {
          if (!auth().currentUser.emailVerified) {
            setLoading(false);
            Alert.alert(
              'Erro',
              'Você deve verificar o seu email para prosseguir.',
            );
            return;
          }
          await getUser();
          navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
        })
        .catch(e => {
          setLoading(false);
          console.log('SignIn: erro em entrar:' + e);

          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Usuário não cadastrado');
              break;
            case 'auth/wrong-password':
              Alert.alert('Erro', 'Senha inválida');
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
      setLoading(false);
      Alert.alert('Erro', 'Por favor digite E-mail e Senha');
    }
  };

  const cadastrar = () => {
    navigation.navigate('SignUp');
  };

  const esqueceu = () => {
    navigation.navigate('ForgotPassWord');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divSuperior}>
          <Image
            style={styles.imgQuadras}
            source={require('../assets/images/quadras.png')}
            accessibilityLabel="Figuras de 3 quadras"
          />
          <Text style={styles.labels}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            //onEndEditing={() => this.passTextInput.focus()}
          />
          <Text style={styles.labels}>Senha</Text>
          <TextInput
            // ref={ref => {
            //   this.passTextInput = ref;
            // }}
            style={styles.input}
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
          <Text style={styles.esqueceu} onPress={esqueceu}>
            Esqueceu sua senha?
          </Text>
          <MeuButton texto="Entrar" onClick={entrar} />
        </View>
        <View style={styles.divInferior}>
          <Image
            source={require('../assets/images/GoogleLogo.png')}
            style={styles.G_logo}
          />
          <Text style={styles.colorWhite}>Fazer login com conta Google</Text>
          <Text style={styles.naoPossuo} onPress={cadastrar}>
            Não possuo uma conta.
          </Text>
        </View>
      </ScrollView>
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingTop: 0,
    paddingRight: 40,
    paddingBottom: 0,
    backgroundColor: '#20232a',
  },
  divSuperior: {
    flex: 5,
    alignItems: 'center',
    marginTop: 30,
    //backgroundColor: '#fff',
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
    height: 40,
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
