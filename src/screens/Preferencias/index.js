import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import {
  Container,
  FlatList,
  DivTexto,
  Item,
  Texto,
  IconeLeft,
  DivTextoSection,
  TextoSection,
  IconeSection,
  DivLinha,
  DivMsg,
  TextoMsgSup,
  TextoMsgInf,
  DivLogo,
  Imagem,
  IconeRight,
} from './styles';
import {StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../components/Loading';
import {COLORS} from '../../assets/colors';
import {AuthUserContext} from '../../context/AuthUserProvider';

const Preferencias = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthUserContext);

  const routeUser = data => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'User',
        params: {user: data},
      }),
    );
    //setLoading(false);
  };

  const routeUsers = () => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Usuarios',
      }),
    );
    //setLoading(false);
  };

  const SignOut = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        auth()
          .signOut()
          .then(() => {})
          .catch(e => {
            console.log('SignOut', 'erro em signout de firebase ' + e);
          });
        RNRestart.Restart();
      })
      .catch(e => {
        console.log('LogoutButton', 'erro em signout cache ' + e);
      });
  };

  return (
    <Container>
      <DivTexto>
        <Imagem source={require('../../assets/images/pedro.png')} />
        <Texto>{user ? user.nome : 'nada'}</Texto>
        <IconeRight>
          <Icon
            name="pencil-sharp"
            color={COLORS.white}
            size={20}
            onPress={() => routeUser(user)}
          />
        </IconeRight>
      </DivTexto>
      <DivLinha />
      <DivTextoSection>
        <IconeLeft>
          <Icon name="ios-contrast" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Tema</TextoSection>
        <IconeSection>
          <Icon name="toggle" size={30} color={COLORS.white} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      <DivTextoSection>
        <IconeLeft>
          <Icon name="shield-outline" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Política</TextoSection>
        <IconeSection>
          <Icon name="chevron-forward" size={30} color={COLORS.white} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      <DivTextoSection>
        <IconeLeft>
          <Icon name="notifications-outline" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Notificações</TextoSection>
        <IconeSection>
          <Icon name="chevron-forward" size={30} color={COLORS.white} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      <DivTextoSection onPress={() => routeUsers()}>
        <IconeLeft>
          <Icon name="help-circle-outline" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Usuários(aula)</TextoSection>
        <IconeSection>
          <Icon name="chevron-forward" size={30} color={COLORS.white} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      <DivTextoSection onPress={SignOut}>
        <IconeLeft>
          <Icon name="exit-outline" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Desconectar</TextoSection>
        <IconeSection>
          <Icon name="chevron-forward" size={30} color={COLORS.white} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Preferencias;
