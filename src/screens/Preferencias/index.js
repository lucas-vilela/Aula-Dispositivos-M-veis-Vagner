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

import {AgendamentoContext} from '../../context/AgendamentosProvider';
import ItemConf from './ItemConf';
import ItemPend from './ItemPend';
import Loading from '../../components/Loading';
import {COLORS} from '../../assets/colors';

const Agendamentos = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const {agendamentos} = useContext(AgendamentoContext);

  
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
    }

  useEffect(() => {
    //setData(agendamentos);
    //console.log(data);
  }, [agendamentos]);

  // const routeGinasio = item => {
  //   //setLoading(true);
  //   navigation.dispatch(
  //     CommonActions.navigate({
  //       name: 'Ginasio',
  //       params: {ginasio: item},
  //     }),
  //   );
  //   //setLoading(false);
  // };
  const routeHome = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasios',
      }),
    );
  };
  const renderItemConf = ({item}) => (
    <ItemConf item={item} onPress={() => alert('Agendamento Modal detalhes')} />
  );

  const renderItemPend = ({item}) => (
    <ItemPend item={item} onPress={() => alert('Agendamento Modal detalhes')} />
  );

  return (
    <Container>
      <DivTexto>
        <Imagem source={require('../../assets/images/pedro.png')} />
        <Texto>Pedro Álvares</Texto>
        <IconeRight>
          <Icon name="pencil-sharp" color={COLORS.white} size={20} />
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
      <DivTextoSection>
        <IconeLeft>
          <Icon name="help-circle-outline" color={COLORS.white} size={30} />
        </IconeLeft>
        <TextoSection>Ajuda</TextoSection>
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

export default Agendamentos;
