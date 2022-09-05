import React, {useContext, useEffect, useState} from 'react';
import {Container, FlatList} from './styles';
import {StatusBar} from 'react-native';
import {EsporteContext} from '../../context/EsporteProvider';
import {CommonActions} from '@react-navigation/native';


import Item from './Item';
import Loading from '../../components/Loading';
import AddFloatButton from '../../components/AddFloatButton';

const Esportes = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {esportes} = useContext(EsporteContext);

  useEffect(() => {
    setData(esportes);
  }, [esportes]);

  const routeEsporte = item => {
    setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Esporte',
        params: {esporte: item},
      }),
    );
    setLoading(false);
  };

  const routeAddEsporte = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Esporte',
        params: {esporte: null},
      }),
    );
  };

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeEsporte(item)} />
  );

  return (
    <>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
      <AddFloatButton onClick={routeAddEsporte} />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </>
  );
};

export default Esportes;
