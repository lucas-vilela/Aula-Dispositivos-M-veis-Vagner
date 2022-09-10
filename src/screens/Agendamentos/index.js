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
import ItemGin from './ItemGin';
import ItemEsp from './ItemEsp';
import Loading from '../../components/Loading';
import {COLORS} from '../../assets/colors';

const Agendamentos = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {agendamentos} = useContext(AgendamentoContext);

  useEffect(() => {
    setData(agendamentos);
  }, [agendamentos]);

  const routeGinasio = item => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasio',
        params: {ginasio: item},
      }),
    );
    //setLoading(false);
  };
  const routeHome = () => {
    
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Ginasios',
      }),
    );
  };
  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeGinasio(item)} />
  );
  return (
    <Container>
      <DivTexto>
        <Icone>
          <Icon name="ios-calendar-outline" size={24} color={COLORS.white} />
        </Icone>
        <Texto>Meus Agendamentos</Texto>
      </DivTexto>
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
      {/* <FlatList
        style={styles.esportesScrollView}
        data={data}
        //horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      /> */}
      <DivTextoSection>
        <TextoSection>Pendentes</TextoSection>
        <IconeSection>
          <Icon name="alert-circle-outline" size={24} color={COLORS.alert} />
        </IconeSection>
      </DivTextoSection>
      <DivLinha />
      {/* <FlatList
        data={data}
        //horizontal
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      /> */}
      <DivMsg>
        <TextoMsgSup>Você ainda não tem nenhum agendamento:</TextoMsgSup>
        <TextoMsgInf>Bora juntar a galera e...</TextoMsgInf>
        <DivLogo>
          <TouchableOpacity onPress={() => routeHome()}>
            <Imagem source={require('../../assets/images/MarcaiCTA.png')} />
          </TouchableOpacity>
        </DivLogo>
      </DivMsg>
      {/* <AddFloatButton onClick={routeAddGinasio} /> */}
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Agendamentos;
