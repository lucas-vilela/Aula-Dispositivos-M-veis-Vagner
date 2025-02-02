import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  FlatList,
  DivTexto,
  Item,
  Texto,
  Icone,
  DivTextoSection,
  TextoSection,
  IconeSection,
  DivLinha,
  DivMsg,
  TextoMsgSup,
  TextoMsgInf,
  DivLogo,
  Imagem,
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
  const [dataConf, setDataConf] = useState(null);
  const [dataPend, setDataPend] = useState(null);
  const [loading, setLoading] = useState(false);
  const {agendamentos} = useContext(AgendamentoContext);

  useEffect(() => {
    setDataConf(agendamentos.filter(item => item.status));
    //console.log(data);
  }, [agendamentos]);
  useEffect(() => {
    //setDataPend(agendamentos.filter(item => !item.status));
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

  const routeGinasioMap = item => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'GinasioMap',
        params: {ginasio: item},
      }),
    );
    //setLoading(false);
  };

  const renderItemConf = ({item}) => (
    <ItemConf item={item} onPress={() => routeGinasioMap(item)} />
  );

  const renderItemPend = ({item}) => (
    <ItemPend item={item} onPress={() => routeGinasioMap(item)} />
  );

  return (
    <Container>
      <DivTexto>
        <Icone>
          <Icon name="ios-calendar-outline" size={24} color={COLORS.white} />
        </Icone>
        <Texto>Meus Agendamentos</Texto>
      </DivTexto>

      {dataConf && (
        <>
          <DivTextoSection>
            <TextoSection>Confirmados</TextoSection>
            <IconeSection>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                color={COLORS.success}
              />
            </IconeSection>
          </DivTextoSection>
          <DivLinha />

          <FlatList
            // style={styles.esportesScrollView}
            data={dataConf}
            //horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemConf}
            keyExtractor={item => item.uid}
          />
        </>
      )}
      {dataPend && (
        <>
          <DivTextoSection>
            <TextoSection>Pendentes</TextoSection>
            <IconeSection>
              <Icon
                name="alert-circle-outline"
                size={24}
                color={COLORS.alert}
              />
            </IconeSection>
          </DivTextoSection>
          <DivLinha />
          <FlatList
            data={dataPend}
            //horizontal
            showsVerticalScrollIndicator={false}
            renderItem={renderItemPend}
            keyExtractor={item => item.uid}
          />
        </>
      )}
      {!dataConf && !dataPend && (
        <DivMsg>
          <TextoMsgSup>Você ainda não tem nenhum agendamento:</TextoMsgSup>
          <TextoMsgInf>Bora juntar a galera e...</TextoMsgInf>
          <DivLogo>
            <TouchableOpacity onPress={() => routeHome()}>
              <Imagem source={require('../../assets/images/MarcaiCTA.png')} />
            </TouchableOpacity>
          </DivLogo>
        </DivMsg>
      )}
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Agendamentos;
