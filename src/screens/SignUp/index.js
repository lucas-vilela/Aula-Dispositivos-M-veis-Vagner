import React, {useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import MeuButton from '../../components/MeuButton';
import {Body, TextInput, Text} from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';
import Loading from '../../components/Loading';

const SignUp = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [cel, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const [loading, setLoading] = useState(false);

  const cadastrar = () => {
    setLoading(true);
    if (
      email !== '' &&
      pass !== '' &&
      nome !== '' &&
      passConfirm !== '' &&
      cel !== ''
    ) {
      if (pass === passConfirm) {
        auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => {
            let userF = auth().currentUser;
            let userData = {};

            userData.nome = nome;
            userData.cel = cel;
            userData.email = email;

            firestore()
              .collection('users') // referência da coleção
              .doc(userF.uid) //chave do doc, id
              .set(userData) //valor do doc, objeto json
              .then(() => {
                console.log(
                  'SignUp, cadastrar: Usuário - ' + nome + ' adicionado',
                );
                userF
                  .sendEmailVerification()
                  .then(() => {
                    setLoading(false);
                    Alert.alert(
                      'Informação',
                      'Um email de validação foi enviado para ' + email,
                    );
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{name: 'SignIn'}],
                      }),
                    );
                  })
                  .catch(e => {
                    console.log('SignUp: erro em verificação de email:' + e);
                  });
              })
              .catch(e => {
                console.log('SignUp: erro em cadastrar no FIRESTORE:' + e);
              });
          })
          .catch(e => {
            setLoading(false);
            console.log('SignUp: erro em cadastrar:' + e);

            switch (e.code) {
              case 'auth/email-already-in-use':
                Alert.alert('Erro', 'E-mail já está em uso.');
                break;
              case 'auth/operation-not-allowed':
                Alert.alert('Erro', 'Problema ao cadastrar usuário.');
                break;
              case 'auth/invalid-email':
                Alert.alert('Erro', 'E-mail inválido.');
                break;
              case 'auth/weak-password':
                Alert.alert(
                  'Erro',
                  'Senha é fraca, digite senha com pelo menos 6 dígitos.',
                );
                break;
            }
          });
      } else {
        setLoading(false);
        Alert.alert(
          'Erro',
          'Senhas não conferem, por favor verifique novamente.',
        );
      }
    } else {
      setLoading(false);
      Alert.alert(
        'Erro',
        'Por favor preencha todos os campos pra realizar o cadastro.',
      );
    }
  };
  return (
    <Body>
      <Text>Nome Completo</Text>
      <TextInput
        // ref={ref => {
        //   this.nomeTextInput = ref;
        // }}
        keyboardType="default"
        returnKeyType="next"
        onChangeText={t => setNome(t)}
        //onEndEditing={() => this.celTextInput.focus()}
      />
      <Text>Celular</Text>
      <TextInput
        // ref={ref => {
        //   this.celTextInput = ref;
        // }}
        keyboardType="phone-pad"
        returnKeyType="next"
        onChangeText={t => setCelular(t)}
        //onEndEditing={() => this.emailTextInput.focus()}
      />
      <Text>E-mail</Text>
      <TextInput
        // ref={ref => {
        //   this.emailTextInput = ref;
        // }}
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={t => setEmail(t)}
        //onEndEditing={() => this.passTextInput.focus()}
      />
      <Text>Senha</Text>
      <TextInput
        // ref={ref => {
        //   this.passTextInput = ref;
        // }}
        secureTextEntry={true}
        keyboardType="default"
        returnKeyType="next"
        onChangeText={t => setPass(t)}
        //onEndEditing={() => this.passConfirmTextInput.focus()}
      />
      <Text>Confirmação da Senha</Text>
      <TextInput
        // ref={ref => {
        //   this.passConfirmTextInput = ref;
        // }}
        secureTextEntry={true}
        keyboardType="default"
        returnKeyType="send"
        onChangeText={t => setPassConfirm(t)}
        //onEndEditing={() => cadastrar()}
      />
      <MeuButton texto="Cadastrar" onClick={cadastrar} />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Body>
  );
};

export default SignUp;
